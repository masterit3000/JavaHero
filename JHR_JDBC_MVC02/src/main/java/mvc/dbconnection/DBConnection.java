/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.dbconnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Admin
 */
public class DBConnection {

    public static String user = "root";
    public static String pass = "root";
    public static String ip = "root";
    public static String port = "root";
    public static String driver = "";

    public static Connection open() throws DBConnectionException {

        try {
            Class.forName(driver);
            return DriverManager.getConnection(user, user, pass);
        } catch (ClassNotFoundException ex) {

            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
        }

        throw new DBConnectionException();
    }

    public static void close(ResultSet rs, PreparedStatement ps, Connection cnn) {

        try {
            if (rs != null && !rs.isClosed()) {

                rs.close();
            }
        } catch (SQLException ex) {
            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
        try {
            if (ps != null && !ps.isClosed()) {

                ps.close();
            }
        } catch (SQLException ex) {
            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
        try {
            if (cnn != null && !cnn.isClosed()) {

                cnn.close();
            }
        } catch (SQLException ex) {
            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
