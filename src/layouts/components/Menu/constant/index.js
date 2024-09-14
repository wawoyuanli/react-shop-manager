/* 配置菜单栏路径 */
const menuList = [
  {
    icon: 'HomeOutlined',
    path: '/home/index',
    title: '首页',
  },
  {
    icon: 'AreaChartOutlined',
    path: '/dataScreen/index',
    title: '数据大屏',
  },
  {
    icon: 'TableOutlined',
    path: '/proTable',
    title: '超级表格',
    children: [
      { icon: 'AppstoreOutlined', path: '/proTable/useHooks', title: '使用 Hooks' },
      {
        icon: 'AppstoreOutlined',
        path: '/proTable/useComponent',
        title: '使用 Component',
      },
    ],
  },
  {
    icon: 'FundOutlined',
    path: '/dashboard',
    title: 'Dashboard',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/dashboard/dataVisualize',
        title: '数据可视化',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/dashboard/embedded',
        title: '内嵌页面',
      },
    ],
  },
  {
    icon: 'FileTextOutlined',
    path: '/form',
    title: '表单 Form',
    children: [
      { icon: 'AppstoreOutlined', path: '/form/basicForm', title: '基础 Form' },
      {
        icon: 'AppstoreOutlined',
        path: '/form/validateForm',
        title: '校验 Form',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/form/dynamicForm',
        title: '动态 Form',
      },
    ],
  },
  {
    icon: 'PieChartOutlined',
    path: '/echarts',
    title: 'Echarts',
    children: [
      { icon: 'AppstoreOutlined', path: '/echarts/waterChart', title: '水型图' },
      {
        icon: 'AppstoreOutlined',
        path: '/echarts/columnChart',
        title: '柱状图',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/echarts/lineChart',
        title: '折线图',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/echarts/pieChart',
        title: '饼图',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/echarts/radarChart',
        title: '雷达图',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/echarts/nestedChart',
        title: '嵌套环形图',
      },
    ],
  },
  {
    icon: 'ShoppingOutlined',
    path: '/assembly',
    title: '常用组件',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/assembly/guide',
        title: '引导页',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/assembly/svgIcon',
        title: 'Svg 图标',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/assembly/selectIcon',
        title: 'Icon 选择',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/assembly/batchImport',
        title: '批量导入数据',
      },
    ],
  },
  {
    icon: 'ProfileOutlined',
    path: '/menu',
    title: '菜单嵌套',
    children: [
      {
        icon: 'AppstoreOutlined',
        path: '/menu/menu1',
        title: '菜单1',
      },
      {
        icon: 'AppstoreOutlined',
        path: '/menu/menu2',
        title: '菜单2',
        children: [{ icon: 'AppstoreOutlined', path: '/menu/menu2/menu21', title: '菜单2-1' }],
      },
      {
        icon: 'AppstoreOutlined',
        path: '/menu/menu3',
        title: '菜单3',
      },
    ],
  },
]
export default menuList
