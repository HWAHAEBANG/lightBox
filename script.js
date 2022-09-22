document.addEventListener('click', lightbox);

function lightbox(ev){
  let elem = ev.target; // 클릭한 그 요소가 무엇인지 elem에 저장
  // console.log(elem);
  let elemId = elem.getAttribute('id'); // 클릭한 요소의 Id명을 elemId에 저장
  // console.log(elemId);
  let lightBoxImg = document.getElementById('lightbox-image');
  let lightBox = document.getElementById('lightbox-overlay');
  let newImg =  new Image();  
  // 이미지의 경로가 없으면 화면에 출력이 안 되니까. 생성자체가 안 되니. 새로운 이미지 요소를 생성
  
  /* 
  let img = new Image(); => 이미지 태그를 만들어줌
  img.src = "새로운 값" => 그 태그의 src에 data-lightbox 값을 를 넣어줌.
  A.src = "b" a요소의 src의 속성값을 b로 교체하다.

  A.getAttribute(b) = A요소의 b라는 속성의 값을 가져온다.
  A.hasAttritute(b) = A요소가 b라는 속성이 있는지,
  없는지. true, false

  .onload 화면에 로드가 되면 할 일
  */

if(elem.hasAttribute('data-lightbox')){
  ev.preventDefault(); // 링크의 기본속성(기능)은 막고  

  newImg.onload = function(){ // 이미지가 로드되면
    lightBoxImg.src = this.src; // 사용자가 클릭한 것의 src
    // 중요!! 기존 html코드에 lightbox img의 코드가 비어있는데 그러면 img태그 자체가 로드되지 않기 떄문에
    // this.src를 할당해서, 태그를 정상적으로 만든 후 밑에서 값을 바꾸는 것,
    console.log(this.src);
  }
  
  // 새로 생성 된 이미지에 src속성을 빈 속성을 넣는다
  //lightBoxImg.src = ''; // 사실 비우지 않아도 새로 할당하면 사라지니 굳이 불필요하긴하다.
  newImg.src = elem.getAttribute('data-lightbox'); // data-lightbox의 값을 가져온다.
  lightBox.classList.add('visible');
  // console.log(elem.getAttribute('data-lightbox'));
}

// 클릭 이벤트를  새로 지정해줘야하나, 맨위에서 문서 전체에 이벤트를 걸었으로 새로 안해도 괜찮다. 
if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image'){
  lightBox.classList.remove('visible');
}
}