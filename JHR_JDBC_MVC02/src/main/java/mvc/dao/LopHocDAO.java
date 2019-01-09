/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.dao;

import mvc.dao.exceptions.DeleteExceptions;
import mvc.dao.exceptions.UpdateExceptions;
import mvc.dao.exceptions.InsertExceptions;
import java.util.List;
import mvc.dbconnection.DBConnectionException;
import mvc.entity.LopHoc;

/**
 *
 * @author Admin
 */
public class LopHocDAO implements IDAO<LopHoc, Integer> {

    @Override
    public LopHoc insert(LopHoc t) throws DBConnectionException, InsertExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public LopHoc updateById(LopHoc t) throws DBConnectionException, UpdateExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean deleteById(LopHoc t) throws DBConnectionException, DeleteExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<LopHoc> getAll() throws DBConnectionException, InsertExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public LopHoc findById(Integer k) throws DBConnectionException, InsertExceptions {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
