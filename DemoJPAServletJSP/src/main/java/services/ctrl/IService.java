/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package services.ctrl;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import jdk.nashorn.internal.runtime.options.Option;

/**
 *
 * @author Admin
 */
public interface IService<T> {

     EntityManagerFactory getEntityManager();

    Optional<T> create(T t);

    Optional<T> delete(T t);

    Optional<T> update(T t);

    List<T> selectAll();

    List<T> selectAll(int max, int first);

    List<T> find(String key, int max, int first);

}
