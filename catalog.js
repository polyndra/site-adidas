document.querySelectorAll('button').forEach(button => {
            if (button.textContent.includes('Купить')) {
                button.addEventListener('click', function() {
                    const productName = this.closest('.p-6').querySelector('h3').textContent;
                    const productPrice = this.closest('.p-6').querySelector('span').textContent;
                    alert(`Товар "${productName}" за ${productPrice} добавлен в корзину!`);
                });
            }
        });