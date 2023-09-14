const input = document.getElementById("input");
const fName =  document.getElementById("fName");
const lName = document.getElementById("lName");
const country = document.getElementById("country");
const score = document.getElementById("score");
const Add = document.getElementById("Add");
const output = document.getElementById("output");

// console.log(fName.value);


Add.addEventListener("click",function(){

    const firstName = fName.value;
    const lastName = lName.value;
    const userCountry = country.value;
    const userScore = score.value;
    const newOutput = document.createElement("div");
    newOutput.id = "newOutput";

    newOutput.innerHTML = `
    
       <span>  ${firstName} ${lastName}  </span>
       <span> ${userCountry} </span>
       <span>${userScore}    </span>
       <span> <h2 class="delete"> - </h2> </span>
       <span> +5 </span>
       <span> -5 </span>
   
`;
   output.appendChild(newOutput);



////////////////////////////////////////////

fName.value = "";
lName.value = "";
country.value = "";
score.value = "";

sortBoard();


const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Get the parent element (user-info div) and remove it
        const userInfoDiv = button.closest('#newOutput');
        userInfoDiv.remove();

});
});
});

function sortBoard() {
    const Score = document.querySelectorAll("#newOutput");
    const arr = [];
   Score.forEach((ele) => arr.push(ele));
  const sortedArray =   arr.map((ele) =>{
          return ele;
   }).sort((a,b) =>{
      let runOfManOne = parseInt(a.children[2].textContent);
      let runOfManTwo = parseInt(b.children[2].textContent);
      if(runOfManOne > runOfManTwo){return -1;}
      if(runOfManOne < runOfManTwo){return 1;}
   });
       sortedArray.forEach((ele)=>{
        output.append(ele);
       })
}




