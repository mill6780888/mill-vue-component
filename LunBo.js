/*var data = [{
	src:"http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/1/default.jpg",
	title: "第一张图片",
	content:"没有什么好说的"
},{
	src:"http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/1/default.jpg",
	title: "第一张图片",
	content:"没有什么好说的"
},{
	src:"http://ibootstrap-file.b0.upaiyun.com/lorempixel.com/1600/500/sports/1/default.jpg",
	title: "第一张图片",
	content:"没有什么好说的"
}]*/


export default {
	name : "LunBo",
	data(){
		return {
			
		}
	},
	computed:{
		
	}
	,
	props :["data"],
	template:`<div v-if="this.data" class="row clearfix">
		<div class="col-md-12 column">
			<div class="carousel slide" id="carousel-666533">
				<ol class="carousel-indicators">
					<li v-for="x in Object.keys(this.data)" :class="{active:x==0}" :data-slide-to="x" data-target="#carousel-666533">
					</li>
				</ol>
				<div class="carousel-inner">
					<div v-for="(x,index) in this.data"  class="item" :class="{active:index==0}">
						<img alt="" :src="x.src" />
						<div class="carousel-caption">
							<h4>
								{{ x.title }}
							</h4>
							<p>
								{{ x.content }}
							</p>
						</div>
					</div>
					
				</div> <a class="left carousel-control" href="#carousel-666533" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-666533" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
			</div>
		</div>
	</div>`
}