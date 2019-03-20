console.log('JS loaded!')
 var $presidents = $('#presidents')
$presidents.html('<li>Washington</li>' + '<li>Lincoln</li>' + '<li>Franklin</li>' + '<li>Obama</li>' + '<li>Jackson</li>');

var $li =$('<li/>')

var $presidentsClass = ('ul:first li') 

$li.addClass('.presidentsClass')

var $body = $('body')
 $("body").append('<ul class=dictators></ul>');

 $presidents.append('<h1>Dictators</h1')

var $dictators = $('.dictators')
$dictators.append('<li>Trump</li>' + '<li>Hitler</li>' + '<li>Mao</li>' + '<li>Fidel</li>' + '<li>Stalin</li>');

$body.append('<button>Free the World!</button>')

$freeTheWorld = $('button')

$freeTheWorld.on('click'), function() {
    $dictators.text("")
}





