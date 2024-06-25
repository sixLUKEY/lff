package users

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	ID        string `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	StudentID string `json:"studentId"`
	Role      int    `json:"role"`
}

var users = []User{
	{ID: "1", FirstName: "Luke", LastName: "Evertson", Email: "example@email.com", Password: "abcde", StudentID: "655", Role: 1},
	{ID: "2", FirstName: "Gray", LastName: "Black", Email: "another@email.com", Password: "abcde", StudentID: "asd", Role: 3},
	{ID: "3", FirstName: "Tea", LastName: "Bag", Email: "google@email.com", Password: "abcde", StudentID: "22222", Role: 3},
}

func GetUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}

func GetUserById(c *gin.Context) {
	id := c.Param("id")

	for _, a := range users {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "User not found."})
}

func CreateUser(c *gin.Context) {
	var newUser User

	// Call BindJson to bind the received JSON to user
	if err := c.BindJSON(&newUser); err != nil {
		return
	}

	users = append(users, newUser)
	c.IndentedJSON(http.StatusOK, newUser)
}
