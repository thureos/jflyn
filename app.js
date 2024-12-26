function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

const entries = {
  "K8JO67D": {
      "trait": "American",
      "punchline": "They don't have the guts."
  },
  "37RE9B4": {
      "trait": "Mexican",
      "punchline": "She looked surprised."
  },
  "F11W286": {
      "trait": "Asian",
      "punchline": "Because they make up everything."
  },
  "D4U5DVO": {
      "trait": "African",
      "punchline": "He was outstanding in his field."
  },
  "P6ODIRO": {
      "trait": "European",
      "punchline": "An impasta."
  },
  "KJHKB20": {
      "trait": "Canadian",
      "punchline": "It has too many bugs."
  },
  "PBYKO1E": {
      "trait": "Chinese",
      "punchline": "A carrot."
  },
  "VDFPLQ2": {
      "trait": "Indian",
      "punchline": "Frostbite."
  },
  "0PMKVAF": {
      "trait": "Japanese",
      "punchline": "It was two tired."
  },
  "GOM5A2O": {
      "trait": "Korean",
      "punchline": "Now it won't stop sending me KitKats."
  },
  "6MQNR6O": {
      "trait": "Italian",
      "punchline": "Because they're always stuffed."
  },
  "IZRE9IU": {
      "trait": "Russian",
      "punchline": "It was a little fishy."
  },
  "4WPGUKB": {
      "trait": "Brazilian",
      "punchline": "They can't handle the pressure."
  },
  "S7ZNV61": {
      "trait": "Australian",
      "punchline": "To get to the other slide."
  },
  "8CRIA2D": {
      "trait": "Christian",
      "punchline": "It's nacho cheese!"
  },
  "5NSMYT1": {
      "trait": "Muslim",
      "punchline": "He found it too hard to digest."
  },
  "A1SHC2P": {
      "trait": "Jewish",
      "punchline": "A stick."
  },
  "1HLPMNG": {
      "trait": "Hindu",
      "punchline": "You'd crack up too!"
  },
  "DAA9UQU": {
      "trait": "Buddhist",
      "punchline": "It's all downhill from here."
  },
  "IJ9W6BY": {
      "trait": "Atheist",
      "punchline": "To get to the root of the problem."
  },
  "HJQZVTG": {
      "trait": "Agnostic",
      "punchline": "Because they crack up at everything."
  },
  "UMFWD5H": {
      "trait": "Catholic",
      "punchline": "I have a lot of problems but math ain't one."
  },
  "66ENEY3": {
      "trait": "Evangelical",
      "punchline": "It's on the house!"
  },
  "5L9Q8WM": {
      "trait": "Mormon",
      "punchline": "It's always full of itself."
  },
  "MZ7TV4I": {
      "trait": "Republican",
      "punchline": "They just let things slide."
  },
  "HX7U1VC": {
      "trait": "Democrat",
      "punchline": "It couldn't handle the current."
  },
  "70PZB93": {
      "trait": "Socialist",
      "punchline": "Because it was a little hoarse."
  },
  "0LPQ7YA": {
      "trait": "Communist",
      "punchline": "They wanted to see the butter fly."
  },
  "WDMB7XA": {
      "trait": "Capitalist",
      "punchline": "Because they didn't have the balls."
  },
  "E6ZMAIW": {
      "trait": "Liberal",
      "punchline": "It's a rare medium well done."
  },
  "KD5C469": {
      "trait": "Conservative",
      "punchline": "Because he was a fungi."
  },
  "WV4K1DJ": {
      "trait": "Libertarian",
      "punchline": "It just needed a recharge."
  },
  "N3JOOZ0": {
      "trait": "Progressive",
      "punchline": "It's just a phase."
  },
  "4LITAMF": {
      "trait": "Environmentalist",
      "punchline": "They take everything to heart."
  },
  "M0PBER1": {
      "trait": "Basketball player",
      "punchline": "The past, it's always behind you."
  },
  "GTOAPB8": {
      "trait": "Doctor",
      "punchline": "A moo-d swing."
  },
  "8LLVTDM": {
      "trait": "Engineer",
      "punchline": "They were in de-Nile."
  },
  "N7QWSLG": {
      "trait": "Lawyer",
      "punchline": "Because it's the root of all evil."
  },
  "YN6C0MP": {
      "trait": "Teacher",
      "punchline": "Because it's unbe-leaf-able."
  },
  "OP69EF4": {
      "trait": "Farmer",
      "punchline": "They don't carrot all."
  },
  "NFJOOX7": {
      "trait": "Politician",
      "punchline": "It's a shell game."
  },
  "9HIAESQ": {
      "trait": "Actor",
      "punchline": "They're just clawing their way through."
  },
  "Q0TBBHQ": {
      "trait": "Musician",
      "punchline": "A fry-day miracle."
  },
  "94NYYGK": {
      "trait": "Scientist",
      "punchline": "It was a whisk-y decision."
  },
  "H2I6OET": {
      "trait": "Programmer",
      "punchline": "They didn't have a good angle."
  },
  "VHIQ61U": {
      "trait": "Athlete",
      "punchline": "Because they couldn't ketchup."
  },
  "8NYEP5W": {
      "trait": "Vegan",
      "punchline": "It couldn't resist the pull."
  },
  "HESVP16": {
      "trait": "Activist",
      "punchline": "It didn't make the cut."
  },
  "NU8SUE8": {
      "trait": "Feminist",
      "punchline": "A doughnut—it was hole-some."
  },
  "7XHL0P9": {
      "trait": "Gamer",
      "punchline": "Because it went bananas."
  },
  "CJKH9NF": {
      "trait": "Entrepreneur",
      "punchline": "It was a grave mistake."
  },
  "FA6H0M4": {
      "trait": "Artist",
      "punchline": "It was brewing trouble."
  },
  "8TWPESN": {
      "trait": "Student",
      "punchline": "Because they're not up to speed."
  },
  "I385PUH": {
      "trait": "Parent",
      "punchline": "They were out of this world."
  },
  "HESTM9R": {
      "trait": "Veteran",
      "punchline": "It was sheer luck."
  },
  "2VXLHSQ": {
      "trait": "Immigrant",
      "punchline": "They left without a trace."
  },
  "3BJXLNG": {
      "trait": "Introverted",
      "punchline": "Because it lost its cool."
  },
  "JVPCULH": {
      "trait": "Extroverted",
      "punchline": "It had no chill."
  },
  "6463SRS": {
      "trait": "Wealthy",
      "punchline": "They got boxed in."
  },
  "X3694OE": {
      "trait": "Poor",
      "punchline": "It was a total flop."
  },
  "T952KKZ": {
      "trait": "Middle-class",
      "punchline": "They couldn't face the music."
  },
  "KF2L9FP": {
      "trait": "Disabled",
      "punchline": "It was all bark and no bite."
  },
  "LZ7PSE6": {
      "trait": "Athletic",
      "punchline": "Because it was a cat-astrophe."
  },
  "ZYGY6TV": {
      "trait": "Intellectual",
      "punchline": "It was a pun-derful day!"
  }
}

traits = Object.values(entries).map(item => item.trait);

// traits = shuffleArray(traits);

function getTraitKeyFromUrl() {
    return window.location.pathname.split("/")[1];
}

function getIndexForKey(sKey) {
    console.log(sKey);
    return Object.keys(entries).indexOf(sKey);
}

function roulette() {
    const roulette = document.getElementById('roulette');
    const items = document.querySelectorAll('#roulette li');
    const itemHeight = items[0].offsetHeight;
    const totalItems = items.length;
    // const randomIndex = Math.floor(Math.random() * totalItems);
    const traitKey = getTraitKeyFromUrl();
    const traitKeyPos = getIndexForKey(traitKey)
    const selectedIndex = Math.floor((traitKeyPos/totalItems) * totalItems);

    el = document.getElementById("punchline");

    el.innerHTML = entries[traitKey].punchline
    
    // Calculate the final position
    const finalPosition = -(selectedIndex * itemHeight);

    // Set the transform property to move the roulette
    roulette.style.transform = `translateY(${finalPosition}px)`;
}

function fillTraits() {

  const ulRoulette = document.getElementById('roulette');
  
  traits.forEach(function (v) {
    const myLi = document.createElement('li');
    myLi.textContent = v;
  
    ulRoulette.appendChild(myLi);
  });
}

(function() {

  addEventListener("transitionend", (event) => {
    el = document.getElementById("punchline");
    el.classList.add('fade-in');
    el.classList.remove('transparent');
  });


  el = document.getElementById("punchline");

  el.innerHTML = entries.F11W286.punchline

  fillTraits()
  roulette()

})()