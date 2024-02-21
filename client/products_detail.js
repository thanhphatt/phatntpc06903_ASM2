const API_URL = 'http://localhost:3000/';
let products =  (Name) => {
    fetch(API_URL + `${Name}`)
        .then(response =>  response.json())
           .then(data => {
                console.log(data);
                const pd_details = productsDetails(data);
                const id_products = document.getElementById('produc_details');
               id_products.innerHTML = pd_details;
            })
      
        .catch(function (error) {
            console.error('There was a problem with the products request:', error);
        });
}

products("products");


let productsDetails = (data) =>{
    const sanpham11 = data[0];
    return `  <form name="frmsanphamchitiet" id="frmsanphamchitiet" method="post"
    action="/php/twig/frontend/giohang/themvaogiohang">
    <input type="hidden" name="sp_ma" id="sp_ma" value="5">
    <input type="hidden" name="sp_ten" id="sp_ten" value="Samsung Galaxy Tab 10.1 3G 16G">
    <input type="hidden" name="sp_gia" id="sp_gia" value="10990000.00">
    <input type="hidden" name="hinhdaidien" id="hinhdaidien" value="samsung-galaxy-tab-10.jpg">

    <div class="wrapper row">
        <div class="preview col-md-6">
        <div class="img-box mx-auto" style="width: 200px">
        <img src="images/${sanpham11.image}" alt="">
      </div>
        </div>
        <div class="details col-md-6">
            <h3 class="product-title">${sanpham11.name}</h3>
            <div class="rating">
            <i class="fa fa-star star_container"" aria-hidden="true"></i>
                <span class="review-no">${sanpham11.star}</span>
            </div>
            <p class="product-description">${sanpham11.detail}</p>
            <small class="text-muted">Giá cũ: <s><span> ${sanpham11.sale}</span></s> vnđ</small>
            <h4 class="price">Giá hiện tại: <span>${sanpham11.price} vnđ</span></h4>
            <p class="vote"><strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo
                <strong>Uy
                    tín</strong>!</p>
            <h5 class="sizes">sizes:
                <span class="size" data-toggle="tooltip" title="cỡ Nhỏ">s</span>
                <span class="size" data-toggle="tooltip" title="cỡ Trung bình">m</span>
                <span class="size" data-toggle="tooltip" title="cỡ Lớn">l</span>
                <span class="size" data-toggle="tooltip" title="cỡ Đại">xl</span>
            </h5>
            <h5 class="colors">colors:
                <span class="color orange not-available" data-toggle="tooltip"
                    title="Hết hàng"></span>
                <span class="color green"></span>
                <span class="color blue"></span>
            </h5>
            <div class="form-group">
                <label for="soluong">Số lượng đặt mua:</label>
                <input type="number" class="form-control" id="soluong" name="soluong">
            </div>
            <div class="action">
                <a class="add-to-cart btn btn-default" id="btnThemVaoGioHang">Thêm vào giỏ hàng</a>
                <a class="like btn btn-default" href="#"><span class="fa fa-heart"></span></a>
            </div>
        </div>

    </div>
</form> `

}





















