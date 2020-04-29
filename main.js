const ducks = [
  {
    color: 'Black',
    name: 'Daffy',
    breed: 'American Black',
    size: 'Large',
    temperament: 'rascally',
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/800px-Daffy_Duck.svg.png",
    gender: 'Male',
    age: 83,
    isRubber: false
  },
  {
    color: 'White',
    name: 'Scrooge McDuck',
    breed: 'Pekin',
    size: 'Medium',
    temperament: 'rich',
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Scrooge_McDuck.png",
    gender: 'Male',
    age: 77,
    isRubber: false
  },
  // {
  //   color: 'White',
  //   name: 'Donald',
  //   breed: 'Pekin',
  //   size: 'medium',
  //   temperament: 'hot headed',
  //   imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/800px-Donald_Duck.svg.png",
  //   gender: 'Male',
  //   age: 86,
  //   isRubber: false
  // },
  {
    color: 'White',
    name: 'Huey',
    breed: 'Pekin',
    size: 'small',
    temperament: 'adventurous',
    imageUrl: "https://vignette.wikia.nocookie.net/mlpandtrains/images/5/59/Huey.png/revision/latest/scale-to-width-down/310?cb=20190204013225",
    gender: 'Male',
    age: 82,
    isRubber: false
  },
  {
    color: 'White',
    name: 'Dewey',
    breed: 'Pekin',
    size: 'small',
    temperament: 'adventurous',
    imageUrl: "https://vignette.wikia.nocookie.net/ducktales-2017/images/6/6c/Dewey_Duck_Render.png/revision/latest/scale-to-width-down/227?cb=20190729024157",
    gender: 'Male',
    age: 82,
    isRubber: false
  },
  {
    color: 'White',
    name: 'Louie',
    breed: 'Pekin',
    size: 'small',
    temperament: 'adventurous',
    imageUrl: "https://vignette.wikia.nocookie.net/scroogemcduck/images/7/7b/Louie_Ducktales.png/revision/latest?cb=20171008073632",
    gender: 'Male',
    age: 82,
    isRubber: false
  },
  {
    color: 'Yellow',
    name: 'Ernie\'s Rubber Ducky',
    breed: 'Standard Rubber',
    size: 'small',
    temperament: 'Makes Bathtime Fun',
    imageUrl: "https://i.ytimg.com/vi/cDy4PZPMDwU/hqdefault.jpg",
    gender: 'Female',
    age: 50,
    isRubber: true
  },
  {
    color: 'Yellow',
    name: 'Ganine',
    breed: 'Solid Rubber',
    size: 'Large',
    temperament: 'Patented',
    imageUrl: "https://c8.alamy.com/comp/REW4N5/isolated-yellow-plastic-rubber-ducky-toy-side-view-of-a-cute-yellow-rubber-duck-on-a-white-background-REW4N5.jpg",
    gender: 'Male',
    age: 75,
    isRubber: true
  },
  {
    color: 'Yellow',
    name: 'Goodyear\'s Duck',
    breed: 'Solid Vulcanized Rubber',
    size: 'small',
    temperament: 'chewable',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYt4gAlJ3HkAdV_xYDk8Hwa4C9rYtltM-Z83w1zzxqAUdBBZyO&usqp=CAU",
    gender: 'Female',
    age: 181,
    isRubber: true
  }
]

const printToDom = (selector, textToPrint) =>{
  let selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildDucks = (ducksCollection) =>{
  let domString = ''
  for (let i = 0; i< ducksCollection.length; i++){
    domString += `
    <div class="duck">
      <h2>${ducksCollection[i].name}</h2>
        <img src="${ducksCollection[i].imageUrl}" alt="image of ${ducksCollection[i].name} ducks">
      <p>This ${ducksCollection[i].breed} duck is a ${ducksCollection[i].size} ${ducksCollection[i].color} duck, it's temperament is ${ducksCollection[i].temperament}, is ${ducksCollection[i].gender} and is ${ducksCollection[i].age} years old.</p>
      <h4>${(ducksCollection[i].isRubber) ? "It is made of rubber" : "Not Made of Rubber"}</h4>
    </div>`
  
  }
  printToDom("#ducksDiv",domString)
}

const init = () => {
  buildDucks(ducks)
}

init()
