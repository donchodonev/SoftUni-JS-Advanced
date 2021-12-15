function solve() {
   document
      .querySelector('#searchBtn')
      .addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.getElementsByTagName('tr');
      let searchTerm = document.getElementById('searchField').value;

      for (const row of tableRows) {
         for (const child of row.children) {
            if (searchTerm && searchTerm !== " " && child.innerText.includes(searchTerm) && !child.innerText.includes('Student')) {
               row.setAttribute('class', 'select');
               break;
            }
            row.removeAttribute('class');
         }
      }

      document.getElementById('searchField').value = '';
   }
}