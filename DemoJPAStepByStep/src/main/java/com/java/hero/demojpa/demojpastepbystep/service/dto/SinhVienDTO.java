/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa.demojpastepbystep.service.dto;

/**
 *
 * @author Admin
 */
public class SinhVienDTO {

    public int ma;
    public String ten;
    public String ngaySinh;

    public SinhVienDTO() {
    }

    public SinhVienDTO(int ma, String ten, String ngaySinh) {
        this.ma = ma;
        this.ten = ten;
        this.ngaySinh = ngaySinh;
    }

    public int getMa() {
        return ma;
    }

    public void setMa(int ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(String ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

}
