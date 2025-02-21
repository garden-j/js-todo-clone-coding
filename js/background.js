const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]; // 폴더 안 파일(이미지) 이름들 js에서도 똑같이 씀

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage); //body에 bgImage 추가(append)
