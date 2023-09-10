var para=document.getElementById("para");
console.log(para);
var but=document.getElementById("but");
console.log(but);
var con=document.getElementById("container");
console.log(con);

var color=["pink","yellow","blue","orange","red","green","violet","black","skyblue"];
but.addEventListener("click",generate);

function generate(){
	color.forEach(function(){
		var b=Math.floor(Math.random()*(color.length));
		para.innerHTML=color[b];
		para.style.color=color[b];
		con.style.backgroundColor=color[b];
	})
}