/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore03.ctrl;

import demo.servletss.jhr_reiviewcore03.model.Staff;

/**
 *
 * @author Admin
 */
public class StaffController extends IStaffController{

    public Staff addNew(Staff newStaff) {

        //tien hanh them 1 staff mowis 
        newStaff.info();
        return null;
    }

    
   

    @Override
    public void create(Staff t) {
        super.create(t);
        System.out.println("code them vai dong vào day");
    }

    @Override
    public void delete(Staff t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void update(Staff t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void addNewStaffbyName() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    
    

    
    
   

}
