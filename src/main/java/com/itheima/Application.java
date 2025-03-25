package com.itheima;


import com.itheima.Bean.User;
import com.itheima.Service.Impl.UserService;
import com.itheima.SpringConfig.SpringConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.List;

public class Application {
    public static void main(String[] args) {
//        原始的方式，使用ApplicatioonContext接口，创建类路径实例
//        ①快速开始
//        ApplicationContext context = new ClassPathXmlApplicationContext("SpringConfig.xml.bak");
//        UserDao userDao = (UserDao) context.getBean("userBean");
//        userDao.save();


//        ②bean的生命周期
//       ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("SpringConfig.xml.bak");
//       间接关闭方式
//       context.registerShutdownHook();
//       直接关闭方式
//       context.close();

        //测试使用
//        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
//        UserService userService = (UserService) context.getBean("userServiceImpl");
//        userService.register("穆宁雪","999");

        //spring整合mybatis
//        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
//        UserService userService = context.getBean(UserService.class);
//        List<User> mg = userService.findAll();
//        for (User user : mg) {
//            userService.register(user.getName(),String.valueOf(user.getId()));
//            userService.login(user.getName(),String.valueOf(user.getId()));
//            userService.exit();
//        }

        //测试使用
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
        UserService userService = context.getBean(UserService.class);
//        List<User> userList = userService.findAll();
//        userList.forEach(System.out::println);
    }
}
