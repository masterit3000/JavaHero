/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore04.vodanh.lamda.stream;

/**
 *
 * @author Admin
 */
public class SinhVienDTO {

    private String ma;
    private String ten;

    public String getMa() {
        return ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public SinhVienDTO() {
    }

    public SinhVienDTO(String ma, String ten) {
        this.ma = ma;
        this.ten = ten;
    }

    @Override
    public String toString() {
        return "SinhVienDTO{" + "ma=" + ma + ", ten=" + ten + '}';
    }

}
