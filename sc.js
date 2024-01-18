const randomFeature = [
    {
        name:"ryo",
        randomImage:['ryo (1).png','ryo (2).png','ryo (3).png'],
        randomVideo:['ryoVid (1).webm','ryoVid (2).webm','ryoVid (3).webm','ryoVid (4).webm'],
        popup:"ryo-popup"
    },
    {
        name:"nijika",
        randomImage:['nijika (1).png','nijika (2).png','nijika (3).png'],
        randomVideo:['nijVid (1).webm','nijVid (2).webm'],
        popup:"ryo-popup"
    },
    {
        name:"bocchi",
        randomImage:['bocchi (1).png','bocchi (2).png','bocchi (3).png'],
        randomVideo:['bocVid (1).webm','bocVid (2).webm','bocVid (3).webm','bocVid (4).webm','bocVid (5).webm','bocVid (6).webm','bocVid (7).webm'],
        popup:"ryo-popup"
    },
    {
        name:"kita",
        randomImage:['kita (1).png','kita (2).png','kita (3).png'],
        randomVideo:['kitVid (1).webm'],
        popup:"ryo-popup"
    }

];


//for random value
function randomIndexFunction(array){
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

//post clicking on allow
function popupHidden(){
    document.getElementById("allow").addEventListener("click",function(){
        console.log("clicked")
        document.getElementById("popup").style.display="none";
        document.getElementById("card1id").addEventListener("mouseover",()=>videoFunction(1,"ryo"));
        document.getElementById("card2id").addEventListener("mouseover",()=>videoFunction(2,"nijika"));
        document.getElementById("card3id").addEventListener("mouseover",()=>videoFunction(3,"bocchi"));
        document.getElementById("card4id").addEventListener("mouseover",()=>videoFunction(4,"kita"));

    });
    
}
//video func generalize
function videoFunction(id,name){
    document.getElementById(`card${id}id`).addEventListener("mouseover",()=>{

        document.getElementById(`${name}-random`).style.display="none";
        document.getElementById(`${name}-random-video`).style.display="block";
        

        document.getElementById(`${name}-random-video`).play();
        document.getElementById(`${name}-random-video`).addEventListener("ended",()=>{
            document.getElementById(`${name}-random-video`).currentTime=0;
            document.getElementById(`${name}-random-video`).play();

        })

    
    });

    document.getElementById(`card${id}id`).addEventListener("mouseout",()=>{
        document.getElementById(`${name}-random`).style.display="block";
        document.getElementById(`${name}-random-video`).style.display="none";

        document.getElementById(`${name}-random-video`).pause();
        document.getElementById(`${name}-random-video`).currentTime=0;
    })
    
}


    
document.addEventListener('DOMContentLoaded',function(){

    document.getElementById("ryo-random-video").src=`./allVideos/${randomFeature[0].randomVideo[randomIndexFunction(randomFeature[0].randomVideo)]}`;
    document.getElementById("nijika-random-video").src=`./allVideos/${randomFeature[1].randomVideo[randomIndexFunction(randomFeature[1].randomVideo)]}`;
    document.getElementById("bocchi-random-video").src=`./allVideos/${randomFeature[2].randomVideo[randomIndexFunction(randomFeature[2].randomVideo)]}`;
    document.getElementById("kita-random-video").src=`./allVideos/${randomFeature[3].randomVideo[randomIndexFunction(randomFeature[3].randomVideo)]}`;


    randomFeature.forEach((category)=>{
        document.getElementById(`${category.name}-random`).src = `./allPhotos/${category.randomImage[randomIndexFunction(category.randomImage)]}`;
    });
    
    popupHidden();
    
    

    
    

})

