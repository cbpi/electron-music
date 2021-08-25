import request from '../../utils/http'

/*  登录
 *
 */
export function login(query) {
  return request({
    url: '/login/cellphone',
    method: 'get',
    params: query
  })
}

/*  二维码key生成接口
 *
 */
export function qrKey(query) {
  return request({
    url: '/login/qr/key',
    method: 'get',
    params: query
  })
}

/*  二维码生成接口
 *
 */
export function qrCreate(query) {
  return request({
    url: '/login/qr/create',
    method: 'get',
    params: query
  })
}
