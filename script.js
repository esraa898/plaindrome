var add = document.getElementById("add");
var plain = document.getElementById("addplain");
var res = document.querySelector(".res");

add.addEventListener("click", () => {
  // first use split to put it in arry and use "" to seperate the word
  // revere it to check if its the same or not
  //then join it again in string and adding "" to concatinate it togther

  var string = plain.value.split("").reverse().join("");
  if (string == plain.value && plain.value !== "") {
    res.innerHTML = `<p> ${plain.value} is aplindrome <i class="fas fa-check"></i></p`;
    return true;
  } else {
    res.innerHTML = `<p> ${plain.value} is not aplindrome <i class="fas fa-times"></i></p`;
    return false;
  }
});
