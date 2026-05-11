package com.nexus.commerce;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "你好，Nexus Commerce！后端服务已启动成功。";
    }
}