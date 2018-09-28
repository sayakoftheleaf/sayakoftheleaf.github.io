$(document).ready(function(){
  $(".Items").click(function(){

    var back = "<div class=\"back_button\"><img src=\"Files/Back.png\"></div>";

    var imgpath = $(this).children('img').attr('src');
    var str_img = "<img src= \""+ imgpath + "\" class = \"right_img\">";
    var paragraph = "";
     $(back).appendTo($(".highlight"));

    if (imgpath === "Files/chess.jpeg"){
      paragraph = "<p class = \"description\" id = \"about_aruki\"> Aruki is a chess variant I created, mostly as a side project, and then implemented using native JS and jQuery, as a way of learning the two languages. Now, I am using it to study machine learning and optimization algorithms, especially neural network based self learning ones. Aruki was designed to have a lot more possible moves per turn compared to chess, so brute force algorithms are a lot less efficient in trying to create an AI for it. A prototype version can be played <u> <a href = \"https://sayakoftheleaf.github.io/Aruki\"> here </a> </u> (it doesn't have an AI yet, so the user would have to play for both sides). </p>"
      str_img = "<img src= \"Files/Board_Aruki.png\" class = \"right_img\" id = \"right_aruki\">";
       $(str_img).appendTo($(".blockText"));
    } else if (imgpath === "Files/Diary.jpg"){
       paragraph = "<p class = \"description\"> I blog sometimes, usually about my personal projects, things going on in my professional life, or just ramble on about think I think might be helpful to the rest of the world. <\p>"
        $(str_img).appendTo($(".blockText"));
    } else if (imgpath === "Files/Projects_image.jpg"){
       paragraph = "<p class = \"description\"  id = \"about_coding\"> I have worked on multiple projects throughout my college career, including : <ul class = \"description listconfig\" id = \"about_coding\"> <li> An Image Compressor and Decompressor (written in C) </li> <li> an implementation of the Intel x64 framework on the Universal Machine (written in C) </li> <li> an Abstract Game Solver capable of solving simple two player games like tic-tac-toe (written in SML) </li> <li> an implementation of the game Boggle (C++) </li> <li> a simulated Radar interface with motion detection (Java) </li><li> A game engine with physics (Java) </li><li> a network alarm that detects unencrypted passwords being sent over the network and intrusive scans being performed on the network (Python) </li><li> <u> <a href= \" https://github.com/sayakoftheleaf/Pupper\">Pupper </a> </u> - an application prototype that uses a swipe based interface to match dog-walkers to dogs in the area that need walking (Objective C) </li> </ul> </p>"
       str_img = "<img src= \"Files/pupper.png\" alt = \"pupper logo\" class = \"right_img\" id = \"right_pupper\">";
       $(str_img).appendTo($(".blockText"));
    } else if (imgpath === "Files/Profile_Image.jpg"){
       paragraph = "<p class = \"description\" id = \"about\"> I am a current Senior at <u> <a href=\"http://www.tufts.edu/\">Tufts University </a> </u> majoring in <u> <a href=\"http://www.cs.tufts.edu/\">Computer science </a> </u> and minoring in <u> <a href=\"http://as.tufts.edu/fms/\"> Film and Media Studies </a> </u>. I spend my free time coding, reading, watching films, and writing about films. Academically and Professionally, I am mainly interested in cybersecurity - engineering and analysis, especially malware and threat analysis - machine learning and neural network algorithms, network administration, cloud computing, operating systems and embedded systems. I have previously pursued some of my Academic interests as Research internships. My Sophomore year, I worked at the <u> <a href = \"http://hci.cs.tufts.edu/\"> Tufts Human Computer Interaction Lab </a> </u> under <u> <a href = \"http://www.cs.tufts.edu/~jacob/\"> Professor Robert Jacob </a> </u>, and my Junior year, I worked at the <u> <a href = \" https://hrilab.tufts.edu/\"> Tufts Human Robot Interaction Lab </a> </u> under <u> <a href = \" https://hrilab.tufts.edu/people/matthias.php\"> Professor Matthias Scheutez </a> </u>. I am a member of the Omicron chapter of the fraternity Zeta Beta Tau, and has been involved in a number of other clubs and extra-curricular activities like the student non-profit coding initiative <u> <a href = \" http://jumbocode.org/projects.html\"> Jumbocode <\a> </u>, the campus TV station - TUTV, the Tufts Film Society and Tufts Philosophy Club. I have also studied Film Theory, Literary Thoery and PsychoAnalytic Theory under the incredible <u> <a href = \" https://en.wikipedia.org/wiki/Lee_Edelman\"> Lee Edelman <\a> </u>, and wrote a mock thesis paper on the nature of <u> <a href = \" \"> Lacanian Truth <\a> </u>.</p>"
       str_img = "<img src= \""+ imgpath + "\" class = \"right_img\" id = \"right_profile\">";
       $(str_img).appendTo($(".blockText"));
    } else if (imgpath === "Files/Film_p.jpg"){
        paragraph = "<p class = \"description\" id = \"about_filmmaking\"> I have worked on several filmmaking projects, both personally and as a part of TUTV: <ul class = \"description listconfig\" id = \"about_filmmaking\"> <li> <u> <a href = \" https://youtu.be/gxehTa-zzTM\"> Ominous </a> </u>- A postmodern experimental film concerning what the consequences of a person supernaturally meeting himself at various stages of his own life might be. I was the co-director, cinematographer and editor. </li> <li> Incarnation - Worked on a script that was centered around people being reincarnated in another world after their death, not as a newborn, but at the same age that they died. </li> <li> MatteOS - Presently working on a feature length screenplay about a middle aged computer scientist dealing mental illnesses while struggling to keep up with the basic expectations of living in a capitalist world. </li> <li> Worked as the assistant Cinematographer for the webseries <u> <a href =\" https://youtu.be/w2cLQ5Ht8lk\">High Spirits </a> </u>, produced by TUTV</li> </ul></p>"
        str_img = "<img src= \"Files/ominous.jpg\" alt = \"ominous thumbnail\" class = \"right_img\" id = \"right_ominous\">";
        $(str_img).appendTo($(".blockText"));
    } else if (imgpath === "Files/fightclub-first.jpg"){
       paragraph = "<p class = \"description\"> As a film enthusiast, I love talking about film, analyzing every detail at times, and at others just leaving a casual review. You can find my film related writings here. <\p>"
       $(str_img).appendTo($(".blockText"));
    } else if (imgpath === "Files/FoxPirate.png"){
      paragraph = "<p class = \"description\" id = \"about\"> FoxPirate Inc. is a freelance full-stack web development company created by Sayak Chatterjee and Surit Thekken in 2014, when they were seniors in High School. Since then, FoxPirate has completed three full scale projects for small business companies in India and Australia. We specialize in scalable web applications running on PHP/Node.js with MySQL or MongoDB integration, with UI's written either using Native JavaScript and jQuery, AngularJS, or ReactJS. For business enquiries, please contact <u> <a href=\"mailto:foxpirate@protonmail.com\">foxpirate@protonmail.com</a> </u>.  </p>";
      str_img = "<img src= \""+ imgpath + "\" class = \"right_img\" id = \"right_profile\">";
       $(str_img).appendTo($(".blockText"));
    }

    $(paragraph).appendTo($(".highlight"));

    $(".Items").fadeOut(1000);
    $(".Contact").fadeOut(1000);
    $(".highlight").fadeIn(1000);

    $(".back_button").click(function(){

      $(".highlight").empty();
      $(".highlight").fadeOut(1000);
      $(".Items").fadeIn(1000);
      $(".Contact").fadeIn(1000);
    });

  });
});
