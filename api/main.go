package main

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/chaos-tech/training-note/api/model"
	"github.com/chaos-tech/training-note/api/query"
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
	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=%s TimeZone=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASS"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_SSLMODE"),
		os.Getenv("DB_TIMEZONE"),
	)

	db, _ := gorm.Open(postgres.New(postgres.Config{
		DSN:                  dsn,
		PreferSimpleProtocol: true, // disables implicit prepared statement usage because it does impose a restriction that the same SQL query always has the same parameter and result types. Otherwise an error will occur.
	}), &gorm.Config{})

	qu := query.Use(db)
	userQuery := qu.User
	user := model.User{
		UID:      "test",
		Name:     "test",
		Nickname: "test",
	}
	err := userQuery.WithContext(context.Background()).Create((&user))
	if err != nil {
		panic(err)
	}

	data := ResponseData{
		Status:  200,
		Message: "ok",
	}
	return c.JSON(http.StatusOK, data)
}
