(function() {
    const API_BASE = 'https://front-br-challenges.web.app/api/v2/green-thumb';
    const GREENTHUMB = {};

    const sun = document.getElementsByName('sunlight')[0];
    const water = document.getElementsByName('wateringcan')[0];
    const dog = document.getElementsByName('dog')[0];
    
    
    GREENTHUMB.preload = setTimeout(function() {
        document.querySelector('.load-container').classList.add('loaded');
    }, 1500);

    
    GREENTHUMB.list = {
        sunValue: '',
        walterValue: '',
        dogValue: ''
    };
    
    sun.addEventListener('change', function(e) {
        GREENTHUMB.list.sunValue = e.target.value;
        GREENTHUMB.fetch();
    });
    water.addEventListener('change', function(e) {
        GREENTHUMB.list.walterValue = e.target.value;
        GREENTHUMB.fetch();
    });
    dog.addEventListener('change', function(e) {
        GREENTHUMB.list.dogValue = e.target.value;
        GREENTHUMB.fetch();
    });
    
    GREENTHUMB.fetch = () => {
        fetch( API_BASE + '/?' + new URLSearchParams({
            sun: GREENTHUMB.list.sunValue,
            water: GREENTHUMB.list.walterValue,
            pets: GREENTHUMB.list.dogValue
        }), {method: 'GET', mode: 'cors',  headers: { "Content-Type" : "application/json" }})
        .then(data => {
            return data.json();
        }).then(res => {
            console.log(res);
        });
    };

    function init() {
        GREENTHUMB.preload;
    }
    
    init();
})();