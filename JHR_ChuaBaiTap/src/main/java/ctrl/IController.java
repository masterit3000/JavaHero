/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctrl;

import ctrl.exxxx.CannotAddNhanVien;
import ctrl.exxxx.NoSuchNhanVienByClass;
import ctrl.exxxx.NoSuchNhanVienByGioiTinh;
import entityyyy.GioiTinh;
import entityyyy.NhanVien;
import java.util.List;

/**
 *
 * @author Admin
 */
public interface IController {

    /* nhan vao 1 obj nhan vien va dua vao he thong, neu ok thi tra ve chinh obj do ko ok thi tra ve null hoac ban ex*/
    NhanVien create(NhanVien nv) throws CannotAddNhanVien;

    /*Tra ve danh sach toan bo nhan vien trong he thong*/
    List<NhanVien> getAllNhanVien();

    /*Truyen vao gioi tinh va tra ve ds nhan vien co luong cao nhat cua gioi tinh do*/
    List<NhanVien> findNhanVienMaxLuongbyGioiTinh(GioiTinh gioiTinh) throws NoSuchNhanVienByGioiTinh;

    /*Truyen vao class tuong ung va tim nv co luong cao nhat
    obj nvClass la 1 obj dai dien cho class NhanVien
     */
    List<NhanVien> findNhanVienMaxLuongbyViTri(Class<? extends NhanVien> nvClass) throws NoSuchNhanVienByClass;

}
