/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl.dto;

import java.util.Date;
import mvc.entity.LopHoc;

/**
 *
 * @author Admin
 */
public class SinhVienDTO {

    private int ma;
    private String ten;
    private String gioiTinh;
    private String ngaySinh;
    private String lopHoc;
    private LopHocDTO lop;

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

    public String getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(String gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public String getLopHoc() {
        return lopHoc;
    }

    public void setLopHoc(String lopHoc) {
        this.lopHoc = lopHoc;
    }

    public LopHocDTO getLop() {
        return lop;
    }

    public void setLop(LopHocDTO lop) {
        this.lop = lop;
    }

}
