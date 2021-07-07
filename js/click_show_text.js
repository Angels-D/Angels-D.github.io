var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("(^///^)", "╰(*°▽°*)╯", "(*/ω＼*)", "ヾ(•ω•`)o", "O(∩_∩)O", "ᓚᘏᗢ", "(✿◕‿◕✿)", "ο(=•ω＜=)ρ⌒☆", "(★ ω ★)", "(ಥ _ ಥ)", "(ˉ▽ˉ；)...", "(๐॔˃̶ᗜ˂̶๐॓)");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": '#' + (Math.random() * 0xffffff << 0).toString(16)
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() { $(".buryit").removeAttr("onclick"); }