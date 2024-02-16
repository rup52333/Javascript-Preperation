let label=document.getElementById("label")
let shoppingCart=document.getElementById("shopping-cart")
let basket=JSON.parse(localStorage.getItem("basketdata"))||[];
let maindata=JSON.parse(localStorage.getItem("maindata"))||[]
function calculation() {
    let cartIcon = document.getElementById("cartAmount");

    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}
calculation()

function update(id) {

    let search=basket.find((item)=>{
    return item.id===id
    })
    document.getElementById(id).innerHTML=search.item;
    calculation();
    totalBill();
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
    displayCartItems();
    

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
    displayCartItems();

}

function onCancel(id) {

basket=basket.filter((x)=>x.id!==id)
displayCartItems();
 totalBill();   
}








function displayCartItems() {
if(basket.length!==0){
return(
shoppingCart.innerHTML=basket.map((x)=>{
const {id,item}=x;
let search=maindata.find((x)=>x.id===id)
console.log(search);

return `

<div class="cart-item">
 <img src="${search.thumbnail}" alt=""  width="100px" height="100%">
 <div class="details">
 <div class="title-price-x">
 <div class="title-price">
 <p>${search.title}</p>
 <h4 style=" background-color: #212529;height:25px;
 color: white;
 border-radius: 4px;
 padding: 3px 6px;">$${search.price}</h4>
 </div>
 <i class="bi bi-x-lg" onclick="onCancel(${id})"></i>
 </div>
 
 <div class="buttons" style="display:flex;justify-content:start;font-weight:bold">
 <i class="bi bi-plus-lg" onclick="increment(${id})" ></i>
 <div id=${id}  class="quantity">${item===undefined?0:item}</div>
<i class="bi bi-dash-lg" onclick="decrement(${id})"></i>
 </div>
 <h3>$ ${item*search.price}</h3>
  </div> 
</div>



`

}).join("")




)



}
else {
  shoppingCart.innerHTML=''
   label.innerHTML=`
   <h2 id="head">Cart is Empty</h2>
   <a  href="index.html">    
   <br>
   <button id="HomeBtn">Back to home</button>
   </a>
   
   `


}
       
}

displayCartItems()

 function clearCart(){
    basket=[]
    displayCartItems();
    calculation();
    localStorage.setItem("basketdata",JSON.stringify(basket))
    
    }




function totalBill() {
if(basket.length!==0){

let ammount=basket.map((x)=>{
let {id,item}=x;
let search=maindata.find((x)=>x.id===id)||[]
return item*search.price;
}).reduce((a,b)=>a+b,0) 
label.innerHTML=`
<h2>Total Bill:$${ammount}</h2>
<button type="button" class="btn btn-success">Check out</button>
<button type="button" onclick="clearCart()"  class="btn btn-danger">Clear Cart</button>

`
}
else{
    return;
}
    
}

totalBill();


















