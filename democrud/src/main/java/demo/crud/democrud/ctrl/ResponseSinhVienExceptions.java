/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud.ctrl;

import demo.crud.democrud.ctrl.exdto.MessageEntity;
import demo.crud.democrud.service.exxx.SinhVienExceptions;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 *
 * @author Admin
 */
@RestControllerAdvice
@RestController
public class ResponseSinhVienExceptions extends ResponseEntityExceptionHandler {

    @ExceptionHandler(SinhVienExceptions.class)
    public ResponseEntity<MessageEntity> getAbc(SinhVienExceptions exceptions, WebRequest request) {

        StringBuilder stringBuilder = new StringBuilder("Su co SinhVien");
        stringBuilder.append(exceptions.getMessage());
        stringBuilder.append("-");
        stringBuilder.append(request.getHeader(HttpHeaders.HOST));
        stringBuilder.append("-");
        stringBuilder.append(request.getHeader("mes"));

        MessageEntity entity = new MessageEntity();
        entity.setId(100);
        entity.setContent(stringBuilder.toString());
        return new ResponseEntity<>(entity, HttpStatus.FORBIDDEN);

    }

}
