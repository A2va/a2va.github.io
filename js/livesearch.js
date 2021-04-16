// MIT License

// Copyright (c) 2018 Achraf BELLAALI

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Based on Achraf BELLAALI
// https://github.com/IndianGhost/liveSearch


// window.addEventListener('load', (event) => {
//     fetch('/html/navigation-bar.html')
//         .then(response => response.text())
//         .then(text => {
//             // Place navigation bar
//             document.getElementById("nav-placeholder").innerHTML = text;

//             // Load livesearch data
//             fetch('/js/data.json')
//                 .then(response => response.json())
//                 .then(jsonResponse => {
//                     let tbody = "";
//                     let keyNames = Object.keys(jsonResponse[0]);
//                     let class_link = '"nav-link text-dark"';
//                     for (let j = 0; j < jsonResponse.length; j++) {

//                         tbody += `<tr><td><a class=${class_link} href=${jsonResponse[j][keyNames[1]]}>${jsonResponse[j][keyNames[0]]}</a></td></tr>`;
//                     }

//                     document.getElementById("livesearch-table-body").innerHTML = tbody;
//                     document.getElementById('livesearch-table').style.display = 'block'; // show
//                     //document.getElementById('livesearch-table').style.display = 'none'; // hide
//                     document.getElementById('livesearch').classList.remove("show");


//                     // Set the event for ls_queryd
//                     document.getElementById('ls_query').addEventListener("keyup", search);

//                     //console.log(document.querySelectorAll("a"));

//                     document.querySelectorAll("a").forEach(function (node) {
//                         node.addEventListener("click", link);
//                     });

//                 });

//         });
// });

export function search(event) {
    let _this = this;
    document.querySelectorAll(".livesearch-table tbody tr").forEach(function (node) {
        if (_this.value.length > 0) {
            document.getElementById('livesearch-table').style.display = 'block'; // show¨
            document.getElementById('livesearch').classList.add("show");
            if (node.outerText.toLowerCase().indexOf(_this.value.toLowerCase()) === -1) {
                node.style.display = 'none'; // hide
            }
            else {
                node.style.display = 'block'; // show
            }
        }
        else {
            document.getElementById('livesearch-table').style.display = 'none'; // hide
            document.getElementById('livesearch').classList.remove("show");
        }
    });

}
