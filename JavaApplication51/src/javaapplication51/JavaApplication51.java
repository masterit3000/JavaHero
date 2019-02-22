/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication51;

import ffffff.NewJerseyClient;

/**
 *
 * @author Admin
 */
public class JavaApplication51 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        NewJerseyClient   client = new NewJerseyClient();
//        String json = client.getJson(String.class);
        SinhVien json = client.getJson(SinhVien.class);
        System.out.println(json.getMa());
        System.out.println(json.getTen());
        System.out.println(json.getDob());
    }
    
}
