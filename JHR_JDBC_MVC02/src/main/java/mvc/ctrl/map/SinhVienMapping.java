/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl.map;

import java.util.Date;
import mvc.ctrl.dto.LopHocDTO;
import mvc.ctrl.dto.SinhVienDTO;
import mvc.ctrl.ulti.DateTimeConvert;
import mvc.entity.LopHoc;
import mvc.entity.SinhVien;

/**
 *
 * @author Admin
 */
public class SinhVienMapping implements IMapping<SinhVien, SinhVienDTO> {
    
    @Override
    public SinhVienDTO toDTO(SinhVien t) {
        SinhVienDTO svdto = new SinhVienDTO();
        svdto.setMa(t.getMa());
        svdto.setTen(t.getTen());
        DateTimeConvert convert = new DateTimeConvert();
        svdto.setNgaySinh(convert.dateToString(t.getNgaySinh()));
        IMapping<LopHoc, LopHocDTO> maplop = new LophocMapping();
        LopHocDTO toDTO = maplop.toDTO(t.getLopHoc());
        svdto.setLopHoc(toDTO);
        return svdto;
        
    }
    
    @Override
    public SinhVien toEntity(SinhVienDTO t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
