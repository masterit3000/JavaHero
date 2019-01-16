/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl.mapstruct;

import mvc.entity.LopHoc;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 *
 * @author Admin
 */
@Mapper
public interface LopHocMappper {

    LopHocMappper INSTANT = Mappers.getMapper(LopHocMappper.class);

    LopHocDTOAAA toDTO(LopHoc lopHoc);
}
