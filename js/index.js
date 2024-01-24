//鼠标点击特效
document.addEventListener('DOMContentLoaded', function () {
    const rippleEffect = document.getElementById('ripple-effect');

    document.body.addEventListener('click', function (e) {
        const x = e.pageX - 10;
        const y = e.pageY - 10;
        rippleEffect.style.left = x + 'px';
        rippleEffect.style.top = y + 'px';
        rippleEffect.style.opacity = '1';
        rippleEffect.style.transform = 'scale(1)';
        setTimeout(function () {
            rippleEffect.style.opacity = '0';
            rippleEffect.style.transform = 'scale(0)';
        }, 100);
    });
});

// 鼠标拖尾特效
var s = "", tail_sum = 200, tail_num = 0;
for (var i = 0; i < tail_sum; i += 1) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16); // 生成随机颜色代码
    s += ('<div class="tail_block none" id="tail_block_' + i + '" style="background-image: radial-gradient(transparent, #' + randomColor + ');"></div>');
}
document.getElementById("tail_show").innerHTML = s;

document.addEventListener('mousemove', function (event) {
    setTimeout(function () {
        var t = document.getElementById("tail_block_" + tail_num);
        t.className = "tail_block show";
        t.style.top = event.clientY + 20 + 'px';
        t.style.left = event.clientX + 20 + 'px';
        setTimeout(function () { t.className = "tail_block none"; }, 100);
        tail_num = (tail_num + 1) % tail_sum;
    }, 10);
});

// 鼠标长按特效
var s_new = "", tail_sum_new = 200, tail_num_new = 0;
for (var i_new = 0; i_new < tail_sum_new; i_new += 1) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16); // 生成随机颜色代码
    s_new += ('<div class="tail_block none" id="tail_block_' + i_new + '" style="background-image: radial-gradient(transparent, #' + randomColor + ');"></div>');
}
document.getElementById("tail_show").innerHTML = s_new;

let intervalId_new;
let isLongPress_new = false;

document.addEventListener('mousemove', function (event) {
    if (isLongPress_new) {
        setTimeout(function () {
            var t_new = document.getElementById("tail_block_" + tail_num_new);
            t_new.className = "tail_block show";
            t_new.style.top = event.clientY + 20 + 'px';
            t_new.style.left = event.clientX + 20 + 'px';
            setTimeout(function () { t_new.className = "tail_block none"; }, 100);
            tail_num_new = (tail_num_new + 1) % tail_sum_new;
        }, 10);
    }
});

document.addEventListener('mousedown', function (event) {
    intervalId_new = setInterval(function () {
        isLongPress_new = true;
    }, 100);
});

document.addEventListener('mouseup', function (event) {
    clearInterval(intervalId_new);
    isLongPress_new = false;
});

// 触摸长按特效
document.addEventListener('touchmove', function (event) {
    event.preventDefault(); // 阻止默认行为，避免页面滚动
    if (isLongPress_new) {
        setTimeout(function () {
            var touch = event.touches[0];
            var t_new = document.getElementById("tail_block_" + tail_num_new);
            t_new.className = "tail_block show";
            t_new.style.top = touch.clientY + 20 + 'px';
            t_new.style.left = touch.clientX + 20 + 'px';
            setTimeout(function () { t_new.className = "tail_block none"; }, 100);
            tail_num_new = (tail_num_new + 1) % tail_sum_new;
        }, 10);
    }
});

document.addEventListener('touchstart', function (event) {
    event.preventDefault(); // 阻止默认行为，避免页面滚动
    intervalId_new = setInterval(function () {
        isLongPress_new = true;
    }, 100);
});

document.addEventListener('touchend', function (event) {
    clearInterval(intervalId_new);
    isLongPress_new = false;
});

function opencd() {
    window.location.replace('http://wljfm.github.io/cd/cd.html');
    //window.location.replace('http://127.0.0.1:5500/cd/cd.html');
}

function openhome() {
    window.location.replace('http://wljfm.github.io');
    //window.location.replace('http://127.0.0.1:5500');
}

function opengithub() {
    var url = "https://github.com/wljfm"
    window.open(url, '_blank')
}

function openbili() {
    var url = "https://space.bilibili.com/699823793"
    window.open(url, '_blank')
}

function opengitee() {
    var url = "https://gitee.com/BILIWLJFM"
    window.open(url, '_blank')
}

function opengithub() {
    var url = "https://github.com/wljfm"
    window.open(url, '_blank')
}

//傻逼git，傻逼hexo，一直上传失败，傻逼玩意

fetch('https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0')
    .then(response => response.json())
    .then(data => {
        const following = data.data.pfs.profile.following;
        const follower = data.data.pfs.profile.follower;
        console.log('关注数:', following);
        console.log('粉丝数:', follower);
        const fanElement = document.getElementById('fan');
        fanElement.textContent = `粉丝数：${follower}`;
        const fanElements = document.getElementById('gzs');
        fanElements.textContent = `关注数：${following}`;
    })
    .catch(error => {
        console.error('发生错误:', error);
    });

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://wljfm.github.io/index.html', true);
xhr.send();

xhr.onload = function() {
  if (xhr.status === 200) {
    var responseText = xhr.responseText;
    var parser = new DOMParser();
    var doc = parser.parseFromString(responseText, "text/html");
    var divs = doc.querySelectorAll('.href');
    var jhss = divs.length;
    console.log(jhss);
    const fanElement = document.getElementById('jhs');
    fanElement.textContent = `文章数：${jhss}`;
  }
};
