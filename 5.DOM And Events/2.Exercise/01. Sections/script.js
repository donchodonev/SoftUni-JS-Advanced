function create(words) {
   const contentTarget = document.getElementById('content');
   const div = document.createElement('div');
   const p = document.createElement('p');

   p.style.display = 'none';

   for (const word of words) {
      let newDiv = div.cloneNode();
      let newP = p.cloneNode();

      newP.textContent = word;
      newDiv.appendChild(newP);
      newDiv.addEventListener('click', onClick);

      contentTarget.appendChild(newDiv);
   }

   function onClick(ev) {
      const children = ev.target.childNodes;

      for (const childDiv of children) {
         childDiv.style.display = 'inline';
      }
   }
}