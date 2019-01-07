/**
 * 关闭icon
 * @param string container 父容器的名字
 */
const hideLoading = function (container = 'body') {
    let iconEle = document.querySelector(`${container} .load-icon`)
    iconEle && document.querySelector(container).removeChild(iconEle)
}

/**
 * 显示icon
 * @param object conf
 */
const showLoading = function (conf) {
    // 参数
    const size = conf.size || '30'
    const color = conf.color || '#007accdc'
    const type = conf.type || 'circle'

    const container = conf.container || 'body'

    hideLoading(container)
    // 设置HTML
    const div = document.createElement('DIV')
    div.className = 'load-icon'
    div.innerHTML = `<div class="line line-1"><div class="ball"></div></div><div class="line line-2"><div class="ball"></div></div><div class="line line-3"><div class="ball"></div></div><div class="line line-4"><div class="ball"></div></div><div class="line line-5"><div class="ball"></div></div><div class="line line-6"><div class="ball"></div></div>`

    document.querySelector(container).appendChild(div)

    if (type == 'circle') {
        // 设置CSS
        document.querySelector('.load-icon').style.cssText = `position:absolute;width:${size}px;height:${size}px;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;`

        document.querySelectorAll('.line').forEach((item, index) => {
            item.style.cssText = `position:absolute;width:20%;height:50%;top:0;left:50%;transform:translateX(-50%);transform-origin:center bottom;animation:rotate 1.8s cubic-bezier(.4,0,.6,1) infinite;`
            item.style.cssText += `animation-delay: ${index * .1}s;`
        })

        document.querySelectorAll('.ball').forEach((item, index) => {
            item.style.cssText = `width:100%;height:40%;background-color:${color};border-radius:50%;`
            item.style.cssText += `transform: scale(${.48 - index * .01});`
        })
        // 动画
        document.styleSheets[0].insertRule(`@keyframes rotate{from{transform:translateX(-50%) rotate(0deg)}to{transform:translateX(-50%) rotate(360deg)}}`, 0)

    } else if (type == 'horizon') {
        // 设置CSS
        document.querySelector('.load-icon').style.cssText = `position:absolute;width:${size * 10}px;height:${size}px;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;overflow:hidden;`

        document.querySelectorAll('.line').forEach((item, index) => {
            item.style.cssText = `position:absolute;width:10%;height:100%;transform:translateX(-200%);animation:translation 3.6s cubic-bezier(.6,0,.4,1) infinite;`
            item.style.cssText += `animation-delay: ${index * .2}s;`
        })

        document.querySelectorAll('.ball').forEach((item, index) => {
            item.style.cssText = `width:100%;height:100%;background-color:${color};border-radius:50%;`
            item.style.cssText += `transform: scale(${.16 - index * .01});`
        })
        // 动画
        document.styleSheets[0].insertRule(`@keyframes translation{0%{transform:translateX(-200%);}50%{transform:translateX(450%);}100%{transform:translateX(1100%);}}`, 0)

    }
}

