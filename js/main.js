
 jQuery(function($){
     $( '.ham' ).click(function(){
     $('.hamMenu').addClass('expand')
     $('.ham').addClass('btn-none')
     })

     $( '.close-btn' ).click(function(){
     $('.hamMenu').removeClass('expand')
     $('.ham').removeClass('btn-none')
     })
   })


 jQuery(function($){
    	     $( '.ham' ).click(function(){
    	     $('.hamMenu').toggleClass('expand')
    	     })
        })
