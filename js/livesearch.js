jQuery(function () {
    $.getJSON("js/data.json", function(results){
        var tbody = "";
        var keyNames = Object.keys(results[0]);
        class_link='"nav-link text-dark"'
        for(var j=0; j<results.length; j++)
        {
            tbody += "<tr><td><a class=" + class_link + "href="+results[j][keyNames[1]]+">"+ results[j][keyNames[0]]+"</a></td></tr>";
        }
            
        $("tbody").append(tbody);
        $(".livesearch-table").hide();
        $(".livesearch").removeClass("show");
    });
});


$("#ls_query").keyup(function(){
    _this = this;
    $.each($(".livesearch-table tbody tr"), function() {
        if($(_this).val().length > 0)
        {    
            $(".livesearch-table").show();
            $(".livesearch").addClass("show");
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                $(this).hide();
            else
                $(this).show();
        }
        else
        {
            $(".livesearch-table").hide();
            $(".livesearch").removeClass("show");
        }
    });
});