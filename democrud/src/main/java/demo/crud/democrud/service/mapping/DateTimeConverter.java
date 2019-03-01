/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.crud.democrud.service.mapping;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import sun.java2d.pipe.SpanShapeRenderer;

/**
 *
 * @author Admin
 */
public class DateTimeConverter {

    SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");

    public String dateToString(Date d) {
        return dateFormat.format(d);
    }

    public Date stringToDate(String s) {

        try {
            return dateFormat.parse(s);
        } catch (ParseException ex) {

        } catch (NullPointerException npe) {

        }

        return null;

    }
}
