## Test Plan
--------
<br>

#### Component: AnimationSlider

|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should match Snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |



#### Component: AnimationControl

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should contain 5 buttons|AnimationControl component should have 5 buttons: reset, go backward, play/pause, go forward and the speed choosing menu.|||
| should call functions | When click buttons, corresponding functions should be called. | Mock click event. | every onClick function will be called once. |
| should match AnimationControl snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |



#### Component: SpeedMenu

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should have buttons|SpeedMenu component should have a button and speed options (menuitems).|||
|should call handleClick and close||Click SpeedMenu<br>Click a speed option|handleClick and handleClose will be called once.|
| should match SpeedMenu snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |



#### Component: SwitchAnimation

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call AnimationSlider||||
|should call AnimationControl||||
| should match Snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |


