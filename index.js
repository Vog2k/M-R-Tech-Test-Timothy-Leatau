document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart');
    const itemCountElement = document.getElementById('item-count');
    const sizeButtons = document.querySelectorAll('.size-button');
    const errorMessage = document.getElementById('error-message');
    let selectedSize = '';
    let itemCount = 0;

    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); 
            selectedSize = button.getAttribute('data-size'); 
            errorMessage.style.display = 'none'; 
        });
    });

    addToCartButton.addEventListener('click', function() {
        if (!selectedSize) {
            errorMessage.style.display = 'inline'; 
        } else {
            itemCount++; 
            itemCountElement.textContent = itemCount; 
        }
    });
});