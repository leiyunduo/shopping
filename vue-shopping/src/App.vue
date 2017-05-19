<template>
	<div id="app">
		<div id="index">
			
			<!--section-->
			<router-view></router-view>
			<!--footer-->
			<FooterView></FooterView>
		</div>
	</div>
</template>
<script>
    
    import FooterView from './components/Footer.vue'
	export default{
		components:{
			FooterView
		},
		mounted(){
			this.swiper();
		},
		methods:{
			swiper(){
				$(function(){
					var swiper = new Swiper('.chart', {
				        pagination: '.swiper-pagination',
				        spaceBetween: 0,
				        autoplay: 2500,
				        loop:true,
				        autoplayDisableOnInteraction: false
				    });
				    
				     var swiper = new Swiper('.swiper-left', {
				        slidesPerView: 3.5,
				        paginationClickable: true,
				        spaceBetween: 0
				    });
				    
				     var swiper = new Swiper('.international', {
				        slidesPerView: 2.4,
				        paginationClickable: true,
				        spaceBetween: 0
				    });
				    
				    var intDiff = parseInt(24000);//倒计时总秒数量
					function timer(intDiff){
					    window.setInterval(function(){
					    var day=0,
					        hour=0,
					        minute=0,
					        second=0;//时间默认值       
					    if(intDiff > 0){
					        day = Math.floor(intDiff / (60 * 60 * 24));
					        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
					        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
					        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
					    }
					    if (minute <= 9) minute = '0' + minute;
					    if (second <= 9) second = '0' + second;
		//			    $('#day_show').html(day+"天");
					    $('#hour_show').html('<s id="h"></s>'+hour);
					    $('#minute_show').html('<s></s>'+minute);
					    $('#second_show').html('<s></s>'+second);
					    intDiff--;
					    }, 1000);
					} 
					$(function(){
					    timer(intDiff);
					});
				})
			}
		}
	}
</script>
<style>
	@import url("./assets/css/index.css");
	@import url("./assets/css/swiper.min.css");
</style>