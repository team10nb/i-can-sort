reason/description里面写为什么test fail了
对**组件代码**做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对**原码**做的修改）
有必要的话，贴一下test的代码
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

#### ComponentName: ProcedureMainPage

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.3 | Fail | should contain ProcedureChoiceMenu | Function was not exported |version 1|
|2 | 2.4 | Fail |should match snapshot|Cannot use <Link> outside  <Router>|version 2|
|3 | 2.4 | Pass | /                     |Snapshot updated|version 3|

##### Code - version 2
```javascript
/**
* Procedure.jsx
* export function
*/
export function ProcedureChoiceMenu(){...}
```

##### Code - version 3
```javascript
/**
* Procedure.test.jsx
* add <StaticRouter>
*/
test('should match Snapshot', () => {
    const props = { location: "/", }
    const content = render(
        <StaticRouter>
            <ProcedureMainPage {...props}/>
        </StaticRouter>
    );
    expect(content).toMatchSnapshot();
})
```



#### ComponentName:  EfficiencyMainPage

| Test No. | Date | Pass/Fail | Failed test(s)                      | Reason/Description                      | Modified version |
| -------- | ---- | --------- | ----------------------------------- | --------------------------------------- | ---------------- |
| 1        | 2.4  | Fail      | should contain EfficiencyChoiceMenu | Function was not exported               | version 1        |
| 2        | 2.4  | Pass      | /                                   | Export function EfficiencyChoiceMenu( ) | version 2        |

##### Code - version 2

```javascript
/**
* Efficiency.jsx
* export function
*/
export function EfficiencyChoiceMenu(){...}
```



#### ComponentName: CorrectnessMainPage

| Test No. | Date | Pass/Fail | Failed test(s)                       | Reason/Description                       | Modified version |
| -------- | ---- | --------- | ------------------------------------ | ---------------------------------------- | ---------------- |
| 1        | 2.4  | Fail      | should contain CorrectnessChoiceMenu | Function was not exported                | version 1        |
| 2        | 2.4  | Pass      | /                                    | Export function CorrectnessChoiceMenu( ) | version 2        |

##### Code - version 2

```javascript
/**
* Correctness.jsx
* export function
*/
export function CorrectnessChoiceMenu(){...}
```

