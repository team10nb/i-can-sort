import React, { useState } from "react";
let audioArr;
let audioIndex;
export default class IndexLayout extends React.PureComponent {
  state = {
    audioUrl: '',
  };
 
  componentDidMount() {
    this.getAudio();
  }
// 切换音乐
  ChangeMusic = (myAudio) => {
    if(audioArr.length-1<=audioIndex){
      audioIndex = 0;
      myAudio.src = audioArr[0].file_url;
      myAudio.play();
    }else{
      audioIndex = ++audioIndex;
      myAudio.src = audioArr[audioIndex].file_url;
      myAudio.play()
    }
  }
 
  // 获取音频
  getAudio=()=>{
    this.props.dispatch({
      type: 'front/getAudio',
      payload: {}}).then((data)=>{
        if(data && data.length > 0){
          audioArr = data;
          audioIndex = 0;
           // 音乐播放
          const myAudio = new Audio()
          myAudio.preload = true; //
          // myAudio.controls = true;
          myAudio.loop = false;
          myAudio.src = data[0].file_url;
          // 播完时候播放下一首
          myAudio.addEventListener('ended', this.ChangeMusic.bind(this, myAudio), false);
          myAudio.play();
          document.getElementById("audioBox").appendChild(myAudio);
        }
      })
  };
 
 
  render() {
 
    return (
       <div id='audioBox' />
    );
  }
}