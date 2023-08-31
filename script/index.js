$(function () {

    AOS.init({
        duration: 1500,
    });
    //ì–´ë„ë¹„ í°íŠ¸
    (function (d) {
        var config = {
            kitId: 'pak3nbn',
            scriptTimeout: 3000,
            async: true
        },
            h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
    })(document);

    // ì‚¬ì´íŠ¸ë§µ
    let mapList = $("#map-gnb .map_menu");
    mapList.hover(function () {
        $(this).addClass("active").find(".lnb_two li").css({ display: "block" })
    }, function () {
        $(this).removeClass("active").find(".lnb_two li").css({ display: "none" })
    })
    $(".m-gnb").click(function () {
        $("#sitemap").slideDown(400, 'linear').show();
    });

    $(".site_close").click(function () {
        $("#sitemap").slideUp(400, 'linear').hide();
    });

    // ì„œë¸Œ lnb
    // $(document).ready(function() {
    //     $("#snb > li").click(function() {
    //         $(this).find(".lnb").slideToggle().toggleClass("on");
    //     });
    //     $("#snb > li").mouseleave(function() {
    //         $(this).find(".lnb").slideUp().removeClass("on");
    //     });
    // });




    //í‘¸í„° ì–¸ì–´
    $(document).ready(function () {
        $(".ft_global").click(function () {
            $(".ft_global_list").slideToggle();
        });

        $(".ft_global").mouseleave(function () {
            $(".ft_global_list").slideUp();
        });
    });
    var swiper = new Swiper("#main_06 .main_cert_patent .main_cert_bond .swiper-container", {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 1,


        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });

    var swiper = new Swiper("#main_06 .main_cert .main_cert_wrap .main_cert_certification .main_cert_bond .swiper-container", {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 1,


        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });

});
document.addEventListener("DOMContentLoaded", function () {
    var snbItems = document.querySelectorAll("#snb > li");

    snbItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var lnb = this.querySelector(".lnb");
            if (lnb.style.display === "none" || lnb.style.display === "") {
                lnb.style.display = "block";
                lnb.classList.toggle("on");
            } else {
                lnb.style.display = "none";
                lnb.classList.remove("on");
            }
        });

        item.addEventListener("mouseleave", function () {
            var lnb = this.querySelector(".lnb");
            lnb.style.display = "none";
            lnb.classList.remove("on");
        });
    });
});
