import * as z from 'zod';

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const UsersSchema = z.object({
    username:z.string().min(6,{
        message: "用户名最少6位"
    }).max(20,{
        message: "用户名不能超过20个字符"
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
        message: "用户名最少6位"
    }).max(20,{
        message: "用户名不能超过20个字符"
    }),
    password:z.string().min(8,{
        message: "密码最少为8位"
    }).max(20,{
        message: "密码最大为20位"
    }),
})

export const RegisterSchema = z.object({
    username:z.string().min(6,{
        message: "用户名最少6位"
    }).max(20,{
        message: "用户名不能超过20个字符"
    }),
    password:z.string().min(8,{
        message: "密码最少为8位"
    }).max(20,{
        message: "密码最大为20位"
    }),
    email: z.string().min(8).max(50).regex(emailRegex, {
        message: '邮箱格式有误',
    }),
    nickName:z.string().min(2,{
        message: "昵称最少2位"
    }).max(30,{
        message: "昵称最大30位"
    })
})
export const CreateDoctorSchema = z.object({
    username:z.string().min(6,{
        message: "用户名最少6个字符"
    }).max(20,{
        message: "用户名不能超过20个字符"
    }),
})