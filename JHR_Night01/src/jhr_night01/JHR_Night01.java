/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jhr_night01;

import com.demo.annnn.Dog;
import com.demo.annnn.SinhVien;
import com.sun.org.apache.bcel.internal.generic.AALOAD;

/**
 *
 * @author Admin
 */
public class JHR_Night01 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Dog dog1;//khai bao
        dog1 = new Dog();//khoi tao
        Dog dog2 = new Dog();
        //obj muon dung dc, buoc phai khoi tao

        dog1.age = 20;
        dog1.name = "Gau gau";
        dog2.age = 21;

        System.out.println("dog1.age="+dog1.age);
        System.out.println("dog2.age="+dog2.age);
        
        dog1.tenChuNhan ="Dang Tuan Tu";
        System.out.println(dog2.tenChuNhan);
        System.out.println(Dog.tenChuNhan);
//        SinhVien sv = new SinhVien();
    }

}
