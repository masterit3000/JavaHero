/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entityyyy;

import java.util.Scanner;

/**
 *
 * @author Admin
 */

public abstract class NhanVien implements INhanVien {

    private int ma;
    private static int maTuTang = 0;
    private String ten;
    private GioiTinh gioiTinh;
    private double luong;

    public NhanVien() {
        this.ma = ++maTuTang;
    }

    public NhanVien(String ten, GioiTinh gioiTinh, double luong) {
        this.ma = ++maTuTang;
        this.ten = ten;
        this.gioiTinh = gioiTinh;
        this.luong = luong;
    }

    @Cooooot("ID")
    public int getMa() {
        return ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public GioiTinh getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(GioiTinh gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public double getLuong() {
        return luong;
    }

    public void setLuong(double luong) {
        this.luong = luong;
    }

    @Override
    public void nhapNhanVien() {
        System.out.println("Nhap ten : ");
        this.ten = new Scanner(System.in).nextLine();
        System.out.println("Nhap gioi tinh : 1==Nam || 0==Nu || Khong xac dinh ");
        int maGioiTinh = new Scanner(System.in).nextInt();
        switch (maGioiTinh) {
            case 1:
                this.gioiTinh = GioiTinh.NAM;
                break;
            case 0:
                this.gioiTinh = GioiTinh.NU;
                break;
            default:
                this.gioiTinh = GioiTinh.KHONG_XAC_DINH;
        }
        do {
            System.out.println("Nhap luong >=0 : ");
            this.luong = new Scanner(System.in).nextDouble();
        } while (this.luong < 0);
    }

    @Override
    public void hienNhanVien() {
        System.out.println("Ma : " + this.ma + " | Ten : " + this.ten + " | Gioi tinh : " + this.gioiTinh.getTen() + " | Luong : " + this.luong);
    }

    @Override
    public abstract double tinhThuNhap();

    @Override
    public String toString() {
        return "NhanVien{" + "ma=" + ma + ", ten=" + ten + ", gioiTinh=" + gioiTinh + ", luong=" + luong + '}';
    }

}
