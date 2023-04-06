var whiteSpace = 0;

levels = localStorage.getItem("levels");
total = parseInt(levelTotal);

var coins = localStorage.getItem("coins");
$('#coins').text(coins);

function AnsPlus() {
	ans++; return
}
var FullImage = 0;

function Levelfunct() {
	levels++;
	localStorage.setItem("levels", levels);
}

$('.next').click(function () {
	if (levels <= total) {
		$(".show-hint").css({ visibility: 'visible' });
		typedAns = '';
		typedAnsNumbers = [];
		$(".letters-bg").empty();
		$(".answer-bg").empty();
		ans = 0;
		digit = 1;
		totaldigit = 1;
		setTimeout(() => {
			Intro();
			AppenAll();
		}, 600);
	} else { window.history.back(); }
});


var ans = 0;
var digit = 1;
var totaldigit = 1;


function Intro() {
	setTimeout(() => { $(".answer-bg, .main-img-bg, .back-img").css({ transform: 'scale(1)', opacity: '1' }); }, 100);
	setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 200);
	setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 300);
	$(".finish-con").fadeOut();
	setTimeout(() => {
		$(".game-over").css({ transform: 'scale(1)', opacity: '1' });
		$('.levels, .coins').css({ transform: 'scale(1)', opacity: '1' });
	}, 600);
}
Intro();

function Outro() {
	setTimeout(() => {
		$(".game-over-con").fadeOut();
		$(".game-over").css({ transform: 'scale(1.2)', opacity: '0' });
		$('.levels, .coins').css({ transform: 'scale(1.2)', opacity: '0' });
	}, 100);
	setTimeout(() => { $(".answer-bg, .main-img-bg, .back-img").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
	setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1.2)', opacity: '0' }); }, 150);
	setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1.2)', opacity: '0' }); }, 200);
}

if (FullImage == 0) {
	$(".main-img-bg2").css({ visibility: 'hidden' });
}
function Retryminus() {
	if (coins >= 1) {
		coins--;
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

function LevelNext() {
	coins++;
	localStorage.setItem("coins", coins);
	document.getElementById("coins").innerHTML = coins;
}
document.getElementById("coin-txt").innerHTML = "+1";

$(".main-img").on("load", function () {
	$(".loading-txt").fadeOut();
	$(".main-img").fadeIn();
});

$(document).ready(function () {
	vhHeight = $(window).outerHeight();
	fullHeight = $(".full").outerHeight();
	calcHeight = vhHeight - fullHeight;
	$(".letters-bg").css({ height: '' + (calcHeight - 10) });

	Inter = localStorage.getItem('Inter');
	$('.back-img, .home, .retry, .next').click(function () {
		if (Inter > 4) {
			Inter = 0;
			localStorage.setItem('Inter', 0);
			parent.location = 'https://inter';
		} else {
			Inter++;
			localStorage.setItem('Inter', Inter);
		}
	});

	$('.retry').click(function () {
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.game-over-con').fadeOut();
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});


	$('.clear-all').click(function () {
		$(".ans").empty();
		ans = 0;
		digit = 1;
		totaldigit = 1;
		typedAns = '';
		typedAnsNumbers = [];
		$('.letter-ct').css({
			'visibility': 'visible'
		});
	});


	$('.skip').click(function () {
		setTimeout(() => {
			$('.hint-bg-bg').fadeOut();
			$(".hint-bg").css({ transform: 'translateY(20%)', opacity: '0' });
		}, 100);
		setTimeout(() => { $(".hint-bg").css({ transform: 'translateY(0)', opacity: '1' }); }, 450);
		if (coins < 10) {
			document.getElementById("button3").play();
			$('.out-coins-con').css({ display: 'flex' });
			setTimeout(function () { $('.hint-bg-bg').fadeOut(); }, 100);
			setTimeout(function () { $('.hint-bg').css({ top: '0' }); }, 400);
		} else {
			typedAns = '';
			typedAnsNumbers = [];
			hint = 0; localStorage.setItem("hint", hint);
			document.getElementById("win").play();
			coins--; coins--; coins--; coins--; coins--;
			coins--; coins--; coins--; coins--; coins--;
			localStorage.setItem("coins", coins);
			$("#coins").html(coins);
			$('.finish-con').css({ display: 'flex' });
			$('.score2').fadeOut(0);
			$('.hint-bg-bg').fadeOut();
			Levelfunct();
		}
	});


	$('.back-img, .home').click(function () {
		Outro();
		setTimeout(function () { window.history.back(); }, 900);
	});

	$('.next').click(function () {
		Outro();
	});

	$('.btn1, .btn3').click(function () {
		setTimeout(() => { $(".out-coins").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.out-coins-con').fadeOut();
		setTimeout(() => { $(".out-coins").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});

	$('.btn1').click(function () {
		setInterval(() => {
			coins = localStorage.getItem("coins");
			$("#coins").html(coins);
		}, 2000);
		$(".buy-coins-con").fadeIn();
	});

	$('.buy-coins-top').click(function () {
		$(".buy-coins-con").fadeOut();
	});

	$(".free").click(function () {
		setTimeout(() => { parent.location = "https://reward"; }, 350);
	});
	$(".buy1").click(function () {
		setTimeout(() => { parent.location = "https://item1"; }, 350);
	});
	$(".buy2").click(function () {
		setTimeout(() => { parent.location = "https://item2"; }, 350);
	});
	$(".buy3").click(function () {
		setTimeout(() => { parent.location = "https://item3"; }, 350);
	});

	$('.cancel').click(function () {
		$('.no-more-vid-con').fadeOut();
	});

	$('.hint').click(function () {
		$(".hint-bg-bg").css({ display: 'block' });
	});

	$('.hint-bg-close, .hint-bg-top').click(function () {
		$(".hint-bg-bg").fadeOut();
		$('.hint-bg').css({ transform: 'translateY(20%)', opacity: '0' });
		setTimeout(() => { $('.hint-bg').css({ transform: 'translateY(0%)', opacity: '1' }); }, 400);
	});

	$('.btn1, .btn3, .home, .retry, .back-img, .hint, .cancel, .clear-all').click(function () {
		document.getElementById("button2").play();
	});

	//answers
});

function AppenAll() {
	var fullAns = window['q' + levels];
	var full2Ans = fullAns.replace(/ /g, "").toUpperCase();
	console.log(full2Ans);
	var whiteSpace = 0;
	$("#ans-txt").html(fullAns);
	$("#main-levels").text(' ' + levels);

	$(".main-img").fadeOut();
	$(".loading-txt").fadeIn();

	$(".main-img").attr('src', 'images/' + levels + '.webp');

	for (let aa = 1; aa <= full2Ans.length; aa++) {
		$('.main-answer-bg').append(`
	<div class="answer-ct ans-ct answer-ct${aa}" id="ans-ct${aa}"><div class="ans" id="ans${aa}"></div></div>
	`);
	}

	for (let ab = 1; ab <= full2Ans.length; ab++) {
		$('.hint-append').append(`
	<div class="answer-ct answer-ct${ab}"><div class="ans2" id="hintct${ab}"></div></div>
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

	for (let ws = 1; ws <= fullAns.length; ws++) {
		if (fullAns.charAt(ws - 1) == " ") {
			whiteSpace++;
			$("<break></break>").insertAfter(".answer-ct" + [ws - whiteSpace]);
		}
	}

	ansLength = fullAns.length - whiteSpace;

	for (let a = 0; a < full2Ans.length; a++) {
		window["ct" + (a + 1)] = full2Ans.charAt(a);
		window["hintct" + (a + 1)] = full2Ans.charAt(a);
		$("#ct" + (a + 1)).html(full2Ans[a]);

		if (a == (full2Ans.length - 1)) {
			letterClick();
			// repeatNumber();
		}
	}


	hint = 0;
	if (localStorage.getItem("hint") == null) {
		hint = 0; localStorage.setItem("hint", hint);
	} else {
		hint = localStorage.getItem("hint");
	}

	if (hint > 0) {
		for (let hi = 0; hi <= hint; hi++) {
			$("#hintct" + hi).html(full2Ans.charAt(hi - 1));
		}
	}

	if (hint == full2Ans.length - 1) {
		$(".show-hint").css({ visibility: 'hidden' });
	}

	MainShuffle();

}
AppenAll();

function readyFunction() {

	$(".main-img").error(function () {
		$(".img-error").css({ display: "flex" });
		$(".main-img").css({ visibility: 'hidden' });
	});

	$(".back-img, .coins-img, .clear-all, .hint, .button").error(function () {
		$("img").fadeOut(0);
		$(".full-error").css({ display: 'flex' });
	});

	$(".img-error-btn").click(function () {
		$(".img-error").fadeOut(0);
		$(".main-img").attr("src", "../images/" + levels + ".webp");
		$(".main-img").css({ visibility: 'visible' });
	});
	$(".img-error-btn2").click(function () {
		setTimeout(() => { location.reload(); }, 200);
	});

} //readyFunction closed

typedAns = '';
typedAnsNumbers = [];
function letterClick() {
	$(".letter-ct").click(function () {
		document.getElementById("button").play();

		$(this).css({ visibility: 'hidden' });
		previousLetterIndex = null;

		for (i = 0; i < typedAns.length; i++) {
			if (typedAns[i] == '$') {
				previousLetterIndex = i;
				break;
			}
		}

		console.log("selectedAns", $(this).text());
		selectedAns = $(this).text();

		if (previousLetterIndex != null) {
			//previous letter ct should be applied
			$("#ans" + (previousLetterIndex + 1)).html(selectedAns);
			typedAnsNumbers[previousLetterIndex] = parseInt($(this).attr('id').replace('ct', ''));
			typedAns = replaceAt(typedAns, previousLetterIndex, selectedAns);
		} else {
			// new letter ct should be applied 
			$("#ans" + digit).html(selectedAns);
			digit++;
			typedAnsNumbers.push(parseInt($(this).attr('id').replace('ct', '')));
			typedAns += selectedAns;
		}
		console.log("typedAnsNumbers", typedAnsNumbers);
		totaldigit++;
		console.log("typedAns", typedAns);

		var fullAns = window['q' + levels];
		var full2Ans = fullAns.replace(/ /g, "").toUpperCase();

		if (digit == (full2Ans.length + 1)) {
			finalCheck();
		}

	});

	function replaceAt(str, index, chr) {
		tmpList = [];
		for (i = 0; i < str.length; i++) {
			console.log("iiiii", i)
			tmpList.push(str[i]);
		}
		tmpList[index] = chr;
		console.log("returned string", tmpList.toString().replace(new RegExp(",", "g"), ''))
		return tmpList.join().replace(new RegExp(",", "g"), '');
	}

	$(".ans-ct").click(function () {
		ctVar = parseInt($(this).attr('id').replace("ans-ct", ""));
		if (ctVar < digit) {
			//proceed to remove letter
			totaldigit--;
			$("#ans" + ctVar).empty();
			$("#ct" + typedAnsNumbers[ctVar - 1]).css({ visibility: 'visible' });
			typedAnsNumbers[ctVar - 1] = 0;
			console.log("typedAnsNumbers", typedAnsNumbers)
			typedAns = replaceAt(typedAns, (ctVar - 1), '$');
			console.log("typedAns", typedAns);
		}
		console.log(ctVar)
		console.log($(this).text())
	});

}

function finalCheck() {
	var fullAns = window['q' + levels];
	var full2Ans = fullAns.replace(/ /g, "").toUpperCase();

	setTimeout(() => {
		if (totaldigit == full2Ans.length + 1) {
			console.log("over")
			if (typedAns == full2Ans) {
				console.log('won')
				hint = 0; localStorage.setItem("hint", hint);
				Levelfunct();
				$('.finish-con').css({ display: 'flex' });
				document.getElementById("finish").play();
				coins++;
			} else {
				console.log('fail')
				$('.game-over-con').css({ display: 'flex' });
				document.getElementById("over").play();
				if (coins > 0) {
					coins--;
				}
			}
			localStorage.coins = coins;
			$("#coins").html(coins);
		}
	}, 200);
}

if (localStorage.Inter == 'NaN' || localStorage.Inter == NaN) {
	localStorage.Inter = 1;
}

$('.show-hint').click(function () {
	fullAns = window['q' + levels];
	full2Ans = fullAns.replace(/ /g, "").toUpperCase();

	if (coins < 1) {
		document.getElementById("button3").play();
		$('.out-coins-con').css({ display: 'flex' });
		setTimeout(function () { $('.hint-bg-bg').fadeOut(); }, 100);
		setTimeout(function () { $('.hint-bg').css({ top: '0' }); }, 400);
	} else {
		document.getElementById("hint").play();
		hint++; localStorage.setItem("hint", hint);
		$("#hintct" + hint).html(window["ct" + hint]);
		console.log(window["ct" + hint]);
		coins--; localStorage.setItem("coins", coins);
		$("#coins").html(coins);

		if (hint == full2Ans.length - 1) {
			$(".show-hint").css({ visibility: 'hidden' });
		}
	}
});

smallImage = true;
$(".main-img").click(function () {
	if (smallImage) {
		smallImage = false;
		$('.main-img').css({ maxWidth: '100vw', maxHeight: '50vh' });
	} else {
		smallImage = true;
		$(".main-img").css({ maxWidth: '85vw', maxHeight: '30vh' });
	}
});