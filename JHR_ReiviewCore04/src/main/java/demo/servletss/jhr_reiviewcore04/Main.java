/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore04;

/**
 *
 * @author Admin
 */
public class Main {


    public static void main(String[] args) {
        
        SinhVien sv = new SinhVien();
        sv.setMa(22);
        sv.setTen("ffffffff");
        SinhVien.SinhVienNamNhat  svnn = sv.new SinhVienNamNhat();
        svnn.inthongTin();
    }
    
}
