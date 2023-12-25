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
    ]

    // Get a random index
    let randomIndex = Math.floor(Math.random() * yamada_array.length);

    // Set the source of the element with id 'ryo-random'
    document.getElementById('ryo-random').src = `./ryo-array/${yamada_array[randomIndex]}`;
    document.getElementById('nijika-random').src = `./nijika-array/${nijika_array[randomIndex]}`;
    document.getElementById('bocchi-random').src = `./bocchi-array/${bocchi_array[randomIndex]}`;
    document.getElementById('kita-random').src = `./kita-array/${kita_array[randomIndex]}`;


    // var mp3 = document.getElementById('hovercontrol');
    // var card1 = document.querySelector('.card1');

    // card1.addEventListener('mouseenter', function() {
    //     mp3.currentTime = 0;
    //     mp3.play();
    // });

    // card1.addEventListener('mouseleave', function() {
    //     mp3.pause();
    // });

    var mp3=document.getElementById("hovercontrol");
    var card1=document.querySelector(".card1");
        card1.addEventListener('mouseenter', function(){
            mp3.currentTime=0;
            mp3.play(); 
        }
        );
        card1.addEventListener('mouseleave', function(){
            mp3.pause(); 
        }
        );
        var card2=document.querySelector(".card2");
        card2.addEventListener('mouseenter', function(){
            mp3.currentTime=0;
            mp3.play(); 
        }
        );
        card2.addEventListener('mouseleave', function(){
            mp3.pause(); 
        }
        );
        var card3=document.querySelector(".card3");
        card3.addEventListener('mouseenter', function(){
            mp3.currentTime=0;
            mp3.play(); 
        }
        );
        card3.addEventListener('mouseleave', function(){
            mp3.pause(); 
        }
        );
        var card4=document.querySelector(".card4");
        card4.addEventListener('mouseenter', function(){
            mp3.currentTime=0;
            mp3.play(); 
        }
        );
        card4.addEventListener('mouseleave', function(){
            mp3.pause(); 
        }
        );

});
