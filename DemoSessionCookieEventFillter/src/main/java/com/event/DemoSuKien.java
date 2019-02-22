/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.event;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

/**
 * Web application lifecycle listener.
 *
 * @author Admin
 */
public class DemoSuKien implements ServletContextListener, HttpSessionListener, HttpSessionAttributeListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("web bat dau chay");
//        sce.getServletContext().setAttribute(name, sce);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("web dung chay");
    }

    @Override
    public void sessionCreated(HttpSessionEvent se) {
        System.out.println("Co client moi ket noi toi, tao sesion");
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        System.out.println("Co sesion bi huy");
    }

    @Override
    public void attributeAdded(HttpSessionBindingEvent event) {
    }

    @Override
    public void attributeRemoved(HttpSessionBindingEvent event) {
    }

    @Override
    public void attributeReplaced(HttpSessionBindingEvent event) {
    }

}
