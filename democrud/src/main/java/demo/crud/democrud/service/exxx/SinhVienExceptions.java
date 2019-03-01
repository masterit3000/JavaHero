/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud.service.exxx;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author Admin
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class SinhVienExceptions extends RuntimeException {

    public SinhVienExceptions() {
    }

    public SinhVienExceptions(String s) {
        super(s);
    }

}
