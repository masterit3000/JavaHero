/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import mvc.ctrl.dto.SinhVienDTO;
import mvc.ctrl.map.SinhVienMapping;
import mvc.dao.SinhVienDAO;
import mvc.dao.exceptions.DeleteExceptions;
import mvc.dao.exceptions.InsertExceptions;
import mvc.dao.exceptions.UpdateExceptions;
import mvc.dbconnection.DBConnectionException;
import mvc.entity.SinhVien;

/**
 *
 * @author Admin
 */
public class SinhVienCtrl implements IController<SinhVienDTO, Integer> {

    SinhVienMapping mapping = new SinhVienMapping();
    SinhVienDAO svdao = new SinhVienDAO();

    @Override
    public SinhVienDTO insert(SinhVienDTO t) throws DBConnectionException, InsertExceptions {

        SinhVien sv = mapping.toEntity(t);
        return mapping.toDTO(svdao.insert(sv));

    }

    @Override
    public SinhVienDTO updateById(SinhVienDTO t) throws DBConnectionException, UpdateExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean deleteById(SinhVienDTO t) throws DBConnectionException, DeleteExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<SinhVienDTO> getAll() throws DBConnectionException, InsertExceptions {

        List<SinhVien> all = svdao.getAll();
        List<SinhVienDTO> collect = all.stream().map(mapping::toDTO).collect(Collectors.toList());
        return collect;

    }

    @Override
    public SinhVienDTO findById(Integer k) throws DBConnectionException, InsertExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
