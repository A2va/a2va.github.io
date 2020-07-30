$(document).ready(function(){
    $.getJSON("livesearch/js/data.json", function(results){
        var tbody = "";
        var keyNames = Object.keys(results[0]);
        class_link='"nav-link"'
        for(var j=0; j<results.length; j++)
        {
            tbody += "<tr><td><a class=" + class_link + "href="+results[j][keyNames[1]]+">"+ results[j][keyNames[0]]+"</a></td></tr>";
        }
            
        $("tbody").append(tbody);
        //$(".livesearch-table").hide();
    });
});
