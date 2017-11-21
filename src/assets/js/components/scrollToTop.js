const scrollToTop = () => {
  let backTopBtn = document.querySelector('.backtop-btn');

  backTopBtn.addEventListener( "click", () => {
    $('html, body').animate({scrollTop : 0}, 500);
		return false;
  });
}

export default scrollToTop
