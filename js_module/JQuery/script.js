$(document).ready(() => {
    $(".list-item:first").hover(function() {
        $(this.toggleClass("active"));
    })
})