$(function() {

    $("div.content").load("./pages/home.html");

    $("li.nav-item a.nav-link").click(function() {
        var name = "./pages/" + $(this).attr("name") + ".html";
        $("div.content").load(name);
        $("li.nav-item.active").removeClass("active");
        $(this).parent().addClass("active");
    });
});