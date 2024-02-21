const API_URL = " http://localhost:3000/";
function productDetail(id) {
    fetch(API_URL + 'products/' +id)
        .then(response => {
            return response.json();
        })
        .then(element => {
            const product = document.getElementById('edit');
            const html= ` <div class="card-body" >
            <div class="form-group">
              <label>Mã SẢN PHẨM</label>
              <input type="text" id="id" class="form-control" placeholder="Mã Hàng Hóa Tự Tăng" disabled><br>
            </div>
  
            <div class="form-group">
                <label>Tên Sản Phẩm</label>
                <input type="text" name="name" class="form-control" value="${element.name}"><br>
            </div>
  
            <div class="form-group">
              <label>Đơn Giá</label>
              <input type="text" name="price" class="form-control" value="${element.price}"><br>
           
            </div>
          
            <div class="form-group">
              <label>Hình ảnh</label><br>
              <img src="../user/images/${element.image}"  width: 170px;
              height: 170px;>
              <div class="input-group">
                <div class="custom-file">
                  <input type="file" name="image" class="custom-file-input" id="exampleInputFile">
                  <label class="custom-file-label" for="exampleInputFile" name="hinh">Chọn hình ảnh</label>
                </div>
                <div class="input-group-append">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Mô Tả</label>
              <input type="text" name="detail" class="form-control" value="${element.detail}"><br>
             
            </div>
            
            <div class="form-group">
              <label>Danh Mục Sản Phẩm</label>
              <select name="cate_id" class="form-control" id="listCate">
               ${listCate()}
              </select>
              
            </div>
        </div>`;
            product.innerHTML = html;
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
}

    //Lấy id sản phẩm từ url 
    const url = new URLSearchParams(window.location.search);
    const proID = url.get('id');

    //Hiển thị sản phẩm theo id
    window.addEventListener('load', () => {
      productDetail(proID);
});

function listCate() {
  fetch(API_URL+'categories').then(response => response.json())
      .then(element => {
          const cateList = document.getElementById('listCate');
          const html = element.map(element => `
          <option value="${element.name}">${element.name}</option>
          `).join('');
          cateList.innerHTML = html;
      })
      .catch(error => {
          console.error('Lỗi:', error);
      });
}


