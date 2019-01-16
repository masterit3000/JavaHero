/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa.demojpastepbystep.service;

import com.java.hero.demojpa.demojpastepbystep.Sinhvien;
import com.java.hero.demojpa.demojpastepbystep.dao.SinhvienJpaController;
import com.java.hero.demojpa.demojpastepbystep.exceptions.CreateException;
import com.java.hero.demojpa.demojpastepbystep.service.dto.SinhVienDTO;
import com.java.hero.demojpa.demojpastepbystep.service.map.SinhVienMapper;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManagerFactory;
import jdk.nashorn.internal.runtime.options.Option;

/**
 *
 * @author Admin
 */
public class SinhVienService implements IService<SinhVienDTO> {

    SinhvienJpaController controller = null;
    SinhVienMapper mapper = null;

    public SinhVienService() {

        EntityManagerFactory entityManager = getEntityManager();
        controller = new SinhvienJpaController(entityManager);
        mapper = new SinhVienMapper();
    }

    @Override
    public Optional<SinhVienDTO> create(SinhVienDTO t) {

        Sinhvien toEntity = mapper.toEntity(t);
        try {
            Sinhvien newSinhVien = controller.create(toEntity);
            return Optional.of(mapper.toDTO(newSinhVien));
        } catch (CreateException ex) {
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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<SinhVienDTO> selectAll(int max, int first) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<SinhVienDTO> find(String key, int max, int first) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
