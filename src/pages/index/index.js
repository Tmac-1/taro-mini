import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import style from "./index.module.scss";
import { AtCard,AtIcon } from "taro-ui";
import {
  set as setGlobalData,
  get as getGlobalData,
} from "../../util/global_data";
import initData from "../../data/product.js";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "雯推",
    navigationBarBackgroundColor: "#FFF0F5",
  };
  state = {
    from: 1,
    flag: false,
  };
  componentWillMount() {}

  componentDidMount() {
    Taro.request({
      url: "https://kjbvs.cn/milk/user/swith",
      method: "GET",
      mode: "no-cors",
      header: {
        "content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log("res", res);
        this.setState({
          flag:true
        })
        if (res && res.data && res.data.data && res.data.data.data == 1) {
          this.setState({
            from: 1,
          });
        } else {
          this.setState({
            from: 2,
          });
        }
      })
      .catch((err) => {
        console.log("catch");
        this.setState({
          from: 2,
          flag:true
        });
      });
  }
  onShareAppMessage() {
    return {
      title: "每日好物推荐哟～",
      imageUrl:
        "https://wx.qlogo.cn/mmhead/Q3auHgzwzM6fa1rMMfn1b1Tm9uf78azX8LdL5icjqGOibpMRictjaIM1A/0",
      // path: path || '/pages/bean-t/index'
    };
  }
  componentWillUnmount() {}

  componentDidShow() {
    console.log("initData", initData);
  }

  componentDidHide() {}
  handleCardClick(id) {
    const {from}=this.state;
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}&from=${from}`,
    });
  }
  handleProductClick(id) {
    const {from}=this.state;
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}&from=${from}`,
    });
  }
  render() {
    const { from,flag } = this.state;
    return (
      <View className={style.wrapper}>
        {from == 1 && flag &&(
          <View>
            <AtCard
              title="Tracy_Mcgrady"
              onClick={this.handleCardClick.bind(this, 1)}
            >
              <View>特雷西-麦克格雷迪</View>
              <Image src="https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/mc1.jpg" />
            </AtCard>
            <AtCard
              title="Allen_Iverson"
              onClick={this.handleCardClick.bind(this, 2)}
            >
              <View>阿伦-艾佛森</View>
              <Image src="https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/AI1.jpg" />
            </AtCard>
          </View>
        )}
        {from == 2 && flag && (
          <View>
            <Swiper
              className={style.swiper}
              interval={3000}
              circular
              indicatorDots={false}
              autoplay
              style={{ width: "100%" }}
            >
              <SwiperItem>
                <Image
                  className={style.swiper_img}
                  style={{ width: "100%", height: "100%" }}
                  src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00557-3688.jpg"
                />
                />
              </SwiperItem>
              <SwiperItem>
                <Image
                  className={style.swiper_img}
                  style={{ width: "100%", height: "100%" }}
                  src="https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/WechatIMG25804.jpeg"
                />
              </SwiperItem>
            </Swiper>
            <View className={style.recommend}> <AtIcon value='heart' size='16' color='#FF4500'></AtIcon>  
               <Text className={style.recommend02}>好物推荐</Text>
            </View>
            <View className={style.list_wrap}>
              {initData.map((item, index) => (
                <View
                  className={style.list}
                  key={index}
                  onClick={this.handleProductClick.bind(this, item.id)}
                >
                  <Image
                    className={style.list_img}
                    src={item.img}
                    mode={"widthFix"}
                  />
                  <View className={style.list_intr}>{item.desc}</View>
                  <View className={style.price}>
                    <Text>
                      代购价:
                      <Text className={style.real_price}>
                        ¥{item.real_price}
                      </Text>
                    </Text>
                    <Text className={style.fake_price}>
                      专柜价:
                      <Text className={style.linethrough}>
                        {item.fake_price}
                      </Text>
                    </Text>
                  </View>
                </View>
              ))}
              {/* <View className={style.list}>
                <Image
                  className={style.list_img}
                  src="https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"
                />
                <View className={style.list_intr}>
                  这是产品介绍11111dfsbfhsdjf哈哈打火机发的哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                </View>
                <View className={style.price}>
                  <Text>
                    代购价: <Text className={style.real_price}> ¥500</Text>
                  </Text>
                  <Text className={style.fake_price}>
                    专柜价: <Text className={style.linethrough}> 800</Text>
                  </Text>
                </View>
              </View> */}
              {/* <View className={style.list}>
                <Image
                  className={style.list_img}
                  src="https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180"
                />
                <View className={style.list_intr}>
                  这是产品介绍11111dfsbfhsdjf哈哈打火机发的哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                </View>
                <View className={style.price}>
                  <Text>
                    代购价: <Text className={style.real_price}> ¥500</Text>
                  </Text>
                  <Text className={style.fake_price}>
                    专柜价: <Text className={style.linethrough}> 800</Text>
                  </Text>
                </View>
              </View> */}
            </View>
          </View>
        )}
      </View>
    );
  }
}
