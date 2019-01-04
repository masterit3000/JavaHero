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
public class CongNhan extends NhanVien {

    private int ngayCong;

    public CongNhan() {
    }

    public CongNhan(int ngayCong, String ten, GioiTinh gioiTinh, double luong) {
        super(ten, gioiTinh, luong);
        this.ngayCong = ngayCong;
    }

    public int getNgayCong() {
        return ngayCong;
    }

    public void setNgayCong(int ngayCong) {
        this.ngayCong = ngayCong;
    }

    @Override
    public void nhapNhanVien() {
        super.nhapNhanVien();
        do {
            System.out.println("Nhap ngay cong >=0: ");
            this.ngayCong = new Scanner(System.in).nextInt();
        } while (this.ngayCong < 0);
    }

    @Override
    public void hienNhanVien() {
        super.hienNhanVien();
        System.out.println("Ngay cong : " + this.ngayCong);
        System.out.println("Thu nhap : " + this.tinhThuNhap());
    }

    @Override
    public double tinhThuNhap() {
        return this.getLuong() + (this.getNgayCong() / 26 * 1.0) * this.getLuong();
    }

    @Override
    public String toString() {
        return super.toString() + " CongNhan{" + "ngayCong=" + ngayCong + '}';
    }

}
