/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore04.vodanh;

/**
 *
 * @author Admin
 */
public class Controller {

    private IModel iModel;

    public void addModel(IModel f) {
        this.iModel = f;
        System.out.println("add model: " + f.getId());
    }

    public void getInfoModel() {
        if (iModel != null) {
            System.out.println("info =" + iModel.getId());
        }
    }
}
