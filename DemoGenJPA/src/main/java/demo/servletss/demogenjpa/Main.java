/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.demogenjpa;

import demo.servletss.demogenjpa.ctrlllll.Order1JpaController;
import java.util.Date;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.eclipse.persistence.internal.jpa.EntityManagerFactoryProvider;
import org.osgi.service.jpa.EntityManagerFactoryBuilder;

/**
 *
 * @author Admin
 */
public class Main {
    
    public static void main(String[] args) {
        
        Order1 o = new Order1();
        o.setDateCreated(new Date());
        o.setCustomerName("aaa");
        o.setStatus(Short.MAX_VALUE);
        Order1JpaController controller = new Order1JpaController(Persistence.createEntityManagerFactory("demo.servletss_DemoGenJPA_jar_1.0-SNAPSHOTPU"));
        controller.create(o);
        
    }
    
    public void persist(Object object) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("demo.servletss_DemoGenJPA_jar_1.0-SNAPSHOTPU");
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        try {
            em.persist(object);
            em.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }
    
}
