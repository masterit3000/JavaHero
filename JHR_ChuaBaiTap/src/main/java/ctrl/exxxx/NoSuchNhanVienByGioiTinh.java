/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctrl.exxxx;

import entityyyy.GioiTinh;

/**
 *
 * @author Admin
 */
public class NoSuchNhanVienByGioiTinh extends Exception {

    private GioiTinh gioiTinh;

    public NoSuchNhanVienByGioiTinh(GioiTinh gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    @Override
    public String getMessage() {
        return "he thong ko co nhan vien voi gioi tinh la: " + gioiTinh;
    }

}
