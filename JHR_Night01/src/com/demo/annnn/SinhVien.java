/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo.annnn;

/**
 *
 * @author Admin
 */
public class SinhVien {

//    private SinhVien() {
//        System.out.println("dang khoi tao obj sinh vien");
//    }

//    public SinhVien(int maSinhVien, int tuoi) {
//        System.out.println("aaaaaaaaaaaaaa");
//        this.maSinhVien = maSinhVien;
//        this.tuoi = tuoi;
//    }
    private int maSinhVien;
    private int tuoi;

    public int getMaSinhVien() {
        return maSinhVien;
    }

    public void setMaSinhVien(int maSinhVien) {
        this.maSinhVien = maSinhVien;
    }

    public int getTuoi() {//age
        return 34;
    }

    public void setTuoi(int tuoi) throws TuoiExceptions {
        this.tuoi = tuoi;
        if (tuoi > 0 && tuoi < 100) {
            this.tuoi = tuoi;
            return;
        }
        //ko thoa man thi sao?
        throw new TuoiExceptions("aaaa");
    }

    public static void main(String[] args) {

//        SinhVien sv  = new SinhVien(23, 34);
        SinhVien sv = new SinhVien();
    }
}

class SinhVienNamNhat {

}
