const inputValue = document.getElementById("searchProduct");
const serachButton = document.getElementById("searchButton");

serachButton.onclick = async function () {
  
    await fetch(
    `http://localhost:8080/product/search?key=${inputValue.value}`
  );
//   const newResponse = await response.json();

};
