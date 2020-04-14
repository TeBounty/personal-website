// Animation des barres de progession "Compétences"

window.onload = start;

function start () {
  function timer(p,n) {
    n=Math.min(n,p.attr("aria-valuenow"));
    p.css("width", n + "%").text(n+"% Complete");
    if(n < p.attr("aria-valuenow")) {

      setTimeout(function() {

        timer(p, n + 10);

      }, 200);
    }
  }

  $(".progress-bar").each(function(i,pb){

    timer($(pb),0); 

  });
  
}
