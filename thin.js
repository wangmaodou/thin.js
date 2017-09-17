var thin = new function() {
	var c = 'rgba(35,195,255,1)';
	var i = '';
	var s = '';
	var t = 1000;
	var isShow = false;
	var body = document.getElementsByTagName('body')[0];
	var view = document.createElement('div');
	var height = window.innerHeight;
	var startTime = new Date().getTime();

	this.color = function(color) {
		if (color) c = color;
		return this;
	}
	this.svg = function(image) {
		if (image) i = image;
		return this;
	}
	this.svgPath = function(imagePath) {
		if (imagePath)
			i = '<img src="' + imagePath + '" style="width:200px;height:200px;"/>';
		return this;
	}
	this.delay = function(time) {
		if (time) t = time;
		return this;
	}
	this.slogan = function(word) {
		if (word)s = word;
		return this;
	}
	this.show = function() {
		startTime = new Date().getTime();
		showView();
	}
	this.exit = function() {
		exitWithAnimation();
	}
	this.getView=function(){
		return view;
	}

	var showView = function() {
		loadView();
		isShow=true;
		body.insertBefore(view, body.childNodes[0]);
	}

	var exitView = function() {
		if (isShow) {
			var diff = new Date().getTime() - startTime;
			if (diff > t) {
				body.removeChild(view);
			} else {
				setTimeout(function() {
					body.removeChild(view);
				}, t - diff);
			}
			isShow=false;
		}
	}

	var showWithAnimation = function() {
		loadView();
		view.style.opacity=0.5;
		isShow=true;
		body.insertBefore(view, body.childNodes[0]);
		var o=0;
		var tid=setInterval(function(){
				view.style.opacity=o;
				if(o>=1)window.clearInterval(tid);
				o=o+1/60;
			},1000/60);
	}

	var exitWithAnimation = function() {
		if (isShow) {
			var remove=function(){
				var o=1;
				var tid=setInterval(function(){
						view.style.opacity=o;
						if(o<=0){
							window.clearInterval(tid);
							body.removeChild(view);
							isShow=false;
						}
						o=o-4/60;
					},1000/60);
			}
			var diff = new Date().getTime() - startTime;
			if (diff >= t) {
				remove();
			} else {
				setTimeout(function() {
					remove();
				}, t - diff);
			}
		}
	}

	var loadView = function() {
		body.style.margin=0;
		view.style = 'z-index:990;position:fixed;width:100%;height:100%;background:' 
					+ c + ';text-align:center;padding-top:' 
					+ height / 3 + ';color:white;font-size:50px;';//font-weight: bold;';
		var content = '';
		if (i != '' && s != '') {
			content = i + '<br/>' + s;
		} else if (i == '' && s != '') {
			content = '<div style="width:200px;height:200px;"/><br/>'+s;
		} else if (i != '' && s == '') {
			content = i;
		}

		view.innerHTML = content;
	}
}