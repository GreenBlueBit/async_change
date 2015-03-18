jQuery(function($) {
   $.async_change = function(doWhat, callBack, extras) {
       
       var timesDone = 0;
       
       var extras = jQuery.extend({
            timer : 500, // how many miliseconds between each iteration
            amount : 4, // how many times the action will be done
            start : 200, // in how much time to start iterations
            loop: false, 
            repeats : 0
       }, extras);
       
       var asyncLoop = function(o){
            var i=-1,
                length = o.length;

            var loop = function(){
                i++;
                if(i==length) {
                    i = 0;callBack(); 
                    if(extras.loop) {
                        loop(); 
                    } 
                    if(extras.repeats > 0) {
                        if(timesDone <= extras.repeats) {
                            timesDone++;
                            loop();
                        }
                    }
                        
                    return;
                }
                o.functionToLoop(loop, i);
            }
            loop();//init
        }
        setTimeout(function() {

            asyncLoop({
                length : extras.amount,
                functionToLoop : function(loop, i){
                    setTimeout(function(){
                        doWhat(i);
                        loop();
                    },extras.timer);
                },
                callback : function(){
                }
            });
        },extras.start);
       
       
   };
});