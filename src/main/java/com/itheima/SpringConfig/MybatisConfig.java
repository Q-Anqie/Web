package com.itheima.SpringConfig;

import com.alibaba.druid.pool.DruidDataSource;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperScannerConfigurer;
import org.springframework.context.annotation.Bean;

public class MybatisConfig {

    @Bean
    public SqlSessionFactoryBean getSqlSessionFactoryBean(DruidDataSource druidDataSource) {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setTypeAliasesPackage("com.itheima.Bean");//返回的实体类型
        sqlSessionFactoryBean.setDataSource(druidDataSource);//数据库对象
        return sqlSessionFactoryBean;
    }

    @Bean
    public MapperScannerConfigurer getMapperScannerConfigurer() {
        MapperScannerConfigurer mapperScannerConfigurer = new MapperScannerConfigurer();
        mapperScannerConfigurer.setBasePackage("com.itheima.Dao");//操作数据的dao类
        return mapperScannerConfigurer;
    }
}
