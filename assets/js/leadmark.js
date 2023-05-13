/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
    if ($(this).attr('class') === undefined) {
    }
})


// タイマーの日付を設定
var countDownDate = new Date("Dec 5, 2023 11:59:00").getTime();
// 1秒おきに更新
var x = setInterval(function() {
  // 今日の日付と時間を取得
  var now = new Date().getTime();

  // 日付と時間の計算
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
  // 日本語出力する内容
  document.getElementById("jp_nimojapanese").innerHTML = days-100+"<span>日</span>" + hours + "<span>時</span>"
  + minutes + "<span>分</span>" + seconds + "<span>秒</span>";
  document.getElementById("jp_shokai").innerHTML = days + 90+"<span>日</span>" + hours + "<span>時</span>"
  + minutes + "<span>分</span>" + seconds + "<span>秒</span>";
  document.getElementById("jp_nimoanim").innerHTML = days + 150+"<span>日</span>" + hours + "<span>時</span>"
  + minutes + "<span>分</span>" + seconds + "<span>秒</span>";

  // タイマー終了後
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countTimer").innerHTML = "プロジェクト完了しました。";
  }
}, 1000);