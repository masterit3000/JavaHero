/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_jdbc_mvc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Admin
 */
public class DemoCreate {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/javahero";
        String user = "hero";
        String password = "11111";
        Connection connection = null;
        Statement state = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, password);
            System.out.println("ok ok ");
            state = connection.createStatement();
            int row = state.executeUpdate("insert into sinhvien(ten,ngaysinh) value ('Nguayn van v','2019-01-15')");
            if (row > 0) {
                System.out.println("insert ok ok");
            } else {
                System.out.println("insert not ok");
            }

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DemoCreate.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(DemoCreate.class.getName()).log(Level.SEVERE, null, ex);
        } finally {

            try {
                state.close();
            } catch (SQLException ex) {
                Logger.getLogger(DemoCreate.class.getName()).log(Level.SEVERE, null, ex);
            }
            try {
                connection.close();
            } catch (SQLException ex) {
                Logger.getLogger(DemoCreate.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}
