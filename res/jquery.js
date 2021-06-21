document.getElementById("main-levels").innerHTML = levels;

function Levelfunct() {
	levels ++;
	if (localStorage.getItem("mode") == "movie") {
		localStorage.setItem("levels", levels);
	} else if (localStorage.getItem("mode") == "actor") {
		localStorage.setItem("iilevels", levels);
	}
}

$('.next').click(function() {
	if (levels <= total) {
			if (levels <= 9) {
				setTimeout(function() {
					location.replace(`00${levels}.html`);
					}, 400);
					return
			}
			if (levels <= 99) {
				setTimeout(function() {
					location.replace(`0${levels}.html`);
					}, 400);
					return
			}
			if (levels >= 100) {
				setTimeout(function() {
					location.replace(`${levels}.html`);
					}, 400);
					return
			}
    } else {window.history.back();}
});


var ans = 0;
var digit = 1;

for (let aa = 1; aa <= full2Ans.length; aa++) {
  $('.main-answer-bg').append(`
<div class="answer-ct answer-ct${aa}"><div class="ans" id="ans${aa}"></div></div>
`);
}

for (let ab = 1; ab <= full2Ans.length; ab++) {
$('.hint-append').append(`
<div class="answer-ct answer-ct${ab}"><div class="ans2" id="hintct${ab}"></div></div>
`);
}

for (let ad = 1; ad <= 4; ad++) {
	$('.letters-bg').append(`
	<div class="letter-ct" id="noct${ad}"></div>
  `);
}

for (let ac = 1; ac <= full2Ans.length; ac++) {
  $('.letters-bg').append(`
<div class="letter-ct" id="ct${ac}"></div>
`);

if (ac == full2Ans.length) {
  readyFunction();
}
}


setTimeout(() => {$(".answer-bg, .back-img").css({transform:'scale(1)', opacity:'1'});}, 100);
setTimeout(() => {$(".letters-bg").css({transform:'scale(1)', opacity:'1'});}, 200);
setTimeout(() => {$(".tool-bg").css({transform:'scale(1)', opacity:'1'});}, 300);


function Outro() {
setTimeout(() => {
$(".game-over-con").fadeOut(); 
$(".game-over").css({transform:'scale(1.2)', opacity:'0'});
$('.levels, .coins').css({transform: 'scale(1.2)', opacity:'0'});
}, 100);
setTimeout(() => {$(".answer-bg, .main-img-bg, .back-img").css({transform:'scale(1.2)', opacity:'0'});}, 100);
setTimeout(() => {$(".letters-bg").css({transform:'scale(1.2)', opacity:'0'});}, 150);
setTimeout(() => {$(".tool-bg").css({transform:'scale(1.2)', opacity:'0'});}, 200);
}

if (FullImage == 0) {
$(".main-img-bg2").css({visibility:'hidden'});
}
function Retryminus() {
	if (coins >= 1) {
			coins --;
			localStorage.setItem("coins", coins);
			document.getElementById("coins").innerHTML = coins;
			}
	}

	function MainShuffle() {
		$(function () {
		var parent = $(".letters-bg");
		var divs = parent.children();
		while (divs.length) {
		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}
		});
	}
   MainShuffle();

var hint = 0;

function LevelNext() {
coins ++;
localStorage.setItem("coins", coins);
document.getElementById("coins").innerHTML = coins;
}
document.getElementById("coin-txt").innerHTML = "+1";


$('.show-hint').click(function() {
	if (coins < 1) {
		document.getElementById("button3").play();
		$('.out-coins-con').css({display:'flex'});
		setTimeout(function() {$('.hint-bg-bg').fadeOut();}, 100 );
		setTimeout(function() {$('.hint-bg').css({top: '0'});}, 400 );
	} else {
		document.getElementById("hint").play();
		hint++;
		$("#hintct" + hint).html(window["ct" + hint]);
		coins --; localStorage.setItem("coins", coins);
		$("#coins").html(coins);
		if (hint == full2Ans.length - 1) {
			$(".show-hint").css({visibility:'hidden'});
		}
	}
});


$(document).ready(function(){
vhHeight = $(window).outerHeight();
fullHeight = $(".full").outerHeight();
calcHeight = vhHeight - fullHeight;
$(".letters-bg").css({height: '' + (calcHeight - 10)});

$("#ans-txt").html(fullAns);

var Inter = localStorage.getItem('Inter');
$('.back-img, .home, .retry, .next').click(function() {
if (Inter == 5) {
	Inter = 0;
	localStorage.setItem('Inter', 0);
	parent.location='https://inter';
} else {
	Inter ++;
	localStorage.setItem('Inter', Inter);
}
});

$('.retry').click(function() {
$(".ans").empty();
ans = 0; digit = 1;
$('.letter-ct').css({visibility: 'visible'});
setTimeout(() => {$(".game-over").css({transform:'scale(1.2)', opacity:'0'});}, 100);
$('.game-over-con').fadeOut();
setTimeout(() => {$(".game-over").css({transform:'scale(1)', opacity:'1'});}, 400);
});


$('.clear-all').click(function() {
	$(".ans").empty();
	ans = 0;
	digit = 1;
	$('.letter-ct').css({
		'visibility': 'visible'
	});
});


$('.skip').click(function() {
setTimeout(() => {
$('.hint-bg-bg').fadeOut();
$(".hint-bg").css({transform:'translateY(20%)', opacity:'0'});
}, 100);
setTimeout(() => {$(".hint-bg").css({transform:'translateY(0)', opacity:'1'});}, 450);
if (coins < 10) {
document.getElementById("button3").play();
$('.out-coins-con').css({display:'flex'});
setTimeout(function() {$('.hint-bg-bg').fadeOut();}, 100 );
setTimeout(function() {$('.hint-bg').css({top: '0'});}, 400 );
} else {
document.getElementById("win").play();
coins --; coins --; coins --; coins --; coins --;
coins --; coins --; coins --; coins --; coins --;
localStorage.setItem("coins", coins);
$("#coins").html(coins);
$('.finish-con').css({display:'flex'});
$('.score2').fadeOut(0);
$('.hint-bg-bg').fadeOut();
Levelfunct();
}
});


$('.back-img, .home').click(function() {
Outro();
setTimeout(function() {window.history.back();}, 900);
});

$('.next').click(function() {
Outro();
});

$('.btn1, .btn3').click(function() {
setTimeout(() => {$(".out-coins").css({transform:'scale(1.2)', opacity:'0'});}, 100);
$('.out-coins-con').fadeOut();
setTimeout(() => {$(".out-coins").css({transform:'scale(1)', opacity:'1'});}, 400);
});

$('.btn1').click(function() {
setInterval(() => {
coins = localStorage.getItem("coins");
$("#coins").html(coins);
}, 2000);
$(".buy-coins-con").fadeIn();
});

$('.buy-coins-top').click(function() {
$(".buy-coins-con").fadeOut();
});

$(".free").click(function() {
setTimeout(() => {parent.location="https://reward";}, 350);
});
$(".buy1").click(function() {
setTimeout(() => {parent.location="https://item1";}, 350);
});
$(".buy2").click(function() {
setTimeout(() => {parent.location="https://item2";}, 350);
});
$(".buy3").click(function() {
setTimeout(() => {parent.location="https://item3";}, 350);
});
		
$('.cancel').click(function() {
$('.no-more-vid-con').fadeOut();
});
		
$('.hint').click(function() {
$(".hint-bg-bg").css({display: 'block'});
});
		
$('.hint-bg-close, .hint-bg-top').click(function() {
$(".hint-bg-bg").fadeOut();
$('.hint-bg').css({transform: 'translateY(20%)', opacity:'0'});
setTimeout(() => {$('.hint-bg').css({transform: 'translateY(0%)', opacity:'1'});}, 400);
});

$('.letter-ct').click(function() {
document.getElementById("button").play();
});
$('.btn1, .btn3, .home, .retry, .back-img, .hint, .cancel, .clear-all').click(function() {
document.getElementById("button2").play();
});
	
//answers

});

function readyFunction() {

for (let ws = 1; ws <= fullAns.length; ws++) {
	if (fullAns.charAt(ws - 1) == " ") {
		whiteSpace ++;
		$("<break></break>").insertAfter(".answer-ct" + [ws - whiteSpace]);
	}
}

ansLength = fullAns.length - whiteSpace;

for (let a = 1; a <= full2Ans.length; a++) {
	window["ct" + a] = full2Ans.charAt(a - 1);
	window["hintct" + a] = full2Ans.charAt(a - 1);
	$("#ct" + a).html(window["ct" + a]);

	if (a == full2Ans.length) {
		letterClick();
		repeatNumber();
	}
}

document.getElementById("noct1").innerHTML = noct1;
document.getElementById("noct2").innerHTML = noct2;
document.getElementById("noct3").innerHTML = noct3;
document.getElementById("noct4").innerHTML = noct4;

$(".main-img").error(function () { 
$(".img-error").css({display:"flex"});
$(".main-img").css({visibility:'hidden'}); 
});

$(".back-img, .coins-img, .clear-all, .hint, .button").error(function() {
$("img").fadeOut(0);
$(".full-error").css({display:'flex'});
});

$(".img-error-btn").click(function() {
$(".img-error").fadeOut("fast");
$(".main-img").attr("src", "../images/" + levels + ".webp");
$(".main-img").css({visibility:'visible'});
});
$(".img-error-btn2").click(function() {
setTimeout(() => {location.reload();}, 200);
});

}

function letterClick() {
$(".letter-ct").click(function() {

ctVar = parseInt($(this).attr('id').replace("ct", "").replace("no", "-"));
if (ctVar > 0) {
	tmp2 = window["ct" + ctVar];
} else {
	tmp = ctVar * -1;
	tmp2 = window["noct" + tmp];
}
$("#ans" + digit).html(tmp2);

if (digit == ctVar) {
	ans ++; digit++;
	finalCheck();
} else {digit++; finalCheck(); }

$(this).css({visibility:'hidden'});

});
}


function finalCheck() {
setTimeout(() => {
if (digit == full2Ans.length + 1) {
	console.log(digit, ans);
	if (ans == full2Ans.length) {
		Levelfunct();
		$('.finish-con').css({display:'flex'});
		document.getElementById("finish").play();
		coins ++; localStorage.setItem("coins", coins);
		$("#coins").html(coins);
	} else {
		$('.game-over-con').css({display:'flex'});
		document.getElementById("over").play();
		coins --; localStorage.setItem("coins", coins);
		$("#coins").html(coins);
	}
}
}, 200);
}