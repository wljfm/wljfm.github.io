let i = true;

function a(id) {
    const element = document.getElementById(id);
    element.classList.add('slide-in');
}

document.addEventListener('DOMContentLoaded', () => {
    // 定义 IntersectionObserver 回调函数
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 只在目标元素进入视口时执行定时任务
                setTimeout(() => a("jm21"), 500);
                setTimeout(() => a("jm22"), 1000);
                setTimeout(() => a("jm23"), 1500);
                setTimeout(() => a("jm24"), 2000);
                setTimeout(() => a("jm25"), 2500);
                setTimeout(() => a("jm26"), 3000);
                setTimeout(() => a("jm27"), 3500);
                setTimeout(() => a("jm28"), 4000);
                setTimeout(() => a("jm29"), 4500);
                setTimeout(() => a("jm210"), 5000);
                setTimeout(() => a("jm211"), 5500);
                setTimeout(() => a("jm212"), 6000);

                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    const targetElement = document.getElementById('jm2');
    if (targetElement) {
        observer.observe(targetElement);
    }
});



let menus_flex = false
function flex_menu() {
    if (menus_flex) {
        document.getElementById("menus").style.display = "none";
        menus_flex = false
    } else {
        document.getElementById("menus").style.display = "flex"
        menus_flex = true
    }
}

document.addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (clickedElement.id) {
        if (clickedElement.id != "menu") {
            document.getElementById("menus").style.display = "none";
            menus_flex = false
        }
    }
});