let cart = [];
const API_URL = "http://localhost:3000/";
function showProduct() {
  let stt = 1;
  let html = "";
  fetch(API_URL + "products")
    .then((response) => response.json())
    .then((data) => {
      const shows = document.getElementById("sanpham");
      data.forEach((element) => {
        html += `
                <tr>
                <td class="cell">${stt++}</td>
                <td class="cell">${element.id}</td>
                <td class="cell"><span class="truncate">${
                  element.name
                }</span></td>
                <td class="cell">${element.price}</td>
                <td class="cell">${element.sale}</td>
                <td class="cell"><img src="../client/images/${
                  element.image
                }" width="100px height="100px"></td>
                <td class="cell">
                    <a class="btn-sm app-btn-secondary bg-info" href="#">Sửa</a>
                    
                    <a class="btn-sm app-btn-secondary bg-danger text-white" value="xoá" onclick="detele(${element.id})">Xóa</a>
                </td>
            </tr>
                `;
      });
      shows.innerHTML = html;
    })
    .catch((error) => {});
}



showProduct();

// const addmodal = document.querySelector("#addmodal");
// const closeadd = document.querySelector(".close");
// document.querySelector("#themsanpham").onclick = function () {
//   addmodal.style.display = "block";
// };
// closeadd.onclick = function () {
//   addmodal.style.display = "none";
// };

// var star = 0;
// document.querySelector("#star").onchange = function () {
//   if (this.checked) {
//     star = 1;
//   } else {
//     star = 0;
//   }
// };

// var data = {};
// document.querySelector("#addpro").onclick = function () {
//   const name = document.querySelector("#name").value;
//   const image = document.querySelector("#image").value.split("\\").pop();
//   const price = document.querySelector("#price").value;
//   const categories = document.querySelector("#categories").value;
//   const sale = document.querySelector("#sale").value;
//   const star = document.querySelector("#star").value;
//   const detail = document.querySelector("#detail").value;
//   console.log(name + image + price + categories + sale + star + detail);
//   const pro = {
//     name: name,
//     image: image,
//     price: price,
//     sale: sale,
//     detail: detail,
//     categories: categories,
//     star: 5,
//   };

//   data.push(pro);
//   addmodal.style.display = "none";
//   showProduct();
// };









//gửi yêu cầu thêm sản phẩm

function sendData(data,callback){
    var options = {
       method : 'POST',
       headers: {
           'Content-Type':'application/json'
       },
       body : JSON.stringify(data)
      
    };
    fetch(API_URL + "products",options)
       .then(function(response){
           response.json();;
       })
       .then(callback);
   }
   //thêm sản phẩm
   function addProduct(){
       var addProduct = document.querySelector('#addpro');
       addProduct.onclick = function(){
          var name = document.querySelector('input[name="name"]').value;
          var price = document.querySelector('input[name="price"]').value;
          var image = document.querySelector('input[name="image"]').value.split('\\').pop();
          var detail = document.querySelector('input[name="detail"]').value;
          var cate_id = document.querySelector('input[name="cate_id"]').value;
          var sale = document.querySelector('input[name="sale"]').value
          var product= {
           name : name,
           price : price,
           image: image,
           detail:detail,
           cate_id:cate_id,
           sale:sale
          }
          if(!name || !price || !image || !detail || !cate_id || !sale ){
           alert('Thêm sản phẩm thất bại. Vui lòng nhập đầy đủ thông tin sản phẩm');
          }else{
           sendData(product);
           alert('Thêm sản phẩm thành công!');
           window.location.href="./list-product.html";
          }
          
       }
   }
   addProduct();

   //xóa sản phẩm
function detele(id) {
  var options = {
      method : 'DELETE',
      headers: {
          'Content-Type':'application/json'
      }
   };
   fetch(API_URL + 'products' + '/'+ id ,options)
      .then(function(response){
          response.json();;
      })
      .then(function(){
          var deteleItem = document.querySelector('.product' + id);
          if(deteleItem){
              deteleItem.remove();
             
          }
      });
}


