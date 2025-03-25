package com.itheima.Dao;

import com.itheima.Bean.User;
import org.apache.ibatis.annotations.*;


import java.util.List;

public interface UserDao {
    //多个参数需要用@Param("xxx")  type xxx;
    //需要原样插入的数据要用${},#{}会自动添加单引号
    //这种sql操作方式有sql注入风险


    @Insert("INSERT INTO test1 (id,name) values (#{id}, #{name})")
    int insert(@Param("id") int id,@Param("name") String name);

    @Delete("DELETE FROM test1 WHERE id=#{id}")
    int delete(@Param("id") int id);

    @Update("UPDATE test1 SET ${colum}=#{data} WHERE id = #{id}")
    int update(@Param("id") int id, @Param("colum") String colum,@Param("data") String data);

    @Select("SELECT * FROM test1")
    List<User> findAll();

}
