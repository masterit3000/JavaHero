/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore03.view;

import demo.servletss.jhr_reiviewcore03.ctrl.IController;
import demo.servletss.jhr_reiviewcore03.ctrl.StaffController;

/**
 *
 * @author Admin
 */
public class MainFrame {
    public static void main(String[] args) {
        
        IController controller = new DemoStaffController();
        
        controller.create();
        controller.delete();
                
        
    }
}
