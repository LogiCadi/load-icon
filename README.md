# load-icon
css3 load icon

> 仿win10的load icon

## 使用

- 参考`index.html`

```javascript
    // 显示icon
    showLoading({
        container: '.container',// 父容器名称，需要定位
        size: 30,// icon大小，默认30
        color: '#007accdc'// icon颜色，默认#007accdc
    })
    // 关闭icon
    hideLoading('.container')
```