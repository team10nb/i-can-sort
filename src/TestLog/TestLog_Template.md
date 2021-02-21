
#### ComponentName:

reason/description里面写为什么test fail了
对代码做修改和修改的理由写在每个代码块前的注释里（由于没有通过test，而对原码做的修改）
有必要的话，贴一下test的代码（？
第一个version可以不写注释 最后一个version(pass的version)可以不写reason

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 |  | fail|  |  |version 1|
|2 | | fail|||version 2|
|3 | | pass|||version 3|

##### Code - version 1
```javascript

```

##### Code - version 2
```javascript

```

##### Code - version 3
```javascript

```


#### ComponentName:

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 |  |  |  |  ||

##### Code - version 1
```javascript

```

#### ComponentName: setAndHelp

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.1 | fail | code version 1 | buttons.length should be 2 | code version 2|
|2 | 2.1 | pass |  |  | code version 2|

##### Code - version 1
```javascript
IconButton aria-label="setting" onClick={toggleDrawer('left', true)} 
```

##### Code - version 2

```javascript
Tooltip title="setting" placement="bottom" arrow
IconButton aria-label="setting" onClick={toggleDrawer('left', true)}
```
#### ComponentName: Introduction 

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.2 | pass  |  | should pass right text |code version 1|

##### Code - version 1
```javascript
expect(intro).toStrictEqual(text);
```
#### ComponentName: Operation 

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.2 | pass  |  | should pass right text |code version 1|

##### Code - version 1
```javascript
expect(operate).toStrictEqual(text);
```
#### ComponentName: Bubble

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.3 | pass  |  | should match snapshot |code version 1|

##### Code - version 1
```javascript
const content = render(<Bubble {...props>);
expect(content).toMatchSnapshot();
```

#### ComponentName: ProcedureRouters

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.5 | pass |  | should pass right routers ||
|2 | 2.5 | pass |  | should link right routers ||



#### ComponentName: ProcedureSubPage

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.5 | pass  |  | should match snapshot ||
|2 | 2.5 | fail  |should call home button  | no home button  |code version 1|
|3 | 2.5 | pass  || should call home button   |code version 1|
##### Code - version 1
```javascript
HomeIcon style={{ fontSize: 30, color: "#FFFFFF"}} 
```
#### ComponentName: CorrectnessTutorial

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.21 | pass  |  | should match snapshot ||
|2 | 2.21 | pass  |  | should contains buttons |codeVersion1|
##### Code - version 1
```javascript
{['Input', 'Input_Def'].map((text, index) => (
    index === activeStep 
        ?<ListItem className = {classes.hightlightItem} button key={text} onClick={() => handleChange(index)}>
            <ListItemIcon><ChevronRightIcon/></ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
        :<ListItem className = {classes. listItem} button key={text} onClick={() => handleChange(index)}>
            <ListItemIcon><ChevronRightIcon/></ListItemIcon>
            <ListItemText primary={text} />
        </ListItem> 
    ))}        
 <Button size="small" variant="contained" style={{ backgroundColor: color, color: "#FFFFFF"}} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next                       
 </Button>

```




