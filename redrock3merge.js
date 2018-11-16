/*因为一个BUG导致例子里面的键名为B和C的键值没有修改成功*/
function merge(obj1, obj2) {
  var _output = {};
  _output[key] = [];
  for (var key in obj1) {
    if (!(obj1[key] instanceof Array && obj1[key] instanceof Object)) {
      if (obj1[key] instanceof Object) {
        for (let i in obj1[key]) {
          let o = {};
          o[i] = obj1[i];
          _output[key].push(o);
        }
      } else {
        _output[key] = obj1[key];
      }
    } else {
      _output[key] = obj1[key];
    }
    if (obj2[key]) {
      if (!(obj2[key] instanceof Array && obj2[key] instanceof Object)) {
        if (obj1[key] instanceof Object) {
          _output[key].push(obj2[key]);
        } else {
          /*_output[key].push(obj2[key]);我这这一块加入这一句代码就会疯狂报错,不知道原因,所以我只能让对象中的对象合并在一起*/
        }
      } else {
        /*未弄明白引用类型的概念,这一块在这个例子里面貌似无关紧要*/
      }
    }
  }
  for(var key1 in obj2){
    if(!(obj1[key1])){
      _output[key1]=[]
      if (!(obj2[key1] instanceof Array && obj2[key1] instanceof Object)){
        if (obj2[key1] instanceof Object){
          for(let n in obj2[key1]){
            let oo={};
            oo[n]=obj2[n];
            _output[key1].push(oo);
          }
        }else{
          _output[key1] = obj2[key1];
        }
      }

    }
  }
  console.log(_output);
}
var obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
  c: "bar"
};

var obj2 = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
  d: 6
};

merge(obj1, obj2);
