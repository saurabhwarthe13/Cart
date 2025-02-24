document.querySelectorAll('input[name="units"]').forEach((input) => {
    input.addEventListener('change', function() {
        const selectedValue = this.value;
        let totalPrice;

        if (selectedValue === '1') {
            totalPrice = 10.00;
        } else if (selectedValue === '2') {
            totalPrice = 18.00;
        } else {
            totalPrice = 24.00;
        }

        document.querySelector('.total-price').textContent = `$${totalPrice.toFixed(2)} USD`;
    });
});
