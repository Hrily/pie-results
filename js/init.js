(function($){
  $(function(){

    $('.button-collapse').sideNav();
    renderGraphs();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function folderName2Title(folder) {
  return folder.substring(2).split('+').join(' ');
}

var folders = [
  "1-Updated+DQ_THRESHOLD",
  "2-Updated+REF_DELAY",
  "3-Updated+T_UPDATE",
  "4-Updated+Burst+Time",
  "5-Auto+Tuning",
  "6-Derandomization",
  "7-Active-Inactive"
]

var tests = {
  "tcp_1up" : "TCP 1UP",
  "tcp_5up" : "TCP 5UP",
  "tcp_5up_udp" : "TCP 5UP with UDP",
  "tcp_50up" : "TCP 50UP"
}

var graphs = {
  ".png" : "Queue Delay",
  ".prob-drops.png" : "Drops",
  ".prob.png" : "Probability",
  "-thr.png" : "Throughput",
}

function renderGraphs () {
  for (let folder of folders) {
    var item_html = `<li>
      <div class="collapsible-header left-align"><b>${folderName2Title(folder)}</b></div>
      <div class="collapsible-body">`;
    for (let test in tests) {
      item_html += `<h4>${tests[test]}</h4>
        <div class="row">`;
      for (let graph in graphs) {
        let image = "images/" + folder + "/" + test + graph;
        item_html += `<div class="col s12 m6 center-align">
          <img src="${image}" style="width: 100%"/>
          ${graphs[graph]}
          </div>`;
      }
      item_html += "</div><hr/>";
    }
    item_html += "</div></li>";
    $('#graphs').append(item_html);
    $('.collapsible').collapsible();
    $('.collapsible li').click(function() {
      setTimeout(() => {
        window.scrollTo({
          top: $('.collapsible').offset().top,
          left: $('.collapsible').offset().left,
          behavior: 'smooth'
        });
      }, 400);
    })
  }
}