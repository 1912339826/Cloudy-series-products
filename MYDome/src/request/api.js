// api接口统一管理
import {get,post} from './http'
// 二级列表
export const getDirectoryDto = p => get('directory/getDirectoryDto', p);
// 三级页面
export const getInformation = p => get('information/getInformation', p);