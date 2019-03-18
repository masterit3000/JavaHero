package demo.javahero.jwt.demojwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan({"demo.javahero.jwt.demojwt"})
public class DemojwtApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemojwtApplication.class, args);
    }

}
