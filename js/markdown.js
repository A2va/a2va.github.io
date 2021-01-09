//Showdown extension for code highlighting
showdown.extension('codehighlight', function () {
  function htmlunencode(text) {
    return (
      text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    );
  }
  return [
    {
      type: 'output',
      filter: function (text, converter, options) {
        // use new shodown's regexp engine to conditionally parse codeblocks
        var left = '<pre><code\\b[^>]*>',
          right = '</code></pre>',
          flags = 'g',
          replacement = function (wholeMatch, match, left, right) {
            // unescape match to prevent double escaping
            match = htmlunencode(match);
            hljs.initHighlightingOnLoad();
            return left + hljs.highlightAuto(match).value + right;
          };
        return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
      }
    }
  ];
});


$(document).on("click", "a", function () {
  event.preventDefault(); //Stop the redirection of the link
  host = location.host;
  const url = this.href;

  if (url.indexOf(host) > -1 || url.indexOf('http', 'https') == -1) {
    if (url.endsWith('.md')) {
      $.get(url, function (data) {
        if (location.origin + '/' != location.href) { //It isn't the index.html file
          //It save the markdown data and set return to index to true
          sessionStorage .setItem("return_to_index", true);
          sessionStorage .setItem("markdown_data", data);
          location.href = location.origin + '/'; //Go to the index

        }
        else {//It's the index.html
          var converter = new showdown.Converter({ extensions: ['codehighlight'] });

          let html = converter.makeHtml(data);
          $('.main_placeholder').empty();
          $('.main_placeholder').append(html);
        }
      });
    }
    else {

      location.href = url;
    }
  }
  else {
    location.href = url;
  }
});

jQuery(function () {
  if (sessionStorage.getItem('return_to_index')) {
    sessionStorage.setItem('return_to_index',false);
    //Diplay markdown after return to index
    var converter = new showdown.Converter({ extensions: ['codehighlight'] });
    let data = sessionStorage.getItem('markdown_data');
    sessionStorage.setItem('markdown_data','');
    let html = converter.makeHtml(data);
    $('.main_placeholder').empty();
    $('.main_placeholder').append(html);
    
  }
});


jQuery(function () {
  elem = $('.markdown');
  $.get(elem.attr('href'), function (data) {
    let converter = new showdown.Converter({ extensions: ['codehighlight'] });

    let html = converter.makeHtml(data);
    elem.append(html);
  });

});
