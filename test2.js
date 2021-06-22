//For the html button
function tommyFunction() {
  //displaying to the <p> in html
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

  function thisOne() {
    myDisplayer("This Runs First, <br> But It Shouldn't...");
  }

  function thatOne() {
    myDisplayer("And Now Where Did This Come From");
  }

  thisOne();
  //thatOne should run first but the asynchronous setTimeout holds off thatOne allowing thisOne to run
  setTimeout(() => {
    thatOne();
  }, 4000);
}
