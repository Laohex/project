<template>
    <div class="fresh_stores">
        <div class="fresh_stores_top">
            <img src="@/assets/images/新鲜上架.png" alt="">
            <span>新鲜上架</span>
        </div>
        <div class="fresh_stores_botten" v-for="(item,index) in data" :key="index">
            <div class="fresh_stores_botten_left">
                <img :src="item.imgbookface" alt="">
            </div>
            <div class="fresh_stores_botten_right">
               <div class="fresh_stores_botten_right_one">
                    <span>{{item.bookname}}</span>
               </div>
                <div class="fresh_stores_botten_right_three">
                    <img :src="item.imgbookauthor" alt="">
                    <a href="">{{ item.bookauthor }}</a>
                </div>
               <div class="fresh_stores_botten_right_tow">
                    <span >{{ item.bookword }}</span>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"YC_EIGHT",
    data(){
        return{
            data:[{
                    imgbookface:require("@/assets/images/煮夫.jpg"),
                    bookname:"煮夫",
                    bookauthor:"因之",
                    imgbookauthor:require("@/assets/images/钢笔.png"),
                    bookword:"❗️家庭煮夫惨遭凶残老婆酱酱酿酿❗️"
                },{
                    imgbookface:require("@/assets/images/传闻.jpg"),
                    bookname:"传闻",
                    bookauthor:"余酲",
                    imgbookauthor:require("@/assets/images/钢笔.png"),
                    bookword:"都是真的。"
                },{
                    imgbookface:require("@/assets/images/人善被人妻.jpg"),
                    bookname:"人善被人妻",
                    bookauthor:"刘水水",
                    imgbookauthor:require("@/assets/images/钢笔.png"),
                    bookword:"遇上老实人当然要欺负他、掰弯他、抛弃他"
                },{
                    imgbookface:require("@/assets/images/结婚这件小事.jpg"),
                    bookname:"结婚这件小事",
                    bookauthor:"凌伊、",
                    imgbookauthor:require("@/assets/images/钢笔.png"),
                    bookword:"他和年长12岁的上司结婚了"
                },{
                    imgbookface:require("@/assets/images/病态上瘾.jpg"),
                    bookname:"病态上瘾",
                    bookauthor:"二师叔",
                    imgbookauthor:require("@/assets/images/钢笔.png"),
                    bookword:"再一次，对我上瘾"
                },
                
            ]
        }
    }
}
</script>
