

// window.onload = function () {


//     const container = document.querySelector('.load-icon')

//     // container.innerHTML  = `

//     // `
// }

// class LoadIcon {

//     constructor(conf) {
//         this.size = conf.size || 'm'
//         this.color = conf.color || '#007accdc'

//         this.type = conf.type || 'circle'
//     }

//     show(){

//     }

//     hide(){

//     }
// }

/**
 * 显示icon
 * @param object conf
 */
const showLoading = function (conf) {
    // 参数
    const size = conf.size || '30'
    const color = conf.color || '#007accdc'
    const type = conf.type || 'circle'

    const container = conf.container

    // type = circle
    // 设置HTML
    const div = document.createElement('DIV')
    div.className = 'load-icon'
    div.innerHTML = `<div class="line line-1"><div class="ball"></div></div><div class="line line-2"><div class="ball"></div></div><div class="line line-3"><div class="ball"></div></div><div class="line line-4"><div class="ball"></div></div><div class="line line-5"><div class="ball"></div></div><div class="line line-6"><div class="ball"></div></div>`

    document.querySelector(container).appendChild(div)

    // 设置CSS
    document.querySelector('.load-icon').style.cssText = `position:absolute;width:${size}px;height:${size}px;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;`

    document.querySelectorAll('.line').forEach((item, index) => {
        item.style.cssText = `position:absolute;width:20%;height:50%;top:0;left:50%;transform:translateX(-50%);transform-origin:center bottom;animation:rotate 2s ease-in-out infinite;`
        item.style.cssText += `animation-delay: 0.${index}s;`
    })

    document.querySelectorAll('.ball').forEach((item, index) => {
        item.style.cssText = `width:100%;height:40%;background-color:${color};border-radius:50%;`
        item.style.cssText += `transform: scale(.${60 - index * 4});`
    })
    // 动画
    document.styleSheets[0].insertRule(`@keyframes rotate{from{transform:translateX(-50%) rotate(0deg)}to{transform:translateX(-50%) rotate(360deg)}}`, 0);
}

/**
 * 关闭icon
 * @param string container 父容器的名字
 */
const hideLoading = function (container) {
    document.querySelector(container).removeChild(document.querySelector(`${container} .load-icon`))
}