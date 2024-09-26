package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	healthpb "google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/reflection"
)

type Server struct {
	*grpc.Server
}

func main() {
	port := 8080
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		panic(err)
	}

	s := &Server{grpc.NewServer()}

	healthSrv := health.NewServer()
	healthpb.RegisterHealthServer(s, healthSrv)
	healthSrv.SetServingStatus("healthz", healthpb.HealthCheckResponse_SERVING)

	reflection.Register(s)

	go func() {
		log.Printf("start gRPC server port: %v", port)
		s.Serve(listener)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, os.Kill, syscall.SIGTERM)
	<-quit
	log.Println("stopping gRPC server...")
	s.shutdown(30 * time.Second)
}

func (s *Server) shutdown(d time.Duration) {
	stopChan := make(chan bool, 1)

	go func() {
		s.GracefulStop()
		stopChan <- true
	}()

	t := time.NewTimer(d)
	select {
	case <-stopChan:
		log.Println("graceful shutdown completed.")
	case <-t.C:
		log.Println("graceful shutdown failed timeout.")
		s.Stop()
	}
}
