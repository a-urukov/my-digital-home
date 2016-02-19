$(function() {

    $('.b-main-categories__item')
        .bind('mouseenter', function(e) {
            var $this = $(this);

            $this.data({ preventShow: false });
            setTimeout(function() {
                var data = $this.data();

                data && data.preventShow || $this.find('.b-main-categories__dropdown').show();
            }, 250);
        })

        .bind('mouseleave', function(e) {
            $(this)
                .data({ preventShow: true })
                .find('.b-main-categories__dropdown').hide();
        });

    $('.b-left-menu__expand, .b-left-menu__collapse').bind('click', function() {
        var item = $(this).parent('.b-left-menu__item');

        item.children('.b-left-menu__list').slideToggle(200);

        $(this).parent('.b-left-menu__item').toggleClass('b-left-menu__item_expanded_yes')
    });

    $('.b-product-preview')
        .bind('mouseenter', function(e) {
            var $this = $(this);

            $this.data({ preventShow: false });
            setTimeout(function() {
                var data = $this.data();

                data && data.preventShow || $this.find('.b-product-preview__buy').fadeIn(300);
            }, 250);
        })
        .bind('mouseleave', function(e) {
            $(this)
                .data({ preventShow: true })
                .find('.b-product-preview__buy').fadeOut(300);

        });

    var current = $('.b-left-menu__item_state_current');

    current.parents('.b-left-menu__item').addClass('b-left-menu__item_expanded_yes');
    current.addClass('b-left-menu__item_expanded_yes');

    //(function() {
    //    var HALF_STEP = 20;
    //
    //    $('.b-category__image')
    //        .bind('mouseenter', function(e) {
    //            var category = $(e.target),
    //                width = category.width(),
    //                height = category.height(),
    //                ratio = width / height;
    //
    //            category.css('max-width', width + 'px');
    //
    //            if (category.queue().length) {
    //                category.stop();
    //            } else {
    //                category
    //                    .data('width', width)
    //                    .data('height', height);
    //            }
    //
    //            category.animate({
    //                left: '-=' + Math.round(ratio * HALF_STEP),
    //                top: '-=' + HALF_STEP,
    //                height: '+=' + HALF_STEP * 2,
    //                'max-width': '+=' + Math.round(ratio * HALF_STEP * 2),
    //                'margin-bottom': '-=' + HALF_STEP * 2
    //            }, 400);
    //        })
    //        .bind('mouseleave', function(e) {
    //            var category = $(e.target);
    //
    //            if (category.queue().length) {
    //                category.stop();
    //            }
    //
    //            category.data('height') && category.data('width') &&
    //                category.animate({
    //                    left: '0',
    //                    top: '0',
    //                    height: category.data('height'),
    //                    'max-width': category.data('width'),
    //                    'margin-bottom': '0'
    //                }, 400);
    //        });
    //})();

});
