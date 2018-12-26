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
public abstract class Staff implements IStaff{

    private int id;

    private String name;

 

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Staff() {
    }

    public Staff(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public abstract void info();

}
