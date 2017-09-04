// 用户
$.validator.addMethod("user", function(value, element) {
  return this.optional(element) || (/^[a-z0-9]+$/i.test(value))
}, "只能输入英文或者数字")

// 汉字
$.validator.addMethod("hanzi", function(value, element) {
  return this.optional(element) || (/^[\u4e00-\u9fa5]{0,}$/g.test(value))
}, "只能输入汉字")

// 手机号码
$.validator.addMethod("phone", function(value, element) {
  return this.optional(element) || (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(value))
}, "输入的手机号码格式错误")

// 身份证号码
$.validator.addMethod("idcard", function(value, element) {
  return this.optional(element) || (/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value))
}, "输入的身份证号码格式错误")

// 密码
$.validator.addMethod("pwd", function(value, element) {
  return this.optional(element) || (/^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){1,}$/.test(value))
}, "必须为数字、字母两种字符组成")

const idCard = {
  required: true,
  idcard : true,
  minlength : 18
}

const userName = { // 用户名验证规则
  required: true,
  user: true,
  minlength: 6,
  maxlength: 16,
  // checkUserExist: true // 用户名重复校验
}

const contacts = { // 联系人
  required: true,
  hanzi: true,
  minlength: 1,
  maxlength: 8
}

const mobile = { // 联系手机
  required: true,
  phone: true
}

const businessLicense = { // 营业执照
  minlength: 15,
  maxlength: 30
}

const remark = { // 备注
  maxlength: 400
}

const address = {
  required: true,
  minlength: 5,
  maxlength: 50
}

const realName = {
  required: true,
  hanzi: true,
  minlength: 2,
  maxlength: 8
}

const servicePhone = {
  minlength: 11,
  maxlength: 20
}

const pwd = {
  required  : true,
  pwd       : true,
  minlength : 6,
  maxlength : 20
}

const confirmPwd = {
    required  : true,
    pwd       : true,
    minlength : 6,
    maxlength : 20,
    equalTo: "#pwd"
}

const identifyCode = {
  required  : true,
  user      : true,
  minlength : 6
}

const role = {
  required: true,
  minlength: 2,
  maxlength: 20
}

const code = {
  required: true,
  minlength: 5,
  maxlength: 20
}

// 户型相关
const housingTypeName = {
  required: true,
  minlength: 3,
  maxlength: 20
}

const area = {
  required: true,
  minlength: 1,
  maxlength: 10,
  number: true,
  min: 0
}

const structure = {
  required: true
}

const roomNo = {
  required: true
}

const price = {
  required: true,
  min: 0,
  max: 999999999999,
  number: true,
}

export {
  userName,
  contacts,
  mobile,
  businessLicense,
  remark,
  role,
  address,
  realName,
  servicePhone,
  pwd,
  confirmPwd,
  code,
  housingTypeName,
  area,
  structure,
  roomNo,
  identifyCode,
  price,
  idCard
}