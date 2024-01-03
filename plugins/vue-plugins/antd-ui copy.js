import { createApp } from "vue";
// import Antd from "ant-design-vue/lib";
import {
  Table,
  Dropdown,
  Menu,
  Modal,
  Tabs,
  Radio,
  Drawer,
  Collapse,
  Checkbox,
  Badge,
  Switch,
} from "ant-design-vue";

// import "ant-design-vue/lib/table/style/index.less";
// import "ant-design-vue/lib/dropdown/style/index.less";
// import "ant-design-vue/lib/menu/style/index.less";
// import "ant-design-vue/lib/modal/style/index.less";
// import "ant-design-vue/lib/tabs/style/index.less";
// import "ant-design-vue/lib/radio/style/index.less";
// import "ant-design-vue/lib/drawer/style/index.less";
// import "ant-design-vue/lib/collapse/style/index.less";
// import "ant-design-vue/lib/notification/style/index.less";
// import "ant-design-vue/lib/checkbox/style/index.less";
// import "ant-design-vue/lib/badge/style/index.less";
// import "ant-design-vue/lib/switch/style/index.less";

const MyPlugin = {
  install(app) {
    app.use(Table);
    app.use(Dropdown);
    app.use(Menu);
    app.use(Modal);
    app.use(Tabs);
    app.use(Radio);
    app.use(Drawer);
    app.use(Collapse);

    // app.use(Antd);
    app.use(Checkbox);
    app.use(Badge);
    app.use(Switch);
  },
};
// export default ({ app }) => {
//   console.log(app, 'APP')

//   // You can add more components as needed
// };

// app.use(Antd);

export default MyPlugin