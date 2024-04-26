import { defineConfig } from "islandjs";

export default defineConfig({
  title: "如何制作好简历",
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "简历构成",
          items: [
            {
              text: "基本信息",
              link: "/article/base-info",
            },
            {
              text: "专业技能",
              link: "/article/skills",
            },
            {
              text: "工作经历",
              link: "/article/works",
            },
            {
              text: "项目经历",
              link: "/article/project",
            },
            {
              text: "教育经历",
              link: "/article/edc",
            },
            {
              text: "个人成就",
              link: "/article/achievements",
            },
            {
              text: "自我评价",
              link: "/article/self-evaluation",
            },
          ],
        },
        {
          text: "在线简历",
          items: [
            {
              text: "VuePress 搭建在线简历",
              link: "/online-resume/vuepress",
            },
            // {
            //   text: "Island.js 搭建在线简历",
            //   link: "/online-resume/islandjs",
            // },
          ],
        },
        // {
        //   text: "其他",
        //   items: [
        //     {
        //       text: "总结",
        //       link: "/others/summary",
        //     },
        //   ],
        // },
      ],
    },
  },
});
