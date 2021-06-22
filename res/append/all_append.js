var whiteSpace = 0;

if (localStorage.getItem("mode") == "movie") {
	levels = localStorage.getItem("levels");
	total = parseInt(localStorage.getItem("levels_total"));
} else if (localStorage.getItem("mode") == "actor") {
	levels = localStorage.getItem("iilevels");
	total = parseInt(localStorage.getItem("iilevels_total"));
}

$("body").prepend(`
<style>
.img-error {
width: 100%; height: 100%;
position: absolute; top: 0; left: 0;
display: none; flex-wrap: wrap; 
justify-content: center; align-content: center;
z-index:99;
}
.img-error-txt {
width: 100%; text-align: center;
padding-bottom: 4vw;
}
.img-error-btn, .img-error-btn2 {
width: 50%;
padding:2vw 4vw;
background-color: ecaaaa;
border-radius: 10px;
}
.img-error-btn:active, .img-error-btn2:active {
opacity: .6;
}

.full-error {
width: 100vw; height: 100vh;
position: fixed; top:0; left:0;
z-index: 100;
display: none; flex-wrap: wrap;
background-color: white;
justify-content: center; align-content: center;
}
.full-error-txt {
width: 100vw;
text-align: center;
font-size: 6vw;
padding-bottom: 4vh;
}
</style>
<div class="full-error">
	<div class="full-error-txt">Network disconnected!</div>
	<div class="img-error-btn2">RELOAD</div>
</div>
<div class="game-over-con">
  <div class="game-over">
  <div class="g-o-ti">FAILED</div>
  <div class="score"><img src="../../res/coins.webp" class="coins-img"><div class="coin-txt">-1</div></div>
  <div class="g-o-ct-bg">
  <img src="../../res/home.webp" class="button home">
  <img src="../../res/retry.webp" class="button retry">
  </div>
  </div>
</div>

<div class="finish-con"></div>

<div class="out-coins-con">
  <div class="out-coins">
  <div class="out-coins-ti">oops!<br>You are out of coins</div>
  <div class="out-coins-ct">Watch a video or buy the coins</div>
  <div class="out-coins-ct2">Press DONE to claim your reward</div>
  <div class="out-coins-btn-bg">
  <img src="../../res/ok.webp" class="button btn1">
  <img src="../../res/cancel.webp" class="button btn3">
  </div>
  </div>
</div>

<div class="full">

  <div class="top">
   
   <img src="../../res/back.webp" class="back-img">
   <div class="levels">LEVEL<span id="main-levels"></span></div>
   <div class="coins"><img src="../../res/coins.webp" class="coins-img"><div id="coins">0</div></div>
  </div>
  
  <div class="main-img-bg">
 	<img src="../images/` + levels + `.webp" class="main-img">
	<div class="img-error">
	<div class="img-error-txt">Failed to load Image</div>
	<div class="img-error-btn">RELOAD</div>
	</div>
  </div>
  <div class="tool-bg">
  <img src="../../res/clear.webp" class="clear-all"> 
  <img src="../../res/hint.webp" class="hint">
  </div>
  <div class="answer-bg main-answer-bg"></div>
</div>
<div class="letters-bg"></div>
<div class="hint-bg-bg"></div>

<div class="buy-coins-con">
<div class="buy-coins-top"></div>
		<div class="buy-coins-bg">
			<div class="buy-coins-ct buy-coins-ct1">
				<div class="ct-sub-bg">
					<img src="../../res/coins.webp" class="hint-img"> + 5
				</div>
				<div class="buy free active"><img src="../../res/video.webp" class="video-img"> Free</div>
			</div>
			
			<div class="buy-coins-ct buy-coins-ct2">
				<div class="ct-sub-bg">
					<img src="../../res/coins.webp" class="hint-img"> + 60
				</div>
				<div class="buy buy1 active">Buy</div>
			</div>
			
			<div class="buy-coins-ct buy-coins-ct3">
				<div class="ct-sub-bg">
					<img src="../../res/coins.webp" class="hint-img"> + 150
				</div>
				<div class="buy buy2 active">Buy</div>
			</div>
			
			<div class="buy-coins-ct buy-coins-ct4">
				<div class="ct-sub-bg">
					<img src="../../res/coins.webp" class="hint-img"> + 400
				</div>
				<div class="buy buy3 active">Buy</div>
			</div>
		</div>
	</div>

<audio id="finish" src="../../res/finish.mp3" autoplay="false" ></audio>
<audio id="button" src="../../res/button.mp3" autoplay="false" ></audio>
<audio id="button2" src="../../res/button2.mp3" autoplay="false" ></audio>
<audio id="button3" src="../../res/button3.mp3" autoplay="false" ></audio>
<audio id="over" src="../../res/over.mp3" autoplay="false" ></audio>
<audio id="hint" src="../../res/hint.mp3" autoplay="false" ></audio>
<audio id="win" src="../../res/win.mp3" autoplay="false" ></audio>
`);

$('.hint-bg-bg').append(`
<div class="hint-bg-top"></div>
<div class="hint-bg">
  <div class="hint-bg-close"><img src="../../res/cancel.webp" width="100%"></div>
  <div class="hint-top">
    <img class="button show-hint" src="../../res/hint2.webp">
    <img class="button skip" src="../../res/skip2.webp">
    </div>
  <div class="answer-bg hint-append"></div>	         
</div>
`);

$(".finish-con").append(`
<div class="game-over game-over-2">
		<div class="g-o-ti">COMPLETED</div>
		<div class="main-img-bg2">
			<img src="" class="completed-img">
		 </div>
		 <div class="ans-txt" id="ans-txt"></div>
		<div class="score2"><img class="coins-img" src="../../res/coins.webp"><span class="coin-txt coin-txt2" id="coin-txt"></span></div>
		<div class="g-o-ct-bg">
			<img src="../../res/skip.webp" class="button next">
		</div>
</div>
`);

var coins = localStorage.getItem("coins");
document.getElementById("coins").innerHTML = coins;

function AnsPlus() {
  ans ++; return
}
var FullImage = 0;

