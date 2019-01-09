/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.entity;

import java.util.List;

/**
 *
 * @author Admin
 */
public class LopHoc {

    private int ma;
    private int ten;
    private List<SinhVien> sinhViens;

    
    @Override
    public String toString() {
        return "LopHoc{" + "ma=" + ma + ", ten=" + ten + ", sinhViens=" + sinhViens + '}';
    }

    public int getMa() {
        return ma;
    }

    public void setMa(int ma) {
        this.ma = ma;
    }

    public int getTen() {
        return ten;
    }

    public void setTen(int ten) {
        this.ten = ten;
    }

    public List<SinhVien> getSinhViens() {
        return sinhViens;
    }

    public void setSinhViens(List<SinhVien> sinhViens) {
        this.sinhViens = sinhViens;
    }

}
