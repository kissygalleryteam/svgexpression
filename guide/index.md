## 综述

Svgexpression 是一个以从哭到笑的可视化数据来表示百分比进度的SVG组件

## DEMO

[http://gallery.kissyui.com/svgexpression/0.0.2/demo/index.html](http://gallery.kissyui.com/svgexpression/0.0.2/demo/index.html)

## 初始化组件
    
    ### HTML

    <div id="demo"></div>

    ### Javascript

    S.use('kg/svgexpression/0.0.2/index', function (S, Svgexpression) {
        var svgexpression = new Svgexpression({
            container: '#demo',   // 表情容器
            level: 10,            // 0-100
            width: 50,            // 表情宽高，目前最大支持200
            height: 50
        });
    })

## API说明

    ### Config

        #### container
            表情容器

        #### level
            百分比值

        #### width
            svg宽度

        #### height
            svg高度

