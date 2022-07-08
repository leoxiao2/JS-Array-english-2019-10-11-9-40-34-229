// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a no b yes

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0;i<a.length;i++){
    a[i]=a[i]*2
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var reult="";
switch (expression) {
case 1:
    for(var i=0;i<colors.length;i++){
    result+=colors[i]+" ";
    }
     console.log('result');
     break;
case 2:
for(var i=0;i<colors.length;i++){
    result+=colors[i]+"+";
    }
    console.log('result');
    break;
case 3:
for(var i=0;i<colors.length;i++){
    result+=colors[i]+"";
    }
     console.log('result');
     break;
default:
    console.log('null')
}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a, b) => {
    return b-a // 降序
  })
  console.log(a)

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    let res = {};
    let maxName, maxNum = 0
    // 遍历数组
    arr.forEach((item) => {
        res[item] ? res[item] += 1 : res[item] = 1
        if (res[item] > maxNum) {
        maxName = item
        maxNum = res[item]
    }
    })
    console.log(maxName);