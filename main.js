gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  gsap.to(".ball-1", {
    x: 500,
    scrollTrigger: {
      trigger: ".ball-1",
      start: "top 50%",
    },
  });

  gsap.from(".ball-2", {
    x: 300,
    scale: 2,
    duration: 5,
    scrollTrigger: {
      trigger: ".ball-2",
      start: "top 50%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".ball-3", {
    x: 500,
    stagger: 0.1,
    duration: 1,
    ease: "elastic.out(1,0.3",
    scrollTrigger: {
      trigger: ".ball-3",
      start: "top center",
      end: "+=300px",
      scrub: true,
      pin: document.querySelector(".ball-3").parentElement,
    },
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball-5",
      start: "top center",
      end: "+=600px",
      scrub: true,
      pin: document.querySelector(".ball-5").parentElement,
    },
  });

  tl.to(".ball-5", {
    x: 500,
  })
    .to(".ball-5", {
      y: 300,
    })
    .to(".ball-5", {});
});
