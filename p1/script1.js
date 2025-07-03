
const breedListUrl = "https://dog.ceo/api/breeds/list/all"
const breedList = document.getElementById("breed_list")


window.addEventListener("load", displayBreedList);

async function getBreedlist(){
  return fetch(breedListUrl).then(response => response.json());

}

function displayBreedList(){
  getBreedlist().then(function(data){
    for(e in data.message){
      let option = document.createElement("option");
      option.textContent = e;
      breedList.appendChild(option)
    }
  });

}

