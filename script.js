var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React'],
    datasets: [{
      label: '# of Tomatoes',
      data: window.chartsData,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ]
    }]
  }
});

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

  loader();
})();

function loader() {
    var loader = $('.loader');
    loader.addClass('invisible');
    setTimeout(
        function(){
            loader.addClass('none');
        },
        500
    );
}

$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var id = $(e.target).attr('href');
    var boxOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: boxOffset
    }, 400);
});

menu.onclick = function myFunction(){
  var x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
    x.className += " responsive";
  }
  else{
    x.className = "topnav";
  }
}