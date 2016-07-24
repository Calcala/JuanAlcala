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
$body.on("click", ".veil" , closeCustAlert)
$body.on("click", ".btnClose" , closeCustAlert)
$body.on("click", ".btnNextPhoto" , showNext)
$body.on("click", ".btnPrevPhoto" , showPrev)
$body.on("click", ".dialog" , stopPropagation)


init()

function init (){
    $images.each(function(){
        photoList.push($(this).attr('src'))
    })
}

function openGalleryView(event){
    event.preventDefault()
    currentPhoto = $images.index($(this))

    $alertCust = $('<div class="veil"><div class="dialog"><img src="'+photoList[currentPhoto]+'"><div class="btnNextPhoto"></div><div class="btnPrevPhoto"></div><div class="btnClose"></div></div></div>').fadeIn()

    $alertCust.appendTo($body)

    checkVisibleButtons ()

}


function showNext () {
    currentPhoto+=1
    $('.dialog img').fadeOut(400,function(){
        $(this).attr('src', photoList[currentPhoto]).fadeIn(200)
    })

    checkVisibleButtons ()
}

function showPrev() {
    currentPhoto-=1
   $('.dialog img').fadeOut(400,function(){
        $(this).attr('src', photoList[currentPhoto]).fadeIn(200)
    })

   checkVisibleButtons ()
}

function closeCustAlert () {

    $(".veil").fadeOut(400 ,
        function() {
            $(this).remove()
        }
    )
}


function stopPropagation (event){
    event.stopPropagation();
}

function checkVisibleButtons () {

    console.log (currentPhoto)
    // Show/Hide next button
    if (currentPhoto == photoList.length-1){
        $('.btnNextPhoto').css("display","none")
    }else{
        $('.btnNextPhoto').css("display","block")
    }

    // Show/Hide prev button
    if (currentPhoto == 0){
        $('.btnPrevPhoto').css("display","none")
    }else{
        $('.btnPrevPhoto').css("display","block")
    }
}
