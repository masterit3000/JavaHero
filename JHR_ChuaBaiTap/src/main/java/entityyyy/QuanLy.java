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
public class QuanLy extends NhanVien {

    public static final int PHU_CAP_1 = 200; // so nhan vien < 10
    public static final int PHU_CAP_2 = 1000; // so nhan vien <= 20
    public static final int PHU_CAP_3 = 2000; // so nhan vien >20
    private int soNhanVien;

    public QuanLy() {
    }

    public QuanLy(int soNhanVien, String ten, GioiTinh gioiTinh, double luong) {
        super(ten, gioiTinh, luong);
        this.soNhanVien = soNhanVien;
    }

    public int getSoNhanVien() {
        return soNhanVien;
    }

    public void setSoNhanVien(int soNhanVien) {
        this.soNhanVien = soNhanVien;
    }

    @Override
    public void nhapNhanVien() {
        super.nhapNhanVien();
        do {
            System.out.println("Nhap so nhan vien >0 : ");
            this.soNhanVien = new Scanner(System.in).nextInt();
        } while (this.soNhanVien <= 0);
    }

    @Override
    public void hienNhanVien() {
        super.hienNhanVien();
        System.out.println("So nhan vien : " + this.soNhanVien);
        System.out.println("Thu nhap : " + this.tinhThuNhap());
    }

    @Override
    public double tinhThuNhap() {
        if (this.getSoNhanVien() < 10) {
            return this.getLuong() + PHU_CAP_1;
        } else if (this.soNhanVien <= 20) {
            return this.getLuong() + PHU_CAP_2;
        } else {
            return this.getLuong() + PHU_CAP_3;
        }
    }

    @Override
    public String toString() {
        return super.toString() + "QuanLy{" + "soNhanVien=" + soNhanVien + '}';
    }

}
