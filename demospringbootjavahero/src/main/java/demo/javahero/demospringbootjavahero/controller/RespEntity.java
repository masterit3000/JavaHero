/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.javahero.demospringbootjavahero.controller;

/**
 *
 * @author Admin
 */
public class RespEntity<T> {

    private T body;
    private int code;
    private String mes;

    public T getBody() {
        return body;
    }

    public void setBody(T body) {
        this.body = body;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public RespEntity() {
    }

    public RespEntity(T body, int code, String mes) {
        this.body = body;
        this.code = code;
        this.mes = mes;
    }

}
