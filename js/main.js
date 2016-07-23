// Variables
var
    $menuItemSquare     = $('.menuItemSquare'),
    $albumContent       = $('.albumContent'),
    $photoThumb         = $('.photoThumb'),
    $showMenuButton     = $('.showMenuButton'),
    $menu               = $('.sideMenu ul'),
    $menuItem           = $('.sideMenu .sm-item'),
    $goTopButton        = $('.goTopButton'),
    linkLocation


//Events
$menuItemSquare.hover(reduceSiblingsOpacity,resetSiblingsOpacity)
$photoThumb.hover(reduceSiblingsPhotosOpacity,resetSiblingsPhotosOpacity)
$menuItemSquare.on("click", openMenuLink)
$showMenuButton.on("click", toggleMenu)
$menuItem.on("click", navigateTo)
$albumContent.scroll(showHideGoTopButton)
$goTopButton.on("click",goTop)

$(window).resize(makeMenuVisible)


// Functions
function reduceSiblingsOpacity () {
    $(this).siblings().css("opacity",".6")
}
function resetSiblingsOpacity () {
    $(this).siblings().css("opacity","1")
}



function reduceSiblingsPhotosOpacity () {
    $(this).siblings().children('a').css("opacity",".75")
}
function resetSiblingsPhotosOpacity () {
    $(this).siblings().children('a').css("opacity","1")
}


function showHideGoTopButton () {
    if ($albumContent.scrollTop() > 600){
        $goTopButton.fadeIn()
    }else{
        $goTopButton.fadeOut()
    }
}

function goTop(){
     $albumContent.animate({scrollTop: 0}, 1000)
}

function openMenuLink(event){
    event.preventDefault()

    linkLocation = $(this).children("a").attr("href")

    $(this).siblings().addClass("transparent")

    setTimeout(function(){
         window.location = linkLocation
    },300)
}


function toggleMenu(){
    $showMenuButton.stop().toggleClass("rotated")
    $menu.stop().slideToggle()
}

function makeMenuVisible(){

    if($(window).innerWidth() > 580){
        $menu.css("display",'')
        $showMenuButton.stop().removeClass("rotated")
    }
}


function navigateTo(){

    if($showMenuButton.hasClass("rotated")){
        event.preventDefault()
        linkLocation = $(this).children("a").attr("href")

        $showMenuButton.stop().toggleClass("rotated")
        $menu.stop().slideToggle(300, function(){
            setTimeout(function(){
                 window.location = linkLocation
            },100)
        })
    }

}



