import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import style from "./index.module.scss";
import { AtButton } from "taro-ui";
import {
  set as setGlobalData,
  get as getGlobalData,
} from "../../util/global_data";
import initData from "../../data/product.js";

class Detailed extends Component {
  config = {
    navigationBarTitleText: "雯推",
    navigationBarBackgroundColor: "#FFF0F5",
  };
  state = {
    from: 1,
    imgArr: [],
    id: 0,
  };
  handleContact(){
    wx.previewImage({
        current: 'https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/WechatIMG25806.jpeg', // 当前显示图片的
        urls:["https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/WechatIMG25806.jpeg"]
    })
  }
  onShareAppMessage() {
    const { id } = this.state;
    return {
      title: initData[id - 1].desc || "好物推荐",
      imageUrl: initData[id - 1].img || "https://wx.qlogo.cn/mmhead/Q3auHgzwzM6fa1rMMfn1b1Tm9uf78azX8LdL5icjqGOibpMRictjaIM1A/0",
      // path: path || '/pages/bean-t/index'
    };
  }
  componentDidMount() {
    const { id,from} = this.$router.params;
    setTimeout(() => {
      this.setState({
        from,
        id: id,
      });
    }, 100);
    console.log(from, id);
    if (from == 1) {
      this.setState({
        from: from,
      });
      if (id == 1) {
        this.setState({
          imgArr: [
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/mc1.jpg",
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/mc2.jpg",
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/mc3.jpeg",
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/mc4.jpeg",
          ],
        });
      }
      if (id == 2) {
        this.setState({
          imgArr: [
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/AI1.jpg",
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/AI2.jpeg",
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/AI3.jpeg",
            "https://6liuhe.oss-cn-beijing.aliyuncs.com/mini/AI4.jpg",
          ],
        });
      }
    }
  }
  render() {
    const { from, imgArr, id } = this.state;
    return (
      <View>
        {from == 1 && (
          <View className={style.fakeImgWrap}>
            {imgArr.map((item, index) => (
              <Image src={item} key={index} className={style.fakeImg} />
            ))}
          </View>
        )}
        {from == 2 && (
          <View className={style.fakeImgWrap}>
            <View className={style.notice}>
              代购免税价:{initData[id - 1].real_price},专柜价:
              {initData[id - 1].fake_price}
              <View>更多商品细节点击下方联系客服添加好友。</View>
            </View>
            {initData[id - 1].imgArr.map((item, index) => (
              <Image
                src={item}
                key={index}
                mode={"widthFix"}
                className={style.fakeImg}
              />
            ))}
            <View className={style.footer_btn}>
              <Button className={style.btn_left} onClick={this.handleContact}>联系客服</Button>
              <Button className={style.btn_right} openType="share">立即分享</Button>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default Detailed;
