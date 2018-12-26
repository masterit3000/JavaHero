/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore04.vodanh.lamda;

/**
 *
 * @author Admin
 */
public class Main {

    public static void main(String[] args) {

        inThongTin((s) -> {
            System.out.println("ban dang in: " + s);//chay den dong nay thi da in ra chua
        });
        //den day moi thuc su chay
        inThongTin(Main::inAn);
        InAn ii = new InAn();
        inThongTin(new IDemoLamda() {
            @Override
            public void printfInfo(String info) {
                ii.inin(info);
            }
        });
        inThongTin(ii::inin);

        
        
    }

    public static void inAn(String s) {
        System.out.println("in ra thong tin");
        System.out.println("in ra thong tin");
        System.out.println("in ra thong tin "+s);
        System.out.println("in ra thong tin");
        System.out.println("in ra thong tin");
    }

    public static void inThongTin(IDemoLamda ld) {
        ld.printfInfo("ddd");
    }
}
