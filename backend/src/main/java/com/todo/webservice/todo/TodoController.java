package com.todo.webservice.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoHardcodedService todoHardcodedService;

    /* Retrieve all Todos for a User
       GET /users/{user_name}/todos */

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardcodedService.findAll();
    }

     /* Retrieve single Todo for a User
       GET /users/{user_name}/todos/{todo_id} */
     @GetMapping("/users/{username}/todos/{id}")
     public Todo getTodo(@PathVariable String username, @PathVariable long id) {
         // Thread.sleep(3000);
         return todoHardcodedService.findById(id);
     }


    /* Delete a Todo of a User
       DELETE /users/{user_name}/todos/{todo_id} */
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoHardcodedService.deleteById(id);
        if(todo != null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();

    }

    /* Update a Todo
       PUT /users/{user_name}/todos/{todo_id} */
    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username,
                                           @PathVariable long id, @RequestBody Todo todo) {
        Todo updatedTodo = todoHardcodedService.save(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    /* Create a new Todo
       POST /users/{user_name}/todos */
    @PostMapping("/users/{username}/todos/")
    public ResponseEntity<Todo> createTodo(@PathVariable String username,
                                           @RequestBody Todo todo) {
        Todo newTodo = todoHardcodedService.save(todo);
        return new ResponseEntity<Todo>(newTodo, HttpStatus.OK);
    }

}
