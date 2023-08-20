let total = 0;
let productCount = 0;
let isCouponApplied = false;

function calculatePrice(target) {
   let product = getSingleProductInfo(target);
   total = total + parseFloat(product.price);

   const selectedItem = document.getElementById('selected-items');
   const li = document.createElement('li');
   productCount += 1;
   li.innerText = productCount + '. ' + product.name;
   selectedItem.appendChild(li);

   if (isCouponApplied) {
      const discountPrice = (total * 20) / 100;
      const netTotal = total - discountPrice;
      document.getElementById('total-price').innerText  = total;
      document.getElementById('total-discount').innerText = discountPrice;
      document.getElementById('net-total').innerText = netTotal;
   } else {
      const totalPrice = document.getElementById('total-price');
      totalPrice.innerText = total;

      const netTotal = document.getElementById('net-total');
      netTotal.innerText = total;
   }

  //coupon button enabled

   if (total >= 200) {
      document.getElementById('btn-coupon').disabled = false;
      
   }
   //purchase button enabled
   if(total> 0){
      document.getElementById('btn-purchase').disabled = false;
   }

}
function getSingleProductInfo(target) {
   const productPriceString = target.querySelector(".price-tag").innerText.split(' ')[0];
   const productPrice = parseFloat(productPriceString).toFixed(2);
   const productName = target.querySelector(".product-name").innerText;

   const productInfo = {
      name: productName,
      price: productPrice
   };
   return productInfo;



}
//apply coupon

function applyCoupon() {
   let couponCode = document.getElementById('coupon-code');
   if (couponCode.value === 'SELL200') {
      const discountPrice = (total * 20) / 100;
      const netTotal = total - discountPrice;
      document.getElementById('total-discount').innerText = discountPrice;
      document.getElementById('net-total').innerText = netTotal;
      isCouponApplied = true;
      couponCode.value ='';
      
      
   }else{
      alert('invalid coupon code');
   }

}

//reset modal button

function resetPage(){
   document.getElementById('btn-coupon').disabled = true;
   document.getElementById('btn-purchase').disabled = true;
   document.getElementById('total-price').innerText  = '00';
   document.getElementById('total-discount').innerText = '00';
   document.getElementById('net-total').innerText = '00';
   total = 0;
   productCount = 0;
   isCouponApplied = false;
   const selectedItem = document.getElementById('selected-items').innerHTML = '';

   
}


