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