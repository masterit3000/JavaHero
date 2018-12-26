/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo.annnn;

/**
 *
 * @author Admin
 */
public class Dog {

    public static final String mesTxt = "Day la ham abc";
    public static final int CHO_DUC = 1;
    public static final int CHO_CAI = 0;
    public static final int CHO_KXD = -1;
            

    static {
        System.out.println("day la doan code static chay 1 phát duy nhat khi load class len bo nho");
    }
    public static final int soChan = 4;
    public static String tenChuNhan;
    public String name;
    public int age;
    public int  sex;//quy uoc 1 la cho duc, 0 cho cai, -1 cho be de
    Integer i = new Integer(33);

    void abc() {
        System.out.println(mesTxt);
        this.i = 334;
        this.age = 45;
    }

}
