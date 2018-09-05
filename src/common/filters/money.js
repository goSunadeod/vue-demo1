import Vue from 'vue';
/**
 * 转换为金额
 * @param s 需要转换的数字
 * @param n 金额后面保留的小数点的位数
 * @return {string}
 */
const fmtMoney = (s, n) => {
  let leZero = s < 0;
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  if(leZero) s = s.substr(1)
  var l = s.split('.')[0].split('').reverse(), r = s.split('.')[1]
  let t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
  }
  let rst = t.split('').reverse().join('') + '.' + r
  return leZero ? '-'+rst : rst
}

/**
 * 金额转换为数字
 * @param s 需要转换的金额字符串
 * @return {Number}
 */
const parseMoney = (s) => {
  return parseFloat(s.replace(/[^\d\.-]/g, ''))
}

/**
 * @param num 需要转换的数字金额
 * @returns {string} 金额中文大写
 */
const numToChinese = (num) => {
  // 小数
  let fraction = ['角', '分']
  // 数字
  let digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ]
  let unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  let head = num < 0 ? '负' : ''
  num = Math.abs(num)
  let s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  num = Math.floor(num)
  for (let i = 0; i < unit[0].length && num > 0; i++) {
    let p = ''
    for (let j = 0; j < unit[1].length && num > 0; j++) {
      p = digit[num % 10] + unit[1][j] + p
      num = Math.floor(num / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}
Vue.filter('fmtMoney', fmtMoney);
Vue.filter('parseMoney', parseMoney);
Vue.filter('numToChinese', numToChinese);
