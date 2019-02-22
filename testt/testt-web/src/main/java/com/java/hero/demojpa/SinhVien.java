/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa;

import java.util.Date;

/**
 *
 * @author Admin
 */
public class SinhVien {
    private int ma;
    private String ten;
    private Date dob;

    public SinhVien(int ma, String ten, Date dob) {
        this.ma = ma;
        this.ten = ten;
        this.dob = dob;
    }

    public SinhVien() {
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

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }


    
}
