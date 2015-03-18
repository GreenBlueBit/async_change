$(document).ready(function() {
     $.async_change(function(param) { // the param is the number of the current iteration 
                        console.log("do what");
                        $('#favicon').remove();
                        $('head').append('<link href="img/favicon ('+param+').ico" id="favicon" rel="shortcut icon">');
                    }, //what to do in a loop
                    function() { 
                        console.log("FINISHED");
                    }, // what to do after the loop (you can put the loop again
                    {
                     timer:700,
                     amount: 4,
                     start: 300,
                     loop : true
                    }
                   );
    $.async_change(function(param) { // the param is the number of the current iteration 
                        console.log("do what");
                        $('#title').remove();
                        $('body').prepend('<title id="title">' + param + 'Fav Ico</title>');
                    }, //what to do in a loop
                    function() { 
                        console.log("FINISHED");
                    }, // what to do after the loop (you can put the loop again
                    {
                     timer: 400,
                     amount: 5,
                     start: 300,
                     loop: true
                    }
                   );
    $.async_change(function(param) { // the param is the number of the current iteration 
                        console.log("do what");
                        $('h1').remove();
                        $('body').prepend('<h1>' + param + 'Test</h1>');
                    }, //what to do in a loop
                    function() { 
                        console.log("FINISHED");
                    }, // what to do after the loop (you can put the loop again
                    {
                     timer:400,
                     amount: 5,
                     start: 300,
                     repeats: 12
                    }
                   );
    $.async_change(function(param) { // the param is the number of the current iteration 
                        console.log("do what");
                        var text = $('body p').text();
                        text = text.substr(1) + text.substr(0,1);
                        $('body p').html(text);
                    }, //what to do in a loop
                    function() { 
                        console.log("FINISHED");
                    }, // what to do after the loop (you can put the loop again
                    {
                     timer:100,
                     amount: 5,
                     start: 300,
                     loop: true
                    }
                   );
                    
});