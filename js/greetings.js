const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username"; // 반복되면 무조건 변수로 지정

function onLoginSumbmit(event) {
  event.preventDefault(); //어떤 event의 기본동작(어떤 function에 대해 브라우저가 기본적으로 수행하는 동작)이든 수행되지 않도록 함
  loginForm.classList.add(HIDDEN_CLASSNAME); //form 숨기기
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //local storage의 username key에 저장
  //greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // 문자열 합쳐 쓸 때 이렇게 쓸 수도 있음
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden 없애기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSumbmit); // addEventListener 안의 함수는 직접 실행하지 않는다. "submit"되면 브라우저가 해준다. + 브라우저는 event에 대한 정보도 줌.
} else {
  // show the greetings
  paintGreetings(savedUsername);
}

/* 
About preventDefault

const link = document.querySelector("a");

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event); //it shows MouseEvent. (클릭된 곳의 좌표를 보여줌)
}
link.addEventListener("click", handleLinkClick);

//handleLinkClick({information about the event that just happened})
*/
