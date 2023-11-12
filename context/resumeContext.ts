import React from "react";

export const initialState = {
  profile: {
    name: "慕章",
    about: "分享 Javascript 热门\n框架，探索 web 极致\n优化体验。",
    email: 'lijunxinghua@163.com',
    mobile: '131****9700',
    github: 'https://github.com/lijun0222',
    home: '江苏省泰州市兴化市',
    workPlace: '深圳市',
    positionTitle: '前端开发工程师'
  },
  avatar: {
    // https://p6-passport.byteacctimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~300x300.image
    url: "https://picsum.photos/seed/picsum/200/300",
    display: true,
    circle: true,
    theme: "1",
  },
  skillList: [
    {
      name: "HTML / CSS",
      desc: "",
      level: 5,
    },
    {
      name: "TypeScript / JavaScript",
      desc: "熟练 JavaScript，丰富的 ts 项目经验",
      level: 4,
    },
    {
      name: "Express/Koa",
      desc: "丰富的 NodeJS 实践以及开源经验",
      level: 4,
    },
    {
      name: "React / 前端工程化",
      desc: "大型前端项目经验以及组件库开发经验",
      level: 4,
    },
    {
      name: "Vue 框架",
      desc: "Vue框架开发前端应用",
      level: 4,
    },
  ],
  educationList: [
    {
      time: ["2020.09", "2023.06"],
      school: "北京信息科技大学",
      major: "电子信息",
      degree: "硕士",
    },
    {
      time: ["2016.09", "2020.06"],
      school: "南京邮电大学",
      major: "信息工程",
      degree: "本科",
    },
  ],
  awardList: [
    {
      info: "英语 CET6",
      time: "2018",
    },
    {
      info: "全国大学生电子设计大赛 江苏省一等奖",
      time: "2018",
    }
  ],
  workExpList: [
    {
      company: "阿里云智能集团",
      department: "Dataphin数据产品",
      time: ["2023.06", "2023.09"],
      desc: "1. 使用 React + Dva.js + Ant Design 技术栈开发企业业务管理后台\n2. 负责 Dataphin 产品的业务迭代开发\n3. 前端工程化，内部使用swagger工具，添加埋点监控",
    },
    {
      company: "阿里云智能集团",
      department: "Dataphin数据产品部实习生",
      time: ["2023.01", "2023.05"],
      desc: "1. 封装企业的 JS-SDK，使开发者可快速上手，结合 React 技术栈作为前端模板\n2. 使用 Next.js 作为中间层，再结合 Redis 和 Docker 做一个 Node 端开发模板\n3. 结合 qiankun 微前端框架，使用微前端的思路管理多个应用\n\n",
    },
    {
      company: "中国科学院空天信息研究院",
      department: "前端实习生",
      time: ["2021.03", "2022.11"],
      desc: "1. 使用 Vue 来实现平台功能和逻辑\n2. 用 ECharts 来对数据挖掘分析后的可视化结果进行展示",
    },
  ],
  projectList: [
    {
      name: "在线流程图",
      role: "前端负责人",
      time: ["2023.03", "2023.05"],
      desc: "模仿在线流程图 processon 实现在线流程图工具",
      content:
        "项目难点\n1. 项目从0到1的框架设计和开发 \n 2. 产品体验精雕细琢的打磨 \n 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率",
    },
    {
      name: "低代码平台",
      role: "核心开发者",
      time: ["2023.03", "2023.05"],
      desc: "通过拖拽生成代码、集成 ant-design 、@antd/charts 等组件库",
      content:
        "项目难点\n1. 多组件在线层级嵌套拖拽\n2. 将 JSON 转成的 React 组件库、形成可视化一体化建设\n3. JSON 支持双向编辑，读取和写入是一一对应的\n4. 实现在线代码预览和下载",
    },
    {
      name: "在线简历生成器",
      role: "独立开发者",
      time: ["2023.03", "2023.05"],
      desc: "在线填写简历，一键导出 PDF",
      content: "项目难点\n1. 前端在线渲染PDF \n2. PDF 中样式设置",
    },
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: 'save', 'payload': Partial<State> } | { type: 'restore' };

interface AppContextInterface {
  state: State,
  dispatch: React.Dispatch<ACTIONTYPE>
}

export const ResumeContext = React.createContext<AppContextInterface>({
  state: initialState,
  dispatch: (action) => action,
});

export function reducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "save":
      localStorage.setItem("resume-data", JSON.stringify({ ...state, ...action.payload }));
      return { ...state, ...action.payload };
    case "restore":
      localStorage.removeItem("resume-data");
      return { ...initialState };
    default:
      throw new Error();
  }
}