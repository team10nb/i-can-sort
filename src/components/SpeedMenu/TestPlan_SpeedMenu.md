## Test Plan
--------
<br>


#### Component: SpeedMenu

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should have buttons|SpeedMenu component should have a button and speed options (menuitems).|Find buttons|Buttons should be found|
|should call handleClick and close|The button click event should call handleClick and close function|Click SpeedMenu<br>Click a speed option|handleClick and handleClose will be called once.|
| should match SpeedMenu snapshot | Compare new snapshot with old one. | take snapshot and compare | Snapshots are the same. |

