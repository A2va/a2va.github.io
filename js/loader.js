import { link } from './markdown.js';
import {search} from './livesearch.js';

window.addEventListener('load', (event) => {
    fetch('/html/navigation-bar.html')
        .then(response => response.text())
        .then(text => {
            // Place navigation bar
            document.getElementById("nav-placeholder").innerHTML = text;

            // Load livesearch data
            fetch('/js/data.json')
                .then(response => response.json())
                .then(jsonResponse => {
                    let tbody = "";
                    let keyNames = Object.keys(jsonResponse[0]);
                    for (let j = 0; j < jsonResponse.length; j++) {

                        tbody += `<tr><td><a class="nav-link active text-dark" aria-current="page" href=${jsonResponse[j][keyNames[1]]}>${jsonResponse[j][keyNames[0]]}</a></td></tr>`; 
                    }

                    document.getElementById("livesearch-table-body").innerHTML = tbody;
                    document.getElementById('livesearch-table').style.display = 'block'; // show
                    //document.getElementById('livesearch-table').style.display = 'none'; // hide
                    document.getElementById('livesearch').classList.remove("show");


                    // Set the event for ls_query
                    document.getElementById('ls_query').addEventListener("keyup", search);

                    //console.log(document.querySelectorAll("a"));

                    document.querySelectorAll("a").forEach(function (node) {
                        node.addEventListener("click", link);
                    });

                });

        });
});