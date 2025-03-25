package com.itheima.Mybatis.Mapper;

import com.itheima.Dao.UserDao;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.InputStream;
import java.util.List;

public class Mybatis_App {
    public static void main(String[] args) throws Exception {

//        快速开始，Mapper代理开发
        String resources = "MybatisConfig.xml.bak";
        InputStream inputStream = Resources.getResourceAsStream(resources);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
        List<UserDao> users =  userMapper.selectAll();
        System.out.println(users);
    }
}
