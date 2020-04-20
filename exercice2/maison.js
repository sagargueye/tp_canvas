function maison() {
  var id = document.getElementById("maison");
  var context = id.getContext("2d");
  context.strokeStyle =  "#ffb33c";
  context.lineWidth = 10;

  //La maison
  context.beginPath();
  context.rect(400, 200, 250, 200);
  context.lineTo(300,100);
  context.lineTo(550,100);
  context.lineTo(650,200);
  context.moveTo(300,100);
  context.lineTo(200,200);
  context.lineTo(200,400);
  context.lineTo(400,400);
  context.stroke();

  //l'arbre
  context.beginPath();
  context.fillStyle="brown";
  context.beginPath();
  context.rect(50, 250, 50, 150);
  context.fill();
  context.beginPath();
  context.fillStyle="green";
  context.moveTo(10,300);
  context.lineTo(150,300);
  context.lineTo(80,20);
  context.fill();

  //la fenetre et la porte
  context.beginPath();
  context.rect(400, 200, 250, 200);
  context.rect(250, 225, 75, 75);
  context.rect(475, 250, 100, 150);
  context.stroke();

}
maison();