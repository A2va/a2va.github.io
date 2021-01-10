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

jQuery(function () {
    $.getJSON("/js/data.json", function(results){
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

$(document).on('keyup','#ls_query',function () {
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
