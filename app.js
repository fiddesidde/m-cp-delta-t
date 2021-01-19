const m1 = document.querySelector('#m1');
const cp1 = document.querySelector('#cp1');
const dt1 = document.querySelector('#dt1');
const kwResult = document.querySelector('#kwres');
let kwResultArr = [m1, cp1, dt1];

// Second row inputs
const mResult = document.querySelector('#mres');
const cp2 = document.querySelector('#cp2');
const dt2 = document.querySelector('#dt2');
const kw2 = document.querySelector('#kw2');
let mResultArr = [cp2, dt2, kw2];

// Third row inputs
const m3 = document.querySelector('#m3');
const cpResult = document.querySelector('#cpres');
const dt3 = document.querySelector('#dt3');
const kw3 = document.querySelector('#kw3');
let cpResultArr = [m3, dt3, kw3];

// Fourth row inputs
const m4 = document.querySelector('#m4');
const cp4 = document.querySelector('#cp4');
const dtResult = document.querySelector('#dtres');
const kw4 = document.querySelector('#kw4');
let dtResultArr = [m4, cp4, kw4];

const rectify = str => {
    str = str.replace(',', '.');
    return parseFloat(str);
};

const calculateKw = () => {
    return (
        Math.round(
            (rectify(m1.value) * rectify(cp1.value) * rectify(dt1.value) +
                Number.EPSILON) *
                100
        ) / 100
    );
};

const calculateM = () => {
    return (
        Math.round(
            (rectify(kw2.value) / (rectify(dt2.value) * rectify(cp2.value)) +
                Number.EPSILON) *
                100
        ) / 100
    );
};

const calculateCp = () => {
    return (
        Math.round(
            (rectify(kw3.value) / (rectify(dt3.value) * rectify(m3.value)) +
                Number.EPSILON) *
                100
        ) / 100
    );
};

const calculateDt = () => {
    return (
        Math.round(
            (rectify(kw4.value) / (rectify(cp4.value) * rectify(m4.value)) +
                Number.EPSILON) *
                100
        ) / 100
    );
};

kwResultArr.forEach(el =>
    el.addEventListener('input', function (e) {
        kwResult.value = calculateKw();
        if (isNaN(kwResult.value)) {
            kwResult.value = '';
        }
    })
);

mResultArr.forEach(el =>
    el.addEventListener('input', function (e) {
        mResult.value = calculateM();
        if (isNaN(mResult.value)) {
            mResult.value = '';
        }
    })
);

cpResultArr.forEach(el =>
    el.addEventListener('input', function (e) {
        cpResult.value = calculateCp();
        if (isNaN(cpResult.value)) {
            cpResult.value = '';
        }
    })
);

dtResultArr.forEach(el =>
    el.addEventListener('input', function (e) {
        dtResult.value = calculateDt();
        if (isNaN(dtResult.value)) {
            dtResult.value = '';
        }
    })
);
