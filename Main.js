import Nav from './Nav.js'
import LunBo from './LunBo.js'
export default{
	name :"Main",
	components :{Nav,LunBo},
	props:["navInfo","lunbo","tuiGuang","ditail"],
	style: "body{background:red;}",
	template:`
<div id="root" style="text-align: center;">

  <div class="container" style="margin-bottom:20px;">
   	<Nav :info="this.navInfo"/>
   	<LunBo :data="this.lunbo"/>
  </div>
  
  <div class="container">
   <div class="row">
    <div v-for="x in this.tuiGuang" class="col-md-4">
     <img style="border-radius: 50%;" :src="x.src" alt="Generic placeholder image" width="140" height="140" />
     <h2>{{ x.title }}</h2>
     <p>
     	{{ x.content }}
     </p>
     <p><a class="btn btn-default" href="#" role="button">{{ x.button }}</a></p>
    </div>
    
   </div>


   <template v-for="x in this.ditail">
<hr class="featurette-divider" />
   <div class="row featurette">
    <div class="col-md-7" style="text-align: left;">
     <h2 class="featurette-heading">{{ x.mainTitle }}<span class="text-muted">{{ x.fuTitle }}</span></h2>
     <p class="lead">
     	{{ x.content }}
     </p>
    </div>
    <div class="col-md-5">
     <img  class="img-thumbnail" :src="x.src" alt="Generic placeholder image" />
    </div>
   </div>
   </template>

   <hr class="featurette-divider" />
   <footer>
    <p class="pull-right"><a href="#">返回顶部</a></p>
    <p style="text-align: left;">&copy; 2016 Company, Inc. &middot;<a href="#">Privacy</a> &middot;<a href="#">Terms</a></p>
   </footer>
  </div>
 </div>
	`
}