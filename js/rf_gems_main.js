function RF_isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4)))
}
jQuery(document).ready(function() {
    if (RF_isMobile()) {
        RF_GEMS_Parallax.trace("Mobile");
        RF_GEMS_Parallax.rePopulateContent();
		
		//jQuery(".overlay").hide();
    } else {
        if (!jQuery("html").hasClass("ie6_7")) RF_GEMS_Parallax.init();
    }
	jQuery(".instruction").click(function(e) {
		jQuery(".overlay").fadeOut();
	}); 
    //Parallax.init();
});
var RF_GEMS_Parallax = (function() {

    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ((mode || !$.support.boxModel)) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
                document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    function rePopulateContent() {
        

        //This is because if Satg Sans Medium font space issue. In OSX, the space margin is too narrow

        tagGenerator(jQuery(".p2_e3"), "Your answer to these questions may depend on where in the world you are from.");
        tagGenerator(jQuery(".p7_e3"), "In South Korea, France<br/>and the US, teachers are<br/>paid significantly more<br/>than people think they get<br/>paid or think they deserve.");
        tagGenerator(jQuery(".p7_e4"), "An average of 75% of<br/>people across 21 countries<br/>agree that teachers should<br/>be paid according to<br/>student performance.");
        tagGenerator(jQuery("#p8_t1"), "SWITZERLAND AND<br/>NEW ZEALAND");
        tagGenerator(jQuery("#p8_t2"), "CZECH REPUBLIC, CHINA,<br/>EGYPT AND TURKEY");
        tagGenerator(jQuery("#p8_t3"), "FRANCE, GREECE, JAPAN<br/>AND THE US");
        tagGenerator(jQuery("#download"), "Download full report");
        tagGenerator(jQuery("#join"), "Join the conversation<br/>on Twitter #TeacherIndex");
        tagGenerator(jQuery("#share"), "Share this infographic<br/>on Facebook");
        //tagGenerator(jQuery(".p2_e4"),  "We asked over 1000 people from all walks of life in 21 countries about how they viewed teachers in society <br/>and discovered how differently teachers are viewed across the world.");

    }

    function tagGenerator(_mc, _text) {

        var s1 = _text;
        var s1_array = s1.split(" ");
        var s1_result;
        for (var i = 0; i < s1_array.length; i++) {
            var temp;
            if (i != 0) {
                temp = "<span class='space'>" + s1_array[i] + "</span>"
            } else {
                temp = s1_array[i];
            }
            if ((s1_result == undefined) || (s1_result == "undefined")) s1_result = temp;
            else s1_result += temp;
        }
        _mc.find("p").html(s1_result);

    }

    function init() {

        rePopulateContent();

        var elems = [];
        var inners = [];
        jQuery.each(jQuery(".section"), function() {
            elems.push(jQuery(this));
        });
        jQuery.each(jQuery(".inner"), function() {
            inners.push(jQuery(this));
        });

        var p1_e1 = jQuery(".p1_e1");
        var p1_e2 = jQuery(".p1_e2");

        var p2_e1 = jQuery(".p2_e1");
        var p2_e2 = jQuery(".p2_e2");
        var p2_e3 = jQuery(".p2_e3");
        var p2_e4 = jQuery(".p2_e4");

        var p3_e1 = jQuery(".p3_e1");
        var p3_e2 = jQuery(".p3_e2");
        var p3_e3 = jQuery(".p3_e3");
        var p3_e4 = jQuery(".p3_e4");

        var p4_e1 = jQuery(".p4_e1");
        var p4_e2 = jQuery(".p4_e2");
        var p4_e3 = jQuery(".p4_e3");
        var p4_e4 = jQuery(".p4_e4");
        var professions_container = [];
        var bubbles = [];

        var p5_e1 = jQuery(".p5_e1");
        var p5_e2 = jQuery(".p5_e2");
        var p5_e3 = jQuery(".p5_e3");
        var p5_e1_circles = [];

        var p6_e1 = jQuery(".p6_e1");
        var p6_e2 = jQuery(".p6_e2");
        var p6_e3 = jQuery(".p6_e3");
        var p6_e4 = jQuery(".p6_e4");
        var p6_e5 = jQuery(".p6_e5");
        var p6_e6 = jQuery(".p6_e6");
        var p6_e7 = jQuery(".p6_e7");

        var p7_e1 = jQuery(".p7_e1");
        var p7_e2 = jQuery(".p7_e2");
        var p7_e3 = jQuery(".p7_e3");
        var p7_e4 = jQuery(".p7_e4");
        var p7_e5 = jQuery(".p7_e5");

        var p8_e1 = jQuery(".p8_e1");
        var p8_e2 = jQuery(".p8_e2");

        var p9_e1 = jQuery(".p9_e1");
        var p9_e2 = jQuery(".p9_e2");
        var p9_e3 = jQuery(".p9_e3");
        var p9_e4 = jQuery(".p9_e4");

        p3_e2.find("#bus").css({
            "left": "-500px"
        });
        //p4 reset
        jQuery.each(jQuery(".p4_mask"), function() {
            professions_container.push(jQuery(this));
            jQuery(this).css({
                "height": "0px",
                "top": "337px"
            });
            jQuery(this).find(".profession").css({
                "top": "-337px"
            });
        });
        jQuery.each(jQuery(".bubble"), function() {
            bubbles.push(jQuery(this));
            transformScaleOpacity(jQuery(this), 0.5, 0);
        });
        //p5 reset
        jQuery.each(jQuery(".p5_e1_circle"), function() {
            p5_e1_circles.push(jQuery(this));
            transformScaleOpacity(jQuery(this), 0.5, 0);
        });
        transformScaleOpacity(jQuery("#p5_color_circle"), 1, 0);
        transformScaleOpacity(jQuery("#p5_arrow"), 1, 0);
        transformScaleOpacity(jQuery("#p5_teacher"), 1, 0);
        transformScaleOpacity(jQuery("#p5_circle"), 1, 0);

        //p7 reset
        p7_e2.find("#p7_arrow1").css({
            "background-position": "-285px 242px"
        });
        p7_e2.find("#p7_arrow2").css({
            "background-position": "-285px 134px"
        });
        p7_e2.find("#p7_arrow3").css({
            "background-position": "-285px 134px"
        });
        p7_e2.find("#p7_green1").find("div").css({
            "top": "288px"
        });
        p7_e2.find("#p7_green2").find("div").css({
            "top": "135px"
        });
        transformScaleOpacity(jQuery(p7_e2.find("#p7_dollor")), 1, 0);
        transformScaleOpacity(jQuery(p7_e2.find("#p7_question_circle")), 1, 0);
        transformScaleOpacity(jQuery(p7_e2.find("#p7_question")), 1, 0);
        transformScaleOpacity(jQuery(p7_e2.find("#p7_percent")), 1, 0);

        //p8 reset
        transformScaleOpacity(jQuery(p8_e1.find("#p8_map")), 1, 0);
        transformScaleOpacity(jQuery(p8_e1.find("#p8_people_small")), 1, 0);
        transformScaleOpacity(jQuery(p8_e1.find("#p8_people_medium")), 1, 0);
        transformScaleOpacity(jQuery(p8_e1.find("#p8_people_large")), 1, 0);
        transformScaleOpacity(jQuery(p8_e1.find("#p8_t1")), 1, 0);
        transformScaleOpacity(jQuery(p8_e1.find("#p8_t2")), 1, 0);
        transformScaleOpacity(jQuery(p8_e1.find("#p8_t3")), 1, 0);
        p8_e1.find("#p8_arrow").width("0px");

        //p9 reset
        transformScaleOpacity(p9_e2, 1, 0);
        transformScaleOpacity(p9_e4.find("div"), 1, 0);

        jQuery(".p2").css({
            "height": "1500px"
        });
        jQuery(".p3").css({
            "height": "2000px"
        });
        jQuery(".p4").css({
            "height": "2500px"
        });
        jQuery(".p5").css({
            "height": "2300px"
        });
        jQuery(".p6").css({
            "height": "2400px"
        });
        jQuery(".p7").css({
            "height": "2500px"
        });
        jQuery(".p8").css({
            "height": "2500px"
        });
        jQuery(".p9").css({
            "height": "2000px"
        });

        function transformScaleOpacity(_mc, _scale, _opacity) {
            if (_scale > 1) _scale = 1;
            if (_opacity > 1) _opacity = 1;
            if (_opacity < 0) _opacity = 0;
            _mc.css({
                'transform': 'scale(' + _scale + ',' + _scale + ')',
                '-webkit-transform': 'scale(' + _scale + ',' + _scale + ')',
                '-moz-transform': 'scale(' + _scale + ',' + _scale + ')',
                '-ms-transform': 'scale(' + _scale + ',' + _scale + ')',
                'opacity': _opacity
            });
        }

        jQuery(window).scroll(function() {

            var vpH = getViewportHeight(),
                scrolltop = (document.documentElement.scrollTop ?
                    document.documentElement.scrollTop :
                    document.body.scrollTop)

                jQuery.each(elems, function(index) {
                    var el = jQuery(this),
                        top = el.offset().top,
                        height = el.height()
                        if (scrolltop > (top + height) || scrolltop + vpH < top) {
                            el.removeClass("inview");
                        } else if (scrolltop < (top + height)) {
                            el.addClass("inview");
                        }
                });

            jQuery(".guide_line").css({
                "top": (scrolltop + (vpH / 2))
            });

            if (elems[0].hasClass("inview")) {
                var p1_base = elems[0].offset().top;
                p1_e1.css({
                    "top": 260 - ((scrolltop - p1_base) / 8)
                });
                p1_e2.css({
                    "top": 195 - ((scrolltop - p1_base) / 13)
                });

                changePositionCSS(0, scrolltop, p1_base);
            }
            if (elems[1].hasClass("inview")) {
                var p2_base = elems[1].offset().top;
                p2_e1.css({
                    "top": -(scrolltop - p2_base) / 2
                });
                if (parseInt(p2_e1.css("top")) < 0) p2_e1.css({
                    "top": "0px"
                });

                p2_e2.css({
                    "top": 560 - (scrolltop - p2_base) / 30
                });
                p2_e3.css({
                    "top": 653 - (scrolltop - p2_base) / 30
                });
                p2_e4.css({
                    "top": 705 - (scrolltop - p2_base) / 30
                });

                changePositionCSS(1, scrolltop, p2_base);

                jQuery("#ray").addClass("rotate");
            } else {
                jQuery("#ray").removeClass("rotate");
            }
            if (elems[2].hasClass("inview")) {
                var p3_base = elems[2].offset().top;

                p3_e1.css({
                    "left": (scrolltop - p3_base) / 15
                });
                p3_e3.css({
                    "top": 550 - (scrolltop - p3_base) / 30
                });
                p3_e4.css({
                    "top": 600 - (scrolltop - p3_base) / 30
                });

                //if ((scrolltop - p3_base) > 0) {
                p3_e2.find("#bus").css({
                    "left": -500 + (scrolltop - p3_base) / 2
                });
                if (parseInt(p3_e2.find("#bus").css("left")) > 120) p3_e2.find("#bus").css({
                    "left": "120px"
                });

                // }
                p3_e2.find("#children").css({
                    "opacity": (scrolltop - p3_base) * 0.002
                });
                if (parseInt(p3_e2.find("#children").css("opacity")) > 1) p3_e2.find("#children").css({
                    "opacity": 1
                });
                p3_e2.find("#teacher").css({
                    "opacity": (scrolltop - p3_base) * 0.002
                });
                if (parseInt(p3_e2.find("#teacher").css("opacity")) > 1) p3_e2.find("#teacher").css({
                    "opacity": 1
                });

                changePositionCSS(2, scrolltop, p3_base);
            }
            if (elems[3].hasClass("inview")) {
                var p4_base = elems[3].offset().top;

                p4_e2.css({
                    "top": 350 - (scrolltop - p4_base) / 30
                });
                var scrollPos = scrolltop - p4_base;
                if (scrollPos > 0) {
                    if (scrollPos < 1000) {
                        professions_container[0].css({
                            "height": 0.337 * scrollPos,
                            "top": 337 - (0.337 * scrollPos)
                        });
                        professions_container[0].find(".profession").css({
                            "top": -337 + (0.337 * scrollPos)
                        });
                    } else {
                        professions_container[0].css({
                            "height": 337,
                            "top": 0
                        });
                        professions_container[0].find(".profession").css({
                            "top": 0
                        });
                    }
                }

                if (scrollPos > 100) {
                    if (scrollPos < 1100) {
                        professions_container[1].css({
                            "height": (0.337 * (scrollPos - 100)),
                            "top": 337 - (0.337 * (scrollPos - 100))
                        });
                        professions_container[1].find(".profession").css({
                            "top": -337 + (0.337 * (scrollPos - 100))
                        });
                    } else {
                        professions_container[1].css({
                            "height": 337,
                            "top": 0
                        });
                        professions_container[1].find(".profession").css({
                            "top": 0
                        });
                    }
                }

                if (scrollPos > 200) {
                    if (scrollPos < 1200) {
                        professions_container[2].css({
                            "height": (0.337 * (scrollPos - 200)),
                            "top": 337 - (0.337 * (scrollPos - 200))
                        });
                        professions_container[2].find(".profession").css({
                            "top": -337 + (0.337 * (scrollPos - 200))
                        });
                    } else {
                        professions_container[2].css({
                            "height": 337,
                            "top": 0
                        });
                        professions_container[2].find(".profession").css({
                            "top": 0
                        });
                    }
                }
                if (scrollPos > 300) {
                    if (scrollPos < 1300) {
                        professions_container[3].css({
                            "height": (0.337 * (scrollPos - 300)),
                            "top": 337 - (0.337 * (scrollPos - 300))
                        });
                        professions_container[3].find(".profession").css({
                            "top": -337 + (0.337 * (scrollPos - 300))
                        });
                    } else {
                        professions_container[3].css({
                            "height": 337,
                            "top": 0
                        });
                        professions_container[3].find(".profession").css({
                            "top": 0
                        });
                    }
                }
                //info bubble animations
                if (scrollPos > 300) {
                    if (scrollPos < 1600) {
                        transformScaleOpacity(bubbles[0], 0.5 + (0.0008 * (scrollPos - 500)), 0.005 * (scrollPos - 500));
                    }
                }
                if (scrollPos > 300) {
                    if (scrollPos < 1700) {
                        transformScaleOpacity(bubbles[1], 0.5 + (0.0008 * (scrollPos - 600)), 0.005 * (scrollPos - 600));
                    }
                }
                if (scrollPos > 300) {
                    if (scrollPos < 1800) {
                        transformScaleOpacity(bubbles[2], 0.5 + (0.0008 * (scrollPos - 700)), 0.005 * (scrollPos - 700));
                    }
                }
                if (scrollPos > 300) {
                    if (scrollPos < 1900) {
                        transformScaleOpacity(bubbles[3], 0.5 + (0.0008 * (scrollPos - 800)), 0.005 * (scrollPos - 800));
                    }
                }


                if (scrollPos < 0) {
                    jQuery.each(professions_container, function(index) {
                        jQuery(this).css({
                            "height": 0,
                            "top": 337
                        });
                        jQuery(this).find(".profession").css({
                            "top": -337
                        });
                    });

                    jQuery.each(bubbles, function(index) {
                        transformScaleOpacity(jQuery(this), 0.5);
                        jQuery(this).css({
                            "opacity": 0
                        });
                    });
                }

                p4_e4.css({
                    "top": 610 - (scrolltop - p4_base) / 30
                });

                changePositionCSS(3, scrolltop, p4_base);
            }
            if (elems[4].hasClass("inview")) {
                var p5_base = elems[4].offset().top;
                var scrollPos2 = scrolltop - p5_base;

                p5_e2.css({
                    "top": 670 - (scrollPos2) / 30
                });
                p5_e3.css({
                    "top": 320 - (scrollPos2) / 25
                });
                p5_e1.find("#p5_circle").css({
                    "top": (scrollPos2) / 2
                });
                if (parseInt(p5_e1.find("#p5_circle").css("top")) > 127) p5_e1.find("#p5_circle").css({
                    "top": "127px"
                });
                transformScaleOpacity(jQuery("#p5_circle"), 1, 0.002 * (scrollPos2));

                jQuery("#p5_arrow").css({
                    "left": 359 + (scrollPos2) / 60
                });
                jQuery("#p5_teacher").css({
                    "left": 562 - (scrollPos2) / 120
                });

                //info bubble animations
                if (scrollPos2 > 300) {
                    if (scrollPos2 < 2300) {
                        transformScaleOpacity(jQuery("#p5_color_circle"), 1, 0.0015 * (scrollPos2 - 300));
                        transformScaleOpacity(jQuery("#p5_arrow"), 1, 0.0015 * (scrollPos2 - 300));
                        transformScaleOpacity(jQuery("#p5_teacher"), 1, 0.0015 * (scrollPos2 - 300));
                    }
                }
                if (scrollPos2 > 300) {
                    if (scrollPos2 < 1600) {
                        transformScaleOpacity(jQuery("#p5_israel"), 0.5 + (0.0008 * (scrollPos2 - 500)), 0.005 * (scrollPos2 - 500));
                    }
                }
                if (scrollPos2 > 300) {
                    if (scrollPos2 < 1800) {
                        transformScaleOpacity(jQuery("#p5_china"), 0.5 + (0.0008 * (scrollPos2 - 700)), 0.005 * (scrollPos2 - 700));
                    }
                }

                if (scrollPos2 < 0) {
                    jQuery.each(jQuery(".p5_e1_circle"), function() {
                        p5_e1_circles.push(jQuery(this));
                        transformScaleOpacity(jQuery(this), 0.5, 0);
                    });
                    transformScaleOpacity(jQuery("#p5_color_circle"), 1, 0);
                    transformScaleOpacity(jQuery("#p5_arrow"), 1, 0);
                    transformScaleOpacity(jQuery("#p5_teacher"), 1, 0);
                }

                changePositionCSS(4, scrolltop, p5_base);
            }
            if (elems[5].hasClass("inview")) {
                var p6_base = elems[5].offset().top;
                var scrollPos3 = scrolltop - p6_base;

                p6_e2.css({
                    "left": 450 + (scrollPos3) / 25
                });
                p6_e3.css({
                    "top": 220 - (scrollPos3) / 25
                });

                transformScaleOpacity(p6_e5, 0.5 + (0.0004 * (scrollPos3 - 200)), 0.002 * (scrollPos3 - 200));

                p6_e6.css({
                    "top": 415 + (scrollPos3) / 50
                });

                p6_e7.css({
                    "top": 615 - (scrollPos3) / 30
                });

                changePositionCSS(5, scrolltop, p6_base);
            }
            if (elems[6].hasClass("inview")) {
                var p7_base = elems[6].offset().top;
                var scrollPos4 = scrolltop - p7_base;

                p7_e3.css({
                    "top": 218 - (scrollPos4) / 90
                });
                p7_e4.css({
                    "top": 229 - (scrollPos4) / 90
                });
                p7_e5.css({
                    "top": 604 - (scrollPos4) / 50
                });
                p7_e2.find("#p7_teacher").css({
                    "top": 95 - (scrollPos4) / 100
                });

                if (scrollPos4 > 100) {
                    var yPos_arrow1 = 242 - ((scrollPos4 - 300) * 0.5);
                    if (yPos_arrow1 < 0) yPos_arrow1 = 0;
                    p7_e2.find("#p7_arrow1").css({
                        "background-position": "-285px " + yPos_arrow1 + "px"
                    });

                    var yPos_green1 = 288 - ((scrollPos4 - 300) * 0.5);
                    if (yPos_green1 < 0) yPos_green1 = 0;
                    p7_e2.find("#p7_green1").find("div").css({
                        "top": yPos_green1
                    });

                }
                if (scrollPos4 > 200) {
                    var yPos_arrow2 = 134 - ((scrollPos4 - 400) * 0.2);
                    if (yPos_arrow2 < 0) yPos_arrow2 = 0;
                    p7_e2.find("#p7_arrow2").css({
                        "background-position": "-285px " + yPos_arrow2 + "px"
                    });
                    var yPos_green2 = 135 - ((scrollPos4 - 400) * 0.2);
                    if (yPos_green2 < 0) yPos_green2 = 0;
                    p7_e2.find("#p7_green2").find("div").css({
                        "top": yPos_green2
                    });


                    var yPos_arrow3 = 134 - ((scrollPos4 - 400) * 0.2);
                    if (yPos_arrow3 < 0) yPos_arrow3 = 0;
                    p7_e2.find("#p7_arrow3").css({
                        "background-position": "-285px " + yPos_arrow3 + "px"
                    });


                    transformScaleOpacity(p7_e2.find("#p7_dollor"), 0.5 + (0.0007 * (scrollPos4 - 400)), 0.002 * (scrollPos4 - 400));

                    transformScaleOpacity(p7_e2.find("#p7_question_circle"), 0.5 + (0.0007 * (scrollPos4 - 400)), 0.002 * (scrollPos4 - 400));
                    transformScaleOpacity(p7_e2.find("#p7_question"), 1, 0.002 * (scrollPos4 - 400));
                }
                if (scrollPos4 > 300) {
                    transformScaleOpacity(p7_e2.find("#p7_percent"), 0.5 + (0.0007 * (scrollPos4 - 500)), 0.002 * (scrollPos4 - 500));
                }

                changePositionCSS(6, scrolltop, p7_base);
            }
            if (elems[7].hasClass("inview")) {
                var p8_base = elems[7].offset().top;
                var scrollPos5 = scrolltop - p8_base;

                p8_e2.css({
                    "top": 560 - (scrollPos5) / 80
                });
                p8_e1.find("#p8_title").css({
                    "top": 60 - (scrollPos5) / 130,
                    "left": 113 + (scrollPos5) / 40
                });
                transformScaleOpacity(p8_e1 .find("#p8_map"), 1, 0.002 * (scrollPos5 - 100));

                var arrow_width = (scrollPos5 * 2) + 100;
                if (arrow_width > 927) {
                    arrow_width = 927;
                }
                else if (arrow_width < 0) {
                    arrow_width = 0;
                }
                
                p8_e1.find("#p8_arrow").css({
                    "width": arrow_width
                });
   
                if (scrollPos5 > 200) {
                    transformScaleOpacity(p8_e1 .find("#p8_people_small"), 0.5 + (0.0007 * (scrollPos5 - 300)), 0.002 * (scrollPos5 - 300));
                }
                if (scrollPos5 > 300) {
                    transformScaleOpacity(p8_e1 .find("#p8_people_medium"), 0.5 + (0.0007 * (scrollPos5 - 300)), 0.002 * (scrollPos5 - 400));
                }
                if (scrollPos5 > 400) {
                    transformScaleOpacity(p8_e1 .find("#p8_people_large"), 0.5 + (0.0007 * (scrollPos5 - 300)), 0.002 * (scrollPos5 - 500));
                    transformScaleOpacity(p8_e1 .find("#p8_t1"), 1, 0.002 * (scrollPos5 - 500));
                    transformScaleOpacity(p8_e1 .find("#p8_t2"), 1, 0.002 * (scrollPos5 - 500));
                    transformScaleOpacity(p8_e1 .find("#p8_t3"), 1, 0.002 * (scrollPos5 - 500));
                }



                changePositionCSS(7, scrolltop, p8_base);
            }
            if (elems[8].hasClass("inview")) {
                var p9_base = elems[8].offset().top;
                var scrollPos6 = scrolltop - p9_base;

                transformScaleOpacity(p9_e2, 1, 0.002 * (scrollPos6 + 100));
                p9_e3.css({
                    "left": 419 + (scrollPos6) / 40
                });

                transformScaleOpacity(p9_e4.find("#p9_earth"), 0.5 + (0.001 * (scrollPos6 - 100)), 0.002 * (scrollPos6 + 100));
                if (scrollPos6 > 100 ) {
                   transformScaleOpacity(p9_e4.find("#p9_student"), 0.5 + (0.001 * (scrollPos6 - 200)), 0.002 * (scrollPos6 - 200));
                }
                if (scrollPos6 > 200 ) {
                   transformScaleOpacity(p9_e4.find("#p9_item1"), 0.5 + (0.001 * (scrollPos6 - 300)), 0.002 * (scrollPos6 - 300));
                }
                if (scrollPos6 > 300 ) {
                   transformScaleOpacity(p9_e4.find("#p9_item2"), 0.5 + (0.001 * (scrollPos6 - 400)), 0.002 * (scrollPos6 - 400));
                }
                if (scrollPos6 > 400 ) {
                   transformScaleOpacity(p9_e4.find("#p9_item3"), 0.5 + (0.001 * (scrollPos6 - 500)), 0.002 * (scrollPos6 - 500));
                }
                if (scrollPos6 > 500 ) {
                   transformScaleOpacity(p9_e4.find("#p9_item4"), 0.5 + (0.001 * (scrollPos6 - 600)), 0.002 * (scrollPos6 - 600));
                }

                changePositionCSS(8, scrolltop, p9_base);
            }
        });
        var DoRotate = function(d) {

            $("#ray").css({
                '-moz-transform': 'rotate(' + d + 'deg)',
                '-webkit-transform': 'rotate(' + d + 'deg)',
                '-o-transform': 'rotate(' + d + 'deg)',
                '-ms-transform': 'rotate(' + d + 'deg)',
                'transform': 'rotate(' + d + 'deg)'
            });
        }

        var changePositionCSS = function(_index, _scrolltop, _base) {
            if (_scrolltop >= _base) {
                for (var i = 0; i < elems.length; i++) {
                    if (i != _index) {
                        elems[i].removeClass("fixed");
                        inners[i].css({
                            "position": "relative"
                        });
                    } else {
                        elems[i].addClass("fixed");
                        inners[i].css({
                            "position": "fixed",
                            "top": "0px"
                        });
                    }
                }
            }
        }

        jQuery(window).resize(function() {
            jQuery(".p1").css({
                "height": $(window).height()
            });
        });

        jQuery(window).scroll();
        jQuery(window).resize();
    }

    function trace(_val) {
        if (console) {
            console.log(_val)
        }
    }

    return {
        init: init,
        rePopulateContent: rePopulateContent,
        trace: trace
    }
})();