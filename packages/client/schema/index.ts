import * as z from 'zod';

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const UsersSchema = z.object({
    username: z.string().min(1, {
        message: "用户名不能为空"
    }).max(50, {
        message: '用户名最长不能超过23个字符'
    }),
    roles:z.union([z.array(z.string()), z.string({})])
})

export const RolesSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.array(z.number()).min(1, {
        message: "每个角色最少拥有一项权限"
    })
})

export const LoginSchema = z.object({
    username:z.string().min(6,{
        message: "用户名格式错误"
    }).max(20,{
        message: "用户名格式错误"
    }),
    password:z.string().min(8,{
        message: "密码格式有误"
    }).max(20,{
        message: "密码格式有误"
    }),
})

export const RegisterSchema = z.object({
    username:z.string().min(6,{
        message: "用户名格式错误"
    }).max(20,{
        message: "用户名格式错误"
    }),
    password:z.string().min(8,{
        message: "密码格式有误"
    }).max(20,{
        message: "密码格式有误"
    }),
    email: z.string().min(8).max(50).regex(emailRegex, {
        message: '邮箱格式有误',
    }),
    nickName:z.string().min(2,{
        message: "昵称格式有误"
    }).max(30,{
        message: "昵称格式有误"
    })
})