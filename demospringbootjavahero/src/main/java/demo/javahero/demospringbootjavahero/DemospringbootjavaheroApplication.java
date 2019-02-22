package demo.javahero.demospringbootjavahero;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"demo.javahero.demospringbootjavahero", "demo.javahero.demospringbootjavahero.controller", "demo.javahero.demospringbootjavahero.service"})
public class DemospringbootjavaheroApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemospringbootjavaheroApplication.class, args);
    }

}
