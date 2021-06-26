$(document).ready(function () {
    $(window).scrollTop(0);
});
    // Load album pages
    $(".profile-card").click(function() {
        var albumID = this.id;
        $("#main").load("profiles/" + albumID + ".html");
        $(window).scrollTop(0);
    });
    // Load album pages
    $(".indv-pfp").click(function() {
        $("#main").load("/students.html");
        $(window).scrollTop(0);
    });