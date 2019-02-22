/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.javahero.demospringbootjavahero.service;

import demo.javahero.demospringbootjavahero.dto.SinhVienDTO;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class MyService {

    public SinhVienDTO getOneSinhVien() {

        return new SinhVienDTO(2, "ffffffff");
    }

    public SinhVienDTO addNew(SinhVienDTO sv) {

        System.out.println("add new ok ok");

        return sv;
    }

    public List<SinhVienDTO> getMany() {

        ArrayList<SinhVienDTO> arrayList = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            arrayList.add(new SinhVienDTO(i, "ten ten " + i));
        }
        return arrayList;

    }
}
