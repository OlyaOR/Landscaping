const benefitsHidden = document.querySelector('.hidden'),
    moreInfo = document.querySelector('.more_info');

moreInfo.addEventListener('click', () => { 
    benefitsHidden.classList.remove('hidden');
    moreInfo.remove();
});

