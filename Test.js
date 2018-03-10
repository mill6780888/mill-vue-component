export default {
	data: function(){
		return {
			msg : "但是谁都没有我帅"
		}
	},
	props: ['name'],
	template:`
		<h1> {{ msg }} --- {{ name }}</h1>
	`
}