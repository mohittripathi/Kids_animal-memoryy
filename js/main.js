

//$(document).ready(function(){
  //$("button").click(function(){
     // $(this).hide();
   //});
//});

var k=0;
function clickcount1()
{
	k=1;
	
}

window.addEventListener('tizenhwkey', function onTizenHwKey(e) {
    if (e.keyName === 'back') {
        
    	window.location.href='first.html';
    	//window.history.back();
    }
    
    
    if (e.keyName === 'back' && k==1) {
    try {
		
		tizen.application.getCurrentApplication().exit();
	} catch (error) {
		console.error("getCurrentApplication(): " + error.message);
	}
    
    }
    
});

/*window.onload = function() {
    init();
}*/
