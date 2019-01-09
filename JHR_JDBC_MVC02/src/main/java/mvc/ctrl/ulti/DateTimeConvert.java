/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl.ulti;

import java.text.SimpleDateFormat;
import java.util.Date;
import sun.java2d.pipe.SpanShapeRenderer;

/**
 *
 * @author Admin
 */
public class DateTimeConvert {

    SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");

   public  String dateToString(Date d) {
        return dateFormat.format(d);
    }
}
