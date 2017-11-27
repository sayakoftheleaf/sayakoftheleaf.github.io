$(document).ready(function(){
    $(".Items").click(function(){
        var imgpath = $(this).children('img').attr('src');
        var strimg = "<img src= \""+ imgpath + "\">";
       	$(strimg).appendTo($(".blockText"));
       	var paragraph = "";
       	
       	if (imgpath === "Files/chess.jpeg"){

       	} else if (imgpath === "Files/Diary.jpg"){

       	} else if (imgpath === "Files/Projects_image.jpg"){

       	} else if (imgpath === "Files/Profile_Image.jpg"){

       	} else if (imgpath === "Files/Film_p.jpg"){

       	} else if (imgpath === "Files/fightclub-first.jpg"){
       		//paragraph = "<p class = \"description\"> Watching a lot of movies and constantly talking about them comes with its perks. It often means I have a lot of opionions about them, and a significant portion of my brainpower goes. It also means that I need to impulsively write down my random thoughts in the middle of the night about a film I watched the last night because I don't want to lose it. You can read some of my writing here.</p>"
       	};
       	
       	console.log(paragraph);
       	$(paragraph).appendTo($(".highlight"));
       	$(".Items").fadeOut(1000);
        $(".highlight").fadeIn(1000);
    });

    $(".back").click(function(){

    });
});
