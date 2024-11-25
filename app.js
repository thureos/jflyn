function roulette() {
    const roulette = document.getElementById('roulette');
    const items = document.querySelectorAll('#roulette li');
    const itemHeight = items[0].offsetHeight;
    const totalItems = items.length;
    const randomIndex = Math.floor(Math.random() * totalItems);
    
    // Calculate the final position
    const finalPosition = -(randomIndex * itemHeight);

    // Set the transform property to move the roulette
    roulette.style.transform = `translateY(${finalPosition}px)`;
  }

(function() {

  addEventListener("transitionend", (event) => {
    el = document.getElementById("action");
    el.classList.add('fade-in');
    el.classList.remove('transparent');
  });


  roulette()

})()