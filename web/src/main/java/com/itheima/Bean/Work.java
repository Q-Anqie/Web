package com.itheima.Bean;

public class Work {
    private String name;
    private String sex;
    private int salary;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Work{" +
                "name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", salary=" + salary +
                '}';
    }
}
