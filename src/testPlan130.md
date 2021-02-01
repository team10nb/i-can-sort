# Test Plan - Example Template

|Contents|
|--------|
|[Jump to component:](#class)|
|[Jump to component:](#class)|
|[Jump to component:](#class)|


## Test Plan

#### Component: AnimationSlider

|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| should match Snapshot | Compare new snapshot with old one and they should match. | Match snapshot. | Snapshots are the same. |



#### Component: AnimationControl

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should contain SpeedMenu||||
| should contain buttons | | | |
| should call onClick | | Mock click event | onClick function will be called once. |
| should match Snapshot | Compare new snapshot with old one and they should match. | Match snapshot. | Snapshots are the same. |



#### Component: SpeedMenu

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|（尝试）contain menuitem||||
|（尝试）click menuitem||Mock click event|each onClick function will be called once.|
|should call onClick||Mock click event|onClick function will be called once.|
|should contain button||||
| should match Snapshot | Compare new snapshot with old one and they should match. | Match snapshot. | Snapshots are the same. |



#### Component: SwitchAnimation

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should contain AnimationSlider||||
|should contain AnimationControl||||
| should match Snapshot | Compare new snapshot with old one and they should match. | Match snapshot. | Snapshots are the same. |