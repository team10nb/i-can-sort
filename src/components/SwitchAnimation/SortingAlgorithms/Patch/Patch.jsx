let COLORS = {
  original: "#00BFFF", // 蓝
  comparing: "#FFD700", // 黄
  finished: "#008000", // 绿
  current: "#FF0000", // 红
  minimum: "#123456",
}

export default function patch(arr) {

  let returnList = [];
  let i = 0;
  arr.forEach(element => {
      // 如果这个数比10大，那就让他矮一点
      returnList.push(
        { value:element, height: element * 10, backgroundColor: COLORS.original, key: i, y: 0, });
      i++;
  });
  return returnList;
}

