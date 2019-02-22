/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa.demojpastepbystep.dao;

import mvc.dmmm.dmcvvv.entity.Sinhvien;
import com.java.hero.demojpa.demojpastepbystep.exceptions.CreateException;
import com.java.hero.demojpa.demojpastepbystep.exceptions.NonexistentEntityException;
import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 *
 * @author Admin
 */
public class SinhvienJpaController implements Serializable {

    public SinhvienJpaController(EntityManagerFactory emf) {
        this.emf = emf;
    }
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Sinhvien create(Sinhvien sinhvien) throws CreateException {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            em.persist(sinhvien);
            em.getTransaction().commit();
            em.flush();
            em.refresh(sinhvien);
            return sinhvien;
        } catch (Exception e) {
            em.getTransaction().rollback();
            throw new CreateException("Sinh vien ko tao duoc");
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(Sinhvien sinhvien) throws NonexistentEntityException, Exception {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            sinhvien = em.merge(sinhvien);
            em.getTransaction().commit();
        } catch (Exception ex) {
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                Integer id = sinhvien.getMa();
                if (findSinhvien(id) == null) {
                    throw new NonexistentEntityException("The sinhvien with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(Integer id) throws NonexistentEntityException {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            Sinhvien sinhvien;
            try {
                sinhvien = em.getReference(Sinhvien.class, id);
                sinhvien.getMa();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The sinhvien with id " + id + " no longer exists.", enfe);
            }
            em.remove(sinhvien);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public List<Sinhvien> findSinhvienEntities() {
        return findSinhvienEntities(true, -1, -1);
    }

    public List<Sinhvien> findSinhvienEntities(int maxResults, int firstResult) {
        return findSinhvienEntities(false, maxResults, firstResult);
    }

    private List<Sinhvien> findSinhvienEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(Sinhvien.class));
            Query q = em.createQuery(cq);
            if (!all) {
                q.setMaxResults(maxResults);
                q.setFirstResult(firstResult);
            }
            return q.getResultList();
        } finally {
            em.close();
        }
    }

    private List<Sinhvien> findSinhvienByName(String key, boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            Query q = em.createNamedQuery("inhvien.findByTenFullTextSearch");
            q.setParameter("key", key);
            if (!all) {
                q.setMaxResults(maxResults);
                q.setFirstResult(firstResult);
            }
            return q.getResultList();
        } finally {
            em.close();
        }
    }

    public Sinhvien findSinhvien(Integer id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Sinhvien.class, id);
        } finally {
            em.close();
        }
    }

    public int getSinhvienCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<Sinhvien> rt = cq.from(Sinhvien.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }

}
