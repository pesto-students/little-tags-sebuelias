export function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // if any scroll is attempted,
  // set this to the previous value
  // eslint-disable-next-line func-names
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

export function enableScroll() {
  // eslint-disable-next-line func-names
  window.onscroll = function () {};
}
