function init_counter(container,day,month,year,hour,min,sec) {
	month = month-1;
	var end = new Date(year,month,day,hour,min,sec);
	setInterval(function(){
		set_time(container,end);
	}, 1000);
}
function set_time(container,end){
	var now = new Date();
	var diff = end.valueOf()-now.valueOf();
	if(diff>0){
		var d = diff/86400000>>0;
		d = d<10?'0'+d:d;
		var h = (diff-d*86400000)/3600000>>0;
		h = h<10?'0'+h:h;
		var m = (diff-d*86400000-h*3600000)/60000>>0;
		m = m<10?'0'+m:m;
		var s = (diff-d*86400000-h*3600000-m*60000)/1000>>0;
		s = s<10?'0'+s:s;
	}else{
		var d='00'; var h='00'; var m='00'; var s='00';
	}
	
	$(container).html('<div class="days">'+d+'<div class="sep"></div></div><div class="countText">Дни</div><div class="hours">'+h+'<div class="sep"></div></div><div class="countText">Часы</div><div class="minutes">'+m+'<div class="sep"></div></div><div class="countText">Мин</div><div class="seconds">'+s+'<div class="sep"></div></div><div class="countText">Сек</div>');
}
function week_counter(container,to){
	var now = new Date();
	var day = now.getDay();
	to = to!=7?to:0;
	if(day!=to){
		var tmp = new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59,999);
		tmp = tmp.valueOf()-now.valueOf();
		tmp = to>day?(tmp + 86400000*(to-day)):(day!=0?(tmp+(7-day+to)*86400000):(tmp+to*86400000));
		var end = new Date((tmp+now.valueOf()));
	}else{
		var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59,999);
	}
	setInterval(function(){
		set_time(container,end);
	}, 1000);
}