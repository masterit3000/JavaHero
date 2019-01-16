/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.demogenjpa.ctrlllll;

import java.io.Serializable;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import demo.servletss.demogenjpa.Order1;
import demo.servletss.demogenjpa.OrderDetail;
import demo.servletss.demogenjpa.OrderDetailPK;
import demo.servletss.demogenjpa.Product;
import demo.servletss.demogenjpa.ctrlllll.exceptions.NonexistentEntityException;
import demo.servletss.demogenjpa.ctrlllll.exceptions.PreexistingEntityException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Admin
 */
public class OrderDetailJpaController implements Serializable {

    public OrderDetailJpaController(EntityManagerFactory emf) {
        this.emf = emf;
    }
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void create(OrderDetail orderDetail) throws PreexistingEntityException, Exception {
        if (orderDetail.getOrderDetailPK() == null) {
            orderDetail.setOrderDetailPK(new OrderDetailPK());
        }
        orderDetail.getOrderDetailPK().setProductId(orderDetail.getProduct().getId());
        orderDetail.getOrderDetailPK().setOrderId(orderDetail.getOrder1().getId());
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            Order1 order1 = orderDetail.getOrder1();
            if (order1 != null) {
                order1 = em.getReference(order1.getClass(), order1.getId());
                orderDetail.setOrder1(order1);
            }
            Product product = orderDetail.getProduct();
            if (product != null) {
                product = em.getReference(product.getClass(), product.getId());
                orderDetail.setProduct(product);
            }
            em.persist(orderDetail);
            if (order1 != null) {
                order1.getOrderDetailList().add(orderDetail);
                order1 = em.merge(order1);
            }
            if (product != null) {
                product.getOrderDetailList().add(orderDetail);
                product = em.merge(product);
            }
            em.getTransaction().commit();
        } catch (Exception ex) {
            if (findOrderDetail(orderDetail.getOrderDetailPK()) != null) {
                throw new PreexistingEntityException("OrderDetail " + orderDetail + " already exists.", ex);
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(OrderDetail orderDetail) throws NonexistentEntityException, Exception {
        orderDetail.getOrderDetailPK().setProductId(orderDetail.getProduct().getId());
        orderDetail.getOrderDetailPK().setOrderId(orderDetail.getOrder1().getId());
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            OrderDetail persistentOrderDetail = em.find(OrderDetail.class, orderDetail.getOrderDetailPK());
            Order1 order1Old = persistentOrderDetail.getOrder1();
            Order1 order1New = orderDetail.getOrder1();
            Product productOld = persistentOrderDetail.getProduct();
            Product productNew = orderDetail.getProduct();
            if (order1New != null) {
                order1New = em.getReference(order1New.getClass(), order1New.getId());
                orderDetail.setOrder1(order1New);
            }
            if (productNew != null) {
                productNew = em.getReference(productNew.getClass(), productNew.getId());
                orderDetail.setProduct(productNew);
            }
            orderDetail = em.merge(orderDetail);
            if (order1Old != null && !order1Old.equals(order1New)) {
                order1Old.getOrderDetailList().remove(orderDetail);
                order1Old = em.merge(order1Old);
            }
            if (order1New != null && !order1New.equals(order1Old)) {
                order1New.getOrderDetailList().add(orderDetail);
                order1New = em.merge(order1New);
            }
            if (productOld != null && !productOld.equals(productNew)) {
                productOld.getOrderDetailList().remove(orderDetail);
                productOld = em.merge(productOld);
            }
            if (productNew != null && !productNew.equals(productOld)) {
                productNew.getOrderDetailList().add(orderDetail);
                productNew = em.merge(productNew);
            }
            em.getTransaction().commit();
        } catch (Exception ex) {
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                OrderDetailPK id = orderDetail.getOrderDetailPK();
                if (findOrderDetail(id) == null) {
                    throw new NonexistentEntityException("The orderDetail with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(OrderDetailPK id) throws NonexistentEntityException {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            OrderDetail orderDetail;
            try {
                orderDetail = em.getReference(OrderDetail.class, id);
                orderDetail.getOrderDetailPK();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The orderDetail with id " + id + " no longer exists.", enfe);
            }
            Order1 order1 = orderDetail.getOrder1();
            if (order1 != null) {
                order1.getOrderDetailList().remove(orderDetail);
                order1 = em.merge(order1);
            }
            Product product = orderDetail.getProduct();
            if (product != null) {
                product.getOrderDetailList().remove(orderDetail);
                product = em.merge(product);
            }
            em.remove(orderDetail);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public List<OrderDetail> findOrderDetailEntities() {
        return findOrderDetailEntities(true, -1, -1);
    }

    public List<OrderDetail> findOrderDetailEntities(int maxResults, int firstResult) {
        return findOrderDetailEntities(false, maxResults, firstResult);
    }

    private List<OrderDetail> findOrderDetailEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(OrderDetail.class));
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

    public OrderDetail findOrderDetail(OrderDetailPK id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(OrderDetail.class, id);
        } finally {
            em.close();
        }
    }

    public int getOrderDetailCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<OrderDetail> rt = cq.from(OrderDetail.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
