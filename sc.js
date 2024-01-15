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
        
        videoFeature();
    
        
    });
    
}


    
document.addEventListener('DOMContentLoaded',function(){

    randomFeature.forEach((category)=>{
        document.getElementById(`${category.name}-random`).src = `./allPhotos/${category.randomImage[randomIndexFunction(category.randomImage)]}`;
    });
    
    popupHidden();
    
    

    
    

})

