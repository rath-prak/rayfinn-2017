const btnAnimation = () => {
  let portfolioBtn = document.querySelector('.portfolio-btn');
  let portfolioBtnUnderline = document.querySelector('.portfolio-btn-underline');

  portfolioBtn.addEventListener('mouseover', () => {
    TweenMax.to(portfolioBtnUnderline, 0.5, {
        scaleX:1,
        ease: Power4.easeInOut,
      })
  })

  portfolioBtn.addEventListener('mouseout', () => {
    TweenMax.to(portfolioBtnUnderline, 0.5, {
        scaleX:0,
        ease: Power4.easeInOut,
      })
  })
}

export default btnAnimation;
