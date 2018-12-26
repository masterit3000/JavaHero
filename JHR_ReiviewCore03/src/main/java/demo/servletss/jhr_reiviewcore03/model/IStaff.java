/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore03.model;

/**
 *
 * @author Admin
 */
public interface IStaff {

    int a = 10;

    void setId(int id);

    int getId();
    
    default void hamMacDinh(){
        System.out.println("ko ai cai de toi ah");
    };

}
