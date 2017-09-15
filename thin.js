var thin = new function() {
	var c = 'rgb(0,0,0,255)';
	var i = '';
	var s = '';
	var t = 1000;
	var isShow = false;
	var body = document.getElementsByTagName('body')[0];
	var view = document.createElement('div');
	var height = window.innerHeight;
	var startTime = new Date().getTime();
	window.onload = function() {

	}
	this.color = function(color) {
		if (!color) c = color;
		return this;
	}
	this.svg = function(image) {
		if (!image) i = image;
		return this;
	}
	this.svgPath = function(imagePath) {
		if (!imagePath)
			i = '<img src="' + imagePath + '"/>'
		return this;
	}
	this.delay = function(time) {
		if (!time) t = time;
		return this;
	}
	this.slogan = function(word) {
		if (!word) s = word;
		return this;
	}
	this.show = function() {
		startTime = new Date().getTime();
		showView();
		console.log('r...');
	}
	this.exit = function() {
		exitView();
		console.log('s...');
	}
	var loadView = function() {
		view.style = 'z-index:990;position:fixed;width:100%;height:100%;background:' + c + ';text-align:center;padding:' + h / 3 + ';';
		var content = '';
		if (i != '' && s != '') {
			content = i + '<br/>' + s;
		} else if (i == '' && s != '') {
			content = s;
		} else if (i != '' && s == '') {
			content = i;
		}

		view.innerHTML = content;
	}
	var showView = function() {
		loadView();
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
		}
	}
	var showWithAnimation = function() {

	}
	var exitWithAnimation = function() {

	}
}