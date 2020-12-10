const m1 = document.querySelector("#m1")
const cp1 = document.querySelector("#cp1")
const dt1 = document.querySelector("#dt1")
const kwres = document.querySelector("#kwres")
let kwresArr = [m1, cp1, dt1]

// Second row inputs
const mres = document.querySelector("#mres")
const cp2 = document.querySelector("#cp2")
const dt2 = document.querySelector("#dt2")
const kw2 = document.querySelector("#kw2")
let mresArr = [cp2, dt2, kw2]

// Third row inputs
const m3 = document.querySelector("#m3")
const cpres = document.querySelector("#cpres")
const dt3 = document.querySelector("#dt3")
const kw3 = document.querySelector("#kw3")
let cpresArr = [m3, dt3, kw3]

// Fourth row inputs
const m4 = document.querySelector("#m4")
const cp4 = document.querySelector("#cp4")
const dtres = document.querySelector("#dtres")
const kw4 = document.querySelector("#kw4")
let dtresArr = [m4, cp4, kw4]

const rectify = str => {
    str = str.replace(",", ".")
    return parseFloat(str)
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

const mCalc = () => {
    return (
        Math.round(
            (rectify(kw2.value) / (rectify(dt2.value) * rectify(cp2.value)) +
                Number.EPSILON) *
                100
        ) / 100
    )
}

const cpCalc = () => {
    return (
        Math.round(
            (rectify(kw3.value) / (rectify(dt3.value) * rectify(m3.value)) +
                Number.EPSILON) *
                100
        ) / 100
    )
}

const dtCalc = () => {
    return (
        Math.round(
            (rectify(kw4.value) / (rectify(cp4.value) * rectify(m4.value)) +
                Number.EPSILON) *
                100
        ) / 100
    )
}

kwresArr.forEach(el =>
    el.addEventListener("input", function (e) {
        kwres.value = kwCalc()
    })
)

mresArr.forEach(el =>
    el.addEventListener("input", function (e) {
        mres.value = mCalc()
        if (isNaN(mres.value)) {
            mres.value = ""
        }
    })
)

cpresArr.forEach(el =>
    el.addEventListener("input", function (e) {
        cpres.value = cpCalc()
        if (isNaN(cpres.value)) {
            cpres.value = ""
        }
    })
)

dtresArr.forEach(el =>
    el.addEventListener("input", function (e) {
        dtres.value = dtCalc()
        if (isNaN(dtres.value)) {
            dtres.value = ""
        }
    })
)
