$(document).ready(function(){
    $.getJSON("livesearch/js/data.json", function(results){
        var thead = "";
        var tbody = "";
        var keyNames = Object.keys(results[0]);
        for(var j=0; j<results.length; j++)
        {
            //tbody += "<tr><td><a href="+results[j][keyNames[1]]+">"+ results[j][keyNames[0]]+"</a></td></tr>";
            tbody += "<a class=" +"dropdown-item" +"href="+results[j][keyNames[1]]+">"+ results[j][keyNames[0]]+"</a>";
        }
            
        $("thead").append("<tr>"+thead+"</tr>");
        $("tbody").append(tbody);
        //$(".table").hide();
    });
});