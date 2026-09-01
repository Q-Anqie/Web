package com.itheima.Service.Impl.Impl;

import com.itheima.Bean.User;
import com.itheima.Dao.UserDao;
import com.itheima.Service.Impl.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

//@Component //注解定义bean,衍生出Service等三种注解
@Service
public class UserServiceImpl implements UserService {
    private final UserDao userDao;//此处必须写自动装配或者写构造函数

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public boolean login(String username, String password) {
        System.out.println("Welcome to login ,"+username+"  !");
        return true;
    }

    @Override
    public boolean register(String username, String password) {
        System.out.printf("%s，您已注册,编号：%s\n", username, password);
        return false;
    }

    @Override
    public boolean exit() {
        System.out.println("不允许退出！");
        return false;
    }

    @Override
    public int insert(int id, String name) {
        return userDao.insert(id,name);
    }

    @Override
    public int delete(int id) {
        return userDao.delete(id);
    }

    @Override
    public int update(int id, String colum, String data) {
        return userDao.update(id, colum, data);
    }

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }
}
