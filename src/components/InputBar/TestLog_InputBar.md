#### ComponentName: InputBar

|Test No.|Date|Pass/Fail|Failed test(s)|Reason/Description|Modified version|
|-------|----|---------|-------------------|----------------|----------------|
|1 | 2.14 | Fail | All | props error should have boolean value instead of string|version 1|

##### Code - version 1
```javascript
// const error = isValid ? "" : "error";
const error = isValid ? false : true;
```