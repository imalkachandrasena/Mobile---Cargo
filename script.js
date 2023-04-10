let newsLetterBtn = document.getElementById('sub-btn')

newsLetterBtn.onclick = function newsLetterOutput(){
    let newsLetterInput = document.getElementById('news-input-text').value
    alert('Thanks For Sign Up & you will get our latest updates through your email ( '+newsLetterInput+' ).')
    document.getElementById('news-input-text').value = '';
    
}