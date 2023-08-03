const faqGrp = document.querySelectorAll('.faq-wrapper');

// Faq function
function dropFaq(e){
    let svg = e.querySelector('.fa-plus');
    let answer = e.querySelector('.answer');

    svg.classList.toggle('rotate-effect');
    answer.classList.toggle('faq-effect');
}

faqGrp.forEach((faq)=>{
    faq.addEventListener('click', function(){
        if(faq.dataset.qstGrp === 'one'){
            dropFaq(faq);
        }else if(faq.dataset.qstGrp === 'two'){
            dropFaq(faq);
            
        }else if(faq.dataset.qstGrp === 'three'){
            dropFaq(faq);

        }else if(faq.dataset.qstGrp === 'four'){
            dropFaq(faq);

        }else if(faq.dataset.qstGrp === 'five'){
            dropFaq(faq);

        }else{
            dropFaq(faq);

        }
    })
    
        
        
    
})