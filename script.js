let img =$('.img')
img.click(function(){
    src=$(this).attr('src')
    $('.bigimg').attr({'src':src})
})