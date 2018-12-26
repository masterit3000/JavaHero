/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore03;

import demo.servletss.jhr_reiviewcore03.ctrl.StaffController;
import demo.servletss.jhr_reiviewcore03.model.Manager;
import demo.servletss.jhr_reiviewcore03.model.Worker;
import demo.servletss.jhr_reiviewcore03.model.Staff;

/**
 *
 * @author Admin
 */
public class Main {
    
    public static void main(String[] args) {
        
        Worker worker = new Worker();
        worker.setDayofwork(26);
        Manager manager = new Manager();
        manager.setNumberOfStaff(40);
        Staff staff;// = new Staff();
        staff = new Manager();
        
        StaffController staffController = new StaffController();
        staffController.addNew(worker);
        staffController.addNew(manager);
        staffController.addNew(staff);
        
        
        
    }
}
