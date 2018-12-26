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
public abstract class Worker extends Staff {

    private int dayofwork;

    public int getDayofwork() {
        return dayofwork;
    }

    public void setDayofwork(int dayofwork) {
        this.dayofwork = dayofwork;
    }

    public void info() {
        System.out.println("this is a worker, this month, he have " + this.getDayofwork() + " day ");
    }
}
