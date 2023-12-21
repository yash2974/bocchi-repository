document.addEventListener('DOMContentLoaded', function() {
    // Array of photos
    const yamada_array = [
        'ryo (1).png',
        'ryo (2).png',
        'ryo (3).png'
    ];

    // Get a random index
    let randomIndex = Math.floor(Math.random() * yamada_array.length);

    // Set the source of the element with id 'ryo-random'
    document.getElementById('ryo-random').src = `./ryo-array/${yamada_array[randomIndex]}`;
    
});