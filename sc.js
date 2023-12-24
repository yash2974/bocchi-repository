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
    
    
    
});
