/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.java.hero.demojpa.clienttttttttwssss;

import dddd.NewJerseyClient;
import dddd.SinhVien;
import javax.ws.rs.ClientErrorException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.WebTarget;

/**
 *
 * @author Admin
 */
public class NewClass {
    
    public static void main(String[] args) {
        
        Api2Resource_JerseyClient newClass = new Api2Resource_JerseyClient();
        SinhVien json = newClass.getJson(SinhVien.class);
        System.out.println(json.getMa());
        System.out.println(json.getTen());
        System.out.println(json.getDob());
    }

    static class Api2Resource_JerseyClient {

        private WebTarget webTarget;
        private Client client;
        private static final String BASE_URI = "http://localhost:8080/testt-web/webresources";

        public Api2Resource_JerseyClient() {
            client = javax.ws.rs.client.ClientBuilder.newClient();
            webTarget = client.target(BASE_URI).path("api2");
        }

        public void putJson(Object requestEntity) throws ClientErrorException {
            webTarget.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).put(javax.ws.rs.client.Entity.entity(requestEntity, javax.ws.rs.core.MediaType.APPLICATION_JSON));
        }

        public <T> T getJson(Class<T> responseType) throws ClientErrorException {
            WebTarget resource = webTarget;
            return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(responseType);
        }

        public void close() {
            client.close();
        }
    }
    
    
    
}
