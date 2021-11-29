const xhr = new XMLHttpRequest();

xhr.onload = function(response) {
    console.log(response);
};

xhr.open('GET', 'https://devoldere.net/api/data/planes.json');


xhr.send();


