import * as z from "zod";

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const UsersSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "用户名最少6位",
    })
    .max(20, {
      message: "用户名不能超过20个字符",
    }),
  roles: z.union([z.array(z.string()), z.string({})]),
});

export const RolesSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.array(z.number()).min(1, {
    message: "每个角色最少拥有一项权限",
  }),
});

export const LoginSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "用户名最少6位",
    })
    .max(20, {
      message: "用户名不能超过20个字符",
    }),
  password: z
    .string()
    .min(8, {
      message: "密码最少为8位",
    })
    .max(20, {
      message: "密码最大为20位",
    }),
});

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "用户名最少6位",
    })
    .max(20, {
      message: "用户名不能超过20个字符",
    }),
  password: z
    .string()
    .min(8, {
      message: "密码最少为8位",
    })
    .max(20, {
      message: "密码最大为20位",
    }),
  email: z.string().min(8).max(50).regex(emailRegex, {
    message: "邮箱格式有误",
  }),
  nickName: z
    .string()
    .min(2, {
      message: "昵称最少2位",
    })
    .max(30, {
      message: "昵称最大30位",
    }),
});
export const CreateDoctorSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "用户名最少6个字符",
    })
    .max(20, {
      message: "用户名不能超过20个字符",
    }),
  name: z
    .string({ required_error: "姓名为必填项" })
    .min(2, {
      message: "姓名最少6个字符",
    })
    .max(20, {
      message: "姓名不能超过20个字符",
    }),
  gender: z.number({ required_error: "性别为必填项" }).or(z.union([z.literal(0), z.literal(1)]).refine(gender => gender === 0 || gender === 1, {
    message: "性别必须填写"
  })),
  commissionRate: z
    .string({ required_error: "佣金比例为必填项" })
    .refine(
      (value) => {
        const regex = /^\d{1,2}(\.\d{1,2})?$/;
        return regex.test(value);
      },
      {
        message: "佣金比例必须在 0.00 到 99.99 的格式之间。",
      }
    )
    .transform((v: any) => Number((v * 1).toFixed(2))),
  age: z
    .string({ required_error: "年龄为必填项" })
    .refine(
      (data) => {
        const regex = /^\d+$/; // 确保只有数字
        if (!regex.test(data)) return false; // 检查是否只包含数字

        const number = parseInt(data, 10);
        return Number.isInteger(number) && number >= 19 && number <= 99;
      },
      {
        message: "年龄必须是一个19至99之间的整数",
      }
    )
    .transform((v) => parseInt(v)),
  experience: z
    .string({ required_error: "工作经验为必填项" })
    .refine(
      (data) => {
        const regex = /^\d+$/; // 确保只有数字
        if (!regex.test(data)) return false; // 检查是否只包含数字

        const number = parseInt(data, 10);
        return Number.isInteger(number) && number >= 0 && number <= 50;
      },
      {
        message: "工作经验必须是一个19至99之间的整数",
      }
    )
    .transform((v) => parseInt(v)),
  introduction: z.string().max(255).optional(),
  department: z.string({ required_error: "科室为必填项" }),
});
