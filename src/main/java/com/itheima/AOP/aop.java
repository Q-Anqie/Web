package com.itheima.AOP;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class aop {

    //切入点方法的参数需要在这里写出类型，有几个写几个，不然不生效
    @Pointcut("execution(int com.itheima.Service.Impl.UserService.delete(int))")
    public void vo() {
    }


    //切入点表达式
//    @Pointcut("execution(public * com.itheima.*.UserServiceImpl.update(type))")
//    @Pointcut("execution(public * com..UserService.update(..))")  //简写参数
//    @Pointcut("execution(* *..*Service+.*(..))") //匹配子类类型

    //切入点类型
//    前置通知
    @Before("vo()")
    public void method0() {
        System.out.println("have been full,but you can still insert");
    }

//    后置通知
    @After("vo()")
    public void method1(JoinPoint jp) {
        Object[] args = jp.getArgs();//获取参数
        System.out.println("have been full,but you can still insert");
    }

//    环绕通知
    @Around("vo()")
    public Object method3(ProceedingJoinPoint pjp){
        Object[] args = pjp.getArgs();//是JoinPoint的子类，一样可以获取参数
        System.out.println("have been full,but you can still insert");
        args[0] = "you";//可以修改参数
        try {
            //用环绕获取异常需要用try..catch，在方法名直接抛出拿不到异常
            return pjp.proceed();
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
        //环绕通知需要ProceedingJoinPoint类才能执行原方法，常用于权限隔离
        //如果需要原方法的返回值，必须设置也只能设置Object类型
    }

//    返回后通知
    @AfterReturning(value = "vo()",returning = "ret")//获取返回值需要returning里的和参数里的名称对应
    public void method4(Object ret) {
        //如果要写(JoinPoint jp,Objct ret)JoinPoint必须在前面，这是语法规定
        System.out.println("have been full,but you can still insert");
    }

//    抛出异常后通知
    @AfterThrowing(value = "vo()",throwing = "th")//获取异常
    public void method5(Throwable th) {
        System.out.println("have been full,but you can still insert");
    }
}
