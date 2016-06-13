// Variables
var
    $menuItemSquare = $('.menuItemSquare'),
    $photoThumb = $('.photoThumb'),
    linkLocation


$menuItemSquare.hover(reduceSiblingsOpacity,resetSiblingsOpacity)

function reduceSiblingsOpacity () {
    $(this).siblings().addClass("lowOpacity")
}
function resetSiblingsOpacity () {
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
