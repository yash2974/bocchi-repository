document.addEventListener('DOMContentLoaded', function() {
    // Array of photos
    const yamada_array = [
        'ryo (1).png',
        'ryo (2).png',
        'ryo (3).png'
    ];
    const nijika_array = [
        'nijika (1).png',
        'nijika (2).png',
        'nijika (3).png'
    ];
    const bocchi_array = [
        'bocchi (1).png',
        'bocchi (2).png',
        'bocchi (3).png'

    ];

    // Get a random index
    let randomIndex = Math.floor(Math.random() * yamada_array.length);

    // Set the source of the element with id 'ryo-random'
    document.getElementById('ryo-random').src = `./ryo-array/${yamada_array[randomIndex]}`;
    document.getElementById('nijika-random').src = `./nijika-array/${nijika_array[randomIndex]}`;
    document.getElementById('bocchi-random').src = `./bocchi-array/${bocchi_array[randomIndex]}`;
    
    
});