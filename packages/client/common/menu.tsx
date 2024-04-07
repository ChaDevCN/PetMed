import {
  Cog6ToothIcon,
  UserIcon,
  CircleStackIcon,
  DocumentTextIcon,
  ServerStackIcon,
} from "@heroicons/react/20/solid";
const iconColor = { color: "#A78BFA",width: '1.25rem', height: '1.25rem', marginRight: '0.5rem'};
export const menus = [
  {
    name: "个人信息",
    icon: <UserIcon className="mr-2 h-5 w-5" style={iconColor} />,
    link:'/users'
  },
  {
    name: "设置",
    icon: <Cog6ToothIcon className="mr-2 h-5 w-5" style={iconColor} />,
    link:'/setting'
  },
  {
    name: "数据统计",
    icon: <CircleStackIcon className="mr-2 h-5 w-5" style={iconColor} />,
    link: '/data-statistics'
  },
  {
    name: "日志管理",
    icon: <DocumentTextIcon className="mr-2 h-5 w-5" style={iconColor} />,
    link: '/log-management'
  },
  {
    name: "系统管理",
    icon: <ServerStackIcon className="mr-2 h-5 w-5" style={iconColor} />,
    link: '/system-management'
  },
];
