/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctrl.exxxx;

import entityyyy.GioiTinh;
import entityyyy.NhanVien;

/**
 *
 * @author Admin
 */
public class NoSuchNhanVienByClass extends Exception {

    private Class<? extends  NhanVien> nvClass;

    public NoSuchNhanVienByClass(Class<? extends NhanVien> nvClass) {
        this.nvClass = nvClass;
    }

    @Override
    public String getMessage() {
        return "he thong ko co nhan vien voi vi tri la: " + nvClass.getName();
    }

}
