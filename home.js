let item="";
let color="";
let amount;
let size="";
let quantity=0;

function goToCart(item,color,size,quantity,amount){
     if(document.getElementById("add").onclick)
    {
        quantity+=1;
        let amount=price*quantity;
        let orders=[item,color,size,quantity,amount];
        document.getElementById("cart").innerHTML= orders;
    }

}return orders;

document.getElementById("benny").onclick=function(){
    goToCart("Beany","White","One size fits all",quantity,amount);
}

goToCart("Beany","White","One size fits all",quantity,amount);
goToCart("Beany","Lime","One size fits all",quantity,amount);
goToCart("Beany","Pink","One size fits all",quantity,amount);
goToCart("Beany","Orange","One size fits all",quantity,amount);
goToCart("Beany","Black","One size fits all",quantity,amount);