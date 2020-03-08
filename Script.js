

function callFullPage(){ 
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        controlArrows: true,
        slidesNavigation: true,
        navigation: true,
        navigationTooltips: ['Home', 'About Us', 'Schedule', 'Flights', 'Learning', 'Contact Us'],
        showActiveTooltip: true, 
        // scrollingSpeed: 1000,
      });

      fullpage_api.setKeyboardScrolling(true);
}

function callTypeForm(){
    var qs,js,q,s,d=document, 
    gi=d.getElementById, 
    ce=d.createElement, 
    gt=d.getElementsByTagName, 
    id="typef_orm", 
    b="https://embed.typeform.com/"; 
    if(!gi.call(d,id)) { 
        js=ce.call(d,"script"); 
        js.id=id; js.src=b+"embed.js"; 
        q=gt.call(d,"script")[0]; 
        q.parentNode.insertBefore(js,q) 
    } 
}
