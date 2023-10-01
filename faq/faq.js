document.querySelectorAll('.title-icon button').forEach(button => {
    button.addEventListener('click', function() {
        const accordionItem = this.closest('.one, .two, .three, .four, .five, .six');
        const content = accordionItem.querySelector('p');
        const plusButton = accordionItem.querySelector('.image img:nth-child(1)');
        const minusButton = accordionItem.querySelector('.image img:nth-child(2)');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            plusButton.style.display = 'none';
            minusButton.style.display = 'inline';
        } else {
            content.style.display = 'none';
            plusButton.style.display = 'inline';
            minusButton.style.display = 'none';
        }
    });
});