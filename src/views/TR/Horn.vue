<template>
<div class="horn">
    <span class="horn-left"><img src="@/assets/images/TR/喇叭.png" alt=""></span>
    <div class="marquee-wrap">
        <div class="scroll">
                    <p v-for="(item,index) in data" :key="index">
                        <a href="javascript:;">
                            <span class="people">{{item.people}}</span>
                            <span class="name">{{item.name}}</span>
                            <span class="authors">{{item.authors}}</span>
                            <span class="gift">{{item.gift}}</span>
                        </a>
                        
                    </p>
            <a class="copy"></a>
        </div>
        <p class="getWidth">{{data}}</p>
 </div>
</div>
 
</template>

<script>
    export default {
        name: 'marquee',
        props: ['val'],
        data:function () {
            return {
            timer: null,
            data:[{
                people:'青花鱼at5jv07enjp ',
                name:'送给《混不吝》',
                authors:'绿色毛毛球',
                gift:' 幸运铃 X 1'
            },{
                people:'大梦春秋 ',
                name:'送给《醉花阴》',
                authors:'风右',
                gift:' 幸运铃 X 1'
            },{
                people:'luckyo ',
                name:'送给《我的再普乐》',
                authors:'cakefactory',
                gift:' 彩虹糖 X 5'
            },{
                people:'飞鸿踏雪 ',
                name:'送给《烧雪》',
                authors:'娜可露露',
                gift:' 幸运铃 X 1'
            },{
                people:'cakefactory ',
                name:'送给《直上天堂》',
                authors:'阿列夫零',
                gift:' 幸运铃 X 1'
            },{
                 people:'木偶鸭鸭 ',
                name:'送给《纸飞机》',
                authors:'潭石',
                gift:' 老虎油 X 2'
            },{
                people:'暗烟 ',
                name:'送给《混不吝》',
                authors:'绿色毛毛球',
                gift:' 幸运铃 X 1'
            },{
                people:'白麻爱吃糖 ',
                name:'送给《暗涌》',
                authors:'姬末',
                gift:' 老虎油 X 1'
            },{
                people:'月亮黑了 ',
                name:'送给《我的再普乐》',
                authors:'cakefactory',
                gift:' 鱼粮 X 50'
            },{
                people:'希望能减肥 ',
                name:'送给《假酒上头》',
                authors:'犬升',
                gift:' 幸运铃 X 1'
            }]
            }
        },
        created () {
            let timer = setTimeout(() => {
            this.move()
            clearTimeout(timer)
            },1000)
        },
        methods: {
            move () {
                let maxWidth = document.querySelector('.marquee-wrap').clientWidth
                let width = document.querySelector('.getWidth').scrollWidth
                if (width <= maxWidth) return
                let scroll = document.querySelector('.scroll')
                let copy = document.querySelector('.copy')
                copy.innerData = this.data
                let distance = 0
                this.timer = setInterval(() => {
                    distance -=1
                    if (-distance >= width) {
                    distance = 16
                    }
                    scroll.style.transform = 'translateX(' + distance + 'px)'
                }, 20)
            }
        },
        beforeDestroy () {
            clearInterval(this.timer)
    }
}
</script>