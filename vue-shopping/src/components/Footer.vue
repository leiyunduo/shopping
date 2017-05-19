<template>
	<div id="footer">
		<!--footer-->
		<div class="footer">
			<ul>
				<!--<li><img src="../assets/img/9.jpg"/><p class="active">首页</p></li>
				<li><img src="../assets/img/10.jpg"/><p>分类</p></li>
				<li><img src="../assets/img/11.jpg"/><p>分享购</p></li>
				<li><img src="../assets/img/12.jpg"/><p>购物车</p></li>
				<li><img src="../assets/img/13.jpg"/><p>我的</p></li>-->
				<router-link to='/section' tag='li' active-class='active'>
					<img src="../assets/img/9.jpg"/><p>首页</p>
				</router-link>
				<router-link to='/class' tag='li' active-class='active'>
					<img src="../assets/img/10.jpg"/><p>分类</p>
				</router-link>
				<router-link to='/share' tag='li' active-class='active'>
					<img src="../assets/img/11.jpg"/><p>分享购</p>
				</router-link>
				<router-link to='/care' tag='li' active-class='active'>
					<img src="../assets/img/12.jpg"/><p>购物车</p>
				</router-link>
				<router-link to='/me' tag='li' active-class='active'>
					<img src="../assets/img/13.jpg"/><p>我的</p>
				</router-link>
			</ul>
		</div>
	</div>
</template>