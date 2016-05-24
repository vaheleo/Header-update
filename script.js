


var person=function(){
	this.attributes={};

}
var headerChange=function(){
	document.getElementById('userNameH').innerHTML=this.get('name');
	document.getElementById('userNameP').innerHTML=this.get('name');
	console.log(this.attributes.name);
}


var check=function(){
	headerChange.call(this);
	
	console.log(this.attributes.name);
}
person.prototype={
	set:function(p,v){
		this.attributes[p]=v;
		check.call(this);
	},
		get:function(p){
		return this.attributes[p];
	}

}

vahe=new person;
vahe.set('name','Vahe');
vahe.set('age',35);


var nameSubmit=function(){
	var newName=document.getElementById('name').value;
	vahe.set('name',newName);
		
}

