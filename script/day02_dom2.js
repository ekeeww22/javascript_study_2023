// getElement 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const firstCls = document.getElementsByClassName('first');
const lastCls = document.getElementsByClassName('last');
console.log(mainTag, hTag[0], contentsCls[0], boxId);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
console.log(firstCls[0], lastCls[0]);
// [ES6]querySelector 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll('a');
const firstClsQ = document.querySelector('.first');
const lastClsQ = document.querySelectorAll('.last');
// const aTagQ = document.querySelector('.first');
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);
console.log(firstClsQ, lastClsQ[0]);

//querySelector, querySelectorAll
// 객체가 2개 이상일 때 태그 작성 순서상 한개만 인식하고 싶다면

