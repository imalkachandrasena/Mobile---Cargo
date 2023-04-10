// import {addToCartButtons,product_image,product_title,product_price} from './ap1.js's

// console.log(product_image,product_title,product_price)
//checking wheather the js file loaded first or not
if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

//the main ready function
function ready(){

    //remove button function
    var removebutton = document.getElementsByClassName('removebtn');
    for (var i = 0; i < removebutton.length; i++){
        var remove = removebutton[i]
        remove.addEventListener('click', function(event){
            var buttonclicked = event.target
            buttonclicked.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }

    //change the quantity input function
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) 
    {
        let input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    } 

     

    //purchase button function
    document.getElementsByClassName('p-btn')[0].addEventListener('click',purchaseclicked)

}

//creating function for purchasing
function purchaseclicked(){
    alert('Thank you for doing business with us.');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

//creating function for changing the quantity input
function quantityChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0)
    {
        input.value = 1
    }
    updateCartTotal()
}






//upadate cart total function
function updateCartTotal(){
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartrows =  cartItems.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartrows.length; i++){
        var cartrow = cartrows[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartrow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = "Rs."+total
}