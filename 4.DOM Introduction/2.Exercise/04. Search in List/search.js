function search() {
   let searchTerm = document.getElementById('searchText').value;
   let listItems = document.getElementsByTagName('li');

   let countOfItemsFound = 0;
   
   for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].textContent.includes(searchTerm)) {
         countOfItemsFound++;
         listItems[i].style.fontWeight = 'bold';
         listItems[i].style.textDecoration = 'underline';
      }
   }

   document.getElementById('searchText').value = '';
   document.getElementById('result').textContent = `${countOfItemsFound} matches found`;
}
