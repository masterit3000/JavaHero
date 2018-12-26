/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore03.ctrl;

/**
 *
 * @author Admin
 */
public interface IController<T> {
    //khai baos ntn T dong vai tro nhu 1 class, class j thi chua biet teo nuwa truyen vao
    
    public void create(T t);
    public void update(T t);
    public void delete(T t);
    
    
    
}
