let styles = ['striped','bordered','hover','condensed'];

/*
	三种情况：
	1. 数据第一行包括标题
		[{"name":"名称","age":"年龄","love":"爱好"},
		{"name":"张三","age":18,"love":"contry"},
		{"name":"张三","age":18,"love":"contry"},]
	2. 数据的key就是标题
		[{"名称":"张三","年龄":18,"爱好":"contry"},
		{"名称":"张三","年龄":18,"爱好":"contry"},]
	3. 给过来的本身就是多维数组
		[
			["名称","年龄","爱好"],
			["张三",18,"爱音乐"],
			["张三",18,"爱国"],
		]
*/


//1
var tps = 
	(data,kind)=>{

		if(kind&&kind==2)return data;

		var keys = null;
		var zz= data.map((t,i)=>{
			if(i==0){
				let kvs = mill.kvs(t);
				keys=kvs.keys;
				return kvs.values;
			}else{
				let result = [];
				keys.forEach(item=>result.push(t[item]))
				return result;
			}
			
		})
		if(kind&&kind==1)zz.unshift(keys);
		
		return zz;
	};

export default {
	data:function(){
		return {
		}
	},
	props:{
		TableData: Array
		,
		'tstyle':[String,Number],
		kind:{
			default: 0,
			validator: function(value){
				value = parseInt(value);
				return 0<=value<=2;
			}
		}
	},
	computed:{
		tdd:function(){
			var tmp= tps(this.TableData,this.kind);
			return tmp;
		},
		mstyle:function(){
			var arr = 'condensed,hover,bordered,striped'.split(',');
			if(this.tstyle*1 && 0<=this.tstyle && this.tstyle<=3)
				return arr[this.tstyle];
			else if(arr.some(item=>item==this.tstyle))
				return this.tstyle;
			else
				return 'hover';
		}
	},
	template : `
<table v-if="TableData" :class="'table table-'+mstyle">
	<tr> 
		<th v-for="x in tdd[0]">{{ x }}</th>
	</tr>
	<tr v-for="x in tdd.slice(1)">
		<td v-for="i in x">{{ i }}</td>
	</tr>
</table>
	`
}