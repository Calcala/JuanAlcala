// Variables
var
    $menuItemSquare     = $('.menuItemSquare'),
    $photoThumb         = $('.photoThumb'),
    $showMenuButton     = $('.showMenuButton'),
    $menu               = $('.sideMenu ul'),
    $menuItem           = $('.sideMenu .sm-item'),
    linkLocation


//Events
$menuItemSquare.hover(reduceSiblingsOpacity,resetSiblingsOpacity)
$menuItemSquare.on("click", openMenuLink)
$showMenuButton.on("click", toggleMenu)
$menuItem.on("click", navigateTo)


// Functions
function reduceSiblingsOpacity () {
    $(this).siblings().addClass("lowOpacity")
}
function resetSiblingsOpacity () {
    $(this).siblings().removeClass("lowOpacity")
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
