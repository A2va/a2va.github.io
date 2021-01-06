
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
              return left + hljs.highlightAuto(match).value + right;
            };
          return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
        }
      }
    ];
  });
jQuery(function () {
    $("a").click(function () {
        event.preventDefault();
        host = location.host;
        const url = this.href;

        if (url.indexOf(host) > -1 || url.indexOf('http', 'https') == -1) {
            //Stay on the website
            console.log('Stay')
            if (url.endsWith('.md')) {
                console.log('Markdown link');
                $.get(url, function (data) {
                    var converter = new showdown.Converter({ extensions: ['codehighlight'] });

                    let html = converter.makeHtml(data);
                    $('.main_placeholder').empty()
                    $('.main_placeholder').append(html)
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
});
