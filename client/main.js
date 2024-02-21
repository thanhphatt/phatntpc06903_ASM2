// var pro_hotdeal = products.filter(function(item){
//     return item.cate_id==1;
// })
// console.log(pro_hotdeal);

// var pro_donghochauau= data.filter(function(item){
//     return item.hotdeal=='đồng hồ châu âu'
// })
// console.log(pro_donghochauau);

// var pro_donghochaua= data.filter(function(item){
//     return item.category=='đồng hồ châu á'
// })
// console.log(pro_donghochaua);
// var pro_donghochauphi= data.filter(function(item){
//     return item.hotdeal==3
// })
// console.log(pro_donghochauphi);

// const cate_hotdeal = document.querySelector("#hotdeal")
// const cate_donghochaua = document.querySelector("#chaua")
// const cate_donghochauphi = document.querySelector("#chauphi")

// pro_hotdeal.forEach(function(item){
//     cate_hotdeal.innerHTML +=`
//     <div class="box">
//     <div class="box-content">
//       <div class="img-box">
//         <img src="images/${item.image}" alt="">
//       </div>
//       <div class="detail-box">
//         <div class="text">
//           <h6>
//            ${item.name}
//           </h6>
//           <h6>
//           ${item.category}
//          </h6>
//           <h5><del>${item.price}</del></h5>
//           <h5>
//            ${item.sale} <span>VND</span>
//           </h5>

//         </div>
//         <div class="like">
//           <h6>
//              ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//           </h6>

//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         Add To Cart
//       </a>
//     </div>
//   </div>
//     `
// })
// pro_donghochauau.forEach(function(item){
//     cate_donghochauau.innerHTML +=`
//     <div class="box">
//     <div class="box-content">
//       <div class="img-box">
//         <img src="images/${item.image}" alt="">
//       </div>
//       <div class="detail-box">
//         <div class="text">
//           <h6>
//            ${item.name}
//           </h6>
//           <h6>
//           ${item.category}
//          </h6>
//           <h5><del>${item.price}</del></h5>
//           <h5>
//            ${item.sale} <span>VND</span>
//           </h5>

//         </div>
//         <div class="like">
//           <h6>
//              ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//           </h6>

//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         Add To Cart
//       </a>
//     </div>
//   </div>
//     `
// })
// pro_donghochauphi.forEach(function(item){
//     cate_donghochauphi.innerHTML +=`
//     <div class="box">
//     <div class="box-content">
//       <div class="img-box">
//         <img src="images/${item.image}" alt="">
//       </div>
//       <div class="detail-box">
//         <div class="text">
//           <h6>
//            ${item.name}
//           </h6>
//           <h6>
//           ${item.category}
//          </h6>
//           <h5><del>$${item.price}</del></h5>
//           <h5>
//            ${item.sale} <span>VND</span>
//           </h5>

//         </div>
//         <div class="like">
//           <h6>
//              ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//           </h6>

//         </div>
//       </div>
//     </div>
//     <div class="btn-box">
//       <a href="">
//         Add To Cart
//       </a>
//     </div>
//   </div>
//     `
// })
// pro_donghochaua.forEach(function(item){
//   cate_donghochaua.innerHTML +=`
//   <div class="box">
//   <div class="box-content">
//     <div class="img-box">
//       <img src="images/${item.image}" alt="">
//     </div>
//     <div class="detail-box">
//       <div class="text">
//         <h6>
//          ${item.name}
//         </h6>
//         <h6>
//         ${item.category}
//        </h6>
//         <h5><del>$${item.price}</del></h5>
//         <h5>
//          ${item.sale} <span>VND</span>
//         </h5>

//       </div>
//       <div class="like">
//         <h6>
//            ${item.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
//         </h6>

//       </div>
//     </div>
//   </div>
//   <div class="btn-box">
//     <a href="">
//       Add To Cart
//     </a>
//   </div>
// </div>
//   `
// })
let cart = [];
const API_URL = "http://localhost:3000/";
function hienthi() {
  let html = "";
  fetch(API_URL + "products").then(function (response) {
    response.json().then(function (data) {
      const cai_sanpham = document.getElementById('hienthi');
      data.forEach((element) => {
        html += `
      <div class="box" id="${element.id}">
       <div class="box-content">
         <div class="img-box"><a href="./products-detail.html">
           <img src="images/${element.image}" alt=""></a>
         </div>
         <div class="detail-box">
           <div class="text">
             <h6>Tên:
              ${element.name}
             </h6>
             <h6>Giá tốt:
             <span>
             ${element.price}
             </span>
            </h6>
            
          
            
               
             
         
           </div>
           <div class="like">
             <h6>đánh giá:
             ${element.star} <i class="fa fa-star star_container"" aria-hidden="true"></i>
             </h6>
            
         
           </div>
         </div>
       </div>
       <div class="btn-box">
       
        
        <button style=" height: 35px; border-radius: 20px; text-align: justify; border: none; background-color: gold; color: #fff;" type="submit" name="them" onclick="addToCart(${element.id})" >
                 thêm vào giỏ
                </button>

        </button>
        </a>
      </div>
     </div>
      `;
      });
      cai_sanpham.innerHTML = html;
    });
    
  })
  .catch(error => {
    // Handle error
});

}
// Hàm để thêm sản phẩm vào giỏ hàng
let addToCart = function (productId) {
  let existingProduct = cart.find(item => item.id === productId);
  
  if (existingProduct) {
      existingProduct.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật giỏ hàng trong localStorage
      window.location.href = "giohang.html";
  } else {
      fetch(API_URL + 'products/' + productId)
          .then(response => response.json())
          .then(product => {
              product.quantity = 1;
              cart.push(product);
              updateCartCount();
              console.log('Product added to cart:', product);
              localStorage.setItem('cart', JSON.stringify(cart)); // Cập nhật giỏ hàng trong localStorage
              window.location.href = "giohang.html";
          })
          .catch(error => {
              console.error('Error fetching product:', error);
          });
  }
};
let updateCartCount = function () {
  const cartCountElement = document.getElementById('cartCount'); // Truy xuất phần tử theo ID
  cartCountElement.textContent = cart.length; // Hiển thị số lượng sản phẩm trong giỏ hàng
};

hienthi();

