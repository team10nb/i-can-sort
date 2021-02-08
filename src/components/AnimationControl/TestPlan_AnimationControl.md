## Test Plan
--------
<br>


#### Component: AnimationControl

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should contain 5 buttons|AnimationControl component should have 5 buttons: reset, go backward, play/pause, go forward and the speed choosing menu.|||
| should call functions | When click buttons, corresponding functions should be called. | Mock click event. | every onClick function will be called once. |
| should match AnimationControl snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |
