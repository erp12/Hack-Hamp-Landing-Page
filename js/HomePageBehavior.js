
$( document ).ready(function() {
    $( "div.hh-cell-bg" ).hover(
        function() {
            $( this ).siblings("button").fadeTo( "slow" , 1, function() {
                //
            });
            $( this ).siblings("p").fadeTo( "fast" , 1, function() {
                //
            });
            $( this ).fadeTo( "fast" , 0.1, function() {
                $(this).next().css("margin-top", "10px");
            });
        }, function() {
            $( this ).siblings("button").fadeTo( "fast" , 0, function() {
                //
            });
            $( this ).siblings("p").fadeTo( "slow" , 0.0, function() {
                //
            });
            $( this ).fadeTo( "fast" , 0.7, function() {
                $(this).next().css("margin-top", "25%");
            });
        }
    );

    $( ".hh-cell-btn" ).click(function() {
        alert("It works!");
    });
});