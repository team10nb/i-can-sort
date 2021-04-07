## Test Plan
--------
<br>


#### Component: ImplementationAnimation

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
|should call InputBar|An InputBar shall be called|mock an InputBar and render it|An InputBar is called|
|should call AnimationSlider|An AnimationSlider shall be called|mock an AnimationSlider and render it|An AnimationSlider is called|
|should call AnimationControl|An AnimationControl shall be called|mock an AnimationControl and render it|An AnimationControl is called|
|should call ExplanationBox|An ExplanationBox shall be called|mock an ExplanationBox and render it|An ExplanationBox is called|
| should match Snapshot | Compare new snapshot with old one. | null | Snapshots are the same. |
