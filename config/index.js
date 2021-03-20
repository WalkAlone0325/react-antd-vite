export default {
  development: {
    cdn: './',
    apiBaseUrl: '/api',
  },
  beta: {
    cdn: '//s.xx.com/vite-react-app/beta',
    apiBaseUrl: '//www.beta.xxx.com/v1', // 测试环境接口地址
  },
  release: {
    cdn: '//s.xxx.com/vite-react-app/release', // 正式环境 cdn 路径
    apiBaseUrl: '//www.xxx.com/v1', // 正式环境接口地址
  },
}
