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
public class SinhVien {
    
    private int ma;
    private String ten;

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
    
    
    public class SinhVienNamNhat{
    
        private int diem;
        
        public void inthongTin(){
        
            System.out.println("ma = "+ma);
            System.out.println("ma = "+ten);
            System.out.println("ma = "+this.diem);
        }
    }
    
}
