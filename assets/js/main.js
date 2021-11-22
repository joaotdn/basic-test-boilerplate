(function() {
    const GREENTHUMB = {};

    GREENTHUMB.preload = setTimeout(function() {
        document.querySelector('.load-container').classList.add('loaded');
    }, 1500);

    function init() {
        GREENTHUMB.preload;
    }
    
    init();
})();