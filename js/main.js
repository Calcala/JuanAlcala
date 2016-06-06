// Variables
var
    $menuItemSquare = $('.menuItemSquare'),
    linkLocation


$menuItemSquare.hover(menuItemSquareOn,menuItemSquareOff)

function menuItemSquareOn () {
    $(this).siblings().addClass("lowOpacity")
}
function menuItemSquareOff () {
    $(this).siblings().removeClass("lowOpacity")
}


$menuItemSquare.on("click", openMenuLink)

function openMenuLink(event){
    event.preventDefault()

    linkLocation = $(this).children("a").attr("href")

    $(this).siblings().addClass("transparent")


    setTimeout(function(){
         window.location = linkLocation
    },300)
}
