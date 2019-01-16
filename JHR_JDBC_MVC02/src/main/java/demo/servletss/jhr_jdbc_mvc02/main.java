/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_jdbc_mvc02;

import java.util.Date;
import mvc.ctrl.dto.SinhVienDTO;
import mvc.ctrl.mapstruct.LopHocDTOAAA;
import mvc.ctrl.mapstruct.SinhVienDTOAAA;
import mvc.ctrl.mapstruct.SinhVienMapper;
import mvc.entity.LopHoc;
import mvc.entity.SinhVien;

/**
 *
 * @author Admin
 */
public class main {

    public static void main(String[] args) {

        SinhVien sv = new SinhVien();
        sv.setMa(1);
        sv.setTen("Nguyen Van A");
        sv.setNgaySinh(new Date());
        LopHoc lopHoc = new LopHoc();
        lopHoc.setMa(22);
        lopHoc.setTen(333);

        sv.setLopHoc(lopHoc);

        SinhVienDTOAAA toDTO = SinhVienMapper.obj.toDTO(sv);
        System.out.println(toDTO.getMa());
        System.out.println(toDTO.getTen());
        System.out.println(toDTO.getNgaySinh());
        System.out.println(toDTO.getLopHocID());
//        LopHocDTOAAA lophocdto = toDTO.getLopHoc();
//        System.out.println(lophocdto.getMa());
//        System.out.println(lophocdto.getTen());
        
//        System.out.println(toDTO.getLopHoc());
    }
}
