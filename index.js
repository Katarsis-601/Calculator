const button = document.querySelectorAll("button");
const input_field = document.getElementsByClassName("calculator_input")[0];
let input_text = "";

//A Function that return array of all button element
const arr_btn = () => {
  let i = 0;
  let arr = [];
  while (i < button.length) {
    arr.push(button[i]);
    i++;
  }
  return arr;
};

//this function will get the button metadata attribute
const getAttribute = (value) => {
  return value.target.attributes[1].value;
};

//this fuction will add event to all button

const btn_event = () => {
  arr_btn().map((data) => {
    data.addEventListener("click", (value) => {
      if (getAttribute(value) === "AC") {
        //this condition its like erase input
        //so whenever button AC clicked it will erase
        input_text = "";
      } else if ((getAttribute(value) === "=") & (input_text.length != 0)) {
        input_text = Function(`return ${input_text}`)();
      } else {
        input_text += getAttribute(value);
      }
      input_field.innerHTML = input_text;
    });
  });
};

btn_event();
