document.getElementById('second').style.display = 'none';
const userOptions = document.querySelectorAll('button');
const userRating = document.getElementById('user-choice');

userOptions.forEach((btn, index) => {
    btn.setAttribute('id', index + 1);
    btn.addEventListener('click', buttonClicked);
})

function buttonClicked(btn) {
    userRating.innerHTML = btn.target.id;
   
    document.querySelector('input').addEventListener('click', submitResult)
    function submitResult() {
        document.getElementById('first').style.display = 'none';
        document.getElementById('second').style.display = 'flex';

    }
}
