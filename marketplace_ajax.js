$(document).ready(function(){

$("#loadProducts").click(function(){

$.ajax({

url:"products.json",
method:"GET",

success:function(data){

$("#productList").empty()

$.each(data,function(index,product){

$("#productList").append(

"<div class='product'>"+
"<h3>"+product.name+"</h3>"+
"<p>Farmer: "+product.farmer+"</p>"+
"<p>Price: ₹"+product.price+"/kg</p>"+
"<p>Available: "+product.quantity+" kg</p>"+
"<button class='book'>Pre-Book</button>"+
"</div>"

)

})

},

error:function(){
alert("Error loading products")
}

})

})

$(document).on("click",".book",function(){

alert("Product Pre-Booked Successfully")

})

})