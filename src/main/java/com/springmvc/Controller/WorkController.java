package com.springmvc.Controller;

import com.itheima.Bean.Work;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/works")
public class WorkController {

    @PostMapping
    public String save(@RequestBody Work work) {
        return "success";
    }

    @GetMapping
    public List<Work> getAll(){
        System.out.println("Goal method is running!");
        List<Work> workerlist = new ArrayList<>();
        Work worker1 = new Work();

        worker1.setName("Lili");
        worker1.setSex("女");
        worker1.setSalary(9999);
        workerlist.add(worker1);


        Work worker2 = new Work();
        worker2.setName("穆宁雪");
        worker2.setSex("女");
        worker2.setSalary(99999);
        workerlist.add(worker2);


        return workerlist;
    }
}
