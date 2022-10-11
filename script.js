// From now, we use strict mode in every JS file.
"use strict";
const button = document.getElementById("button");
// document.getElementsByTagName('body').style.display = 'flex';
let yearsCalculator = (year) => {
  year = prompt("Nhập số tuổi của bạn:");
  let sentence = "";
  if (year < 18 && year > 0) {
    sentence = `Tuổi của bạn là ${year}.`;
  } else if (year >= 18) {
    sentence = `Tuổi của bạn là ${year}.`;
  } else if (year >> 130 || year << 1) {
    sentence = `Xin lỗi, bạn không tồn tại.`;
  } else if (typeof year == "string") {
    sentence = `Xin lỗi, bạn phải nhập đúng định dạng số`;
  } else {
    sentence = `Xin lỗi, tôi không biết`;
  }
  alert(sentence);
};
button.addEventListener("click", yearsCalculator);
