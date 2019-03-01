/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud.service;

import demo.crud.democrud.entity.SinhVien;
import demo.crud.democrud.reposistory.SinhvienReposistory;
import demo.crud.democrud.service.exxx.SinhVienExceptions;
import demo.crud.democrud.service.mapping.SinhVienMapper;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Admin
 */
@Service
public class SinhVienService {

    @Autowired
    SinhvienReposistory reposistory;
    @Autowired
    SinhVienMapper mapper;

    public List<SinhVienDTO> getAll() {

        return reposistory.findAll().stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    public SinhVienDTO addNew(SinhVienDTO svdto) {

        SinhVien sv = mapper.toEntity(svdto);
        if (sv == null) {
            return null;
        }

        SinhVien saveAndFlush = reposistory.saveAndFlush(sv);
        return mapper.toDTO(saveAndFlush);
    }

    public SinhVienDTO update(String mas, SinhVienDTO svdto) {

        Integer ma = Integer.parseInt(mas);

        SinhVien sv = mapper.toEntity(svdto);
        if (sv == null) {
            throw new SinhVienExceptions("Khong convert dc sinh vien can update");
        }

        Optional<SinhVien> findById = reposistory.findById(ma);
        SinhVien svByID = findById.orElse(null);
        if (svByID == null) {
            return null;
        }
        svByID.setNgaysinh(sv.getNgaysinh());
        svByID.setTen(sv.getTen());

        SinhVien saveAndFlush = reposistory.saveAndFlush(svByID);
        return mapper.toDTO(saveAndFlush);
    }

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = SinhVienExceptions.class)
    public SinhVienDTO update(Integer ma, SinhVienDTO svdto) {

        SinhVien sv = mapper.toEntity(svdto);
        if (sv == null) {
            return null;
        }

        themTuoi(444);
        Optional<SinhVien> findById = reposistory.findById(ma);
        SinhVien svByID = findById.orElseThrow(new Supplier<SinhVienExceptions>() {
            @Override
            public SinhVienExceptions get() {
                throw new SinhVienExceptions("Khong tim thay sinh vien " + ma); //To change body of generated methods, choose Tools | Templates.
            }
        });

        svByID.setNgaysinh(sv.getNgaysinh());
        svByID.setTen(sv.getTen());

        SinhVien saveAndFlush = reposistory.saveAndFlush(svByID);
        return mapper.toDTO(saveAndFlush);
    }

    @Transactional(propagation = Propagation.MANDATORY, rollbackFor = SinhVienExceptions.class)
    public void themTuoi(int n) {
        SinhVien get = reposistory.findById(1).get();
        get.setTen("Bi them tuoi: " + n);
        reposistory.save(get);

    }

    
    
}
