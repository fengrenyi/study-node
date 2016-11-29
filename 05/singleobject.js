function hello(){
	var name;
	this.setName=function(thyName){
		name=thyName;
	}
	this.sayHello=function(){
		console.log('hello '+name);
		console.log(this);
	}
}
//exports.hello=hello;
module.exports=hello;