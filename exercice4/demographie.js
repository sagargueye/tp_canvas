$echelle='<div><h3>Echelle utilisée</h3>' +
  '<p>Année: 15px <br>Population: 1/5.000.000 <br>' +
  'on affiche une donnée sur 4 pour eviter la surcharge du diagramme</p>' +
  '</div>';

//je definie un string '$diagram' dans le quel je remplis dynamiquement le html du svg
var diagram=$echelle+'  <svg height="1800" version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph" aria-labelledby="title" role="img">' +
  '    <title id="title">A line chart showing some information</title>' +
  '    <g class="grid x-grid" id="xGrid">' +
  '      <line x1="90" x2="90" y1="0" y2="671"></line>' +
  '    </g>' +
  '    <g class="grid y-grid" id="yGrid">' +
  '      <line x1="90" x2="5000" y1="670" y2="670"></line>' +
  '    </g>';

//on va aller recuperer les données dans le json
var request = new XMLHttpRequest();
request.open('GET', "https://johnsamuel.info/fr/enseignement/cours/2019/TLI/population.json");
request.responseType = 'json';
request.send();
request.onload = function() {
  var datas = request.response;
  $y=670;
  $x=90;
  $i=0;
  $absisse='<g class="labels x-labels">';
  $ordonnes='<g class="labels y-labels">';
  $point='<g class="data" data-setname="Our first data set">';
  datas.forEach(function (elm) {
    $x+=15;
    $y-=elm.population/5000000;
    //on affiche une donnée sur 4 pour eviter la surcharge du diagram
    if($i%4==0) {
      $absisse += '<text x="' + $x + '" y="700">' + elm.year + '</text>';
      $ordonnes += '<text x="80" y="' + $y + '">' + elm.population + '</text>';
    }
    $point+='<circle cx="'+$x+'" cy="'+$y+'" data-value="7.2" r="4"></circle>';
    $i++;
  });
  $absisse+='<text x="400" y="750" class="label-title">Année</text></g>';
  $ordonnes+='<text x="80" y="280" class="label-title" transform="rotate(-90 50,320)"> Population</text></g>';
  $point+='</g>';

  diagram+=$absisse+$ordonnes+$point+'</g></svg>';
  $(".content").html(diagram);
};

