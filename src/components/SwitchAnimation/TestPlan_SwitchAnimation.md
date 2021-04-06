## Test Plan
--------
<br>


#### Component: SwitchAnimation

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call AnimationSlider|Test whether AnimationSlider is successfully called|Mock AnimationSlider and call it|call time is 1|
|should call AnimationControl|Test whether AnimationControl is successfully called|Mock AnimationControl and call it|call time is 1|
| should match Snapshot | Compare new snapshot with old one. | Take a snapshot and compare | Snapshots are the same. |


