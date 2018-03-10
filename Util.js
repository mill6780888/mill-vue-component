global.mill={
	kvs  : (obj)=>{
			var values = [];
			var kys = [];
			for(var i in obj){
				values.push(obj[i]);
				kys.push(i);
			}
			return {
				keys:kys,
				values:values
			}
		}
}