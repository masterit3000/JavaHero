/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package services.mapper;

import com.java.hero.demojpa.demojpaservletjsp.dao.entity.Sinhvien;
import services.dto.SinhVienDTO;



/**
 *
 * @author Admin
 */
public class SinhVienMapper implements IMapping<Sinhvien, SinhVienDTO> {

    @Override
    public SinhVienDTO toDTO(Sinhvien t) {
        SinhVienDTO svdto = new SinhVienDTO();
        svdto.setMa(t.getMa());
        svdto.setTen(t.getTen());
        DateTimeConverter convert = new DateTimeConverter();
        svdto.setNgaySinh(convert.dateToString(t.getNgaySinh()));
        return svdto;
    }

    @Override
    public Sinhvien toEntity(SinhVienDTO t) {
        //tu code :D
        return null;
    }

}
