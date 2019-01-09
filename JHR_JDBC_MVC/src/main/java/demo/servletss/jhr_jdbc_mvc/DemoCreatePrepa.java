/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_jdbc_mvc;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Admin
 */
public class DemoCreatePrepa {
    
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/javahero";
        String user = "hero";
        String password = "11111";
        Connection connection = null;
        PreparedStatement ps = null;
        String sql = "insert into sinhvien(ten,ngaysinh) value (?,?)";
        Date dob = new Date(new java.util.Date().getTime());
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("ok ok ");
            ps = connection.prepareStatement(sql);
            ps.setString(1, "DAng Tua'a'a 'a'a '&n Tu");
            ps.setDate(2, dob);
            int row = ps.executeUpdate();
            if (row > 0) {
                System.out.println("insert ok ok");
            } else {
                System.out.println("insert not ok");
            }
            
            ps.setString(1, "DAng Tuan Tu111");
            ps.setDate(2, dob);
             row = ps.executeUpdate();
            if (row > 0) {
                System.out.println("insert ok ok");
            } else {
                System.out.println("insert not ok");
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DemoCreatePrepa.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(DemoCreatePrepa.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            
            try {
                ps.close();
            } catch (SQLException ex) {
                Logger.getLogger(DemoCreatePrepa.class.getName()).log(Level.SEVERE, null, ex);
            }
            try {
                connection.close();
            } catch (SQLException ex) {
                Logger.getLogger(DemoCreatePrepa.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}
