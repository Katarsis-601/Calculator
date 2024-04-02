const button = document.querySelectorAll("button");
const input_field = document.getElementsByClassName("calculator_input")[0];
let input_text = "";
const arr_btn = () => {
  let i = 0;
  let arr = [];
  while (i < button.length) {
    arr.push(button[i]);
    i++;
  }
  return arr;
};
const btn_event = () => {
  arr_btn().map((data) => {
    data.addEventListener("click", (value) => {
      input_text += value.target.attributes[1].value;
      input_field.innerHTML = input_text;
    });
  });
};
console.log(input_field);

btn_event();
