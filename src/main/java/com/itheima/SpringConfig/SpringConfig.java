package com.itheima.SpringConfig;


import org.springframework.context.annotation.*;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.mvc.Controller;

@Configuration  //定义配置文件
@ComponentScan(value = "com.itheima",
        //排除
        excludeFilters = @ComponentScan.Filter(
                type = FilterType.ANNOTATION,
                classes = Controller.class
        ))
@PropertySource("jdbc.properties")  //扫描properties配置文件
@Import({JdbcConfig.class, MybatisConfig.class})
@EnableAspectJAutoProxy//AOP
@EnableTransactionManagement//事务管理
public class SpringConfig {
}
