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
    return rectify(m1.value) * rectify(cp1.value) * rectify(dt1.value)
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
