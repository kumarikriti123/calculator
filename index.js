const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = ""; 
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1); 
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText); 
    }
     else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!"; 
      setTimeout(() => (display.innerText = ""), 2000); 
    } else {
      display.innerText += item.id; 
    }
  };
});

const toggleButton = document.getElementById('mode');
const toggleIcon = document.getElementById('icon');


toggleButton.addEventListener('click', () => {
   
    document.body.classList.toggle('dark');

   
    if (document.body.classList.contains('dark')) {
        toggleIcon.classList.remove('fa-toggle-off');
        toggleIcon.classList.add('fa-toggle-on');
    } else {
        toggleIcon.classList.remove('fa-toggle-on');
        toggleIcon.classList.add('fa-toggle-off');
    }
});
