function getPics() {
    let entries = ''

    for(let i = 1; i < 10; i++) {
        let picPath = `pics/C1R${i}.jpg`
        entries += `
        <tr>
            <td>R${i}</td>
            <td class='pic' onClick=enlargeImage('${picPath}')>
                <img src=${picPath} />
            </td>
        </tr>`
    }

    return entries
}

function enlargeImage(imagePath) {
    // Get references to elements
    const enlargedContainer = document.getElementById('enlargedContainer');
    const enlargedImage = document.createElement('img');
    enlargedImage.src = imagePath; // Replace with the path to your image
    enlargedImage.alt = 'Enlarged Image';
    enlargedImage.id = 'enlargedImage';

    // Add the enlarged image to the container
    enlargedContainer.innerHTML = ''; // Clear previous content
    enlargedContainer.appendChild(enlargedImage);

    // Display the enlarged container
    enlargedContainer.style.display = 'flex';
}

function closeEnlarged() {
    // Hide the enlarged container
    document.getElementById('enlargedContainer').style.display = 'none';
}