/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore04.vodanh.lamda.stream;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 *
 * @author Admin
 */
public class Main {
    
    public static void main(String[] args) {
        SinhVienMapping mapping = new SinhVienMapping();
        List<String> list = new ArrayList<>();
        
        list.add("aaaa");
        list.add("dsvvd");
        list.add("dsvdsv");
        list.add("d");
        list.add("dvxcb");
        list.add("nnnnn");
        list.add("n");
        list.add("nnnnn");
        
        for (String string : list) {
            System.out.println("thao tac: " + string);
        }
        
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println("aaaaa " + iterator.next());
        }
        
        Stream<String> stream = list.stream();
        Stream<String> sorted = stream.sorted(new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                System.out.println("sx: " + o1 + " - " + o2);
                return o1.compareTo(o2);
            }
        });
        System.out.println("innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        sorted.forEach(new Consumer<String>() {
            @Override
            public void accept(String t) {
                System.out.println("accccccccc " + t);
            }
        });
        System.out.println("*************************************");
        list.parallelStream()
                .sorted((String o1, String o2) -> o1.compareTo(o2))
                .filter((String t) -> t.length() > 2)
                .forEach(System.out::println);
        
        List<SinhVien> sinhViens = new ArrayList<>();
        sinhViens.add(new SinhVien(23, "Nguyen van A"));
        sinhViens.add(new SinhVien(53, "Nguyen van ADD"));
        sinhViens.add(new SinhVien(63, "Nguyen van AB"));
        sinhViens.add(new SinhVien(239, "Nguyen van Av"));
        sinhViens.add(new SinhVien(234, "Nguyen van Aa"));
        sinhViens.add(new SinhVien(232, "Nguyen van A"));

//        List<SinhVienDTO> listSVDTO = sinhViens.stream().map((SinhVien t) -> mapping.convertToDTO(t)).collect(Collectors.toList());
        List<SinhVienDTO> listSVDTO = sinhViens.stream().map(mapping::convertToDTO).collect(Collectors.toList());
        
        listSVDTO.forEach(
                (t) -> {
                    System.out.println(t);
                }
        );
        sinhViens.stream().map(mapping::convertToDTO).forEach(System.out::println);
    }
    
}
