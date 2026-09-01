package com.springmvc.Controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/user") //设置请求路径，在类上设置模块路径避免重复
public class UserController {

    /*请求与响应*/
    @RequestMapping("/save")
    @ResponseBody
    public String save(int id) {//spring6.x采用这种方式传递参数，需要修改映射路径
        System.out.println(id + ", rbq, you have been insered " + " !");
        System.out.println("You can finish everything.");
        return "{'info':'springmvc'}";
    }

    @RequestMapping("/listforjson")
    @ResponseBody
    public String listforjson(@RequestBody List<String> name) {
//        System.out.println("You can finish everything."+name);
        return "{'json':'json'}";
    }

    @RequestMapping("/test")
    @ResponseBody
    public String test(String test) {
        System.out.println("You can finish everything.");
        return "{'info':'springmvc'}";
    }

    @RequestMapping("/datetest")
    @ResponseBody
    public String datetest(Date date1, @DateTimeFormat(pattern = "yyyy-MM-dd") Date date2) {
        System.out.println("Pattern: yyyy/MM/dd " + date1);
        System.out.println("Pattern: yyyy-MM-dd " + date2);
        return "{'info'' : 'springmvc'}";
    }

    //响应
    @RequestMapping("/users")
    @ResponseBody
    public String users() {
        //返回网页
        return "index.jsp";//查询名为index.jsp的静态资源
    }

//    Rest风格开发
    //无参数
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    @ResponseBody
    public String test1() {
        return "test for restnoparam";
    }
    //有参数
    @RequestMapping(value = "/users/{id}",method = RequestMethod.POST)
    @ResponseBody
    public String test2(@PathVariable int id) {
        return "nothing to do";
    }
}
