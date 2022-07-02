<template>
    <div class="recent">
        <div class="recent-top">
            <span class="ys"></span>
            <span id="wj">最近更新</span>
            <div class="more">
                <span>More ></span>
            </div>
        </div>
        <div class="recent-bottom">
            <div class="recent-content">
                <div class="six">
                    <ul>
                        <li>
                            <span id="lx">类型</span>
                            <span id="zp">作品名称</span>
                            <span id="zz">作者</span>
                            <span id="jj">简介</span>
                            <span id="zx">最新章节</span>
                            <span id="gx">更新时间</span>
                        </li>
                    </ul>
                </div>
                <div class="six1"  >
                    <ul>
                        <li v-for="(item,index) in ups" :key="index">
                            <span id="lx1">{{item.lx}}</span>
                            <span id="zp1"><a href="">{{item.zp}}</a></span>
                            <span id="zz1">{{item.zz}}</span>
                            <span id="jj1">{{item.jj}}</span>
                            <span id="zx1"><a href="">{{item.zx}}</a></span>
                            <span id="gx1">{{item.gx}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'recent',
    data:function(){
        return{
            ups:[{
                lx:'[综合]',
                zp:'南湘琐记',
                zz:'消时雨君',
                jj:'夏日的相遇，注定了秋末的分离',
                zx:'第12章戏戏轮转',
                gx:'刚刚'
            },
            {
                lx:'[综合]',
                zp:'柏轩',
                zz:'与共',
                jj:'不可描述的短篇',
                zx:'第1章',
                gx:'1 分钟前'
            },
            {
                lx:'[综合]',
                zp:'昭寅臣欢',
                zz:'无更梧桐',
                jj:'既然志同道合，那就旗鼓相当',
                zx:'第6章 侯府接着藏人',
                gx:'14 分钟前'
            },
            {
                lx:'[综合]',
                zp:'江湖客',
                zz:'小狐狸菌',
                jj:'不小心捡到个江湖魔头，睡了',
                zx:'第85章',
                gx:'14 分钟前'
            },
            {
                lx:'[综合]',
                zp:'檀香有劫，劫难渡',
                zz:'壹二二零',
                jj:'媳妇就得追，犹豫犹豫媳妇就没了。',
                zx:'第26章 这个回答，满意吗？',
                gx:'17 分钟前'
            },
            {
                lx:'[综合]',
                zp:'纨绔难封',
                zz:'宋昭昭',
                jj:'纨绔将军受×美人王爷攻',
                zx:'第43章 秦守身份的真相',
                gx:'19 分钟前'
            },
            {
                lx:'[综合]',
                zp:'君临天下',
                zz:'满月味的小海螺',
                jj:'几段唏嘘，几世悲欢，我命由我不由天！',
                zx:'第1章',
                gx:'19 分钟前'
            },
            {
                lx:'[综合]',
                zp:'也许落衡懂海棠',
                zz:'那年二三事',
                jj:'箫红蜡你就是个疯子是你让喜欢你的人全死了',
                zx:'第八章 审犯',
                gx:'25 分钟前'
            },
            {
                lx:'[综合]',
                zp:'林中鹿',
                zz:'三分青言',
                jj:'一见钟情与相互救赎',
                zx:'景虚情实变幻莫（七）',
                gx:'26 分钟前'
            },
            {
                lx:'[综合]',
                zp:'恶狐度化札记',
                zz:'林疏梦',
                jj:'奸诈自卑忠犬攻×风流雅痞深情受',
                zx:'第13章 青楼行',
                gx:'33 分钟前'
            },
            {
                lx:'[综合]',
                zp:'镇北王为什么总要欺负我',
                zz:'贰两肉',
                jj:'他是原则，是底线，是命。',
                zx:'我的人1',
                gx:'35 分钟前'
            },
            {
                lx:'[综合]',
                zp:'世子的火葬生活',
                zz:'不取名字',
                jj:'追妻三十六计',
                zx:'水库',
                gx:'35 分钟前'
            },
            {
                lx:'[综合]',
                zp:'裁缝',
                zz:'绿了吧唧',
                jj:'吾心悦你，有口难开，轻衫二两，情思无价。',
                zx:'第28章',
                gx:'35 分钟前'
            },
            {
                lx:'[综合]',
                zp:'总督的儿子突然想考试',
                zz:'青山枕',
                jj:'狗血酸爽，白切黑竹马干赢疯批天降',
                zx:'第2章',
                gx:'36 分钟前'
            },
            {
                lx:'[综合]',
                zp:'等天亮',
                zz:'良辰鱼',
                jj:'不论多么绝望，天总是会亮的',
                zx:'第4章 孙凡溪:李锦生你在浪什么?',
                gx:'36 分钟前'
            },
            {
                lx:'[综合]',
                zp:'知女观',
                zz:'景熙',
                jj:'霸道双标倒霉攻VS遇强则怂暴力受',
                zx:'第134章 第八幅画',
                gx:'36 分钟前'
            },
            {
                lx:'[综合]',
                zp:'风雪夜归人',
                zz:'青鱼晴wyk',
                jj:'不是很符合历史，但剧情需要，尊重历史',
                zx:'第5章',
                gx:'37 分钟前'
            },
            {
                lx:'[综合]',
                zp:'城南东',
                zz:'鱼叁',
                jj:'“莫使匆匆云雨散，今夜里，月婵娟。”',
                zx:'第4章',
                gx:'46 分钟前'
            },
            {
                lx:'[综合]',
                zp:'南冥',
                zz:'洲一色',
                jj:'冷血腹黑皇帝攻×病态伪装自卑将军受',
                zx:'第8章 病',
                gx:'51 分钟前'
            },
            {
                lx:'[综合]',
                zp:'梦江湖系列',
                zz:'山腰黄瓜子',
                jj:'江湖上的小故事',
                zx:'薄情郎•人物简介',
                gx:'57 分钟前'
            }
            ]
        }
    }
}
</script>