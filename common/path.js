// 项目域名
// export const BASE_URL = 'http://tangyishijia.huizukeji.cn:81/zhihui'   
// export const BASE_URL = 'http://192.168.0.100:8080/api'
export const BASE_URL = 'https://zswjapi.zsyflive.com/api'

//----------项目接口请求路径-----------
//首页轮播图
const indexCarousellist =BASE_URL + '/index/indexCarousel/list' 
// 分类 /api/index/category/list
const categorylist =BASE_URL + '/index/category/list' 
// 电话授权
const userlogin =BASE_URL + '/user/user/login'
// 上传OSS 
const uploaduploadOSS =BASE_URL + '/upload/uploadOSS'; 
// 修改个人信息  /api/user/user/update
const userupdate =BASE_URL + '/user/user/update'
// 获取个人信息 /api/user/user/{id}
const useruser =BASE_URL + '/user/user/'
// 获取供求列表 
const supplyNeedList =BASE_URL + '/need/supplyNeed/list'
// 获取展会列表  /api/exh/exhInfo/list
const exhInfoList =BASE_URL + '/exh/exhInfo/list'
// 获取视频列表 /api/exh/exhVideo/list
const exhVideoList =BASE_URL + '/exh/exhVideo/list'
// 展会轮播图 /api/exh/exhCarousel/list
const exhCarouselList =BASE_URL + '/exh/exhCarousel/list'
// 获取展商列表  /api/exh/exhCompany/list
const exhCompanyList =BASE_URL + '/exh/exhCompany/list'
// 获取企业详情  
const companyInfo =BASE_URL + '/company/company/'
// 获取企业列表
const companylist =BASE_URL + '/company/company/list'
// 产品列表  /api/company/companyProduct/list
const companyProductList =BASE_URL + '/company/companyProduct/list'
// 获取展馆列表 /api/exh/exhHall/list
const exhHallList =BASE_URL + '/exh/exhHall/list'
// 新增供求  /api/need/supplyNeed/add
const supplyNeedAdd =BASE_URL + '/need/supplyNeed/add'
// 获取是否收藏
const userMarkCheck =BASE_URL + '/user/userMark/check'
// 添加收藏 /api/user/userMark/add
const userMarkAdd =BASE_URL + '/user/userMark/add'
// 取消收藏 /api/user/userMark/del
const userMarkdel =BASE_URL + '/user/userMark/del'
// 获取商品列表 /company/companyProduct/list
// 删除需求 /api/need/supplyNeed/del
const supplyNeedDel =BASE_URL + '/need/supplyNeed/del'
// 获取商品详情
const companyProductInfo =BASE_URL + '/company/companyProduct/'
// 获取收藏列表 /api/user/userMark/list
const userMarkList =BASE_URL + '/user/userMark/list'
// 获取资讯列表 /api/news/newsInfo/list
const newsInfoList =BASE_URL + '/news/newsInfo/list'
// 资讯轮播图 /api/
const newsCarouselList =BASE_URL + '/news/newsCarousel/list'
// 获取字典信息 /api/dict/type/{dictType}
const dicttype =BASE_URL + '/dict/type/'
// 获取资讯列表 /api/news/newsInfo/list
const newsInfolist =BASE_URL + '/news/newsInfo/list'
// 获取推荐的企业 /api/company/company/list/top
const companylisttop =BASE_URL + '/company/company/list/top'




 export default {
	 companylisttop,
	 newsInfolist,
	 dicttype,
	 newsCarouselList,
	 newsInfoList,
	 userMarkList,
	 companyProductInfo,
	 supplyNeedDel,
	 userMarkdel,
	 userMarkAdd,
	 userMarkCheck,
	 supplyNeedAdd,
	 companylist,
	 exhHallList,
	 companyProductList,
	 companyInfo,
	 exhCompanyList,
	 exhCarouselList,
	 exhVideoList,
	 exhInfoList,
	 supplyNeedList,
	 useruser,
	 userupdate,
	 uploaduploadOSS,
	 userlogin,
	 categorylist,
 	indexCarousellist
 }
 