import { RolesMap,RoleGroupsMap } from "@/interface";
export const roles: RolesMap = {
  0: "CEO",
  1: "总经理",
  2: "运营总监",
  3: "技术支持",
  4: "系统管理员",
  5: "客服经理",
  6: "客服人员",
  7: "普通用户",
  8: "科室主任",
  9: "主治医生",
  10: "售后支持",
  11: "院长",
  12: "健康顾问",
  13: "康复治疗师",
  14: "专家",
  15: "药师",
  16: "营养师",
  17: "病历管理",
  18: "急诊医生",
};
export const roleGroups: RoleGroupsMap = {
  "management": [0, 1, 2], // CEO, 总经理, 运营总监
  "customerService": [5, 6], // 客服经理, 客服人员
  "technicalSupport": [3], // 技术支持
  "healthcare": [8, 9, 11, 12, 13, 14, 15, 16, 17, 18], // 科室主任, 主治医生, 院长, 健康顾问, 康复治疗师, 专家, 药师, 营养师, 病历管理, 急诊医生
  "others": [4, 7, 10] // 系统管理员, 普通用户, 售后支持
};
