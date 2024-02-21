const API_URL = " http://localhost:3000/";
function listCate() {
  fetch(API_URL+'categories').then(response => response.json())
      .then(element => {
          const cateList = document.getElementById('listCate');
          const html = element.map(element => `
          <a href="" class="nav-item nav-link">${element.name}</a>
         `).join('');
          cateList.innerHTML = html;
      })
      .catch(error => {
          console.error('Lỗi:', error);
      });
}
listCate();