$("#js-search").keyup(function(){
    _this = this;
    $.each($(".js-table tbody tr"), function() {
        if($(_this).val().length > 0)
        {    
            $(".table").show();
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                $(this).hide();
            else
                $(this).show();
        }
        else
        {
            $(".table").hide();
        }
    });
});