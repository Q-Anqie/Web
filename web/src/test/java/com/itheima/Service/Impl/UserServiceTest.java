package com.itheima.Service.Impl;

import com.itheima.SpringConfig.SpringConfig;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith({SpringExtension.class}) //Junit5使用该注解，括号内是运行配置
@ContextConfiguration(classes = SpringConfig.class)
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test //Test方法只能是void类型
    public void test() {
        System.out.println(userService.login("admin", "admin"));
    }
}
