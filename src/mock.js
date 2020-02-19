/**
 * @Author: DKing
 * @Desc: 假数据mock
 * @Date: 2019-12-16
 */
// 引入mockjs
const Mock = require('mockjs')
const dataRes = function (params) {
  console.log(params)
  return {
    code:200,
    msg:'mock相应成功',
    data:{
      pageNum:1,
      pageSize:20,
      list:[]
    }
  }
}

Mock.setup({
  timeout:10000
})

let resData = Mock.mock('http://localhost:8081/getData', 'get', dataRes);
export default resData;

// //使用mockjs模拟数据
// Mock.mock('/api/data', (req, res) => {
//   return {
//     data: [
//       {
//         "id" : 1,
//         "username": "aaa",
//         "password": "aaa"
//       },
//       {
//         "id" : 2,
//         "username": "bbb",
//         "password": "bbb"
//       },
//       {
//         "id": 3,
//         "username": "ccc",
//         "password": "ccc"
//       }
//     ]
//   }
// })
