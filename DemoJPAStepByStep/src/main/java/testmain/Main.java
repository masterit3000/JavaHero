/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testmain;

import mvc.dmmm.dmcvvv.entity.Sinhvien;
import java.util.Date;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Admin
 */
public class Main {

    public static void main(String[] args) {
        Sinhvien sinhvien = new Sinhvien();
        sinhvien.setNgaySinh(new Date());
        sinhvien.setTen("Demo sinh vien");
        persist(sinhvien);
        System.out.println("ok ok");
    }

    public static void persist(Object object) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.java.hero.demojpa_DemoJPAStepByStep_jar_1.0-SNAPSHOTPU");
        //l;ay về EntityManagerFactory từ tên persistent Unit , được cấu hình trong file persistent.xml
        EntityManager em = emf.createEntityManager();
        //lấy về EntityManager, đối tượng dùng để thực thi cấc thao tác JPA
        em.getTransaction().begin();//bắt đàu giao dịch
        try {
            em.persist(object);//tương đương hàm insert
            em.getTransaction().commit(); //lệnh SQL thực sự được thực thi trong CSDL
        } catch (Exception e) {
            e.printStackTrace();
            em.getTransaction().rollback();//gặp sự cố thì rollback
        } finally {
            em.close();
        }
    }

}
