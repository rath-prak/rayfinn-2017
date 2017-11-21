const overlayNav = () => {
  let overlayNav = document.querySelector('.overlay-nav');
  let portfolioBtn = document.querySelector('.portfolio-btn');
  let closeMenu = document.querySelector('.close-menu');

  const tl = new TimelineMax({ paused:true, reversed:true })
  tl.to(overlayNav, 1, { y: '100%', ease: Power2.easeOut })

  portfolioBtn.addEventListener('click', () => {
    tl.reversed() ? tl.restart() : tl.reverse();
  })

  closeMenu.addEventListener('click', () => {
    tl.reversed() ? tl.restart() : tl.reverse();
  })
}

export default overlayNav
