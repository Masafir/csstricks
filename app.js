var app = {
    displayOn : false,
    init: function(){
        var fieldOne = $('.one');

        fieldOne.on('click',app.display);
    },
    display: function(){
        if(app.displayOn == false)
        {
            $('.display1').removeClass('hidden');
            app.displayOn = true;
        }
        else {
            $('.display1').addClass('hidden');
            app.displayOn = false;
        }

    }
}
app.init();