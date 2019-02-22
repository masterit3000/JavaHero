/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.javahero.demospringbootjavahero.controller;

import com.sun.net.httpserver.Headers;
import demo.javahero.demospringbootjavahero.dto.SinhVienDTO;
import demo.javahero.demospringbootjavahero.service.MyService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */
@RestController
@RequestMapping("/demo")
public class DemoController {

    @Autowired
    MyService myService;
//    @RequestMapping(method = RequestMethod.GET, value = "/")

    @GetMapping("/")
    public String index() {
        return "Hello";
    }

    @GetMapping(value = "/one", produces = MediaType.APPLICATION_JSON_VALUE)
    public RespEntity<SinhVienDTO> getOne() {

        SinhVienDTO sv = myService.getOneSinhVien();
        RespEntity<SinhVienDTO> entity = new RespEntity<>();
        entity.setBody(sv);
        entity.setCode(200);
        entity.setMes("Tra ve obj thanh cong");
        return entity;
    }

    @GetMapping(value = "/many", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<SinhVienDTO>> getMany() {

        HttpHeaders headers = new HttpHeaders();
        headers.add("key1", "value 1");
        headers.add("key2", "value 2");

        List<SinhVienDTO> many = myService.getMany();
        return ResponseEntity.status(HttpStatus.ACCEPTED).headers(headers).body(many);

    }
}
