/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud.ctrl;

import demo.crud.democrud.service.SinhVienDTO;
import demo.crud.democrud.service.SinhVienService;
import java.util.List;
import javax.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */
@RestController
@RequestMapping("/sinhvien")
public class SinhVienController {

    @Autowired
    SinhVienService service;

    @GetMapping
    public List<SinhVienDTO> getAll() {
        return service.getAll();
    }

    @PostMapping
    public ResponseEntity<SinhVienDTO> addNew(@RequestBody SinhVienDTO svdto) {

        SinhVienDTO addNew = service.addNew(svdto);
        if (addNew == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(addNew);
    }

    @PutMapping(value = "/{ma}")
    public ResponseEntity<SinhVienDTO> update(@PathVariable("ma") Integer ma, @RequestBody SinhVienDTO svdto) {

        System.out.println("ma::::::::::::::" + ma);
        SinhVienDTO addNew = service.update(ma, svdto);
        if (addNew == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(addNew);
    }

}
