/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test.server;

import com.java.hero.demojpa.SinhVien;
import java.util.Date;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Admin
 */
@Path("api2")
@RequestScoped
public class Api2Resource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of Api2Resource
     */
    public Api2Resource() {
    }

    /**
     * Retrieves representation of an instance of test.server.Api2Resource
     * @return an instance of com.java.hero.demojpa.SinhVien
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public SinhVien getJson() {
        //TODO return proper representation object
        return  new SinhVien(22, "cfvvvv", new Date());
//        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of Api2Resource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(SinhVien content) {
    }
}
