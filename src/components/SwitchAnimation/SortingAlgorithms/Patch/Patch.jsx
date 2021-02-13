/* 
***********重要***********
***********重要***********
***********重要***********
***********重要***********
所有算法的共用函数。请在算法文件中使用
import {COLORS, patch, hardcopy, changeColor, changeY} from "../Patch/Patch";
来使用本文件函数。
***********重要***********
***********重要***********
***********重要***********
***********重要***********
*/ 

/*
COLORS 保存可能使用到的颜色。
用法：直接调用COLORS.original等
*/
export let COLORS = {
  original: "#00BFFF", // 蓝
  comparing: "#FFD700", // 黄
  finished: "#008000", // 绿
  current: "#FF0000", // 红
  minimum: "#7700FF", // 还没定的颜色
  pivot: "#FF008C", // pivot
  left: "#D309E1", // left
  right: "#9C1AFF" // right

  // 其他的可能要用的颜色就写在这里
}

/*
hardcopy 函数使用JSON强制生成一个新的拷贝。也许不用硬拷贝也可以？我忘了
输入：一个已经被patch函数处理过的列表
输出：一个完全一样但不是同一个的列表
*/
export function hardcopy(patchedList){
  return JSON.parse(
    JSON.stringify(patchedList)
  );
}

/*
patch 函数将一个普通数组转化成一个可视化库可以识别的bar列表。
输入：[int]
输出：[{value: int, height: int, backgroundColor: str, key: int}]（把这个称为bars）

（{value: int, height: int, backgroundColor: str, key: int}把这个称为bar）
*/
export function patch(arr) {
  let returnList = [];
  let i = 0;
  arr.forEach(element => {
      returnList.push(
        { value:element, height: element * 10, backgroundColor: COLORS.original, key: i, y: 0, isPivot: false });
      i++;
  });
  return returnList;
}

/*
changeColor 函数提供一个（稍微简单一点的）方式，改变bar的颜色。
输入：arr是bars，i是要改变颜色的bar的index，color是从COLORS里取出来的颜色，比如COLORS.original
输出：没有输出。这个函数会去改它的颜色
*/
export function changeColor(arr, i, color) {
  arr[i].backgroundColor = color;
}

/*
changeY 函数提供一个（稍微简单一点的）方式，改变bar的y。
输入：arr是bars，i是要改变y的bar的index，y是int
输出：没有输出。这个函数会去改它的y
*/
export function changeY(arr, i, y) {
  arr[i].y = y;
}

export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};