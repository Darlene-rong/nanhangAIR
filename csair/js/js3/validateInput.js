function Trim(reg, num) {
  return reg.test(num);
}
function validateType(type, number) {
  var vaFlag = false;
  switch (type) {
    case 'istel':
      return Trim(/^1\d{10}$/,number);
      break;
    case 'isnumber': //数字
      return Trim(/^\d+$/,number);
      break;
    case 'isemail'://邮箱
      return Trim(/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/,number);
      break;
    case 'isZM':  //字母
      return Trim(/^[a-zA-Z]/g,number);
      break;
    case 'isPassport': //护照
      return Trim(/^[a-zA-Z]/g,number);
      break;
    case 'isCardID'://身份证
      return Trim(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,number);
      break;
    default:
      return vaFlag;
  }
}

