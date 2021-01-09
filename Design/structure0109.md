### 包结构

```
my-app
├── README.md
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
├── src
│	├── index.css
│	├── index.js （初始化app, react入口）
│	├── components（页面基础组件）
│   │   ├── App/（主界面）
│   │   ├── BaseComponents/（检测是否组件正确响应，处理error）
│	│	├── Button/（有多种作用的按钮, 可能有多种样式的button）
│	│	├── Player/（控制模块,包括了进度条,播放等控制用组件）
│	│	├── ProgressBar/（进度条）
│	│	├── ProgressLine/（学习进度线，形状，长度，颜色）
│   │   ├── Dialog/（用于多种作用的弹窗）
│   │   ├── Module/ （包括 imageContainer，ProgressLine，点击可以跳转）
│   │   ├── Container/
│	│   │   ├── AnimationContainer（用于存放动画的容器）
│	│   │   ├── ImageContainer （用于存放图片）
│	│   │   ├── TextContainer（用于存放静态的文字的容器，如5.7左边操作栏解释）
│   │   │	└── index.js (export containers中组件 方便外部调用 )
│	│	├── InputBar/ （需要正则表达式检测input格式）
│	│	├── Bar/ （代表数字的柱状图）
│   │   └── index.js (export components中组件 方便外部调用 )
│	├── scenes
│   │   ├── Setting/ 
│   │   ├── ExplainBox/（解释框，配合Dialog）
│	│	├── Tutorial/
│   │   ├── Procedure/
│   │   ├── Correctness/
│   │   └── index.js (export scenes中组件 方便外部调用 )
│   ├── resource（存放文字描述，图片，动画，代码）
│	├── core
│   │   └── layouts/（visualizer里似乎是用来产生矩形部件）
│   └── utils/ (工具们)
└── 
```

**大致列了一下每个界面会需要用到的components，并不是包的结构**

### tutorial
```
tutorial
├── settings（跳转按钮）
├── User Guide（跳转按钮）
├── Tutorial （button 粉红色 无跳转）
├── Procedure（跳转按钮）
├── Efficiency（跳转按钮）
├── Correctness（跳转按钮）
├── Exercises（跳转按钮）
├── Basic Algoirthms （Module）
└── Expression in Programming （Module）
```

### main page
```
main page
├── settings（跳转按钮）
├── User Guide（跳转按钮）
├── Tutorial （跳转按钮）
├── Procedure（按钮，蓝色，无跳转）
├── Efficiency（跳转按钮）
├── Correctness（跳转按钮）
├── Exercises（跳转按钮）
└── Modules (8个， 每个Module对应一个排序算法)
```

###  procedures

#### introduction
```
introduction
├── homepage（跳转按钮）
├── operation（跳转按钮，procedure的另一子模块）
├── implmentation（跳转按钮，procedure的另一子模块）
├── module name (无跳转button - introduction)
└── 动画演示(AnimationContainer)
    ├── 算法解释(TextContainer)
    ├── 进度条(Player)
    └── 矩形条们（Bar）	
```

#### operation
```
operation
├── homepage（跳转按钮）
├── information（跳转按钮，procedure的另一子模块）
├── implmentation（跳转按钮，procedure的另一子模块）
├── module name(无跳转button - operation)
└── 动画演示(AnimationContainer)
  	├── 解释框(TextContainer)
  	├── 进度条(Player）
  	├── 增删数据 
  	│	└── 输入框 （InputBar）
  	└── 矩形条们（Bar）
  	
```
