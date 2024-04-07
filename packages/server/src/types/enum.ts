export enum UserRole {
  Admin, //管理
  Guest, //Guest
  User, //普通用户
  Editor, //编辑
  Doctor, //医生
  Reviewer, //审核
  Analyst, //分析
}

export enum Permission {
  // 用户管理
  ViewUsers = 'ViewUsers', // 查看用户
  CreateUser = 'CreateUser', // 创建用户
  EditUser = 'EditUser', // 编辑用户
  DeleteUser = 'DeleteUser', // 删除用户

  // 角色管理
  ViewRoles = 'ViewRoles', // 查看角色
  CreateRole = 'CreateRole', // 创建角色
  EditRole = 'EditRole', // 编辑角色
  DeleteRole = 'DeleteRole', // 删除角色

  // 权限管理
  ViewPermissions = 'ViewPermissions', // 查看权限
  EditPermissions = 'EditPermissions', // 编辑权限
  AssignPermissions = 'AssignPermissions', // 分配权限

  // 内容管理
  ViewContent = 'ViewContent', // 查看内容
  CreateContent = 'CreateContent', // 创建内容
  EditContent = 'EditContent', // 编辑内容
  DeleteContent = 'DeleteContent', // 删除内容

  // 统计分析
  ViewReports = 'ViewReports', // 查看报表
  GenerateReports = 'GenerateReports', // 生成报表

  // 设置管理
  ManageSettings = 'ManageSettings', // 管理设置

  // 特殊权限
  BypassPermissions = 'BypassPermissions', // 绕过权限控制
  SuperAdmin = 'SuperAdmin', // 超级管理员权限

  // 首页轮播图管理
  ManageCarousel = 'ManageCarousel', // 管理首页轮播图

  // 新闻管理
  ViewNews = 'ViewNews', // 查看新闻
  CreateNews = 'CreateNews', // 创建新闻
  EditNews = 'EditNews', // 编辑新闻
  DeleteNews = 'DeleteNews', // 删除新闻

  // 瘟疫数据管理
  ViewEpidemicData = 'ViewEpidemicData', // 查看瘟疫数据
  EditEpidemicData = 'EditEpidemicData', // 编辑瘟疫数据
  DeleteEpidemicData = 'DeleteEpidemicData', // 删除瘟疫数据
}
