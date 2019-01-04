/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ctrl;

import ctrl.exxxx.NoSuchNhanVienByGioiTinh;
import ctrl.exxxx.CannotAddNhanVien;
import ctrl.exxxx.NoSuchNhanVienByClass;
import entityyyy.GioiTinh;
import entityyyy.NhanVien;
import entityyyy.QuanLy;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import javafx.scene.shape.QuadCurve;

/**
 *
 * @author Admin
 */
public class NhanVienController implements IController {

    List<NhanVien> listAllNhanVien;

    public NhanVienController() {

        listAllNhanVien = new ArrayList<>();
    }

    @Override
    public NhanVien create(NhanVien nv) throws CannotAddNhanVien {
        //kiem tra xem da nhap du du lieu cua nhan vien chua//////
        if (nv != null) {
            listAllNhanVien.add(nv);
        }
        return nv;
    }

    @Override
    public List<NhanVien> getAllNhanVien() {
        return listAllNhanVien;
    }

    @Override
    public List<NhanVien> findNhanVienMaxLuongbyGioiTinh(GioiTinh gioiTinh) throws NoSuchNhanVienByGioiTinh {
        Double maxLuong = listAllNhanVien.stream()
                .filter((nv) -> nv.getGioiTinh() == gioiTinh)
                .max((NhanVien o1, NhanVien o2) -> compare(o1, o2)).map(NhanVien::getLuong)
                .orElse(Double.NaN);

        if (maxLuong == Double.NaN) {
            throw new NoSuchNhanVienByGioiTinh(gioiTinh);
        }
        return listAllNhanVien.stream()
                .filter((nv) -> nv.getGioiTinh() == gioiTinh && nv.getLuong() == maxLuong)
                .collect(Collectors.toList());

    }

    private int compare(NhanVien o1, NhanVien o2) {
        return (int) (o1.getLuong() - o2.getLuong());
    }

    /**
     *
     * @param nvClass
     * @return ds nhan vien co luong cao nhat voi vi tri ncClass
     */
    @Override
    public List<NhanVien> findNhanVienMaxLuongbyViTri(Class<? extends NhanVien> nvClass) throws NoSuchNhanVienByClass {

        Double maxLuong = listAllNhanVien.stream()
                .filter((t) -> t.getClass() == nvClass)
                .max((NhanVien o1, NhanVien o2) -> compare(o1, o2)).map(NhanVien::getLuong)
                .orElse(Double.NaN);
        if (maxLuong == Double.NaN) {
            throw new NoSuchNhanVienByClass(nvClass);
        }
        return listAllNhanVien.stream()
                .filter((nv) -> nv.getClass() == nvClass && nv.getLuong() == maxLuong)
                .collect(Collectors.toList());
    }

}
