function solve() {
   const addButtons = Array.from(document.getElementsByClassName('add-product'));
   const textArea = document.getElementsByTagName('textarea')[0];
   const checkoutBtn = document.querySelector('.checkout');
   const allProductsAdded = [];

   addButtons.forEach((button) => button.addEventListener('click', onClickAdd));

   checkoutBtn.addEventListener('click', onClickCheckout)

   function onClickAdd(ev) {
      const parent = ev.target.parentNode.parentNode;

      const product = getProductObject(parent);


      addToTextArea(textArea, product);
   }

   function getProductObject(parent) {
      let returnObject = {};

      returnObject.name = parent.getElementsByClassName('product-title')[0].innerText;
      returnObject.price = Number(parent.getElementsByClassName('product-line-price')[0].textContent);

      return returnObject;
   }

   function addToTextArea(textarea, product) {
      textarea.value += `Added ${product.name} for ${Number(product.price).toFixed(2)} to the cart.\n`;

      const existingProduct = allProductsAdded.find(x => x.name == product.name);

      if (existingProduct) {
         existingProduct.price += product.price;
      } else {
         allProductsAdded.push(product);
      }
   }

   function onClickCheckout(ev) {
      const productNames = allProductsAdded
      .map(x => x.name)
      .join(', ');

      const totalProductPrice = allProductsAdded
      .map(x => x.price)
      .reduce((acc, c) => acc + c);

      textArea.value += `You bought ${productNames} for ${totalProductPrice}.\n`

      disableAllbuttons();
   }

   function disableAllbuttons(){
      Array.from(document.getElementsByTagName('button')).forEach((button) => button.disabled = true);
   }
}