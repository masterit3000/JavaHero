/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entityyyy;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

/**
 *
 * @author Admin
 */
@Target(ElementType.METHOD)
public @interface Cooooot {

    public String name() default "aaa";

}
