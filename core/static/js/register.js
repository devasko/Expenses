const usernameField = document.querySelector('#usernameField');
const feedbackArea = document.querySelector('.invalid-feedback');

usernameField.addEventListener('keyup', (e) => {
    const usernameVal = e.target.value;

    usernameField.classList.remove('is-invalid');

    feedbackArea.style.display = 'none';

    if (usernameVal.length > 0) {
        fetch('/accounts/validate-username', {
            body: JSON.stringify({ username: usernameVal }),
            method: "POST",
        })
        .then( (res) => res.json())
        .then( (data) => {
            console.log( 'data: ', data );

            if (data.usernameError) {
                usernameField.classList.add('is-invalid');

                feedbackArea.style.display = 'block';
                feedbackArea.innerHTML += `<p>${ data.usernameError }</p>`;
            }
        });
    }
});