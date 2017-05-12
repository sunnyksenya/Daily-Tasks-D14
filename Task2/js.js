// // Поиск всех вхождений построки в строку от Антона)
//
// var str = "In the town where I was born Lived a man who sailed to sea And he told us of his life In the land of submarines So we sailed up to the sun Till we found a sea of green And we lived beneath the waves In our yellow submarine We all live in a yellow submarine Yellow submarine, yellow submarine We all live in a yellow submarine Yellow submarine, yellow submarine And our friends are all aboard Many more of them live next door And the band begins to play We all live in a yellow submarine Yellow submarine, yellow submarine We all live in a yellow submarine Yellow submarine, yellow submarine (Full speed ahead Mr. Boatswain, full speed ahead Full speed ahead it is, Sergeant. Cut the cable, drop the cable Aye, Sir, aye Captain, captain)… "; // ищем в этой строке
// var target = "submarine"; // цель поиска
//
// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;
//
//   alert(foundPos); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }

document.querySelector('#mail_test').oninput = function() {
  var str = document.querySelector('#mail_test').value;
  var target1 = '@';
  var pos = 0;
  var arr1 = [];
  while (true) {
    var foundPos = str.indexOf(target1, pos);
    if (foundPos == -1) break;
    pos = foundPos + 1; // продолжить поиск со следующей
    arr1.push(foundPos);
  }
  console.log("@: ",arr1);
}
function checkMail(mail_test) {
  var str = document.querySelector('#mail_test').value;
  var errors_symbol = [';', '/'];
  for (var i=0; i<=errors_symbol.length; i++) {
    if (str.indexOf(errors_symbol[i]) !=-1) {
      mail_test.classList.add('error');
      return false;
    }
  }
}

// document.querySelector('#phone_test').oninput = function() {
// var tel = document.querySelector('#phone_test').value;
// var arr = tel.split;
// console.log(arr);
// arr.splice(2,0,'-');
// arr.splice(5,0,'-');
//
// document.querySelector('#out').innerHTML = tel.join('');
// console.log(tel);
// }

// var tel = document.querySelector('#phone_test').value.split();
document.querySelector('#phone_test').onkeypress = function() {
  var tel = document.querySelector('#phone_test').value.split();
  console.log(document.querySelector('#phone_test').value.split());
  tel.splice(2,0,'-');
  tel.splice(5,0,'-');
  document.querySelector('#out').innerHTML = tel.join('');
  console.log(tel);
}

var tel = [1,2,3,4,5,6];
tel.splice(2,0,'-');
tel.splice(5,0,'-');
document.querySelector('#out').innerHTML = tel.join('');
console.log(tel);
