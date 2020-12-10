const m1 = document.querySelector("#m1")
const cp1 = document.querySelector("#cp1")
const dt1 = document.querySelector("#dt1")
const kwres = document.querySelector("#kwres")

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

const rectify = str => {
    // str = toString(str)
    str = str.replace(",", ".")
    return parseFloat(str)
}

const cpCalc = () => {
    return kw.value / (dt.value * m.value)
}

const mCalc = () => {
    return kw.value / (dt.value * cp.value)
}

const dtCal = () => {
    return kw.value / (cp.value * m.value)
}

const kwCalc = () => {
    return (
        Math.round(
            (rectify(m1.value) * rectify(cp1.value) * rectify(dt1.value) +
                Number.EPSILON) *
                100
        ) / 100
    )
}

m1.addEventListener("input", function (e) {
    kwres.value = kwCalc()
})
cp1.addEventListener("input", function (e) {
    kwres.value = kwCalc()
})
dt1.addEventListener("input", function (e) {
    kwres.value = kwCalc()
})

$("input.number").on("keydown", function (e) {
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
        return
    }
    // block any non-number
    if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
    ) {
        e.preventDefault()
    }
})

function isItIE() {
    user_agent = navigator.userAgent
    var is_it_ie =
        user_agent.indexOf("MSIE ") > -1 || user_agent.indexOf("Trident/") > -1
    return is_it_ie
}
if (isItIE()) {
    alert(
        "You are using an outdated browser. Please upgrade your browser or activate Google Chrome Frame to improve your experience."
    )
    console.log("It is Internet Explorer")
} else {
    console.log("It is not Internet Explorer")
}
