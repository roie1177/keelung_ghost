
function genstory(number){
	if(number==1){
		document.getElementById("Introduction").innerHTML = "海門天險<img  src='img/1_canon.jpg' height='150px'></br>";
	}
	if(number==2){
		document.getElementById("Introduction").innerHTML = "和平島<img  src='img/和平島.jpg' height='150px' ></br>";
	}
    if(number==3){
		document.getElementById("Introduction").innerHTML = "海洋大學 女舍<img  src='img/女宿舍.jpg' height='150px' ></br>";
	}
	if(number==4){
		document.getElementById("Introduction").innerHTML = "海洋大學 龍岡步道<img  src='img/龍岡步道.jpg' height='150px' ></br>";
	}
    if(number==5){
		document.getElementById("Introduction").innerHTML = "海洋大學 男二宿舍<img  src='img/男宿.jpg' height='150px' ></br>";
	}
	if(number==6){
		document.getElementById("Introduction").innerHTML = "海洋大學 101號房<img  src='img/男宿舍.jpg' height='150px' ></br>";
	}
    if(number==7){
		document.getElementById("Introduction").innerHTML = "海洋大學 海事大樓<img  src='img/海事大樓.jpg' height='150px' ></br>";
	}
	if(number==8){
		document.getElementById("Introduction").innerHTML = "蝙蝠洞<img  src='img/蝙蝠洞.jpg' height='150px' ></br>";
	}
    if(number==9){
		document.getElementById("Introduction").innerHTML = "基隆七號房<img  src='img/基隆七號房.jpg' height='150px' ></br>";
	}
	if(number==10){
		document.getElementById("Introduction").innerHTML = "基隆鬼屋<img  src='img/基隆鬼屋.jpg' height='150px' ></br>";
	}
    if(number==11){
		document.getElementById("Introduction").innerHTML = "淨因寺<img  src='img/淨因寺.jpg' height='150px' ></br>";
	}
	if(number==12){
		document.getElementById("Introduction").innerHTML = "情人湖<img  src='img/情人湖.jpg' height='150px' ></br>";
	}
    if(number==13){
		document.getElementById("Introduction").innerHTML = "大武崙砲台<img  src='img/大武崙砲台.jpg' height='150px' ></br>";
	}
	if(number==14){
		document.getElementById("Introduction").innerHTML = "自強隧道<img  src='img/自強.jpg' height='150px' ></br>";
	}
    if(number==15){
		document.getElementById("Introduction").innerHTML = "劉銘傳隧道<img  src='img/1_canon.jpg' height='150px' ></br>";
	}

    
}
function clean(){
	document.getElementById("Introduction").innerHTML = "choose<img  src='img/ghost.png' height='150px' ></br>";
}

var playflag=0;
function switchBGM(){
	var x = document.getElementById("myAudio"); 
	x.loop=true; 			//循環播放
	if(playflag==0){
		x.play();
		playflag=1;
	}
	else{
		x.pause();
		playflag=0;
	}
}


function check(number){
	var length = localStorage.length;
	var chstr=transnumber(number);
	for (var i =0;i<length;i++)
	{
		if(localStorage.key(i)==chstr){
			return true;
		}
	}	
	return false;
}

function addstory(number){
	var key = transnumber(number);
	var value = number;
	localStorage.setItem(key, value); 
	key= ""; 
	value = ""; 
	loadSearches();
}


function removestory(number){
	var chstr=transnumber(number);
	var count = localStorage.length;
	localStorage.removeItem(chstr);
	loadSearches();
}

function loadSearches()
{
	var length = localStorage.length;
	var divtext = document.getElementById( "searches" );
	var stringtext ="";
	stringtext="<table style='width:500px;' ><tr><td>故事名稱</td><td>是否留存</td><td>留下心得</td></tr>";		
	for (var i =0;i<length;i++)
	{	
		
		if (i%2==0)
		{
			stringtext+="<tr class='onerow'><td><a href='#section-"+(parseInt(localStorage.getItem(localStorage.key(i)))+1)+"'>"+localStorage.key(i)+"</a></td><td><button class='btn btn-prime'type='button' onclick='removestory("+localStorage.getItem(localStorage.key(i))+")'>remove</button></td><td><textarea id='review"+localStorage.getItem(localStorage.key(i))+"'cols='10' rows='1' >不敢睡覺了喇</textarea></td></tr>";
		}
		else
		{
			stringtext+="<tr class='tworow'><td><a href='#section-"+(parseInt(localStorage.getItem(localStorage.key(i)))+1)+"'>"+localStorage.key(i)+"</a></td><td><button class='btn btn-prime'type='button' onclick='removestory("+localStorage.getItem(localStorage.key(i))+")'>remove</button></td><td><textarea id='review"+localStorage.getItem(localStorage.key(i))+"'cols='10' rows='1' >怕!</textarea></td></tr>";
		}
		console.log(localStorage.getItem(localStorage.key(i)));
	}
	stringtext+="</table>";
	divtext.innerHTML = stringtext;
	for(var i=1;i<=15;i++)
	{
		var eachItem=document.getElementById( "addstory"+i );
		if(check(i)){
			eachItem.src="img/hand_black_green.jpg";
		}
		else{
			eachItem.src="img/hand_black_red.jpg";
		}
	}
}


function transnumber(number){
	var str
	switch (number){
		case 1:
			str="海門天險";
			return str;
		case 2:
			str="和平島"
			return str;
		case 3:
			str="海洋大學 女舍"
			return str;
		case 4:
			str="海洋大學 龍岡步道"
			return str;
		case 5:
			str="海洋大學 男二宿舍"
			return str;
		case 6:
			str="海洋大學 101號房"
			return str;
		case 7:
			str="海洋大學 海事大樓"
			return str;
		case 8:
			str="蝙蝠洞"
			return str;
		case 9:
			str="基隆七號房"
			return str;
		case 10:
			str="基隆鬼屋"
			return str;
		case 11:
			str="淨因寺"
			return str;
		case 12:
			str="情人湖"
			return str;
		case 13:
			str="大武崙砲台"
			return str;
		case 14:
			str="自強隧道"
			return str;
		case 15:
			str="劉銘傳隧道"
			return str;			
			
	}
	
}	
/*1.海門天險
2.和平島
3.海洋大學 女舍
4.海洋大學 龍岡步道
5.海洋大學 男二宿舍
6.海洋大學 101號房
7.海洋大學 海事大樓
8.蝙蝠洞
------------------------------
9.基隆七號房
10.基隆鬼屋
------------------------------
11.淨因寺
------------------------------
12.情人湖
13.大武崙砲台
14.自強隧道
15.劉銘傳隧道*/
window.addEventListener( "load", loadSearches, false );