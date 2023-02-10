const $ = (selector) => document.querySelector(selector);

var x = window.matchMedia("(min-width: 501px)");

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  
  if (x.matches) { // If media query matches
    if (scrollTop > 870) {
      $('.odeto').classList.add('on');
    }
  }
  

});

if (x.matches) { // If media query matches
gsap.to('.fix01', {
            
  scrollTrigger: {
    trigger: ".trigger01",
    start: "top top",
    end: 'bottom bottom',
    pin: true,
    pinSpacing: false,
    scrub: true,
  }
});

let mtTwo = $('.maintitle01').querySelectorAll('.two');

gsap.to(mtTwo[0], {
    
  width: 229,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[1], {
    
  width: 332,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[2], {
    
  width: 221,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[3], {
    
  width: 163,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[0], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[1], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[2], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[3], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to('.boat', {
    
    rotation: 0,
      scrollTrigger: {
      trigger: "#section01",
      start: "2000 top",
      end: '+=2000',
      scrub: true,
      }
});

gsap.to('.boat', {
    
  y: -600,
    scrollTrigger: {
    trigger: "#section01",
    start: "10000 top",
    end: '+=2000',
    scrub: true,
    }
});

gsap.to('.boatmobile', {
  
  y: 2000,    
    scrollTrigger: {
    trigger: "#section03",
    start: "top top",
    end: '+=3000',
    scrub: true,
    }
});

gsap.to('.boatmovement', {
  
  y: 3760,    
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1500',
    scrub: true,
    }
});

}

// mobile

gsap.to('.fix06', {
            
  scrollTrigger: {
    trigger: ".trigger06",
    start: "top top",
    end: 'bottom bottom',
    pin: true,
    pinSpacing: false,
    scrub: true,
  }
});

gsap.to('.poster01', {
  
  x: -150,
  y: -150,
  rotation: -400,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.poster02', {
  
  x: 160,
  y: -150,
  rotation: 400,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.poster03', {
  
  x: 130,
  y: 150,
  rotation: -400,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});


gsap.to('.poster04', {
  
  x: -170,
  y: 150,
  rotation: 800,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.poster05', {
  
  x: -180,
  y: -350,
  rotation: 200,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.poster06', {
  
  x: -200,
  y: 0,
  rotation: 300,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.poster07', {
  
  x: -100,
  y: 0,
  rotation: 1000,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});

gsap.to('.poster08', {
  
  x: -250,
  y: 250,
  rotation: 200,    
    scrollTrigger: {
    trigger: "#section06",
    start: "top top",
    end: 'bottom bottom',
    scrub: true,
    }
});