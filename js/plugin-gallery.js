// /////////
// @author: Carlos Alcala
// @date: Jul-2016
// @version: 1.0
// ////////

//jQuery variables

var $images = $('.photoThumb a img'),
    $body   = $('body')


// Global variables
var photoList = []// Array containing all the photos
var currentPhoto = 0

// Events
$images.on('click', openGalleryView)

init()

function init (){
    $images.each(function(){
        photoList.push($(this).attr('src'))
    })
    console.log(photoList.length)
}

function openGalleryView(event){
    event.preventDefault()
    currentPhoto = $images.index($(this))

    $alertCust = $('<div class="veil"><div class="dialog"><img src="'+photoList[currentPhoto]+'"></div></div>').fadeIn()

    $alertCust.appendTo($body)

}
