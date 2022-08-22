import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { ElMessage, ElLoading } from 'element-plus';
//   import { storeToRefs } from "pinia";
//   import appStore from "@/store/appStore";
//   let {  token } = storeToRefs(appStore());

const state = {
  ok: 0, //请求成功状态码
  401: 'ERR_BAD_REQUEST',
};

//返回数据规则
interface IResponseData<T> {
  status: number;
  message?: string;
  data: T;
  code: string;
}

//请求默认配置规则
type TOption = {
  baseURL: string;
  timeout: number;
};

//默认配置
const config = {
  baseURL: '',
  timeout: 30 * 1000,
  withCredentials: true,
  headers: {
    Authorization: '',
  },
};

let loading: any = null;

class Http {
  service: any;
  constructor(config: TOption) {
    //实例化请求配置
    this.service = axios.create(config);

    //请求拦截  Authorization自定义名字
    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        loading = ElLoading.service({ fullscreen: true, text: '加载中...' });
        //   console.log(token.value);
        //   if (token.value) {
        //     (config.headers as AxiosRequestHeaders).Authorization = token.value;
        //   }
        const token = localStorage.getItem('token');
        if (token && config.headers) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      (error: any) => {
        loading.close();
        return Promise.reject(error);
      }
    );

    //响应拦截
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        loading.close();

        const data = response.data;

        const { code } = data;

        if (code == undefined) {
          //如果没有返回状态码，直接返回数据，针对于返回数据为blob类型
          return response;
        } else if (code !== 0) {
          ElMessage.error(data.message);
          return Promise.reject(data);
        }
        // code == 0 的时候，提取我们只关注的Api数据data
        return response.data.data;
      },
      (error: any) => {
        loading.close();

        if (error.code == state[401]) {
          ElMessage.error('请求失败:' + error.message);

          setTimeout(() => {
            localStorage.removeItem('com.beiyou');
            window.location.href = '/#/login';
          }, 1000);
        }
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params?: object, data = {}): Promise<IResponseData<T>> {
    return this.service.get(url, { params, ...data });
  }

  post<T>(url: string, params?: object, data = {}): Promise<IResponseData<T>> {
    return this.service.post(url, params, data);
  }

  put<T>(url: string, params?: object, data = {}): Promise<IResponseData<T>> {
    return this.service.put(url, params, data);
  }

  delete<T>(url: string, params?: object, data = {}): Promise<IResponseData<T>> {
    return this.service.delete(url, { params, ...data });
  }
}

export default new Http(config);
