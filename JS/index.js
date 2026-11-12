const recipes = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image: "./Images/pasta-carbonara-recipe.jpg",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
    ],
    nutrition: { calories: 520, protein: 28, carbs: 62, fat: 18, fiber: 3, sodium: 680 },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only"
    ]
  },
  {
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    difficulty: "Easy",
    cuisine: "American",
    rating: 4.7,
    reviews: 412,
    prepTime: 15,
    cookTime: 240,
    servings: 4,
    image: "./Images/Bbq-Pork1.jpg",
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving"
    ],
    instructions: [
      "Mix brown sugar, paprika and garlic powder, then rub it all over the pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top."
    ],
    nutrition: { calories: 620, protein: 48, carbs: 52, fat: 22, fiber: 3, sodium: 1180 },
    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months"
    ]
  },
  {
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    difficulty: "Easy",
    cuisine: "American",
    rating: 4.6,
    reviews: 278,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    image: "./Images/Ground-Beef-Tacos-Recipe-1.jpg",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa"
    ],
    instructions: [
      "Cook the ground beef with the onion until browned.",
      "Add taco seasoning and a splash of water, then simmer for 5 minutes.",
      "Warm the taco shells in the oven.",
      "Fill the shells and add the toppings."
    ],
    nutrition: { calories: 420, protein: 24, carbs: 30, fat: 22, fiber: 4, sodium: 760 },
    tips: [
      "Warm the shells for extra crunch",
      "Add a squeeze of lime at the end"
    ]
  },
  {
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: 4.4,
    reviews: 198,
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    image: "./Images/caesar-salad.jpg",
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper"
    ],
    instructions: [
      "Wash and chop the romaine.",
      "Toss with the dressing.",
      "Top with parmesan, croutons and anchovies."
    ],
    nutrition: { calories: 280, protein: 9, carbs: 16, fat: 20, fiber: 3, sodium: 640 },
    tips: [
      "Chill the plates first for a crisper salad"
    ]
  },
  {
    name: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: 4.9,
    reviews: 478,
    prepTime: 30,
    cookTime: 90,
    servings: 4,
    image: "./Images/lasagna.jpg",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil"
    ],
    instructions: [
      "Make the meat sauce with beef, onion, carrots and tomatoes.",
      "Layer the sheets, meat sauce and béchamel.",
      "Top with cheese and bake for 90 minutes."
    ],
    nutrition: { calories: 610, protein: 32, carbs: 48, fat: 31, fiber: 4, sodium: 890 },
    tips: [
      "Let it rest for 15 minutes before cutting"
    ]
  },
  {
    name: "Egyptian Koshari",
    description: "Egypt's favorite street food with rice, lentils, pasta and spicy tomato sauce",
    difficulty: "Intermediate",
    cuisine: "Egyptian",
    rating: 4.9,
    reviews: 521,
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    image: "./Images/koshari.jpg",
    ingredients: [
      "1 cup rice",
      "1 cup brown lentils",
      "1 cup elbow macaroni",
      "1 can chickpeas",
      "4 onions, thinly sliced",
      "400g tomato sauce",
      "3 cloves garlic",
      "2 tablespoons white vinegar",
      "1 teaspoon cumin",
      "Oil for frying"
    ],
    instructions: [
      "Boil the lentils until tender, then drain and set aside.",
      "Cook the rice with a little oil and salt until fluffy.",
      "Boil the macaroni according to package directions and drain.",
      "Fry the sliced onions in hot oil until golden and crispy.",
      "Simmer tomato sauce with garlic, cumin and vinegar for 15 minutes.",
      "Layer rice, lentils, macaroni and chickpeas on a plate, then top with sauce and crispy onions."
    ],
    nutrition: { calories: 480, protein: 16, carbs: 82, fat: 10, fiber: 12, sodium: 720 },
    tips: [
      "Fry the onions in batches so they get crispy instead of steamed",
      "Add a spoonful of garlic vinegar (daqqa) on top for the classic taste",
      "Keep each component separate until serving",
      "Add a pinch of chili flakes to the sauce for extra heat"
    ]
  },
  {
    name: "Molokhia with Chicken",
    description: "Traditional Egyptian green soup with garlic and coriander, served with rice",
    difficulty: "Intermediate",
    cuisine: "Egyptian",
    rating: 4.8,
    reviews: 366,
    prepTime: 20,
    cookTime: 50,
    servings: 4,
    image: "./Images/molokhia.jpg",
    ingredients: [
      "500g chopped molokhia leaves",
      "1 whole chicken, cut in pieces",
      "6 cloves garlic, crushed",
      "2 tablespoons ground coriander",
      "1 onion",
      "2 bay leaves",
      "2 tablespoons ghee",
      "Rice for serving"
    ],
    instructions: [
      "Boil the chicken with onion and bay leaves for 30 minutes to make a rich broth.",
      "Remove the chicken and keep the broth warm.",
      "Add the molokhia to the hot broth and let it simmer for 10 minutes without boiling hard.",
      "Fry the garlic and coriander in ghee until golden.",
      "Pour the garlic mixture into the pot and stir quickly.",
      "Serve hot with rice and the roasted chicken."
    ],
    nutrition: { calories: 390, protein: 34, carbs: 12, fat: 22, fiber: 5, sodium: 540 },
    tips: [
      "Never let molokhia boil hard or it will lose its color and texture",
      "Use homemade chicken broth for a richer flavor",
      "Fry the garlic until golden, not dark, to avoid bitterness",
      "Serve with a squeeze of lemon and toasted bread"
    ]
  },
  {
    name: "Chicken Alfredo Pasta",
    description: "Creamy fettuccine pasta with tender chicken and parmesan sauce",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.5,
    reviews: 312,
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    image: "./Images/chicken-alfredo.jpg",
    ingredients: [
      "350g fettuccine pasta",
      "2 chicken breasts",
      "1 cup heavy cream",
      "1 cup grated parmesan cheese",
      "3 cloves garlic, minced",
      "2 tablespoons butter",
      "Salt and black pepper",
      "Fresh parsley"
    ],
    instructions: [
      "Cook the fettuccine in salted water until al dente, then drain.",
      "Season the chicken with salt and pepper and cook in a pan until golden, then slice it.",
      "In the same pan, melt the butter and cook the garlic for 1 minute.",
      "Pour in the cream and simmer for 3 minutes, then stir in the parmesan.",
      "Add the pasta and chicken to the sauce and toss until coated.",
      "Garnish with parsley and serve immediately."
    ],
    nutrition: { calories: 680, protein: 38, carbs: 58, fat: 32, fiber: 3, sodium: 760 },
    tips: [
      "Use freshly grated parmesan so the sauce stays smooth",
      "Add a splash of pasta water if the sauce gets too thick",
      "Do not boil the sauce after adding the cheese"
    ]
  },
  {
    name: "Grilled Salmon with Lemon",
    description: "Juicy salmon fillets grilled with garlic, lemon and fresh herbs",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: 4.6,
    reviews: 187,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    image: "./Images/grilled-salmon-recipe-2.jpg",
    ingredients: [
      "2 salmon fillets",
      "2 tablespoons olive oil",
      "1 lemon, sliced",
      "2 cloves garlic, minced",
      "1 teaspoon dried oregano",
      "Salt and black pepper",
      "Fresh dill"
    ],
    instructions: [
      "Mix olive oil, garlic, oregano, salt and pepper in a small bowl.",
      "Rub the mixture over the salmon fillets and let them rest for 10 minutes.",
      "Heat a grill pan over medium-high heat.",
      "Grill the salmon for 5-6 minutes on each side until cooked through.",
      "Top with lemon slices and fresh dill before serving."
    ],
    nutrition: { calories: 360, protein: 34, carbs: 3, fat: 24, fiber: 1, sodium: 320 },
    tips: [
      "Do not move the salmon while it grills so it forms a nice crust",
      "Pat the fish dry before seasoning",
      "Serve with roasted vegetables or a green salad"
    ]
  },
  {
    name: "Vegetable Stir Fry",
    description: "Quick and colorful vegetables tossed in a savory soy-garlic sauce",
    difficulty: "Easy",
    cuisine: "Asian",
    rating: 4.3,
    reviews: 143,
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    image: "./Images/R.jpg",
    ingredients: [
      "1 broccoli head, cut into florets",
      "2 carrots, sliced",
      "1 red bell pepper, sliced",
      "1 cup snap peas",
      "3 tablespoons soy sauce",
      "2 cloves garlic, minced",
      "1 teaspoon fresh ginger, grated",
      "1 tablespoon sesame oil",
      "Cooked rice for serving"
    ],
    instructions: [
      "Heat the sesame oil in a large wok over high heat.",
      "Add garlic and ginger and stir for 30 seconds.",
      "Add the carrots and broccoli and cook for 3 minutes.",
      "Add the bell pepper and snap peas and cook for 2 more minutes.",
      "Pour in the soy sauce, toss well and serve over rice."
    ],
    nutrition: { calories: 240, protein: 8, carbs: 38, fat: 7, fiber: 7, sodium: 890 },
    tips: [
      "Keep the heat high so the vegetables stay crisp",
      "Cut all vegetables to a similar size for even cooking",
      "Add cooked chicken or tofu for extra protein"
    ]
  }
];

const nutritionInfo = [
  { key: "calories", label: "Calories",      unit: " kcal", icon: "fa-fire",       bg: "#ffe8d6", color: "#ff5a1f" },
  { key: "protein",  label: "Protein",       unit: "g",     icon: "fa-dumbbell",   bg: "#dbeafe", color: "#2563eb" },
  { key: "carbs",    label: "Carbohydrates", unit: "g",     icon: "fa-wheat-awn",  bg: "#fef9c3", color: "#ca8a04" },
  { key: "fat",      label: "Fat",           unit: "g",     icon: "fa-droplet",    bg: "#fee2e2", color: "#dc2626" },
  { key: "fiber",    label: "Fiber",         unit: "g",     icon: "fa-seedling",   bg: "#dcfce7", color: "#16a34a" },
  { key: "sodium",   label: "Sodium",        unit: "mg",    icon: "fa-cube",       bg: "#fce7f3", color: "#db2777" }
];

let current = null;

function getRandomRecipe() {
  let recipe;
  do {
    recipe = recipes[Math.floor(Math.random() * recipes.length)];
  } while (recipe === current && recipes.length > 1);
  return recipe;
}

function isLongPrep(recipe) {
  return recipe.prepTime + recipe.cookTime > 45;
}

function ingredientsHTML(items) {
  return items.map((text, i) =>
    `<div class="d-flex align-items-center gap-3 py-2">
       <span class="num rounded-circle d-flex align-items-center justify-content-center fw-bold">${i + 1}</span>
       <span>${text}</span>
     </div>`).join("");
}

function instructionsHTML(items) {
  return items.map((text, i) =>
    `<div class="d-flex align-items-center gap-3 mb-4 pe-3">
       <span class="step-num d-flex align-items-center justify-content-center fw-bold">${i + 1}</span>
       <span class="small">${text}</span>
     </div>`).join("");
}

function nutritionHTML(values) {
  return nutritionInfo.map(n =>
    `<div class="col-6">
       <div class="nut-tile d-flex align-items-center gap-3">
         <span class="nut-icon d-flex align-items-center justify-content-center" style="background:${n.bg};color:${n.color}"><i class="fa-solid ${n.icon}"></i></span>
         <span class="small fw-medium flex-grow-1">${n.label}</span>
         <strong class="fs-5">${values[n.key]}${n.unit}</strong>
       </div>
     </div>`).join("");
}

function tipsHTML(items) {
  return items.map(text =>
    `<div class="tip d-flex align-items-center gap-3">
       <i class="fa-solid fa-circle-check fs-5"></i>
       <span class="small">${text}</span>
     </div>`).join("");
}

function $(id) { return document.getElementById(id); }

function displayRecipe(r) {
  $("name").textContent = r.name;
  $("description").textContent = r.description;
  $("difficulty").textContent = r.difficulty;
  $("cuisine").textContent = r.cuisine;
  $("rating").textContent = r.rating;
  $("reviews").textContent = `(${r.reviews} reviews)`;
  $("prep").textContent = `${r.prepTime} min`;
  $("cook").textContent = `${r.cookTime} min`;
  $("servings").textContent = `${r.servings} people`;
  $("img").style.backgroundImage = `url('${r.image}'), linear-gradient(135deg,#ff8a4c,#ff5a1f)`;
  $("alert").classList.toggle("d-none", !isLongPrep(r));

  $("ingredients").innerHTML = ingredientsHTML(r.ingredients);
  $("instructions").innerHTML = instructionsHTML(r.instructions);
  $("nutrition").innerHTML = nutritionHTML(r.nutrition);
  $("tips").innerHTML = tipsHTML(r.tips);

  if (window.bootstrap) {
    bootstrap.Tab.getOrCreateInstance($("firstTab")).show();
  }
}

function showRandomRecipe() {
  current = getRandomRecipe();
  displayRecipe(current);
}

document.addEventListener("DOMContentLoaded", function () {
  $("newBtn").addEventListener("click", showRandomRecipe);
  showRandomRecipe();
});
