function mycity(){
	var  str=document.getElementById("city").value;
	var cityAlert=document.getElementById("city-alert");
	if(!((/[a-zA-Z]/.test(str))|| str.length==0)){
		cityAlert.style.display="block";
		cityAlert.innerHTML="only Alphabets are allowed";
	}
	else{
		cityAlert.style.display="none";
	}
}

function mynumber(){
	var  str1=document.getElementById("num").value;
	var numAlert=document.getElementById("num-alert");
	if(!((/[0-9]/.test(str1))|| str1.length==0)){
		numAlert.style.display="block";
		numAlert.innerHTML="only Numbers are allowed";
	}
	else{
		numAlert.style.display="none";
	}
}


var str="m2ani2345";
var x = /[0-9]/;

var sum=0;

for(i=0;i<str.length;i++){
	if(x.test(str[i])){
	sum+=parseInt(str[i]);
}
}
console.log(sum);

let find=ams(153,153)
function ams(x,z){
	let y=0;
	while(x>0){
		
		rem=x%10;
		y=y+(rem*rem*rem);
		x=Math.floor(x%10);
	}
	
}
console.log(y);