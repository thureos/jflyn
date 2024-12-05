function roulette() {
    const roulette = document.getElementById('roulette');
    const items = document.querySelectorAll('#roulette li');
    const itemHeight = items[0].offsetHeight;
    const totalItems = items.length;
    // const randomIndex = Math.floor(Math.random() * totalItems);
    const randomIndex = Math.floor((109/113) * totalItems);
    
    // Calculate the final position
    const finalPosition = -(randomIndex * itemHeight);

    // Set the transform property to move the roulette
    roulette.style.transform = `translateY(${finalPosition}px)`;
}

function fillTraits() {
  let traits = ['jewish','Republic','Cotton','Progressive','Handcrafted','Serbia','1080p','Cambridgeshire','customized','Cheese','Devolved','Assistant','withdrawal','alarm','Arizona','Bacon','Architect','Generic','SAS','enhance','ability','Zimbabwe','index','Benin','digital','Towels','Gloves','Networked','analyzer','rich','holistic','Loan','invoice','markets','withdrawal','algorithm','analyzing','transitional','Dynamic','Mobility','Connecticut','background','Africa','Zimbabwe','24/7','optical','Wooden','Concrete','Views','Generic','sensor','synergies','Peso','Turnpike','Principal','New','multi-state','neural','back-end','Dynamic','programming','multi-byte','conglomeration','standardization','Global','Pass','District','Berkshire','calculate','Analyst','Metal','Shirt','overriding','Orchestrator','SAS','Generic','Ouguiya','Avon','process','Cambridgeshire','Center','Handcrafted','Representative','implementation','cross-platform','Sports','JBOD','Shoes','payment','input','methodology','array','strategize','Ergonomic','Delaware','withdrawal','Investment','Concrete','invoice','Cotton','turquoise','Brunei','Maryland','Home','Shore','programming','harness','generate','mexican','fault-tolerant','Light','Paradigm'];

  const ulRoulette = document.getElementById('roulette');
  
  traits.forEach(function (v) {
    const myLi = document.createElement('li');
    myLi.textContent = v;
  
    ulRoulette.appendChild(myLi);
  });
}

(function() {

  addEventListener("transitionend", (event) => {
    el = document.getElementById("action");
    el.classList.add('fade-in');
    el.classList.remove('transparent');
  });

  fillTraits()
  roulette()

})()