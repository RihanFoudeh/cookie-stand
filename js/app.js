




'use strict';


let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ',];
let TotalCookies = 0;
function random(mincust, maxcust) {
    return Math.floor(Math.random() * (maxcust - mincust + 1)) + mincust;
}

let Seattle = {
    name: 'Seattle',
    mincust: 23,
    maxcust: 65,
    cust: 0,
    avgAllcookies: 6.3,

    seattleCookiesArr: [0],

    getCust: function () {
        return this.cust = random(this.mincust, this.maxcust);
        // console .log(this.cust);
    },
    // console.log(Seattle.getCust());
    render: function () {
        
        let elemantdiv = document.getElementById('storesid');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.seattleCookiesArr[i] = this.getCust();
            let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
            listelements.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');
                listelements.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
Seattle.render();






// let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ',];
// let TotalCookies = 0;
// function random(mincust, maxcust) {
//     return Math.floor(Math.random() * (maxcust - mincust + 1)) + mincust;
// }
let Tokyo = {
    name: 'Tokyo',
    mincust: 3,
    maxcust: 24 ,
    cust: 0,
    avgAllcookies: 1.2,
    seattleCookiesArr: [0],
    getCust: function () {
        return this.cust = random(this.mincust, this.maxcust);


        // console .log(this.cust);
    },
    // console.log(Seattle.getCust());
    render: function () {
        let elemantdiv = document.getElementById('storesid');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
         TotalCookies = 0;
       
        for (let i = 0; i < time.length; i++) {

            let liElement = document.createElement('li');
            this.seattleCookiesArr[i] = this.getCust();
            let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
            listelements.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');
                listelements.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
Tokyo.render();



let Dubai = {
    name: 'Dubai',
    mincust: 11,
    maxcust: 38 ,
    cust: 0,
    avgAllcookies: 3.7,
    seattleCookiesArr: [0],
    getCust: function () {
        return this.cust = random(this.mincust, this.maxcust);
        // console .log(this.cust);
    },
    // console.log(Seattle.getCust());
    render: function () {
        let elemantdiv = document.getElementById('storesid');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
      TotalCookies = 0;
        for (let i = 0; i < time.length; i++) {
            
            let liElement = document.createElement('li');
            this.seattleCookiesArr[i] = this.getCust();
            let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
            listelements.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');
                listelements.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
Dubai.render();


let Paris = {
    name: 'Paris',
    mincust: 20,
    maxcust: 38 ,
    cust: 0,
    avgAllcookies: 2.3,
    seattleCookiesArr: [0],
    getCust: function () {
        return this.cust = random(this.mincust, this.maxcust);
        // console .log(this.cust);
    },
    // console.log(Seattle.getCust());
    render: function () {
        let elemantdiv = document.getElementById('storesid');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        TotalCookies = 0;

        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.seattleCookiesArr[i] = this.getCust();
            let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
            listelements.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');
                listelements.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
Paris.render();



let Lima = {
    name: 'Lima',
    mincust: 2,
    maxcust: 16 ,
    cust: 0,
    avgAllcookies: 4.6 ,
    seattleCookiesArr: [0],
    getCust: function () {
        return this.cust = random(this.mincust, this.maxcust);
        // console .log(this.cust);
    },
    // console.log(Seattle.getCust());
    render: function () {
        let elemantdiv = document.getElementById('storesid');
        let txtelements = document.createElement('p');
        elemantdiv.appendChild(txtelements);
        txtelements.textContent = this.name;
        let listelements = document.createElement('ul');
        elemantdiv.appendChild(listelements);
        TotalCookies = 0;

        for (let i = 0; i < time.length; i++) {
            let liElement = document.createElement('li');
            this.seattleCookiesArr[i] = this.getCust();
            let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
            listelements.appendChild(liElement);
            liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
            TotalCookies += totalavgarr;
            if (i === 14) {
                let liElement = document.createElement('li');
                listelements.appendChild(liElement);
                liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
            }
        }
    },
};
// console.log(Seattle.seattleCookiesArr);
Lima.render();








