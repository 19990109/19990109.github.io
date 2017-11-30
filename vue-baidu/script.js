Vue.component('my-nav',{
    template:`<div>
           <a href="#">推荐</a>
           <a href="#">视频</a>
           <a href="#">热点</a>
           <a href="#">娱乐</a>
           <a href="#">时尚</a>
           <a href="#"><img src="images/1.png" alt=""></a>
       </div>`
})
var nav=new Vue({
    el:"#top"
})
Vue.component('my-main',{
    template:`<div><img src="images/2.png" alt="">
            <input type="text">
            <div class="box">百度一下</div></div>`
})
var main=new Vue({
    el:"#main"
})

Vue.component("my-sml",{
    template:`<div><span></span>
                    <span></span>
                    <span></span>
                </div>`
})
var list=new Vue({
    el:"#list",
    data:{
        lists:[
            {message:"关注",imgUrl:"images/3.png"},
            {message:"新闻",imgUrl:"images/4.png"},
            {message:"小说",imgUrl:"images/5.png"},
            {message:"视频",imgUrl:"images/6.png"},
            {message:"糯米",imgUrl:"images/7.png"},
            {message:"地图",imgUrl:"images/8.png"}
        ]
    }
})

var l=new Vue({
    el:"#code",
    data:{
        ls:[
            {message:"习近平用这5句话介绍中国“新时代”",imgurl:"",text:"央广网",date:"11-19",imageurl:"images/9.png",mess:""},
            {message:"农村大集鲤鱼铺满地，鱼的来源让人太生气，最好别吃",imgurl:"images/10.png",text:"河北乡土",date:"11-19",imageurl:"images/9.png",mess:"打开手机百度"},
            {message:"女人深情到深处时，才会这样称呼你，你可曾被如此称呼过?",imgurl:"",text:"宇宙用户精选",date:"11-16",imageurl:"images/9.png",mess:"打开手机百度"},
            {message:"超神学院：曾经的雄兵连终于集合了，真是不容易啊！",imgurl:"images/11.png",text:"透明的车玻璃",date:"11-18",imageurl:"images/9.png",mess:"打开手机百度"},
            {message:"烤鱼店生意红火 秘方：用漏斗过滤剩菜后的口水油",imgurl:"",text:"南方都市报",date:"07:27",imageurl:"images/9.png",mess:""},
            {message:"刘鑫称她也不记得当时有没有反锁门，现在是百口莫辩解释不清楚了",imgurl:"images/12.png",text:"娱七杂八话天下",date:"11-19",imageurl:"",mess:"打开手机百度"},
            {message:"结婚70周年！英国女王庆祝白金婚 王室发布合影",imgurl:"",text:"新浪娱乐",date:"11-19",imageurl:"",mess:""},
            {message:"女兵在阅兵时想上厕所怎么办，原来还有这种操作",text:"军人魂",date:"11-18",imageurl:"",mess:""},
            {message:"专家发现：女人有没有生过孩子，看下面就知道，非常“与众不同”",text:"只要你愿意等",date:"11-19",imageurl:"",mess:""},
            {message:"日本女星Shinozaki沙滩游玩，太漂亮了",imgurl:"images/13.png",text:"精选影片",date:"11-17",imageurl:"images/9.png",mess:"打开手机百度"},
            {message:"农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉",imgurl:"",text:"闻舞视界",date:"11-19",imageurl:"images/9.png",mess:"打开手机百度"},
            {message:"马未都：我为什么不佩戴文玩，说出来你们不要觉得恶心",imgurl:"images/14.png",text:"百家人和文",date:"11-18",imageurl:"",mess:"打开手机百度"},
            {message:"红色越野正开走 警察突然瞄见副驾门把手上有手铐",imgurl:"",text:"网易新闻",date:"11-19",imageurl:"",mess:""},
            {message:"泰版《命中注定我爱你》最终帕乌面临死亡，妮子应该不会难受吧",imgurl:"images/15.png",text:"军旅中的生涯",date:"11-18",imageurl:"",mess:"打开手机百度"},
            {message:"中国早出“地表最强”两栖战车 多项性能居世界第一",imgurl:"",text:"新华网",date:"11-19",imageurl:"",mess:""},
            {message:"徐州下雪了，今夜淮北地区有雨夹雪",imgurl:"",text:"东方头条",date:"11-19",imageurl:"",mess:""},
            {message:"成都10岁男孩在家上学：做德语主播 写万字英文小说",text:"凤凰新闻",date:"11-19",imageurl:"",mess:""},
            {message:"潘玮柏访谈现场被逼问感情生活 他是这样回答吴昕知道吗",imgurl:"images/16.png",text:"楚秀网综合",date:"11-19",imageurl:"",mess:"打开手机百度"},
            {message:"观众席有人挂出“藏独”旗蓄意挑衅 中国球员在德退场抗议",imgurl:"",text:"网易新闻",date:"00:31",imageurl:"",mess:""},
            {message:"",imgurl:"images/17.png",text:"正在加载",date:"00:31",imageurl:"",mess:""}
        ]
    }
})
Vue.component("my-bottom",{
    template:`<div><a href=""><img src="images/18.png" alt=""><span>用户反馈</span></a>
            <p>使用百度前必读Baidu 京ICP证030173号</p>
            <p><img src="images/19.png" alt=""><span>京公网安备11000002000001号</span></p>
                </div>`
})
var bottom=new Vue({
    el:"#bottom"
})