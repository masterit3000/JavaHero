/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo.svl;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import services.ctrl.IService;
import services.ctrl.SinhVienService;
import services.dto.SinhVienDTO;

/**
 *
 * @author Admin
 */
public class GetAllSinhVienServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        IService<SinhVienDTO> service = new SinhVienService();
        List<SinhVienDTO> listSv = service.selectAll();
        req.setAttribute("list", listSv);
        req.getRequestDispatcher("/listsv.jsp").forward(req, resp);
        
    }
    
}
