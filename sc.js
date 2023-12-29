document.addEventListener('DOMContentLoaded', function() {
    // Array of photos  //need to add quality of photos in the array
    const yamada_array = [
        'ryo (2).png',
        'ryo (2).png',
        'ryo (2).png'
    ];
    const nijika_array = [
        'nijika (1).png',
        'nijika (1).png',
        'nijika (1).png'
    ];
    const bocchi_array = [
        'bocchi (1).png',
        'bocchi (1).png',
        'bocchi (1).png'

    ];
    const kita_array =[
        'kita (3).png',
        'kita (3).png',
        'kita (3).png'
    ];
    const bocchi_video_array = [
        'bocVid (1).webm',
        'bocVid (2).webm',
        'bocVid (3).webm',
        'bocVid (4).webm',
        'bocVid (5).webm',
        'bocVid (6).webm',
        'bocVid (7).webm'
    ];
    const ryo_video_array = [
        'ryoVid (1).webm',
        'ryoVid (2).webm',
        'ryoVid (3).webm',
        'ryoVid (4).webm'
    ];
    const nijika_video_array = [
        'nijVid (1).webm',
        'nijVid (2).webm'

    ];
    const kita_video_array = [
        'kitVid (1).webm'
    ];

    // Get a random index
    let randomIndex = Math.floor(Math.random() * yamada_array.length);
    let randomIndex1 = Math.floor(Math.random() * ryo_video_array.length);
    let randomIndex2 = Math.floor(Math.random() * nijika_video_array.length);
    let randomIndex3 = Math.floor(Math.random() * bocchi_video_array.length);
    let randomIndex4 = Math.floor(Math.random() * kita_video_array.length);


    // Set the source of the element with id 'ryo-random'
    document.getElementById('ryo-random').src = `./ryo-array/${yamada_array[randomIndex]}`;
    document.getElementById('nijika-random').src = `./nijika-array/${nijika_array[randomIndex]}`;
    document.getElementById('bocchi-random').src = `./bocchi-array/${bocchi_array[randomIndex]}`;
    document.getElementById('kita-random').src = `./kita-array/${kita_array[randomIndex]}`;


    //for video functionality
    
    var card1video=document.getElementById("card1Video");
    
    card1video.src=`./ryo-video-array/${ryo_video_array[randomIndex1]}`;

        card1video.pause();

    document.querySelector('.card1').addEventListener('mouseover',function () {
        console.log("video no played is");
        console.log(randomIndex1);
       
        card1video.play();
        card1video.addEventListener('ended',function(){
            card1video.currentTime=0;
            card1video.play();

        });
        

    });
    document.querySelector('.card1').addEventListener('mouseleave', function () {
        card1video.pause();
        card1video.currentTime = 0; // Reset video to the beginning
    });



    var card2video=document.getElementById("card2Video");
    
    card2video.src=`./nijika-video-array/${nijika_video_array[randomIndex2]}`;

        card2video.pause();

    document.querySelector('.card2').addEventListener('mouseover',function () {
        console.log("video no played is");
        console.log(randomIndex2);
       
        card2video.play();
        card2video.addEventListener('ended',function(){
            card2video.currentTime=0;
            card2video.play();

        });
        

    });
    document.querySelector('.card2').addEventListener('mouseleave', function () {
        card2video.pause();
        card2video.currentTime = 0; // Reset video to the beginning
    });


    var card3video=document.getElementById("card3Video");
    
    card3video.src=`./bocchi-video-array/${bocchi_video_array[randomIndex3]}`;

        card3video.pause();

    document.querySelector('.card3').addEventListener('mouseover',function () {
        console.log("video no played is");
        console.log(randomIndex3);
       
        card3video.play();
        card3video.addEventListener('ended',function(){
            card3video.currentTime=0;
            card3video.play();

        });
        

    });
    document.querySelector('.card3').addEventListener('mouseleave', function () {
        card3video.pause();
        card3video.currentTime = 0; // Reset video to the beginning
    });


    var card4video=document.getElementById("card4Video");
    
    card4video.src=`./kita-video-array/${kita_video_array[randomIndex4]}`;

        card4video.pause();

    document.querySelector('.card4').addEventListener('mouseover',function () {
        console.log("video no played is");
        console.log(randomIndex4);

        card4video.play();
        card4video.addEventListener('ended',function(){
            card4video.currentTime=0;
            card4video.play();

        });
        

    });
    document.querySelector('.card4').addEventListener('mouseleave', function () {
        card4video.pause();
        card4video.currentTime = 0; // Reset video to the beginning
    });

});

