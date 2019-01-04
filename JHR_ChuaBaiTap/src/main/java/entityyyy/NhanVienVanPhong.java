package entityyyy;

import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author Admin
 */
public class NhanVienVanPhong extends NhanVien {

    private double heSo;

    public NhanVienVanPhong() {
    }

    public NhanVienVanPhong(double heSo, String ten, GioiTinh gioiTinh, double luong) {
        super(ten, gioiTinh, luong);
        this.heSo = heSo;
    }

    public double getHeSo() {
        return heSo;
    }

    public void setHeSo(double heSo) {
        this.heSo = heSo;
    }

    @Override
    public void nhapNhanVien() {
        super.nhapNhanVien();
        do {
            System.out.println("Nhap he so >=0: ");
            this.heSo = new Scanner(System.in).nextDouble();
        } while (this.heSo < 0);
    }

    @Override
    public void hienNhanVien() {
        super.hienNhanVien();
        System.out.println("He so : " + this.heSo);
        System.out.println("Thu nhap : " + this.tinhThuNhap());
    }

    @Override
    public double tinhThuNhap() {
        return this.getLuong() + this.getLuong() * this.getHeSo();
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder(super.toString());

        return builder.append("NhanVienVanPhong").toString();
    }

}
