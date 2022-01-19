package com.todo.webservice.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "gaby", "Learn to Dance 2", new Date(), false));
        todos.add(new Todo(++idCounter, "gaby", "Learn about Microservices 2", new Date(), false));
        todos.add(new Todo(++idCounter, "gaby", "Learn about Angular", new Date(), false));
    }


    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if (todo==null) {
            return null;
        }

        if (todos.remove(todo)) {
            return todo;
        }

        return null;
    }

    private Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }


}
