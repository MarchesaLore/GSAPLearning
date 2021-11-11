//gsap.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25});
//animate all object class circle
//duration 1sec
//comes up from the bottom up x 150px
//delay of .25 sec for each one

gsap.from(".circle", {duration: 1, opacity: 0, y: () => Math.random() * 400-200, stagger: 0.25});
//y random between -200px and + 200px

//can also be written:
//gsap.from(".circle", {duration: 1, opacity: 0, y: "random(-200,200)", stagger: 0.25});