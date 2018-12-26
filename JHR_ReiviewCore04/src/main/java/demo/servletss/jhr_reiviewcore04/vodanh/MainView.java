/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo.servletss.jhr_reiviewcore04.vodanh;

/**
 *
 * @author Admin
 */
public class MainView {

    public static int idModel = 100;

    public static int main(String[] args) {

        Controller ctrl = new Controller();

        ctrl.addModel(new MyModel());

        ctrl.addModel(new IModel() {

            @Override
            public int getId() {
                System.out.println(" day la ham get:");
                return idModel + 2000;
            }
        });
        ctrl.getInfoModel();

        ctrl.addModel(new IModel() {
            @Override
            public int getId() {
                System.out.println(" day la ham get:");
                return idModel;
            }
        });
        ctrl.addModel(() -> {
            return 200;
        });

       return 0;

    }

    static class MyModel implements IModel {

        @Override
        public int getId() {
            return idModel;
        }

    }

}
