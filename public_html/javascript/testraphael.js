window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);
    var circle = paper.circle(250, 250, 200);
    circle.attr("stroke-width", "2");

    var orbitCircle = paper.circle(250, 50, 20);
    orbitCircle.attr("fill", "red")



}
