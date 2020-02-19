$(document).ready(function(){
$.material.init();
    console.log("loaded");


    $(document).on("submit", "#register-form", function(e){
        e.preventDefault();
        console.log("form submitted");
    });
});
