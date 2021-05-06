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

export function link(event) {
  event.preventDefault(); //Stop the redirection of the link
  let host = location.host;
  const url = this.href;
  if (url.indexOf(host) > -1 || url.indexOf('http', 'htpps') === -1) {
    if (url.endsWith('.md')) {
      fetch(url)
        .then(response => response.text())
        .then(text => {
          if (location.origin + '/' != location.href) { //It isn't the index.html file
            sessionStorage.setItem("return_to_index", true);
            sessionStorage.setItem("markdown_data", text);
            location.href = location.origin + '/'; //Go to the index
          }
          else { //It's the index.html
            let converter = new showdown.Converter({ extensions: ['codehighlight'] });

            let html = converter.makeHtml(text);
            document.getElementById('main_placeholder').innerHTML = '';
            document.getElementById('main_placeholder').innerHTML = html;
          }
        });
    }
    else{
      location.href = url;
    }

  }
  else{
    location.href = url;
  }
}

window.addEventListener('load', (event) => {

  if (sessionStorage.getItem('return_to_index')) {
    sessionStorage.setItem('return_to_index', false);
    //Diplay markdown after return to index
    let converter = new showdown.Converter({ extensions: ['codehighlight'] });
    let data = sessionStorage.getItem('markdown_data');
    sessionStorage.setItem('markdown_data', '');
    let html = converter.makeHtml(data);
    document.getElementById('main_placeholder').innerHTML = '';
    document.getElementById('main_placeholder').innerHTML = html;
  }
});
