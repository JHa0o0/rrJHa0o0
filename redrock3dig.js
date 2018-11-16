function dig(obj, target) {
  if (typeof obj != "object") {
    //判断说明不是对象
    return obj;
  }
  for (var key in obj) {
    if (obj[key] === obj[target]) {
      console.log(obj[target]);
      break;
    }
    if (typeof obj[key] == "object") {
      dig(obj[key], target);
    }
  }
  return;
}
var data = {
  level1: {
    level2: {
      level3: "some data"
    }
  }
};
