# load-icon
css3 load icon

> 仿win10的load icon

## 使用

- `<script src="load-icon.js"></script>`

```javascript
    // 显示icon
    showLoading({
        container: '.container',// 父容器名称，需要加定位,默认`body`
        size: 30,// icon大小，默认30
        color: '#007accdc',// icon颜色，默认#007accdc
        type:'circle'// 默认circle，可选circle和horizon
    })
    // 关闭icon
    hideLoading('.container')
```