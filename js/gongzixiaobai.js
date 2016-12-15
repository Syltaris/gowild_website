/**
 * Created by psy on 2016/1/5.
 */

var centerToBothSide = {};
var loverSwiper = new Swiper('#loverSwiper', {
    pagination: '#loverSwiperPagenation',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    loop: false,
    speed: 1000,
    onSlideChangeEnd: function (swiper) {
        var headerClass = $(swiper.slides[swiper.activeIndex]).attr('data-header-class') || '';
        if (this.headerClass != '') {
            $('.header-wrapper').removeClass(this.headerClass);
        }
        if (headerClass != '') {
            $('.header-wrapper').addClass(headerClass);
            this.headerClass = headerClass;
        }
    },
    onInit: function (_self) {
        setTimeout(function () {
            $(_self.slides[_self.activeIndex]).addClass('animated');
        }, 1000);
    }
});
var featureSwiper = new Swiper('#featureSwiper', {
    pagination: '#featureSwiperPagenation',
    paginationClickable: true,
    direction: 'vertical',
    mousewheelControl: true,
    speed: 1800,
    loop: false,
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 5) {
            var gifWrapper = $(swiper.slides[swiper.activeIndex]).find('#dataAnalysisGif');

            gifWrapper.css('background-image', "url('../img/data-analysis.gif')");
        }
        else if (swiper.activeIndex == 1) {
            $(swiper.slides[swiper.activeIndex]).find('#headRotate').css('background-image', "url('../img/head-rotate.gif')");
        }
        if (swiper.activeIndex == 3) {
            var icons = $(swiper.slides[swiper.activeIndex]).find('.icon-group > .icon');
            var middleIndex = parseInt(icons.length / 2),
                iconWidth = $(icons[0]).innerWidth();
            icons.each(function (i, iconEle) {
                var transformX = (i - middleIndex) * iconWidth;

                $(iconEle).css('transform', 'translate3d(' + transformX + 'px,0px,0px)');
            })
        }
    },
    onInit: function (_self) {
        setTimeout(function () {
            $(_self.slides[_self.activeIndex]).addClass('animated');
        }, 1000);
    }
});
//���sub-header�İ�ť�л�ӵ��Ta�͸�֪Ta
var tabs = {
        headerItems: $('.sub-header').find('ul a'),
        contentItems: document.querySelector('.tab-list').querySelectorAll('.tab-item')
    },
    activeIndex = 0;

tabs.headerItems.each(function (index, ele) {
    ele.onclick = function (e) {
        $(tabs.headerItems[activeIndex]).removeClass('active');
        $(ele).addClass('active');
        if (activeIndex !== index) {
            $(tabs.contentItems[activeIndex]).removeClass('active');
            $(tabs.contentItems[index]).addClass('active');
            activeIndex = index;
        }
        switch (activeIndex) {
            case 0:
                featureSwiper.slideTo(0);
                break;
            case 1:
                loverSwiper.slideTo(0);
                break;
        }
    }
});

$('.clip-pic-list').clipBox({
    swiper: featureSwiper
});

//�������
$('#faceView').face({
    iconWrapper: '.icon-group',
    faceWrapper: '.face-wrapper',
    data: [{
        iconClass: 'icon icon-face-laugh',
        title: 'ϲ',
        faceSrc: '../img/face-laugh.gif'
    }, {
        iconClass: 'icon icon-face-anger',
        title: 'ŭ',
        faceSrc: '../img/face-anger.gif'
    }, {
        iconClass: 'icon icon-face-sorrow',
        title: '��',
        faceSrc: '../img/face-sorrow.gif'
    }, {
        iconClass: 'icon icon-face-happy',
        title: '��',
        faceSrc: '../img/face-happy.gif'
    }]
});


$('#showDesign').click(function () {
    var designSwiperWrapper = $('.design-swiper-wrapper');
    designSwiperWrapper.addClass('active');
    designSwiperWrapper.find('.icon-close').click(function (e) {
        designSwiperWrapper.removeClass('active');
    });
    setTimeout(function () {

        var designSwiper = new Swiper('#designSwiper', {
            pagination: '#designSwiperPagenation',
            paginationClickable: true,
            direction: 'vertical',
            mousewheelControl: true,
            speed: 1800,
            onSlideChangeEnd: function (swiper) {
                $(swiper.slides[swiper.activeIndex]).addClass('animated');
            },
            onInit: function (_self) {
                setTimeout(function () {
                    $(_self.slides[_self.activeIndex]).addClass('animated');
                }, 1000);
            }
        });
    }, 1000);
});


$('.lovers-swiper-container').find('.swiper-slide').each(function (index, scope) {
    var
        left = 'url("../img/lovers/v0' + parseInt(index + 1) + '-left.png")',
        right = 'url("../img/lovers/v0' + parseInt(index + 1) + '-right.png")';
    $(scope).find('.left').css('background-image', left);
    $(scope).find('.right').css('background-image', right);
});