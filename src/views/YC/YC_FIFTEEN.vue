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
                lx:'[都市]',
                zp:'云开日照',
                zz:'方成渠',
                jj:'阔少苦追穷比大学',
                zx:'第2章',
                gx:'刚刚'
            },
            {
                lx:'[综合]',
                zp:'平安锁',
                zz:'别逼我咬你',
                jj:'即使年年不见我也要你岁岁平安',
                zx:'第1章',
                gx:'刚刚'
            },
            {
                lx:'[小说]',
                zp:'有弟弟想做慈善吗',
                zz:'广巾一口',
                jj:'滴~一个月的恋人体验卡',
                zx:'同居开始',
                gx:'7 分钟前'
            },
            {
                lx:'[宫廷]]',
                zp:'无所顾忌的爱',
                zz:'Lattelife2',
                jj:'得不到的永远是最完美的',
                zx:'第13章',
                gx:'8 分钟前'
            },
            {
                lx:'[随笔]',
                zp:'冻结测试',
                zz:'初一zzz',
                jj:'小灰字小灰字',
                zx:'第6章',
                gx:'10 分钟前'
            },
            {
                lx:'[随笔]',
                zp:'第十八年',
                zz:'祁满',
                jj:'我与痛苦撞个满怀',
                zx:'第16章 周自川的话',
                gx:'11 分钟前'
            },
            {
                lx:'[综合]',
                zp:'嗜鲛',
                zz:'妄不语',
                jj:'我的心是一颗石头，只有你能撬得动',
                zx:'1.前往‘鲛人村’',
                gx:'12 分钟前'
            },
            {
                lx:'[综合]',
                zp:'满目山河似清风',
                zz:'满目山河似清风',
                jj:'.........',
                zx:'第1章 ',
                gx:'13 分钟前'
            },
            {
                lx:'[青春]',
                zp:'深渊埋藏',
                zz:'晏秋深',
                jj:'在时空修复系统里双向奔赴',
                zx:'修复进度表一',
                gx:'17 分钟前'
            },
            {
                lx:'[青春]',
                zp:'学霸，谈恋爱吧',
                zz:'脏脏包不脏',
                jj:'无',
                zx:'第4章 研学准备？',
                gx:'17 分钟前'
            },
            {
                lx:'[青春]',
                zp:'风过荒原',
                zz:'Mr夫斯基',
                jj:'童真疯狂消弭，爱意东升西落',
                zx:'第5章融冰',
                gx:'18 分钟前'
            },
            {
                lx:'[幻想]',
                zp:'海的妖精',
                zz:'荆唯一',
                jj:'相信奇迹，实现你的愿望',
                zx:'第2章',
                gx:'19 分钟前'
            },
            {
                lx:'[脑洞]',
                zp:'南园小狐仙',
                zz:'尚矜',
                jj:'算不尽众生微贱命，回头看苦海奈何天。',
                zx:'第3章',
                gx:'19 分钟前'
            },
            {
                lx:'[青春]',
                zp:'纯情圈养',
                zz:'水十三',
                jj:'为他遮风挡雨，替他以牙还牙',
                zx:'四十六、理发',
                gx:'22 分钟前'
            },
            {
                lx:'[灵异]',
                zp:'漫游',
                zz:'咩咩咩羊',
                jj:'一个千年骚包逃离内卷喜提情人的故事',
                zx:'第75章：无去来处05',
                gx:'22 分钟前'
            },
            {
                lx:'[玄幻]',
                zp:'问仙',
                zz:'花不解',
                jj:'仙门弟子的修行之路',
                zx:'第7章',
                gx:'22 分钟前'
            },
            {
                lx:'[都市]',
                zp:'叶攻好胧',
                zz:'卿卿若爱',
                jj:'一个臭小子把另一个乖孩子，拐到手的漫长路',
                zx:'第37章 暴风雨前的平静',
                gx:'23 分钟前'
            },
            {
                lx:'[玄幻]',
                zp:'好兄弟们都爱我',
                zz:'八尾妖狐',
                jj:'一受多攻 爽文',
                zx:'第109章 条件',
                gx:'23 分钟前'
            },
            {
                lx:'[都市]',
                zp:'我的光芒',
                zz:'一只胖熊呀',
                jj:'我将永远在你身后保护你',
                zx:'第1章',
                gx:'26 分钟前'
            },
            {
                lx:'[青春]',
                zp:'授以桔梗',
                zz:'祝莹',
                jj:'我们永远是少年，永远热爱江川湖泊',
                zx:'第23章 下厨',
                gx:'27 分钟前'
            }
            ]
        }
    }
}
</script>

