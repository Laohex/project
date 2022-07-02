<template>
    <div class="bn-top">
        <a href="javascript:;"><img src="@/assets/images/bnfh.png"></a>
        <a href="javascript:;"><img src="@/assets/images/zygx.jpg"></a>
        <a href="javascript:;"><img src="@/assets/images/bwcx.jpg"></a>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  	name: 'bnfh',
	mounted: function(){
		var vc = $(".bn-top").find("a");
	    var num = 0;
	    setInterval(function(){
		vc.eq(num).hide();
    	num++;
    	if(num == vc.length) num=0;
    	vc.eq(num).show();
	},3000);
	}
}
</script>