self.addEventListener('install', function (event) {
    console.log('im installed!');

    setTimeout(function () {
        console.log('im alive', new Date())
    }, 20000);

});



self.addEventListener('active', function (event) {
    console.log('super active')
});

self.addEventListener('fetch', function (event) {
    console.log('fetching stuff', event)
});