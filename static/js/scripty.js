$(document).ready(function(){
    console.log("loaded");
    $.material.init();
    


    $(document).on("submit", "#register-form", function(e){
        e.preventDefault();

        var from = $('#register-form').serialize();
        $.ajax({
            url: '/postregistration',
            type: 'POST',
            success: function(response){
                console.log(response)
            }

        });
        console.log("form submitted");
    });
});
