/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package democlientws;

import bbbbb.SinhVien;

/**
 *
 * @author Admin
 */
public class DemoClientWS {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        SinhVien allSinhVien = getAllSinhVien();
        System.out.println(allSinhVien.getMa());
        System.out.println(allSinhVien.getTen());
    }

    private static SinhVien getAllSinhVien() {
        bbbbb.NewWebService_Service service = new bbbbb.NewWebService_Service();
        bbbbb.NewWebService port = service.getNewWebServicePort();
        return port.getAllSinhVien();
    }
    
    
    
}
