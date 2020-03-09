const Page = {
  init: function() {
    const glide = new Glide('.glide', {
      type: "carousel",
      startAt: 0,
      perView: 4,
      gap: 40,
      autoplay: 2000,
      hoverpause: true,
      breakpoints: {
        959: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount();
  }
};

window.addEventListener('load', function page_onLoad() {
  window.removeEventListener('load', page_onLoad);
  Page.init();
});