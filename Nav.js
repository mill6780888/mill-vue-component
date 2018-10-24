export default {
	name:"Nav",
	props:["info"],
	data(){
    return {}
	},
	template:`
<nav v-if="this.info" class="navbar " :class="this.info.color&&this.info.color==1?'navbar-inverse':'navbar-default'">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"> {{ this.info.title }} </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      <!-- class="active" -->
        <template v-for="item in info.left">

        <li v-if="!item.child"><a :href="item.href"> {{ item.content }} </a></li>

		<li v-else class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ item.content }} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-for="aaa in item.child"><a :href="aaa.href">{{ aaa.content }}</a></li>
          </ul>
        </li>
        </template>
        
      </ul>


      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" :placeholder="info.inputmsg">
        </div>
        <button type="submit" class="btn btn-default">{{ info.buttxt }}</button>
      </form>


      <ul class="nav navbar-nav navbar-right">
         <template v-for="item in info.right">

        <li v-if="!item.child"><a :href="item.href"> {{ item.content }} </a></li>

		<li v-else class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ item.content }} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-for="aaa in item.child"><a :href="aaa.href">{{ aaa.content }}</a></li>
          </ul>
        </li>
        </template>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
	`
}
