(function($) {
    index = parseInt(Math.random() * (8 - 1 + 1) + 1)
    document.getElementById("sidebar-video").src = "/video/" + index + ".mp4";
})(jQuery);