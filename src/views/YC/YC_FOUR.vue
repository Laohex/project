<template>
    <div class="txt_and_top_right">
        <div class="txt_and_top_right_one">
            <img src="@/assets/images/公告.png" alt="">
            <span>网站公告</span>
            <a href="">More ></a>
        </div>
        <div class="txt_and_top_right_tow">
            <div v-for="(item,index) in data" :key="index">
                <span class="txt_and_top_tow_right_one">{{item.area}}</span>
                <a href="" class="txt_and_top_tow_right_tow">{{item.title}}</a>
            </div>
            
        </div>
    </div>
</template>
<script>
export default{
    name:"YC_ONE",
    data : function() {
        return {
            data:[{
                    area : '[征文活动]',
                    title : '百年风华·遇见青春'
                },{
                    area : '[网站公告]',
                    title : '关于规范用户发文及评论区互动行为的通知'
                },{
                    area : '[招聘信息]',
                    title : '长佩文学招聘信息'
                }
            ]
        }
    }
}
</script>
