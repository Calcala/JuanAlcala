// Variables
var $menuItemSquare = $('.menuItemSquare')





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
    $(this).siblings().addClass("transparent")
    }
