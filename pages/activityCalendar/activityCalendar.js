// pages/activityCalendar/activityCalendar.js
var util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time:'',
        headerAD:'https://upload-bbs.mihoyo.com/upload/2022/02/10/75276539/de8d50cfc40e884657d757f4aef801a0_1916616948435814907.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png',
        weaponMateriallist:[
          {
            id:'0',
            imgUrl:'https://patchwiki.biligame.com/images/ys/3/39/nev6qh0704ntykkzomnpfmy61b8jo6t.png',
            name:'狮牙斗士'
        },
        {
          id:'1',
          imgUrl:'https://patchwiki.biligame.com/images/ys/a/a5/ondpda6fqcktdngxx59hjx0x86eifeu.png',
          name:'漆黑陨铁'
      },
      {
        id:'2',
        imgUrl:'https://patchwiki.biligame.com/images/ys/e/e1/2io89qzgybi350jsqrpm0p6efnh16yb.png',
        name:'今昔剧画'
    },
      ],
      talentMateriallist:[
        {
          id:'0',
          imgUrl:'https://patchwiki.biligame.com/images/ys/4/4e/s9sur7i24x9pey4tbuljh2hc1jc79tw.png',
          name:'诗文哲学'
      },
      {
        id:'1',
        imgUrl:'https://patchwiki.biligame.com/images/ys/6/6d/qzfergmpc2ysgqotzg8h9hogzv1u2l1.png',
        name:'黄金哲学'
    },
    {
      id:'2',
      imgUrl:'https://patchwiki.biligame.com/images/ys/0/07/kly37hy0khdjmixbkfy7q97gxb1znrf.png',
      name:'天光哲学'
  },
    ],
    characterExchangelist:[
      {
        id:'0',
        imgUrl:'https://patchwiki.biligame.com/images/ys/thumb/9/9a/7v8r50l2lx0fzc2tllu20e2v7y54zms.png/60px-%E5%8C%97%E6%96%97%E5%A4%B4%E5%83%8F.png',
        name:'北斗'
    },
    {
      id:'1',
      imgUrl:'https://patchwiki.biligame.com/images/ys/1/1e/q7e7j4ybveu9vpezgvjogwpmfzz1mm2.png',
      name:'诺艾尔'
  },
  ],
  weaponExchangelist:[
    {
      id:'0',
      imgUrl:'https://patchwiki.biligame.com/images/ys/5/53/ei69kfgd5hcuplrcdlrkqp7corrp80j.png',
      name:'宗室长剑'
  },
  {
    id:'1',
    imgUrl:'https://patchwiki.biligame.com/images/ys/1/1f/c6ruhw5q4szn19bem7bs12qvpvwu09e.png',
    name:'宗室大剑'
},
{
  id:'2',
  imgUrl:'https://patchwiki.biligame.com/images/ys/2/2b/7mjirb502bv9kjfw7w0lao7hayjl84r.png',
  name:'宗室猎枪'
},
{
  id:'3',
  imgUrl:'https://patchwiki.biligame.com/images/ys/4/4d/0wxzvohfvm6tkkrh2mcr20ltefdtfvy.png',
  name:'宗室秘法录'
},
{
  id:'4',
  imgUrl:'https://patchwiki.biligame.com/images/ys/c/c6/519wyscbjlu9mh20rg3ghfi7hz28ouv.png',
  name:'宗室长弓'
},
],
characterUplist:[
{
  id: 0,
  title:'华紫樱绯',
  endTime: '2022-03-18 17:59:00',
  characterList:[
    {
      id:'0',
      imgUrl:'https://patchwiki.biligame.com/images/ys/a/a4/0plzsmjpgzzpldn00zqijgfybgx2pac.png',
      name:'八重神子'
  },
  {
    id:'1',
    imgUrl:'https://patchwiki.biligame.com/images/ys/thumb/e/e6/4npwdwlbof3hff5s7yyoxn5afmyo6bs.png/56px-%E6%89%98%E9%A9%AC.png',
    name:'托马'
  },
  {
  id:'2',
  imgUrl:'https://patchwiki.biligame.com/images/ys/thumb/2/26/cmlxoc9sfz7nrwmt495351zcj1qd93e.png/56px-%E8%8F%B2%E8%B0%A2%E5%B0%94.png',
  name:'菲谢尔'
  },
  {
  id:'3',
  imgUrl:'https://patchwiki.biligame.com/images/ys/thumb/e/e5/ebp74g68onexgkc2xsjuornx2j6bowp.png/56px-%E8%BF%AA%E5%A5%A5%E5%A8%9C.png',
  name:'迪奥娜'
  }
  ]
},
],
weaponUplist:[
{
  id: 0,
  title:'神铸赋形',
  endTime: '2022-03-18 17:59:00',
  weaponList:[
    {
      id:'0',
    imgUrl:'https://patchwiki.biligame.com/images/ys/0/01/jrwr230b17m9j6fuo25b04eb1ziwrov.png',
    name:'神乐之真意'
    },
    {
      id:'1',
      imgUrl:'https://patchwiki.biligame.com/images/ys/0/0c/a3c2nk6mszyh54oa3h85ey3a2llox9h.png',
      name:'磐岩结绿'
    },
    {
    id:'2',
    imgUrl:'https://patchwiki.biligame.com/images/ys/1/13/dy8bfp30ykshaotub45ppzf3vg1g0ap.png',
    name:'断浪长鳍'
    },
    {
    id:'3',
    imgUrl:'https://patchwiki.biligame.com/images/ys/a/a0/94o647bri6ccuviq733khmrzfekwixv.png',
    name:'祭礼剑'
    },
    {
      id:'4',
      imgUrl:'https://patchwiki.biligame.com/images/ys/c/c9/a2hgbmdegka66sycqn26nof7f5eggaa.png',
      name:'雨裁'
    }
  ]
},
],
// 限时活动接口
activities_timeList:[
  {
    title: '三界路飨祭',
    con:'距离活动结束祈愿结束还有',
    endTime: '2022-03-30 06:59:00',
  },
  {
    title: '神工天巧',
    con:'距离活动结束祈愿结束还有',
    endTime: '2022-03-21 03:59:00',
  }
]
    },
    // 时间显示小于10的前面补0方法
 timeFormat(param) {
  return param < 10 ? '0' + param : param;
  },
  // 多个倒计时函数
  severalCountDown: function () {
    let that = this;
    let time = 0;
    let obj = {};
    // console.log(that.data.activities_timeList)
    let activities_timeList = that.data.activities_timeList;// 限时活动时间遍历
    activities_timeList.forEach(function (item) {
      let endTime = new Date(item.endTime.replace(/-/g, '/')).getTime();// 结束时间时间戳
      let currentTime = new Date().getTime();// 当前时间时间戳
      time = (endTime - currentTime) / 1000;
      // 如果活动未结束
      if (time > 0) {
      let day = parseInt(time / (60 * 60 * 24));
      let hou =parseInt((time % (60 * 60 * 24)/ (60 * 60)));
      let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
      obj = {
       day: that.timeFormat(day +'天'), 
       hou: that.timeFormat(hou +'小时'),
       min: that.timeFormat(min +'分钟'),
       sec: that.timeFormat(sec +'秒')
      }
    
      } else { //活动已结束
      obj = {
       day: '00',
       hou: '00',
       min: '00',
       sec: '00'
      }
      clearTimeout(that.data.timeIntervalSeveral); // 清除定时器
      }
      item.time = obj;
      })

    time = 0;
    obj = {};
    let characterUplist = that.data.characterUplist;// 限时活动时间遍历
    characterUplist.forEach(function (item) {
      let endTime = new Date(item.endTime.replace(/-/g, '/')).getTime();// 结束时间时间戳
      let currentTime = new Date().getTime();// 当前时间时间戳
      time = (endTime - currentTime) / 1000;
      // 如果活动未结束
      if (time > 0) {
      let day = parseInt(time / (60 * 60 * 24));
      let hou =parseInt((time % (60 * 60 * 24)/ (60 * 60)));
      let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
      obj = {
       day: that.timeFormat(day +'天'), 
       hou: that.timeFormat(hou +'小时'),
       min: that.timeFormat(min +'分钟'),
       sec: that.timeFormat(sec +'秒')
      }
    
      } else { //活动已结束
      obj = {
       day: '00',
       hou: '00',
       min: '00',
       sec: '00'
      }
      clearTimeout(that.data.timeIntervalSeveral); // 清除定时器
      }
      item.time = obj;
      })

      time = 0;
    obj = {};
    let weaponUplist = that.data.weaponUplist;// 限时活动时间遍历
    weaponUplist.forEach(function (item) {
      let endTime = new Date(item.endTime.replace(/-/g, '/')).getTime();// 结束时间时间戳
      let currentTime = new Date().getTime();// 当前时间时间戳
      time = (endTime - currentTime) / 1000;
      // 如果活动未结束
      if (time > 0) {
      let day = parseInt(time / (60 * 60 * 24));
      let hou =parseInt((time % (60 * 60 * 24)/ (60 * 60)));
      let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
      obj = {
       day: that.timeFormat(day +'天'), 
       hou: that.timeFormat(hou +'小时'),
       min: that.timeFormat(min +'分钟'),
       sec: that.timeFormat(sec +'秒')
      }
    
      } else { // 活动已结束
      obj = {
       day: '00',
       hou: '00',
       min: '00',
       sec: '00'
      }
      clearTimeout(that.data.timeIntervalSeveral); // 清除定时器
      }
      item.time = obj;
      })

  var timeIntervalSeveral = setTimeout(that.severalCountDown, 1000);
  that.setData({
  timeIntervalSeveral,
  activities_timeList,
  characterUplist,
  weaponUplist
  })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.severalCountDown();// 多个定时器
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})