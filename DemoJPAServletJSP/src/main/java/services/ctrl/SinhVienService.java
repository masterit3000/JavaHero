/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package services.ctrl;

import com.java.hero.demojpa.demojpaservletjsp.dao.ctrl.SinhvienJpaController;
import com.java.hero.demojpa.demojpaservletjsp.dao.entity.Sinhvien;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import javax.ejb.CreateException;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.transaction.UserTransaction;
import services.dto.SinhVienDTO;
import services.mapper.SinhVienMapper;

/**
 *
 * @author Admin
 */
public class SinhVienService implements IService<SinhVienDTO> {

    SinhvienJpaController controller = null;
    SinhVienMapper mapper = null;

    public SinhVienService() {

        try {
            EntityManagerFactory entityManager = getEntityManager();
            UserTransaction txn = (UserTransaction) new InitialContext().lookup("java:comp/UserTransaction");
            controller = new SinhvienJpaController(txn, entityManager);
            mapper = new SinhVienMapper();
        } catch (NamingException ex) {
            Logger.getLogger(SinhVienService.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public Optional<SinhVienDTO> create(SinhVienDTO t) {

        Sinhvien toEntity = mapper.toEntity(t);
        try {
            Sinhvien newSinhVien = controller.create(toEntity);
            return Optional.of(mapper.toDTO(newSinhVien));
        } catch (CreateException ex) {
            return Optional.empty();
        } catch (Exception ex) {
            Logger.getLogger(SinhVienService.class.getName()).log(Level.SEVERE, null, ex);
            return Optional.empty();
        }

    }

    @Override
    public Optional<SinhVienDTO> delete(SinhVienDTO t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Optional<SinhVienDTO> update(SinhVienDTO t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<SinhVienDTO> selectAll() {

        List<Sinhvien> findSinhvienEntities = controller.findSinhvienEntities();
        List<SinhVienDTO> list = new ArrayList<SinhVienDTO>();

//        list.stream().map(mapper::toDTO).co
        for (Sinhvien sv : findSinhvienEntities) {
            SinhVienDTO toDTO = mapper.toDTO(sv);
            list.add(toDTO);
        }

        return list;
    }

    @Override
    public List<SinhVienDTO> selectAll(int max, int first) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<SinhVienDTO> find(String key, int max, int first) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public EntityManagerFactory getEntityManager() {
        return Persistence.createEntityManagerFactory("com.java.hero.demojpa_DemoJPAServletJSP_war_1.0-SNAPSHOTPU");
    }
}
