package com.itheima.Mybatis.Mapper;

import com.itheima.Dao.UserDao;

import java.util.List;

public interface UserMapper {
    List<UserDao> selectAll();
}
