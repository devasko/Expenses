const usernameField = document.querySelector('#usernameField');

usernameField.addEventListener('keyup', (e) => {
    console.log('Typing...');

    const usernameVal = e.target.value;

//    console.log('Username: ', usernameVal);

    if (usernameVal.length > 0) {
        fetch('/accounts/validate-username', {
            body: JSON.stringify({ username: usernameVal }),
            method: "POST",
        })
        .then( (res) => res.json())
        .then( (data) => {
            console.log( 'data: ', data );
        });
    }
});