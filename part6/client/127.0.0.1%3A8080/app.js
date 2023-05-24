
function loadBody() {
  $(document).ready(function () {
    $.getJSON("books.json", function (adObjects) {
      main(adObjects);
    });
  });
}

function organizeByTags(adObjects) {
  var tags = {};

  adObjects.forEach(function (ad) {
    ad.tags.forEach(function (tag) {
      if (tags[tag]) {
        tags[tag].push(ad.description);
      } else {
        tags[tag] = [ad.description];
      }
    });
  });

  return tags;
}


var main = function (adObjects) {
  "use strict";
  
  var ads = adObjects;
  $(".tabs a span").toArray().forEach(function (element) {
    $(element).on("click", function () {
      var $element = $(element);
      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      var $content;
      if($element.parent().is(":nth-child(1)")){
        $content = $("<ul>");
        for (var i = ads.length - 1; i >= 0; i--) {
          //$content.append($("<li>").text(ads[i].tags));
          $content.append($("<li>").text(ads[i].description));
        }
      }
      else if($element.parent().is(":nth-child(2)")){
        $content = $("<ul>");
        ads.forEach(function(ad){
         // $content.append($("<li>").text(ad.tags));
          $content.append($("<li>").text(ad.description));
        });
      }
      else if ($element.parent().is(":nth-child(3)")) {
        var tags = organizeByTags(ads);
        $content = $("<div>");
        Object.keys(tags).forEach(function (tag) {
          var $tagName = $("<h3>").text(tag),
              $tagContent = $("<ul>");
          
          tags[tag].forEach(function (description) {
            $tagContent.append($("<li>").text(description));
          });

          $content.append($tagName).append($tagContent);
        });
      }
      else if($element.parent().is(":nth-child(4)")){
        $content = $("<form></form>");
        $content.append($("<label for='title'>").text('Название книги'));
        $content.append($("<input type='text' name='description'>"));

        $content.append($("<label for='tags'>").text('Тэги'));
        $content.append($("<input type='text' name='tags'>"));


        $content.append($("<button type='submit'>").text('Добавить книгу'));
        
        $content.on("submit", function(event) {
          //event.preventDefault();
          
          var newAd = {
            description: $("[name='description']").val(),
            tags: $("[name='tags']").val().split(",").map(function(tag) { return tag.trim(); })
          };
          console.log('hello mir');
          ads.push(newAd);
          
     /*     $.post("ads", newAd, function (result) {
            console.log(result);
            
            ads.push(newAd);

            organizedByTag = organizeByTags(ads);
            
            /*$("#description").val("");
            $("#tags").val("");*/
          /*});*/
          $("main .tabcontent").empty();
          $(".tabs a span").removeClass("active");
          $(".tabs a:first-child span").trigger("click");
          
        });
      }
      $("main .tabcontent").empty().append($content);
      return false;
    });
  });
};
