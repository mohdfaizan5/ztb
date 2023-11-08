const imgs = ['static/assets/img1.jpg',
  'static/assets/img2.jpg',
  'static/assets/img3.jpg',
  'static/assets/img4.jpg',
  'static/assets/img5.jpg',
  'static/assets/img6.jpg',
  'static/assets/img7.jpg',
  'static/assets/img8.jpg',

]
let imgNo = 0

const animationCurves = [13,-13, 10, -10, 7, 0, 7, ]
let animationCount = 0

const heroSection = document.querySelector('.hero_section')

// heroSection.addEventListener("mousemove", (event)=>{
//   console.log("hi")
// })


// Throttling Function
const throttleFunction = (func, delay) => {

  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously 
    // called and current called timings

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here 
      // returning the function with the 
      // array of arguments
      return func(...args);
    }
  }
}


heroSection.addEventListener("mousemove", throttleFunction((event) => {

  const div = document.createElement('div')
  div.classList.add('image_popup_div')

  div.style.left = event.x + "px"
  div.style.top = (event.y - 250) + "px"

  // Rotating the images
  div.style.transform = `rotateZ(${animationCurves[animationCount]}deg)`
  animationCount += 1

  if (animationCount == (animationCurves.length - 1)) {
    animationCount = 0
  }

  const image = document.createElement('img')



  image.setAttribute('src', imgs[imgNo])

  imgNo += 1

  if (imgNo === (imgs.length - 1)) {
    imgNo = 0
  }

  div.appendChild(image)

  document.body.appendChild(div)


  gsap.to(image, {
    y: "0",
    ease: Power1,
    duration: .4
  })
  gsap.to(image, {
    // y: "0",
    ease: Power1,
    delay: .4,
    duration: .4
  })


  gsap.to(image, {
    y: "100%",
    delay: 0.7,
    duration: 0.2,
    ease: Power3
  })

  setTimeout(function () {
    div.remove()
  }, 2000)
  console.log('hi')
}, 200));

// Mouse animation:
const btn = document.querySelector('.btn1')

btn.addEventListener("movemove", function(event){
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
})