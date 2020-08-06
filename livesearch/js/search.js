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