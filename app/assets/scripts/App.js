import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

new ClientArea()
new StickyHeader();
//let revealOnScroll = new RevealOnScroll()
// instances of the RevealOnScroll class
// blueprint = reusable class
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu(); // create an new object
let modal // you want to save a new instance of a class into a variable if you're going to access it
// or call its methods later on 
// in this case, the user can click on the modal any time and so it runs the object openTheModal method




// performance ++ download only if needed
document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", event => {
    event.preventDefault()
    if (typeof modal == "undefined") {
      //import(/* webpackChunkName: "modal" */ './modules/Modal') returns a promise
      //meaning **we don't know how long this is going to take to complete** but
      //once it does finish loading that file then, we want to actually use it to create a new instance
      //of the class
      // console => network, restart wekbpack and change name with /* webpackChunkName: "modal" */
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}