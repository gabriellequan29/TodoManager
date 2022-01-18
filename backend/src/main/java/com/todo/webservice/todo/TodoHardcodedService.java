package com.todo.webservice.todo;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

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


}
