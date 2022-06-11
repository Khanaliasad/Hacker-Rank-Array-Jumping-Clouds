import "./styles.css";

let test1 = [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0];
let test2 = [0, 1, 0, 0, 0, 0];
// i==Cursor
// let Count = 0;
function jumpingOnClouds(c) {
  let Count = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] !== undefined) {
      console.log(c.length - 1);
      console.log(i);
      if (c[i + 1] == 1 && c[i + 2] == 0) {
        Count += 1;
        i++;
      } else if (c[i + 1] == 0 && c[i + 2] == 0) {
        Count++;
        i++;
      } else if (c[i + 1] == 0 && c[i + 2] == 1) {
        Count++;
      }
    } //first if
    else if (c[i + 1] == 0) {
      console.log(i);
      Count++;
    } else if (c[i + 1] == undefined) {
      // break;
      console.log(i);
    }
  } //for loop ends

  console.log("count is", Count);
  return Count;
}

let clg1 = jumpingOnClouds(test1);
let clg2 = jumpingOnClouds(test2);

document.getElementById("app1").innerHTML = clg1;
document.getElementById("app2").innerHTML = clg2;
