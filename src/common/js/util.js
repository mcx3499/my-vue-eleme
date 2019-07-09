/**
 * 解析URL参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse(){
	let url = window.location.search//从URL获取字符串，转化为object
	let obj = {}
	let reg=/[?&][^?&]+=[^?&]+/g
	let arr = url.match(reg)
	if (arr){
		arr.forEach((item)=>{
			let tempArr = item.substring(1).split('=')// 先分割取到id=123454，之后用=号分开
			let key = decodeURIComponent(tempArr[0])
			let val = decodeURIComponent(tempArr[1])
			obj[key] = val
		})
	}
	return obj
}