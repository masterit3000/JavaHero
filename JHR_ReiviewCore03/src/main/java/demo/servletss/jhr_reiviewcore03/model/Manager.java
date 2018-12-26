/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore03.model;

/**
 *
 * @author Admin
 */
public class Manager extends Staff {

    @Override
    public int getId() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setId(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public void info() {
        System.out.println("this is a manager, who manage =" + this.numberOfStaff + " staffs");
    }

    public Manager() {
        super(0, null);
    }

    public Manager(int numberOfStaff, int id, String name) {
        super(id, name);
        this.numberOfStaff = numberOfStaff;
    }

    private int numberOfStaff;

    public int getNumberOfStaff() {
        return numberOfStaff;
    }

    public void setNumberOfStaff(int numberOfStaff) {
        this.numberOfStaff = numberOfStaff;
    }

}
