    // JavaScript code
    const arrows = document.querySelectorAll('.arrow');
                                      
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        const faqItem = arrow.parentElement.parentElement;
        const answer = faqItem.querySelector('.answer');
        arrow.classList.toggle('down');
        answer.classList.toggle('active');
      });
    });
    // Get all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each FAQ item
faqItems.forEach(item => {
// Add event listener to each input element
item.querySelector('input').addEventListener('change', () => {
// Toggle the 'clicked' class on the label when input is checked
item.querySelector('label').classList.toggle('clicked', item.querySelector('input').checked);
});
});
