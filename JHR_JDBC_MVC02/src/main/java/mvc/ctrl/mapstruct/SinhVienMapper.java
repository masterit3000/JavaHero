/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl.mapstruct;

import mvc.ctrl.dto.SinhVienDTO;
import mvc.entity.SinhVien;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

/**
 *
 * @author Admin
 */
@Mapper(uses = LopHocMappper.class)
public interface SinhVienMapper {

    SinhVienMapper obj = Mappers.getMapper(SinhVienMapper.class);

    @Mapping(source = "lopHoc.ma", target = "lopHocID")
    @Mapping(source = "ngaySinh", dateFormat = "dd-MM-yyyy", target = "ngaySinh")
    SinhVienDTOAAA toDTO(SinhVien sv);

}
