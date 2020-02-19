/**
 * @Author: DKing
 * @Desc: 业务常量
 * @Date: 2019-12-16
 */
/**
 * piker
 * 时间选择器配置参数 - 开始到结束，包含了最近时间选项
 * */
export const PICKER_DATE_BETWEEN_OPTIONS = {
  type:'daterange', //显示类型
  editable:true, //文本框可输入
  unlinkPanels:true,  //时间联动
  rangeSeparator:'至',
  startPlaceholder:'开始日期',
  endPlaceholder:'结束日期',
  pickerOptions:{
    shortcuts: [{
      text: '最近一周',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
      }
    }]
  }
}

/**
 * pagination
 * 分页器配置参数
 * */
export const PAGINATION = {
  background:true,
  layout:'total, prev, pager, next, jumper',
  pageSize:5,
  simpleLayout:'total, pager, next',
}

/**
 * consts
 * 页面常量结合
 * */
export const CONSTS = {
  tableMaxHeight: 1600,     // table的最大高度
  tdMaxWidth: 200,
  tdMaxWidthNest: 220,
  tdMaxWidthSmall: 150,
  tableEmptyText:'暂无数据'
}

/**
 * form
 * form表单常用常量
 * */
export const FORMS = {
  labelMaxWidth:'120px',
  labelMinWidth:'72px',
}

/**
 * table 常用常量
 * */
export const TABLE_CONST = {
  maxHeight:1600,
  tdMaxWidth:200,
  tdMaxWidthSmall:150
}

/**
 * dialog 含有form表单常用常量
 * */
export const DIALOG_CONST = {
  labelWidth: '120px'
}

/**
 * 所有类型
 * */
export const MERCHANT_TYPE_LIST = [
  {key:'10', value:'集团商户'},
  {key:'20', value:'集团子公司'},
  {key:'30', value:'普通商户'},
  {key:'40', value:'代理商'},
  {key:'55', value:'商户子账号'},
]

/**
 * 商户类型无代理
 * */
export const MERCHANT_TYPE_LIST_NO_AGENT = [
  {key:'10', value:'集团商户'},
  {key:'20', value:'集团子公司'},
  {key:'30', value:'普通商户'},
]

/**
 * 下发公司类型
 * */
export const COMPANY_TYPE_LIST = [
  {key:0, value:'自然人'},
  {key:1, value:'个体工商户'},
]



/**
 * 下发通道
 * */
export const LOWER_PAY_CHANNERL_LIST = [
  {key:'10', value:'平安银行', desc:'0~24小时，金额无限制'},
  {key:'20', value:'中金支付',desc:'娃哈哈哈哈'},
  {key:'30', value:'网商银行',desc:'大于5万，9：00~17：00下发；小于5万，0~24小时下发'},
]


/**
 * 收款渠道
 * */
export const COLLECT_CHANNEL_LIST = [
  {key:'10', value:'银行卡'},
  {key:'20', value:'支付宝'},
  {key:'30', value:'微信'},
]



/**
 * 下发状态
 * */
export const LOWER_SEND_STATUS_LIST = [
  {value:'校验中', key:'9', className:'dot-orange'},
  {value:'验证成功', key:'10', className:'dot-orange'},
  {value:'验证失败', key:'20', className:'dot-red'},
  {value:'已取消', key:'30', className:'dot-gray'},
  {value:'待打款', key:'40', className:'dot-orange'},
  {value:'打款中', key:'50', className:'dot-orange'},
  {value:'打款成功', key:'60', className:'dot-green'},
  {value:'打款失败', key:'70', className:'dot-red'},
  {value:'已退款', key:'75', className:'dot-red'},
  {value:'退票中', key:'80', className:'dot-orange'},
  {value:'已退票', key:'90', className:'dot-orange'},
]

/**
 * 充值退款状态
 * */
export const REFUND_STATUS = [
  {key:'30', value:'待退款'},
  {key:'50', value:'退款成功'},
]

/**
 * 角色类型
 * */
export const ROLE_TYPE = [
  {key:'10', value:'运营平台'},
  {key:'20', value:'结算平台'},
]

/**
 * 角色类型
 * */
export const USERS_TATUS = [
  {key:1, value:'启用'},
  {key:0, value:'禁用'},
]

/**
 * 充值状态
 * */
export const RECHARGE_STATUS = [
  {key:10, value:'错误状态', className:'dot-red'},
  {key:11, value:'未分配', className:'dot-orange'},
  {key:20, value:'加款成功', className:'dot-green'},
  {key:30, value:'待人工操作', className:'dot-orange'},
  {key:40, value:'已撤销', className:'dot-gray'},
];

/**
 * 开票状态
 * */
export const OPEN_INVOICE_STATUS = [
  {key:1, value:'已开票', className:'dot-green'},
  {key:2, value:'未开票', className:'dot-gray'},
];

/**
 * 开票状态 10.未开票；20.开票处理中；30.已开票；40.驳回
 */
export const INVOICE_STATUS_LIST = [
  {key: 10, value:'未开票', className:'dot-gray'},
  {key: 20, value:'开票处理中', className:'dot-orange'},
  {key: 30, value:'已开票', className:'dot-green'},
  {key: 40, value:'驳回', className:'dot-red'},
]


/**
 * 签约状态
 * */
export const SIGN_STATUS = [
  {key:-1, value:'签约失败', className:'dot-red'},
  {key:0, value:'待签约', className:'dot-orange'},
  {key:1, value:'待审核', className:'dot-green'},
  {key:2, value:'签约成功', className:'dot-green'},
]

/**
 * 批次状态
 * */
export const BATCH_STATUS = [
  {key:9, value:'检验中', className:'dot-orange'},
  {key:10, value:'全部校验成功', className:'dot-green'},
  {key:20, value:'部分校验失败', className:'dot-orange'},
  {key:30, value:'全部校验失败', className:'dot-red'},

]

/**
 * 批次下发状态
 * */
export const BATCH_SEND_STATUS = [
  // {key:-2, value:'中断', className:'dot-red'},
  // {key:-1, value:'退款', className:'dot-gray'},
  {key:10, value:'待补发', className:'dot-orange'},
  {key:11, value:'已取消', className:'dot-gray'},
  {key:20, value:'待打款', className:'dot-orange'},
  {key:30, value:'处理中', className:'dot-orange'},
  {key:40, value:'全部打款完成', className:'dot-green'},
  {key:50, value:'部分打款成功', className:'dot-orange'},
  {key:60, value:'全部打款失败', className:'dot-red'},
]
/**
 * 批次下发统计
 * */
export const BATCH_SEND_STATUSBtn = [
  // {key:-2, value:'中断', className:'dot-red'},
  // {key:-1, value:'退款', className:'dot-gray'},
  {key:10, value:'待付款', className:'dot-orange'},
  {key:11, value:'已取消', className:'dot-gray'},
  {key:20, value:'待打款', className:'dot-orange'},
  {key:30, value:'处理中', className:'dot-orange'},
  {key:40, value:'全部打款完成', className:'dot-green'},
  {key:50, value:'部分打款成功', className:'dot-orange'},
  {key:60, value:'全部打款失败', className:'dot-red'},
]

export const BATCH_SEND_STATUSM = [
  {key:-2, value:'中断', className:'dot-red'},
  {key:-1, value:'退款', className:'dot-gray'},
  {key:10, value:'待补发', className:'dot-orange'},
  {key:11, value:'已取消', className:'dot-gray'},
  {key:20, value:'待打款', className:'dot-orange'},
  {key:30, value:'处理中', className:'dot-orange'},
  {key:40, value:'全部打款完成', className:'dot-green'},
  {key:50, value:'部分打款成功', className:'dot-orange'},
  {key:60, value:'全部打款失败', className:'dot-red'},
]

/**
 *  补发状态
 * */
export const BATCH_SULPPY=[
  {key:0, value:'未补发', className:'dot-red'},
  {key:1, value:'已补发', className:'dot-green'},
]

/**
 * 客户状态
 * */
export const CUSTOMERS_STATUS = [
  {key:'1', value:'公海'},
  {key:'0', value:'非公海'},
]

/**
 * 三要素验证状态
 * */
export const THREE_ELEM_SIGN_STATUS = [
  {key: true, value: '验证成功'},
  {key: false, value: '验证失败'},
];

/**
 * 开票信息 验证状态
 * */
export const VERIFICATION_STATUS = [
  {key: 10, value:'待验证', className:'dot-orange'},
  {key: 20, value:'验证成功', className:'dot-green'},
  {key: 30, value:'驳回', className:'dot-red'},
]

/**
 * 返佣类别
 * */
export const COMMISSION_MONEY = [
  {key:true, value:'是服务商'},
  {key:false, value:'不是服务商'},
  // {key:true, value:'返佣金'},
  // {key:false, value:'不返佣金'},
]

/**
 * 签约状态
 * */
export const CONTRACT_STATUS = [
  {key:-1, value:'-1',label:'签约失败'},
  {key:0, value:'0',label:'待签约'},
  {key:1, value:'1',label:'待审核'},
  {key:2, value:'2',label:'签约成功'},
]

// /**
//  * 账号类型 - 商户管理
//  * */
// export const ACCOUNT_STATUS = [
//   {key:'10', value:'集团管理员'},
//   {key:'20', value:'代理'},
//   {key:'30', value:'集团子公司'},
//   {key:'40', value:'结算权限测试权限'},
// ];
