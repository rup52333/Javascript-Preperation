const shop=document.getElementById("shop")
let searchInput=document.getElementById("searchinput")
searchInput.addEventListener("input",handleInput)

//practice *************
let golbal=[]
document.querySelector(".fa-search").addEventListener("click" ,()=>{
    displayProduct(JSON.parse(localStorage.getItem("filterprod")))
  } )
const suggestionsContainer = document.getElementById("suggestions");
let searchButton=document.getElementById("searchButton")
let timeoutId;
function handleInput() {
    const inputValue = searchInput.value.toLowerCase().trim();
   
    
    // Clear suggestions when the input is empty
    if (inputValue === "") {
        clearSuggestions();
        return;
    }
      
    // Debounce the input to reduce API requests
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
        const matchingProducts = getMatchingProducts(inputValue);
        suggestionsContainer.style.display='block';
        displaySuggestions(matchingProducts);
        localStorage.setItem("filterprod",JSON.stringify(matchingProducts))
       
        
    }, 1000);
}

function getMatchingProducts(inputValue) {
    const matchingProducts1 = golbal.filter(product => (
        product.title.toLowerCase().includes(inputValue) 
    ));
    const matchingProducts2 = golbal.filter(product => (
        product.category.toLowerCase().includes(inputValue) 
    ));
    const matchingProducts3 = golbal.filter(product => (
        product.brand.toLowerCase().includes(inputValue) 
    ));
    const combinedArray=[...matchingProducts1,...matchingProducts2,...matchingProducts3]
    return combinedArray;

}

function displaySuggestions(matchingProducts) {
    console.log(matchingProducts);
    suggestionsContainer.innerHTML = "";

    matchingProducts.forEach(product => {
        const suggestionItem = document.createElement("li");

        suggestionItem.textContent = `${product.title}`;
        suggestionItem.classList.add("suggestion");

        suggestionItem.addEventListener("click", () => {
        const arr= JSON.parse(localStorage.getItem("maindata")).filter((x)=>x.title===suggestionItem.textContent)
        displayProduct(arr)   
        });
        

        suggestionsContainer.appendChild(suggestionItem);
       
    });
}


function clearSuggestions() {
    suggestionsContainer.innerHTML = "";
    
}
document.addEventListener('click', function (event) {
    if (!event.target.closest('#searchinput') && !event.target.closest('#suggestion')) {
        suggestionsContainer.style.display = 'none';
    }
});











let basket= JSON.parse(localStorage.getItem("basketdata"))||[]
function update(id) {

    let search=basket.find((item)=>{
    return item.id===id
    })
    document.getElementById(id).innerHTML=search.item;
    calculation();
    }
    function calculation() {
        let cartIcon = document.getElementById("cartAmount");
        console.log(basket);
    
        cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    }
function increment(id) {
    let search=basket.find((x)=>{
    return x.id===id
    })
    if(search===undefined){
        basket.push({
            id:id,
            item:1
            })
    }
    else{
     search.item+=1
    }
    update(id)
      
    localStorage.setItem("basketdata",JSON.stringify(basket))
}
function decrement(id) {
let search=basket.find((x)=>{
    return x.id===id
    })
    if(!search){
        return
    }
   
    else{
     search.item-=1
    }
    update(id)
    basket=basket.filter((x)=>x.item!==0)
    localStorage.setItem("basketdata",JSON.stringify(basket))

}

function displayProduct(arr){
 
    return (shop.innerHTML = arr
        .map((x) => {
          let { id, brand,title, price, description, thumbnail,category } = x;
          let search = basket.find((x) => x.id === id) || [];
          return `
          <div id=prduct-id-${id} class="item">
          <img src="${thumbnail}" alt="">
          <div class="details">
             <h3>${brand}</h3>
             <h4>${title}</h4>
             <h6>${category}</h6>
             <p >${description}</p>
             <div class="price-quantity">
            <h3  id="price">$${price}</h2>
             <div class="buttons">
                 <i class="bi bi-plus-lg" onclick="increment(${id})" ></i>
                  <div id=${id}  class="quantity">${search.item===undefined?0:search.item}</div>
                 <i class="bi bi-dash-lg" onclick="decrement(${id})"></i>
             </div>
             </div>
          
          </div>
         
          </div>
         
        `;
        })
        .join(""));

}



document.addEventListener("DOMContentLoaded", ()=>{
    if(searchInput.value){
        displayProduct(JSON.parse(localStorage.getItem("filterprod")))
    }
    else{
        setTimeout(() => {
            fetch(`https://dummyjson.com/products`).then((res) => {
             
             return res.json();
             }).then((res) => {
                 
                 let arr = res.products;
                 localStorage.setItem("maindata" ,JSON.stringify(arr)      )
                 golbal=arr
                 displayProduct(arr);
                 calculation();
    
             }).catch((error) => {
                 console.log(error);
             });   
        }, 500);
    }

})





