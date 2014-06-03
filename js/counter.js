function init_counter(container,day,month,year,hour,min,sec,style) {
	month = month-1;
	var end = new Date(year,month,day,hour,min,sec);
	setInterval(function(){
		set_time(container,end,style);
	}, 1000);
}
function set_time(container,end,style){
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
	if(style == 0){
		$(container).html('<div class="days">'+d+'<div class="sep"></div></div><div class="countText">Дни</div><div class="hours">'+h+'<div class="sep"></div></div><div class="countText">Часы</div><div class="minutes">'+m+'<div class="sep"></div></div><div class="countText">Мин</div><div class="seconds">'+s+'<div class="sep"></div></div><div class="countText">Сек</div>');
	}else{
		$(container).html('<div class="digit">'+d.toString().slice(0,1)+'</div><div class="digit">'+d.toString().slice(1,2)+'</div><div class="digitText">Дни</div><div class="digit">'+h.toString().slice(0,1)+'</div><div class="digit">'+h.toString().slice(1,2)+'</div><div class="digitText">Часы</div><div class="digit">'+m.toString().slice(0,1)+'</div><div class="digit">'+m.toString().slice(1,2)+'</div><div class="digitText">Минуты</div><div class="digit">'+s.toString().slice(0,1)+'</div><div class="digit">'+s.toString().slice(1,2)+'</div><div class="digitText">Секунды</div>');
	}
}
function week_counter(container,to,h,m,s,style){
	var now = new Date();
	var day = now.getDay();
	to = to!=7?to:0;
	if(day!=to){
		var tmp = new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,m,s,999);
		tmp = Math.abs(tmp.valueOf()-now.valueOf());
		tmp = to>day?(tmp + 86400000*(to-day)):(day!=0?(tmp+(7-day+to)*86400000):(tmp+to*86400000));
		var end = new Date((tmp+now.valueOf()));
	}else{
		var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59,999);
	}
	setInterval(function(){
		set_time(container,end,style);
	}, 1000);
}