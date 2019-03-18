/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.javahero.jwt.demojwt;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */
@RestController
@RequestMapping("/api")
public class DemoRestAPI {

    public DemoRestAPI() {
        System.out.println("aaaaaaaaaaa");
    }

    @GetMapping("/aaaa")
    public String hello() {
        return "Hello";
    }

    @GetMapping("/admin/ok")
    public String helloadmin() {
        return "Hello admin";
    }
}
