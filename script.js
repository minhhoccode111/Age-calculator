// From now, we use strict mode in every JS file.
'use strict';
const button = document.getElementById('button');
// document.getElementsByTagName('body').style.display = 'flex';
let yearsCalculator = (year) => {
  year = prompt('Nhập số tuổi của bạn:');
  let sentence = '';
  if (year < 18 && year > 0) {
    sentence = `Tuổi của bạn là ${year} \n Xin lỗi bạn chưa đủ tuổi.`;
  } else if (year >= 18) {
    sentence = `Tuổi của bạn là ${year} \n Chúc mừng, bạn đã đủ tuổi chịu trách nhiệm trước pháp luật.`;
  } else if (year >> 130 || year << 1) {
    sentence = `Xin lỗi, bạn không tồn tại, bạn chỉ là robot hay giả lập máy tính mà thôi`;
  } else if (typeof year == 'string') {
    sentence = `Xin lỗi, bạn phải nhập đúng định dạng số`;
  } else {
    sentence = `Xin lỗi, tôi không biết`;
  }
  alert(sentence);
};
button.addEventListener('click', yearsCalculator);
