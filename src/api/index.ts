import http from '@/http/index';

//获取首页数据
export function getInfo() {
//   return http.get('http://localhost:3008/info');
  return http.get('/api/info');
  //   return {
  //     code: 200,
  //     msg: 'success',
  //     data: {
  //       name: 'wsf00',
  //       age: 22,
  //     },
  //   };
}
