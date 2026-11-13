import request from './request'

/* ========== F1 登录与用户 ========== */

// 账号密码校验：返回数组，长度大于0即登录成功
export function login(username, password) {
  return request.get('/users', { params: { username, password } })
}

// F5 个人中心：取当前用户资料
export function getUserInfo(uid) {
  return request.get(`/users/${uid}`)
}

// F4 汇总表：取全员名单
export function getAllUsers() {
  return request.get('/users')
}

/* ========== F2 / F3 打卡 ========== */

// F2 当天是否已打卡：返回数组，长度为0才允许提交
export function getDayPunch(uid, date) {
  return request.get('/punches', { params: { userId: uid, date } })
}

// F2 提交打卡：data 为 { userId, date, temp, status, note }
export function submitPunch(data) {
  return request.post('/punches', data)
}

// F3 我的记录：按用户筛选
export function getUserPunchList(uid) {
  return request.get('/punches', { params: { userId: uid } })
}

// F4 / O8 全量记录：汇总与导出共用
export function getAllPunch() {
  return request.get('/punches')
}

// 修正与删除：管理员纠错用
export function editPunch(id, data) {
  return request.put(`/punches/${id}`, data)
}

export function delPunch(id) {
  return request.delete(`/punches/${id}`)
}

/* ========== E7 公告 ========== */

export function getNoticeList() {
  return request.get('/notices')
}

export function addNotice(data) {
  return request.post('/notices', data)
}

export function editNotice(id, data) {
  return request.put(`/notices/${id}`, data)
}

export function delNotice(id) {
  return request.delete(`/notices/${id}`)
}