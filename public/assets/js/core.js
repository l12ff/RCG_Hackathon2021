var socket = io();

function calculate(x1,y1,x2,y2){
  let d1 = Math.sqrt(x1*x1 + y1*y1);
  let d2 = Math.sqrt(x2*x2 + y2*y2);
  return Math.abs(x1*y2 - x2*y1)/(d1*d2);
}

function check(data1, data2, connected_part) {
  sum_error = 0;
  connected_part.forEach(part => {
    ux = data1[part.a].x - data1[part.b].x;
    uy = data1[part.a].y - data1[part.b].y;
    vx = data2[part.a].x - data2[part.b].x;
    vy = data2[part.a].y - data2[part.b].y;
    error_cost = calculate(ux, uy, vx, vy);
    sum_error += error_cost;
    // console.log(error_cost);
  })
  // console.log(sum_error);
  return sum_error < 2,5;
}

let muctieu = undefined; 
let cacphannoinhau = undefined;
let lienket = undefined;
let id = 0;

socket.on('localData', (goal, connected_part, URLs) => {
  muctieu = goal;
  // console.log(goal);
  cacphannoinhau = connected_part;
  lienket = URLs;
  id = 0;
  $("#rest").attr("src", lienket[id])
})
