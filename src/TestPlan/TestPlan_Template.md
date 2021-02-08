## Test Plan - Example Template
--------
<br>

#### ComponentName: SetAndHelp

|Test Name|Description|Operation|Expected Outcome|
|----|------|--------|----------------|
| set should contain two buttons ||render | called twice |
| help should contain two buttons ||render | called twice |
| set button should match Snapshot'|Accordion should appear|render| match the snapshot|
| help button should match Snapshot'|popover should appear|render| match the snapshot|



#### ComponentNames: Introduction

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
| should pass right text | should pass right html|expect().toStrictEqual() | two texts are the same|


#### ComponentNames: Operation

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
| should pass right text | should pass right html|expect().toStrictEqual() | two texts are the same|


#### ComponentNames: Bubble

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
| should match Snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |



#### ComponentNames: ProcedureSubPage

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
| should match Snapshot | Compare new snapshot with old one. |  | Snapshots are the same. |


#### ComponentNames: ProcedureRouter

|Test Name|Description|Operation|Expected Outcome|
|----|------|----------------|------------|
| should pass right routers | should pass right html|expect().toStrictEqual() | two texts are the same|
| should link to right routers | Compare new snapshot with old one. |  | Snapshots are the same. |




