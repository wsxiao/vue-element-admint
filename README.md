# dking-vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 设置环境变量
  - config 
    - dev.env.js => 开发环境
    - prod.env.js => 生产环境
    - test.env.js => 测试环境
  - build
    - webpack.dev.conf.js 
      <br>
``` bash
// => 配置环境变量  require 相应的文件
new webpack.DefinePlugin({
  // 开发环境
  'process.env': require('../config/dev.env')
  
  // 生产环境
  // 'process.env': require('../config/prod.env')

  // 测试环境
  // 'process.env': require('../config/test.env')

}),
```

## 代码规范
1. 文件命名规范  
  views下面文件夹为：一级菜单，以 'manage' 为后缀；
  
2. 组件名命名规范
  以模块为前缀，_功能为文件名，例：
  ```$xslt
  powerMange => 权限管理
    以下两个文件都属于 角色配置模块 下面，所以以 'role_' 作为前缀
    -- role_configPower
    -- role_rolesList
    
    以下两个文件都属于 人员列表模块 下面，所以以 'per_' 作为前缀
    -- per——personalList
    -- per_personalDetail
  ```
  
3.组件内部规范  
  组件顶部文件说明，格式如下
  ```
    @Author: 作者
    @Desc: 组件描述
    @Date: 创建日期
```
4.书写规范  
  A、接口请求参数以 'param_ / paramA' 为前缀，  
  ``例：param_goods_list / paramGoodsList => 请求goods的参数``  
  
  B、接口返回数据以 'res_ / resA' 为前缀，  
   ``例：res_goods_list / resGoodsList => 请求goods的返回值``
  
  C、用以双向绑定的变量以 'mod_ / modA'为前缀   
  ``例：mod_goods_num / modGoodsNum => 绑定商品数量的输入框``   
  
  D、函数定义，接口请求函数，以 'xhr' 作为前缀    
  ```
  例：
  // xhr -- 这是借口请求的注释，以xhr为前缀
  xhrGetGoodsList() {
    // todo something...
  }
```

  E、router，一级菜单为一大模块，添加注释   
  ```
  例：  
    
  /**
   * 权限管理
   * */ 
  // 角色列表
  import RolesList from '@/views/powerManage/role_rolesList'
  // 配置权限
  import ConfigPower from '@/views/powerManage/role_configPower'
  // 人员列表
  import PersonalList from '@/views/powerManage/per_personalList'
    
    
  /**
   * 数据管理
   * */
  // 商户下发统计
  import BSendStatistics from '@/views/dataManage/bSendStatistics'
  // 用户下发统计
  import CSendStatistics from '@/views/dataManage/cSendStatistics'
  // 代理下发统计
  import AgentSendStatistics from '@/views/dataManage/agentSendStatistics'
  // 批次下发统计
  import BatchSendStatistics from '@/views/dataManage/batchSendStatistics'


```
 
5.layout 规范   
A、页面class名：page-main    
B、新建 / 详情页面元素居中显示的 class名：page-center   
C、查询块class名：search-header   
D、table块class名：list-body 
          
