// Area of Rectangle

function rectangleArea(length, width) {
  const area = length * width;
  if (area <= 0) {
    console.log("Check the inputs!");
  } else {
    console.log("Area of the rectangle is : " + area);
  }
}

rectangleArea(-10, 50);
