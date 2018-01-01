$(document).ready(function(){
  $(".Items").click(function(){
    var imgpath = $(this).children('img').attr('src');
    var strimg = "<img src= \""+ imgpath + "\">";
    $(strimg).appendTo($(".blockText"));
    var paragraph = "";

    if (imgpath === "Files/chess.jpeg"){
      paragraph = "<p class = \"description\"> Aruki is a chess variant I created, mostly as a side project, and then implemented using native JS and jQuery, as a way of learning the two languages. Now, I am using it to study machine learning and optimization algorithms, especially neural network based self learning ones. Aruki was designed to have a lot more possible moves per turn compared to chess, so brute force algorithms are a lot less efficient in trying to create an AI for it. A prototype version can be played here (it doesn't have an AI, so the user would have to play for both sides). </p>"

    } else if (imgpath === "Files/Diary.jpg"){
      paragraph = "<p class = \"description\"> I blog sometimes, usually about my personal projects, things going on in my professional life, or just ramble on about think I think might be helpful to the rest of the world. <\p>" 


    } else if (imgpath === "Files/Projects_image.jpg"){
      paragraph = "<p class = \"description\"> I have worked on multiple projects throughout my college career, including an Image Compressor and Decompressor (written in C), an implementation of the Intel x64 framework on the Universal Machine (written in C), an Abstract Game Solver capable of solving simple two player games like tic-tac-toe (written in SML), an implementation of the game Boggle (C++), a simulated Radar interface with motion detection (Java), A game engine with physics (Java), a network alarm that detects unencrypted passwords being sent over the network and intrusive scans being performed on the network (Python), an application prototype that uses a swipe based interface to match dog-walkers to dogs in the area that need walking (Objective C). </p>"

    } else if (imgpath === "Files/Profile_Image.jpg"){
     paragraph = "<p class = \"description\"> I am a current Senior majoring in <a href=\"http://www.cs.tufts.edu/\">Computer science </a> and minoring in <a href=\"http://as.tufts.edu/fms/\"> Film and Media Studies </a> at <a href=\"http://www.tufts.edu/\">Tufts University</a>. I spend my free time coding, reading, watching films, and writing about films. Academically and Professionally, I am mainly interested in cybersecurity - engineering and analysis, especially malware and threat analysis - machine learning and neural network algorithms, network administration, cloud computing, operating systems and embedded systems. I have previously pursued some of my Academic interests as Research internships. My Sophomore year, I worked at the <a href = \"http://hci.cs.tufts.edu/\"> Tufts Human Computer Interaction Lab </a> under <a href = \"http://www.cs.tufts.edu/~jacob/\"> Professor Robert Jacob <\a>, and my Junior year, I worked at the <a href = \" https://hrilab.tufts.edu/\"> Tufts Human Robot Interaction Lab <\a> under <a href = \" https://hrilab.tufts.edu/people/matthias.php\"> Professor Matthias Scheutez <\a>. I am a member of the Omicron chapter of the fraternity Zeta Beta Tau, and has been involved in a number of other clubs and extra-curricular activities like the student non-profit coding initiative <a href = \" http://jumbocode.org/projects.html\"> Jumbocode <\a>, the campus TV station - TUTV, the Tufts Film Society and Tufts Philosophy Club. I have also studied Film Theory, Literary Thoery and PsychoAnalytic Theory under the incredible <a href = \" https://en.wikipedia.org/wiki/Lee_Edelman\"> Lee Edelman <\a>, and wrote a mock thesis paper on the nature of <a href = \" \"> Lacanian Truth <\a>. I am presently looking for a full time engineering position for Fall 2018. </p>"  

   } else if (imgpath === "Files/Film_p.jpg"){


   } else if (imgpath === "Files/fightclub-first.jpg"){
    paragraph = "<p class = \"description\"> As a film enthusiast, I love talking about film, analyzing every detail at times, and at others just leaving a casual review. You can find my film related writings here. <\p>"

  } else if (imgpath === "Files/FoxPirate.png"){
    paragraph = "<p class = \"description\"> FoxPirate Inc. is a freelance full-stack web development company founded by Sayak Chatterjee and Surit Thekken in 2014, when they were both Seniors in high School. Since then, FoxPirate has completed three full scale projects for small business companies in India and Australia. We specialize in scalable web applications running on PHP/Node.js with MySQL or MongoDB integration. UI interfaces can be made either in AngularJS or ReactJS. For business enquiries, please contact <a href=\"mailto:foxpirate@protonmail.com\">foxpirate@protonmail.com</a>.  </p>";
  }

  console.log(paragraph);   $(paragraph).appendTo($(".highlight"));
  $(".Items").fadeOut(1000);   $(".highlight").fadeIn(1000); });

$(".back").click(function(){

});
$(".back").click(function(){
  
})
});
