package com.itheima.Service.Impl;

import com.itheima.Bean.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional //事务管理
public interface UserService {
    boolean login(String username, String password);

    boolean register(String username, String password);

    boolean exit();

    int insert(int id,String name);

    int delete(int id);

    int update(int id, String colum, String data);

    List<User> findAll();
}
