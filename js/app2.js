'use strict';
let time = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', 'Daily Location Total ',];
let Locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let minOpj = [23, 3, 11, 20, 2];
let maxOpj = [65, 24, 38, 38, 16];
let avgOpj = [6.3, 1.2, 3.7, 2.3, 4.6];

let cust = 0;

let locationOpj = [];

function Store(Locations, minOpj, maxOpj, avgOpj, storeTotal) {
    this.Locations = Locations;
    this.Min = minOpj;
    this.Max = maxOpj;
    this.Avg = avgOpj;
    this.Total = storeTotal;

    this.custNum = [];
    this.cookiesNum = [];
    this.totalCookiesPurchased = 0;
    locationOpj.push(this);
    // console.log(locationOpj.length);
}
//creat opj
let Seattle = new Store(Locations[0], minOpj[0], maxOpj[0], avgOpj[0], 0);
let Tokyo = new Store(Locations[1], minOpj[1], maxOpj[1], avgOpj[1], 0);
let Dubai = new Store(Locations[2], minOpj[2], maxOpj[2], avgOpj[2], 0);
let Paris = new Store(Locations[3], minOpj[3], maxOpj[3], avgOpj[3], 0);
let Lima = new Store(Locations[4], minOpj[4], maxOpj[4], avgOpj[4], 0);
// let delaytotel=new Store(time[14]);
let totalOpj = new Store('Totals');
// Seattle.Store ;
// console.log(locationOpj)


// function random(Min, Max) {
//     return Math.floor(Math.random() * (Max - Min + 1)) + Min;
// }

function random(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}


function del(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}


// random(locationOpj[x].Min, locationOpj[x].Max)


Store.prototype.randomNumber = function () {
    for (let i = 0; i < workHours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
    }
};







//creates randoms each hour each store
Store.prototype.storeRandom = function () {
    // console.log('hello', this.Min);
    for (let j = 0; j < locationOpj.length; j++) {
        let result = random(locationOpj[j].Min, locationOpj[j].Max);
    }





}



// Store.prototype.cookiesPurchased = function () {
//     for (let i = 0; i < this.custNum.length; i++) {
//         this.cookiesNum.push(Math.ceil(this.custNum[i] * this.Avg));
//         this.totalCookiesPurchased += this.cookiesNum[i];
//     }
// };
// // console.log();

// console.log(Seattle.storeRandomPerHour);

let table = document.getElementById('parent');




// for (let y = 0; y < time.length; y++) {
//     // random function
// cookiesData.textContent = random(locationOpj[x].Min, locationOpj[x].Max);

// }




for (let i = -1; i < time.length; i++) {

    let th = document.createElement('th');

    table.appendChild(th);
    th.textContent = time[i];


}


for (let x = 0; x < locationOpj.length; x++) {

    let storeRow = document.createElement('tr');
    // append
    table.appendChild(storeRow);
    // creating the td for name
    let cookiesData = document.createElement('td');
    // append name td for tr
    storeRow.appendChild(cookiesData);


    // give text content 
    cookiesData.textContent = locationOpj[x].Locations;




    loop1: for (let j = 0; j < time.length - 1; j++) {
        // for (let z = 0; z < array.length; z++) {
        //     const element = array[z];

        // }
        let tdTbody = document.createElement('td');
        storeRow.appendChild(tdTbody);
        let b = [tdTbody.textContent = random(locationOpj[x].Min, locationOpj[x].Max)];

        console.log(b[0]);

        // b =tdTbody.textContent;


        // function sumation(b[]) {
        //     return Math.floor(Math.random() * (Max - Min + 1)) + Min;
        // }



        if (j === 0) {

            // tdTbody.textContent =Store.totalOpj;

            break loop1;
        }
        console.log(tdTbody.textContent = random(locationOpj[x].Min, locationOpj[x].Max));

    }
    // for (let z = 7; z > 1; z++){

    //     tdTbody.textContent =random(locationOpj[x].Min, locationOpj[x].Max) ;

    // }


}

// Store.prototype.total = function () {
//     let totSales = document.createElement('tr');
//     table.appendChild(totSales);
//     totSales.textContent = 'Total';


// };







// Store.prototype.cookiesPurchased = function () {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//         this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
//         this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
//     }
// };














// for (let j = 0; j < locationOpj.length; j++) {
//     // 
//     let storeRow1 = document.createElement('tr');
//     // append
//     table.appendChild(storeRow1);
//     // creating the td for name
//     let cookiesData1 = document.createElement('td');
//     // append name td for tr
//     storeRow1.appendChild(cookiesData1);

//     // give text content 
//     cookiesData1.textContent = random(locationOpj[j].Min, locationOpj[j].Max);
// }





// let TotalCookies = 0;
// // function random(mincust, maxcust) {
// //     return Math.floor(Math.random() * (maxcust - mincust + 1)) + mincust;
// // }

// let Seattle = {
//     name: 'Seattle',
//     mincust: 23,
//     maxcust: 65,
//     cust: 0,
//     avgAllcookies: 6.3,

//     seattleCookiesArr: [0],

//     getCust: function () {
//         return this.cust = random(this.mincust, this.maxcust);
//         // console .log(this.cust);
//     },
//     // console.log(Seattle.getCust());
//     render: function () {

//         let elemantdiv = document.getElementById('storesid');
//         let txtelements = document.createElement('p');
//         elemantdiv.appendChild(txtelements);
//         txtelements.textContent = this.name;
//         let listelements = document.createElement('ul');
//         elemantdiv.appendChild(listelements);
//         for (let i = 0; i < time.length; i++) {
//             let liElement = document.createElement('li');
//             this.seattleCookiesArr[i] = this.getCust();
//             let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
//             listelements.appendChild(liElement);
//             liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
//             TotalCookies += totalavgarr;
//             if (i === 14) {
//                 let liElement = document.createElement('li');
//                 listelements.appendChild(liElement);
//                 liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
//             }
//         }
//     },
// };
// // console.log(Seattle.seattleCookiesArr);
// Seattle.render();






// // let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ',];
// // let TotalCookies = 0;
// // function random(mincust, maxcust) {
// //     return Math.floor(Math.random() * (maxcust - mincust + 1)) + mincust;
// // }
// let Tokyo = {
//     name: 'Tokyo',
//     mincust: 3,
//     maxcust: 24 ,
//     cust: 0,
//     avgAllcookies: 1.2,
//     seattleCookiesArr: [0],
//     getCust: function () {
//         return this.cust = random(this.mincust, this.maxcust);


//         // console .log(this.cust);
//     },
//     // console.log(Seattle.getCust());
//     render: function () {
//         let elemantdiv = document.getElementById('storesid');
//         let txtelements = document.createElement('p');
//         elemantdiv.appendChild(txtelements);
//         txtelements.textContent = this.name;
//         let listelements = document.createElement('ul');
//         elemantdiv.appendChild(listelements);
//          TotalCookies = 0;

//         for (let i = 0; i < time.length; i++) {

//             let liElement = document.createElement('li');
//             this.seattleCookiesArr[i] = this.getCust();
//             let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
//             listelements.appendChild(liElement);
//             liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
//             TotalCookies += totalavgarr;
//             if (i === 14) {
//                 let liElement = document.createElement('li');
//                 listelements.appendChild(liElement);
//                 liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
//             }
//         }
//     },
// };
// // console.log(Seattle.seattleCookiesArr);
// Tokyo.render();



// let Dubai = {
//     name: 'Dubai',
//     mincust: 11,
//     maxcust: 38 ,
//     cust: 0,
//     avgAllcookies: 3.7,
//     seattleCookiesArr: [0],
//     getCust: function () {
//         return this.cust = random(this.mincust, this.maxcust);
//         // console .log(this.cust);
//     },
//     // console.log(Seattle.getCust());
//     render: function () {
//         let elemantdiv = document.getElementById('storesid');
//         let txtelements = document.createElement('p');
//         elemantdiv.appendChild(txtelements);
//         txtelements.textContent = this.name;
//         let listelements = document.createElement('ul');
//         elemantdiv.appendChild(listelements);
//       TotalCookies = 0;
//         for (let i = 0; i < time.length; i++) {

//             let liElement = document.createElement('li');
//             this.seattleCookiesArr[i] = this.getCust();
//             let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
//             listelements.appendChild(liElement);
//             liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
//             TotalCookies += totalavgarr;
//             if (i === 14) {
//                 let liElement = document.createElement('li');
//                 listelements.appendChild(liElement);
//                 liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
//             }
//         }
//     },
// };
// // console.log(Seattle.seattleCookiesArr);
// Dubai.render();


// let Paris = {
//     name: 'Paris',
//     mincust: 20,
//     maxcust: 38 ,
//     cust: 0,
//     avgAllcookies: 2.3,
//     seattleCookiesArr: [0],
//     getCust: function () {
//         return this.cust = random(this.mincust, this.maxcust);
//         // console .log(this.cust);
//     },
//     // console.log(Seattle.getCust());
//     render: function () {
//         let elemantdiv = document.getElementById('storesid');
//         let txtelements = document.createElement('p');
//         elemantdiv.appendChild(txtelements);
//         txtelements.textContent = this.name;
//         let listelements = document.createElement('ul');
//         elemantdiv.appendChild(listelements);
//         TotalCookies = 0;

//         for (let i = 0; i < time.length; i++) {
//             let liElement = document.createElement('li');
//             this.seattleCookiesArr[i] = this.getCust();
//             let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
//             listelements.appendChild(liElement);
//             liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
//             TotalCookies += totalavgarr;
//             if (i === 14) {
//                 let liElement = document.createElement('li');
//                 listelements.appendChild(liElement);
//                 liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
//             }
//         }
//     },
// };
// // console.log(Seattle.seattleCookiesArr);
// Paris.render();



// let Lima = {
//     name: 'Lima',
//     mincust: 2,
//     maxcust: 16 ,
//     cust: 0,
//     avgAllcookies: 4.6 ,
//     seattleCookiesArr: [0],
//     getCust: function () {
//         return this.cust = random(this.mincust, this.maxcust);
//         // console .log(this.cust);
//     },
//     // console.log(Seattle.getCust());
//     render: function () {
//         let elemantdiv = document.getElementById('storesid');
//         let txtelements = document.createElement('p');
//         elemantdiv.appendChild(txtelements);
//         txtelements.textContent = this.name;
//         let listelements = document.createElement('ul');
//         elemantdiv.appendChild(listelements);
//         TotalCookies = 0;

//         for (let i = 0; i < time.length; i++) {
//             let liElement = document.createElement('li');
//             this.seattleCookiesArr[i] = this.getCust();
//             let totalavgarr = Math.round(this.avgAllcookies * this.seattleCookiesArr[i]);
//             listelements.appendChild(liElement);
//             liElement.textContent = `${time[i]}` + totalavgarr + ' Cookies';
//             TotalCookies += totalavgarr;
//             if (i === 14) {
//                 let liElement = document.createElement('li');
//                 listelements.appendChild(liElement);
//                 liElement.textContent = 'Total: ' + TotalCookies + ' Cookies';
//             }
//         }
//     },
// };
// // console.log(Seattle.seattleCookiesArr);
// Lima.render();








