

$(".rainbow-text").pxgradient({
    step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
    colors: ["#F7B245","#FC4A55","#AE87B9","#7BC7C7","#E0EC5B"], // an array of hex colors.
    dir: "x" // gradient direction. "x" - horizontal,  "y" - vertical
});

$(".half-rainbow-1").pxgradient({
    step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
    colors: ["#F7B245","#FC4A55","#AE87B9"], // an array of hex colors.
    dir: "x" // gradient direction. "x" - horizontal,  "y" - vertical
});
$(".half-rainbow-2").pxgradient({
    step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
    colors: ["#AE87B9","#7BC7C7","#E0EC5B"], // an array of hex colors.
    dir: "x" // gradient direction. "x" - horizontal,  "y" - vertical
});

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