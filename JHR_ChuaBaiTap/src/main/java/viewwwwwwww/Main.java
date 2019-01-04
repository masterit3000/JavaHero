/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package viewwwwwwww;

import ctrl.IController;
import ctrl.NhanVienController;
import ctrl.exxxx.CannotAddNhanVien;
import ctrl.exxxx.NoSuchNhanVienByClass;
import ctrl.exxxx.NoSuchNhanVienByGioiTinh;
import entityyyy.CongNhan;
import entityyyy.GioiTinh;
import entityyyy.NhanVien;
import entityyyy.NhanVienVanPhong;
import entityyyy.QuanLy;
import java.lang.reflect.AnnotatedType;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Admin
 */
public class Main {

    public static IController controller;

    public static void timMaxTheoGioiTinh() {

        System.out.println("Chon gioi tinh 1. Nam, 0 Nu, -1 KXD");
        int chon = new Scanner(System.in).nextInt();
        GioiTinh gioiTinh = GioiTinh.getObj(chon);
        try {
            List<NhanVien> findNhanVienMaxLuongbyGioiTinh = controller.findNhanVienMaxLuongbyGioiTinh(gioiTinh);
        } catch (NoSuchNhanVienByGioiTinh ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public static void timMaxTheoClass() {

        System.out.println("Chon gioi tinh 1. Cong nhan, 2 Qjuan Ly, 3 NV van phong");
        int chon = new Scanner(System.in).nextInt();
        Class nvClass;
        switch (chon) {
            case 1:
                nvClass = CongNhan.class;
                break;
            case 2:
                nvClass = QuanLy.class;
                break;
            case 3:
                nvClass = NhanVienVanPhong.class;
                break;
            default:
                nvClass = NhanVien.class;

        }
        try {
            List<NhanVien> findNhanVienMaxLuongbyGioiTinh = controller.findNhanVienMaxLuongbyViTri(nvClass);
        } catch (NoSuchNhanVienByClass ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public static void nhapDanhSach() {
        controller = new NhanVienController();
        for (int i = 0; i < 10; i++) {
            NhanVien nv;
            switch (i % 3) {
                case 1:
                    nv = new CongNhan();
                    break;
                case 2:
                    nv = new QuanLy();
                    break;
                default:
                    nv = new NhanVienVanPhong();
            }

            nv.nhapNhanVien();
            try {
                NhanVien create = controller.create(nv);
                System.out.println("add ok");
            } catch (CannotAddNhanVien ex) {
                System.out.println("add not ok " + ex.getMessage());
            }
        }

    }

    public static void demoReflection(String[] args) {

        try {
//                    IController controller = new NhanVienController();
            controller = (IController) Class.forName("ctrl.NhanVienController").newInstance();

            //vi du dang co obj controller, kha pha no
            Class<? extends IController> aClass = controller.getClass();
            System.out.println(aClass.getSimpleName());
            
            AnnotatedType[] annotatedInterfaces = aClass.getAnnotatedInterfaces();
            for (AnnotatedType annotatedInterface : annotatedInterfaces) {
                
//                annotatedInterface.getType().getTypeName().equals(aClass)
            }

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
}
