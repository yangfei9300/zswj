var tools = {
	//解决富文本图片溢出
	formatRichText(html) {
			let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
				match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
				match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
				match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
				return match;
			});
			newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
				match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
				return match;
			});
			newContent = newContent.replace(/<br[^>]*\/>/gi, '');
			newContent = newContent.replace(/\<img/gi,
				'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
			return newContent;
		},
	getKaishijieshu(){
		var nowDate = new Date();
		var cloneNowDate = new Date();
		var fullYear = nowDate.getFullYear();
		var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
		var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天
		function getFullDate(targetDate) {
		        var D, y, m, d;
		        if (targetDate) {
		            D = new Date(targetDate);
		            y = D.getFullYear();
		            m = D.getMonth() + 1;
		            d = D.getDate();
		        } else {
		            y = fullYear;
		            m = month;
		            d = date;
		        }
		        m = m > 9 ? m : '0' + m;
		        d = d > 9 ? d : '0' + d;
		        return y + '-' + m + '-' + d;
		    };
		var endDate = getFullDate(cloneNowDate.setDate(endOfMonth));//当月最后一天
		var starDate = getFullDate(cloneNowDate.setDate(1));//当月第一天
		console.log(starDate)
		console.log(endDate)
	},
	// 验证手机号
	isphone(phone) {
		if (!(/^1[3456789]\d{9}$/.test(phone))) {
			return false;
		}
		return true;
	},
	isEmail(email) {
		if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
			return true;
		else
			return false;
	},
	//获取订单编号
	getOrderNumber() {
		var timestamp = Date.parse(new Date());
		var Range = 100 - 1;
		var Rand = Math.random();
		return timestamp + (1 + Math.round(Rand * Range));
	},
	//获取随机数
	getSuiji() {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	},
	//轻提示
	showToast(txt) {
		uni.showToast({
			title: txt,
			'icon': 'none'

		})
	},
	//计算多长时间前
	getDateDiff(dateTimeStamp) {
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var halfamonth = day * 15;
		var month = day * 30;
		var year = day * 365;
		var now = new Date().getTime();
		var diffValue = now - dateTimeStamp;
		if (diffValue < 0) {
			return;
		}
		var yearC = diffValue / year;
		var monthC = diffValue / month;
		var weekC = diffValue / (7 * day);
		var dayC = diffValue / day;
		var hourC = diffValue / hour;
		var minC = diffValue / minute;
		if (yearC >= 1) {
			result = "" + parseInt(yearC) + "年前";
		}
		if (monthC >= 1) {
			result = "" + parseInt(monthC) + "月前";
		} else if (weekC >= 1) {
			result = "" + parseInt(weekC) + "周前";
		} else if (dayC >= 1) {
			result = "" + parseInt(dayC) + "天前";
		} else if (hourC >= 1) {
			result = "" + parseInt(hourC) + "小时前";
		} else if (minC >= 1) {
			result = "" + parseInt(minC) + "分钟前";
		} else
			result = "刚刚";
		return result;
	},
	timestampToTime(timestamp) {
		var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		var D = (date.getDate()<10?'0'+date.getDate():date.getDate()) + ' ';
		var h = (date.getHours()<10?'0'+date.getHours():date.getHours()) + ':';
		var m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
		var s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
		return Y+M+D+h+m+s;
	},
	
	/**判断是否是手机号**/
	isPhoneNumber(tel) {
	    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
	    return reg.test(tel);
	},
	// 一位数组变二维数组
	oneZhuanTwo(baseArray,count){
		  let len = baseArray.length;
		  let n = count; //假设每行显示4个
		  let lineNum = len % count === 0 ? len / count : Math.floor( (len / count) + 1 );
		  let res = [];
		  for (let i = 0; i < lineNum; i++) {
		    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
		    let temp = baseArray.slice(i*n, i*n+n);
		    res.push(temp);
		  }
		  console.log("二维码数据",res)
		  return res
	}
}

//将时间戳转换成正常时间格式
export default tools;
