package com.springmvc.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/simple")
public class SimpleController {

    @PostMapping("/{id}")
    public String sayHello(@PathVariable int id) {
        return "Hello " + id;
    }
}
