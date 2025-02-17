const clock = document.querySelector("#clock");

// interval: 매번 일어나야 하는 무언가. ex. 매 2초마다 ~.
//setInterval(sayHello, 5000); // setInterval(실행할 함수, 몇 ms마다): function을 ~ms마다 반복한다는 의미
//setTimeout(sayHello, 5000); // setTimeout(실행할 함수, 몇 ms 기다릴지): function을 ~ms 기다렸다 실행한다는 의미

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //시간이 00형태로 나오게 하기 위해 padStart추가.
  const minutes = String(date.getMinutes()).padStart(2, "0"); //but, padStart는 string에 적용되기 때문에 date.get~()를 string으로 바꿔줘야 함.
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 바로 시간이 나오게 하기 위해
setInterval(getClock, 1000);
