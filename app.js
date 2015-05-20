
var input = document.getElementById('input'),
    output = document.getElementById('output');

var handleEvent = function(e) {
    output.innerHTML = e.target.value;
};



var converter = new showdown.Converter();

input.addEventListener('input', function(e){
    html = converter.makeHtml(e.target.value);
    output.innerHTML = html;
});