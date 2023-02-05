package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AdminController {

    @GetMapping("/admin")
    public String getAdminPage() {
        return "admin";
    }

    @GetMapping("/user")
    public String getUserPage() {
        return "user";
    }

}
