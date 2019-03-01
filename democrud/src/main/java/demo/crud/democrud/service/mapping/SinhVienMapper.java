/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud.service.mapping;

import demo.crud.democrud.entity.SinhVien;
import demo.crud.democrud.service.SinhVienDTO;
import java.util.Date;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class SinhVienMapper implements IMapping<SinhVien, SinhVienDTO> {

    DateTimeConverter convert = new DateTimeConverter();

    public SinhVienDTO toDTO(SinhVien t) {
        SinhVienDTO svdto = new SinhVienDTO();
        svdto.setMa(t.getMa());
        svdto.setTen(t.getTen());
        svdto.setNgaysinh(convert.dateToString(t.getNgaysinh()));
        return svdto;
    }

    @Override
    public SinhVien toEntity(SinhVienDTO t) {

        if (t == null) {
            return null;
        }
        Date stringToDate = convert.stringToDate(t.getNgaysinh());
        if (stringToDate == null) {
            return null;
        }

        SinhVien sv = new SinhVien();
        sv.setMa(t.getMa());
        sv.setTen(t.getTen());
        sv.setNgaysinh(stringToDate);
        return sv;
    }

}
