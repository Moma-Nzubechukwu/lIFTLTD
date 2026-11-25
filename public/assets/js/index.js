const landingPageVideo = document.getElementById("landing-video");
const mainLeftSectionInnerContainer = document.getElementById("main-left-section-inner-container");
const whatWeOfferBodySection = document.getElementById("what-we-offer-body-section");
const aboutUsBodyLeftSection = document.getElementById("about-us-body-left-section");
const hamburgerMenuBtn = document.getElementById("hamburger-menu-btn");
const headerMiddleSection = document.getElementById("header-middle-section");
const howItWorksBodySection = document.getElementById("how-it-works-body-section");
// console.log(whatWeOfferBodySection.children.map((i)=>i.classList))
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("js-fade-out")
        }
    })
})


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            let delay = 0;

            for (const element of entry.target.children) {

                setTimeout(() => {
                    element.classList.remove("js-fade-out");
                }, delay);

                delay += 300;
            }
        }
    })
})
observer.observe(mainLeftSectionInnerContainer)
observer.observe(aboutUsBodyLeftSection)
observer2.observe(whatWeOfferBodySection)
observer2.observe(howItWorksBodySection)




hamburgerMenuBtn.addEventListener("click", (ev) => {
    // alert(666)
    headerMiddleSection.classList.toggle("css-middle-section-active")

})





setInterval(() => {
    landingPageVideo.pause()
    landingPageVideo.currentTime = 0
    landingPageVideo.play()
}, 10000);
// setTimeout(() => {
//     mainLeftSectionInnerContainer.classList.remove("js-fade-out")
// }, 1000);