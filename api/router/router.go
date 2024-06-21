package router

import (
	"lffapi/users"

	"github.com/gin-gonic/gin"
)

func Router() {
	router := gin.Default()
	router.GET("/users", users.GetUsers)
	router.GET("/users/:id", users.GetUserById)
	router.POST("/users", users.CreateUser)

	router.Run("localhost:3000")
}
