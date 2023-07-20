const Page = {
  init: function() {
    const glide = new Glide('.glide', {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: false,
    }).mount();
  }
};

window.addEventListener('load', function page_onLoad() {
  window.removeEventListener('load', page_onLoad);
  Page.init();
});
