$(document).ready(function() {

    var userFeed = new Instafeed ({
        get: 'user',
        userId: '6065612100',
        limit: 120,
        resolution: 'standard_resolution',
        accessToken: '6065612100.1677ed0.5ab75abfc394409a9aa0cceea487b8c4',
        sortBy: 'most-recent',
        template: '<div class="instaImage col-lg-4 gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        });


    userFeed.run()

// This will create a single gallery from all elements that have class "gallery-item"
$('.popupGallery').magnificPopup({
    type: 'image',
    delegate: 'a', // selector
    gallery:{
      enabled:true
    }
  });
   
});