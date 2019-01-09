/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.dao;

import mvc.dao.exceptions.InsertExceptions;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import mvc.dbconnection.DBConnection;
import mvc.dbconnection.DBConnectionException;
import mvc.entity.LopHoc;
import mvc.entity.SinhVien;

/**
 *
 * @author Admin
 */
public class SinhVienDAO implements IDAO<SinhVien, Integer> {
    
    private static final String sqlinsert = "inert into SinhVien(ma,ten,ngaysinh,malop) values (?,?,?,?)";
    private static final String sqlSelectAll = "select * from SinhVien";
    
    IDAO<LopHoc, Integer> daoLopHoc = new LopHocDAO();
    
    @Override
    
    public SinhVien insert(SinhVien t) throws DBConnectionException, InsertExceptions {
        Connection cnn = DBConnection.open();
        PreparedStatement ps = null;
        try {
            ps = cnn.prepareStatement(sqlinsert);
            ps.setInt(1, t.getMa());
            ps.setString(2, t.getTen());
            ps.setDate(3, new Date(t.getNgaySinh().getTime()));
            int row = ps.executeUpdate();
            if (row > 0) {
                return t;
            }
        } catch (SQLException ex) {
            throw new InsertExceptions();
        } finally {
            DBConnection.close(null, ps, cnn);
        }
        return null;
    }
    
    @Override
    public SinhVien updateById(SinhVien t) {
        return null;
    }
    
    @Override
    public boolean deleteById(SinhVien t) {
        return true;
    }
    
    @Override
    public List<SinhVien> getAll() throws DBConnectionException, InsertExceptions {
        Connection cnn = DBConnection.open();
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<SinhVien> list = null;
        try {
            ps = cnn.prepareStatement(sqlSelectAll);
            rs = ps.executeQuery();
            list = new ArrayList<>();
            while (rs.next()) {
                SinhVien sv = new SinhVien();
                sv.setMa(rs.getInt("ma"));
                sv.setTen(rs.getString("ten"));
                sv.setNgaySinh(new java.util.Date(rs.getDate("ngaysinh").getTime()));
                LopHoc lop = daoLopHoc.findById(rs.getInt("malop"));
                sv.setLopHoc(lop);
                list.add(sv);
            }
        } catch (SQLException ex) {
            throw new InsertExceptions();
        } finally {
            DBConnection.close(null, ps, cnn);
        }
        return list;
    }
    
    @Override
    public SinhVien findById(Integer k) {
        return null;
    }
    
}
