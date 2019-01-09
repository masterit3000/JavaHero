/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.ctrl.map;

/**
 *
 * @author Admin
 */
public interface IMapping<E, D> {

    D toDTO(E t);

    E toEntity(D t);

}
