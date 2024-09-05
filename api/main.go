package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type ResponseData struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/healthz", health)

	e.Logger.Fatal(e.Start(":1323"))
}

func health(c echo.Context) error {
	data := ResponseData{
		Status:  200,
		Message: "ok",
	}
	return c.JSON(http.StatusOK, data)
}
