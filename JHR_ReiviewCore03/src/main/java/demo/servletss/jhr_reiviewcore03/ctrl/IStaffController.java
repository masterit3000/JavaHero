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
public abstract class IStaffController implements IController<Staff>{

    @Override
    public void create(Staff t) {
        t.setId(0);
    }
    
    
    
    public abstract void addNewStaffbyName();
}
