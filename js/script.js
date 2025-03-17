//  xml http request

let divApi = document.getElementById("wrapper");

let request = new XMLHttpRequest();
request.open("GET", "https://reqres.in/api/unknown");

request.addEventListener("load", function () {
  let response = this.responseText;
  let responseJs = JSON.parse(response);
  console.log(responseJs);
  let ulItem = document.createElement("ul");

  responseJs.data.forEach((element) => {
    let liItem = document.createElement("li");
    liItem.textContent = `${element.name} ${element.color}`;
    liItem.style.backgroundColor = element.color;
    ulItem.appendChild(liItem);
  });

  divApi.appendChild(ulItem);
});

request.addEventListener("error", function () {
  let pError = document.createElement("p");
  pError.textContent = "Oopsy doopsy error!";

  divApi.appendChild(pError);
});

request.send();

// fetch

// let divApi = document.getElementById("wrapper");

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
// })
//   .then(function (data) {
//     console.log(data);
//     if (!data.ok) {
//       throw "Server Error";
//     }
//     return data.json();
//   })
//   .then(function (responseJs) {
//     console.log(responseJs);
//     let ulElement = document.createElement("ul");

//     responseJs.forEach((element) => {
//       let li = document.createElement("li");
//       li.textContent = `${element.company.name}`;
//       ulElement.appendChild(li);
//     });
//     divApi.appendChild(ulElement);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
