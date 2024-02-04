document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = [
        'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const imgElement = document.getElementById('gallery-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    let currentIndex = 0;

    function showImage(index) {
        imgElement.src = imageLinks[index];
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageLinks.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
        showImage(currentIndex);
    }


    showImage(currentIndex);


    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
});
