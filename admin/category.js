const API_URL = " http://localhost:3000/";
fetch(API_URL + 'categories')
    .then(function(response) {
        response.json().then(function(data) {
            const headers = [
                "Tên Danh Mục",
                
            ];
            const tableHtml = generateTable(headers, data);
            let app = document.getElementById('hienthi');
            app.innerHTML = tableHtml;
        });
    })
    .catch(function(error) {
        console.log(error);
    })
const generateTableHeader = (headerTitle) => {
    let html = ``;
    const tableHeader = document.getElementById('hienthi');
    headerTitle.forEach(element => {
        html += `<th>${element}</th>`
    });
    return tableHeader.innerHTML += html;
}
const generateTableRow = (element, index) =>{
    if (!element || element.length === 0) {

    }
    return `
    <tr>
   
    <td class="cell">${element.id}</td>
    <td class="cell"><span class="truncate">${
      element.name
    }</span></td>
   <td>
        <a class="btn-sm app-btn-secondary bg-info" href="./suadm.html?id=${element.id}">Sửa</a>
        
        <a class="btn-sm app-btn-secondary bg-danger text-white" href="#" value="xoá"  onclick="detele(${element.id})">Xóa</a>
    </td>
</tr>
`;
}




const generateTable = (headers, data) => {
    if (!headers || !data || headers.length === 0 || data.length === 0) {
        return "";
    }
    
    const headerRow = generateTableHeader(headers);
    const dataRow = data.map((row, index) => generateTableRow(row, index)).join("");
    
    return `<table>${headerRow}
        <tbody>${dataRow}</tbody>
    </table>`;
};

//gửi yêu cầu thêm danh mục
function sendData(data,callback){
    var options = {
       method : 'POST',
       headers: {
           'Content-Type':'application/json'
       },
       body : JSON.stringify(data)
      
    };
    fetch(API_URL + 'categories',options)
       .then(function(response){
           response.json();;
       })
       .then(callback);
   }
//thêm danh mục
   function addCate(){
       var addProduct = document.querySelector('#add-cate');
       addProduct.onclick = function(){
          var name = document.querySelector('input[name="name"]').value;
          var cate = {
           name : name
          }
          if(!name){
            alert('Tên không được để trống');
          }else{
            sendData(cate);
            alert('Thêm thành công');
          }
          
       }
   }
   addCate();

   //xóa danh mục
   function detele(id) {
    var options = {
        method : 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
     };
     fetch(`${API_URL}categories/${id}`,options)
        .then(function(response){
            response.json();;
        })
        .then(function(){
            var deteleItem = document.querySelector('.cate' + id);
            if(deteleItem){
                deteleItem.remove();
            }
        });
   }



