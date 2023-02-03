const shoppingCart = [
    {name: 'shirt', price: 400},
    {name: 'pant', price: 1200},
    {name: 'belt', price: 200},
  ];
  
  function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length;i++){
       const product = products[i]; 
       sum + product.price;    
  
    }
    return sum;
  }
  const totalPrice = totalCost(shoppingCart);
  console.log(totalPrice);
  