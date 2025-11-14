document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const blockID = anchor.getAttribute('href');
            
            if (blockID === '#') return;
            
            const targetElement = document.querySelector(blockID);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // чтобы работала форма заполнения инфы на пробное занятие
    const forms = document.querySelectorAll('.trial-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
            form.reset();
        });
    });
    
    // чтобы ввод телефона начинался с 7 и максмиальное кол-во цифр в номере было 11
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = input.value.replace(/\D/g, '');
            let formattedValue = '';
            
            if (value.length > 0) {
                formattedValue = '+7 ';
                
                if (value.length > 1) {
                    formattedValue += '(' + value.substring(1, Math.min(4, value.length));
                }
                
                if (value.length >= 4) {
                    formattedValue += ') ' + value.substring(4, Math.min(7, value.length));
                }
                
                if (value.length >= 7) {
                    formattedValue += '-' + value.substring(7, Math.min(9, value.length));
                }
                
                if (value.length >= 9) {
                    formattedValue += '-' + value.substring(9, Math.min(11, value.length));
                }
            }
            
            input.value = formattedValue;
        });
    });

}); 