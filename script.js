

var person=function(){
	this.attributes={};

}
person.prototype={
	set:function(p,v){
		this.attributes[p]=v;
	},
		get:function(p){
		return this.attributes[p];
	}
}
var headerChange=function(){
	document.getElementByClassName('userName').innerHTML=vahe.attributes.name;

}

var nameSubmit=function(){
	var newName=document.getElementByClassName('userName').value;
	vahe.attributes.name=newName;
	headerChange();
	//console.log(newName);
}
vahe=new person;
vahe.set('name','Vahe');
vahe.set('age',35);
