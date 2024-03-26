document.querySelector('.btn').addEventListener('click', function() {
    var body = document.querySelector('body');
    if (body.className === 'light-theme') {
        body.className = 'dark-theme';
    } else {
        body.className = 'light-theme';
    }
});
