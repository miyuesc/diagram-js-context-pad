# diagram-js-context-pad

An element context menu component for diagram-js/bpmn-js use, base on diagram-js/lib/features/context-pad.

一个提供给 diagram-js/bpmn-js 使用的元素上下文菜单组件，基于 `diagram-js/lib/features/context-pad`。

## How to use 如何使用

1. Add the diagram-js-context-pad to your project:

```sh
npm install diagram-js-context-pad
```

2. Add it to the additionalModules Array

```js
import Modeler from 'bpmn-js/lib/Modeler'
import ContextPadModule from 'diagram-js-context-pad'


const modeler = new Modeler({
  container: '#container',
  additionalModules: [
    // ...
    ContextPadModule
  ],
  contextPad: {
    beauty: true
  }
})
```

## Configurations 配置项

This module adds a new Configurations to the ContextPad.

| name   | desc       | type                          | default           | required |
|--------|------------|-------------------------------|-------------------|----------|
| beauty | 是否开启美化后的效果 | boolean                       | false             | false    |


## Methods 方法

This module adds a new method to the ContextPad.

| name          | desc              | args             | required |
|---------------|-------------------|------------------|----------|
| toggleStyles  | 切换默认显示方式与重写后的显示方式 | beauty?: boolean | false    |


## Preview 效果预览

