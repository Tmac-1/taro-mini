import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss'
import { set as setGlobalData, get as getGlobalData } from './util/global_data'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/detail/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fde2e64d',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    }
  }

  componentDidMount () {}

  componentDidShow () {
    //   Taro.request({
    //     url: 'https://kjbvs.cn/milk/user/swith',
    //     method:'GET',
    //     mode:"no-cors",
    //     header:{
    //       'content-type': 'application/x-www-form-urlencoded'
    //     },  
    // }).then(res=>{
    //   console.log('res',res)
    //   if(res && res.data && res.data.data && res.data.data.data == 1){
    //     setGlobalData("from",2)
    //   }else{
    //     setGlobalData("from",2)
    //   }
    // }).catch((err)=>{
    //   console.log('catch')
    //   setGlobalData("from",2)
    //   }
    // )
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
