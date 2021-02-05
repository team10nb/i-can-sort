reason/description里面写为什么test fail了
对**组件代码**做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对**原码**做的修改）
有必要的话，贴一下test的代码
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

#### ComponentName: Module

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 1.22 | Fail | All | No code has been constructed |version 1|
|2 | 1.22 | Pass |/|Initial version is created|version 2|

##### Code - version 2
```javascript
import React from "react";
import ModuleProgress from "../ModuleProgress/ModuleProgress";
import ModuleButton from "../ModuleButton/ModuleButton";

export default function Module(props) {

    return (
        <div style={{display:"inline-block", margin:40, }}>
            <ModuleButton {...props} />
            <ModuleProgress {...props} />
        </div>
    );
}

```


