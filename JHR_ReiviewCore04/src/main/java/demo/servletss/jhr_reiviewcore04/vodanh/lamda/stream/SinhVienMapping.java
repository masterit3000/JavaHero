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
public class SinhVienMapping {

    public SinhVienDTO convertToDTO(SinhVien sv) {
        if (sv != null) {
            SinhVienDTO svdto = new SinhVienDTO(String.valueOf(sv.getMa()), sv.getTen().toUpperCase());
            return svdto;
        }
        return null;
    }
}
