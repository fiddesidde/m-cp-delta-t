$('input.number').on('keydown', function (e) {
    // allow function keys and decimal separators
    if (
        // backspace, delete, tab, escape, enter, comma and .
        $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 188, 190]) !== -1 ||
        // Ctrl/cmd+A, Ctrl/cmd+C, Ctrl/cmd+X
        ($.inArray(e.keyCode, [65, 67, 88]) !== -1 &&
            (e.ctrlKey === true || e.metaKey === true)) ||
        // home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
        return;
    }
    // block any non-number
    if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
    ) {
        e.preventDefault();
    }
});

function isItEdgeIe() {
    user_agent = navigator.userAgent;
    var is_it_edge =
        user_agent.indexOf('Edge') > -1 ||
        user_agent.indexOf('MSIE ') > -1 ||
        user_agent.indexOf('Trident/') > -1;
    return is_it_edge;
}

if (isItEdgeIe()) {
    document.body.removeAttribute('class', 'bgimage');
    document.body.innerHTML =
        '<h1>THIS WEBPAGE DOES NOT WORK WITH INTERNET EXPLORER / EDGE!</h1><div><a href="https://www.browser-update.org/update-browser.html">Upgrade your browser here</a></div>';
    console.log('It is Internet Explorer/Edge');
} else {
    console.log('It is not Internet Explorer/Edge');
}
