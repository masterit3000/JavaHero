/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.dao;

import mvc.dao.exceptions.DeleteExceptions;
import mvc.dao.exceptions.UpdateExceptions;
import mvc.dao.exceptions.InsertExceptions;
import java.util.List;
import mvc.dbconnection.DBConnectionException;

/**
 *
 * @author Admin
 */
public interface IDAO<T, K> {

    T insert(T t) throws DBConnectionException, InsertExceptions;

    T updateById(T t) throws DBConnectionException, UpdateExceptions;

    boolean deleteById(T t) throws DBConnectionException, DeleteExceptions;

    List<T> getAll() throws DBConnectionException, InsertExceptions;

    T findById(K k) throws DBConnectionException, InsertExceptions;
}
