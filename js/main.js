'use strict'
// 
{
  const titlePics = document.querySelectorAll('.titlePic');
  const mainImge = document.getElementById('main-imge');
  const next = document.getElementById('next')
  const prev = document.getElementById('prev')
  
  let activeIndex = 0;


  next.addEventListener('click', () => {
    titlePics.forEach(element => {
      titlePics[activeIndex].classList.remove('active')
    }); 
    activeIndex++;
    if (activeIndex === titlePics.length ) {
      activeIndex = 0;
      }

      mainImge.src = titlePics[activeIndex].src;
      titlePics[activeIndex].classList.add('active');
  });
  
  prev.addEventListener('click', () => {
    titlePics.forEach(element => {
      titlePics[activeIndex].classList.remove('active')
    });
    if (activeIndex === 0 ) {
      activeIndex = titlePics.length -1 ;
    } else {
      activeIndex--
    }
      mainImge.src = titlePics[activeIndex].src;
      titlePics[activeIndex].classList.add('active');
  });
  
  
    

  // titlePics[1].addEventListener('click', () => {
  //   mainImge.src = titlePics[1].src;
  //   titlePics[1].classList.add('active');
  //   titlePics[0].classList.remove('active')
  // });



// accordion

  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear')

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}
