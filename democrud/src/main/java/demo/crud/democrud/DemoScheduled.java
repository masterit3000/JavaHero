/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 *
 * @author Admin
 */
@Component
public class DemoScheduled {
    
    
    
    @Scheduled(initialDelay = 500000, fixedDelay = 200000)
    public void lauLauThiChay(){
        System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
    
    @Scheduled(initialDelay = 3000000, fixedDelay = 300000)
    public void lauLauThiChayBB(){
        System.out.println("bbbbbbbbbbbbbbbbbbbbbb");
    }
    
    
    
    
}
