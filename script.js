const recipes = [
  {
    id: "carrot-soup",
    title: "Carrot Soup",
    subtitle: "Gingered carrot soup with coconut swirl",
    mealType: "Dinner",
    cookTime: 15,
    calories: 320,
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    difficulty: "Easy",
    serves: 4,
    diets: ["Vegetarian"],
    tags: ["Fast", "Comfort", "Budget"],
    video: true,
    macros: {
      carbs: "24g",
      protein: "6g",
      fat: "9g",
      fiber: "5g",
    },
    ingredients: [
      { name: "Carrots", amount: "6 medium" },
      { name: "Vegetable stock", amount: "4 cups" },
      { name: "Fresh ginger", amount: "1 tbsp grated" },
      { name: "Coconut milk", amount: "1/2 cup" },
      { name: "Lime", amount: "1" },
    ],
    steps: [
      "Sauté aromatics with ginger until fragrant.",
      "Add carrots and vegetable stock, simmer until tender.",
      "Blend until silky smooth and adjust seasoning.",
      "Finish with coconut milk swirl and lime zest.",
    ],
    collections: ["Weeknight dinners", "Immune boosters"],
    trending: true,
  },
  {
    id: "cookies",
    title: "Sea Salt Cookies",
    subtitle: "Chewy tahini chocolate chip cookies",
    mealType: "Dessert",
    cookTime: 35,
    calories: 210,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    difficulty: "Intermediate",
    serves: 12,
    diets: ["Vegetarian"],
    tags: ["Sweet", "Baking", "Family"],
    video: false,
    macros: {
      carbs: "31g",
      protein: "4g",
      fat: "8g",
      fiber: "2g",
    },
    ingredients: [
      { name: "All-purpose flour", amount: "2 cups" },
      { name: "Tahini", amount: "1/2 cup" },
      { name: "Dark chocolate", amount: "180 g" },
      { name: "Brown sugar", amount: "1 cup" },
      { name: "Flaky salt", amount: "1 tsp" },
    ],
    steps: [
      "Cream butter, tahini and sugar until light and fluffy.",
      "Fold in dry ingredients and chocolate chunks.",
      "Scoop onto baking tray and chill.",
      "Bake until edges are golden and centers soft.",
    ],
    collections: ["Sweet tooth", "Weekend projects"],
    trending: true,
  },
  {
    id: "chicken-roll",
    title: "Lemon Chicken Roll",
    subtitle: "Crispy chicken roll with lemon aioli",
    mealType: "Lunch",
    cookTime: 30,
    calories: 540,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    difficulty: "Intermediate",
    serves: 2,
    diets: ["High protein"],
    tags: ["Quick", "Family", "Meal prep"],
    video: true,
    macros: {
      carbs: "48g",
      protein: "32g",
      fat: "18g",
      fiber: "4g",
    },
    ingredients: [
      { name: "Chicken breast", amount: "2" },
      { name: "Spinach tortillas", amount: "2" },
      { name: "Lemon", amount: "1" },
      { name: "Greek yogurt", amount: "1/2 cup" },
      { name: "Baby spinach", amount: "2 cups" },
    ],
    steps: [
      "Grill chicken with lemon zest until cooked through.",
      "Whisk yogurt, lemon juice and garlic to form aioli.",
      "Layer tortillas with spinach, chicken and sauce.",
      "Roll tightly and toast seam-side down until crisp.",
    ],
    collections: ["Meal prep", "Lunchbox heroes"],
    trending: false,
  },
  {
    id: "spring-pasta",
    title: "Spring Pasta",
    subtitle: "Herbed pasta with peas and asparagus",
    mealType: "Lunch",
    cookTime: 20,
    calories: 410,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    difficulty: "Easy",
    serves: 4,
    diets: ["Vegetarian"],
    tags: ["Seasonal", "Fast", "Fresh"],
    video: false,
    macros: {
      carbs: "52g",
      protein: "14g",
      fat: "12g",
      fiber: "6g",
    },
    ingredients: [
      { name: "Tagliatelle", amount: "400 g" },
      { name: "Asparagus", amount: "2 cups" },
      { name: "Green peas", amount: "1 cup" },
      { name: "Lemon", amount: "1" },
      { name: "Parmesan", amount: "1/2 cup grated" },
    ],
    steps: [
      "Boil pasta until al dente, reserving some cooking water.",
      "Sauté asparagus and peas with garlic and lemon zest.",
      "Toss pasta with vegetables, parmesan and pasta water.",
      "Finish with fresh herbs and a squeeze of lemon.",
    ],
    collections: ["Weeknight dinners", "Greens & grains"],
    trending: false,
  },
  {
    id: "banana-pancakes",
    title: "Banana Pancakes",
    subtitle: "Fluffy banana pancakes with maple butter",
    mealType: "Breakfast",
    cookTime: 25,
    calories: 380,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80&sat=-20",
    rating: 4.9,
    difficulty: "Easy",
    serves: 4,
    diets: ["Vegetarian"],
    tags: ["Brunch", "Family", "Sweet"],
    video: true,
    macros: {
      carbs: "46g",
      protein: "10g",
      fat: "12g",
      fiber: "4g",
    },
    ingredients: [
      { name: "Ripe bananas", amount: "2" },
      { name: "Buttermilk", amount: "1 1/2 cups" },
      { name: "Eggs", amount: "2" },
      { name: "Flour", amount: "2 cups" },
      { name: "Maple syrup", amount: "1/3 cup" },
    ],
    steps: [
      "Whisk wet ingredients and mashed bananas until smooth.",
      "Fold in dry ingredients without over-mixing.",
      "Cook on a buttered griddle until bubbles form and flip.",
      "Serve with maple butter and caramelised bananas.",
    ],
    collections: ["Brunch club", "Family favorites"],
    trending: true,
  },
  {
    id: "risotto",
    title: "Wild Mushroom Risotto",
    subtitle: "Creamy risotto with thyme and parmesan",
    mealType: "Dinner",
    cookTime: 45,
    calories: 520,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80&sat=-100",
    rating: 4.5,
    difficulty: "Advanced",
    serves: 4,
    diets: ["Vegetarian"],
    tags: ["Comfort", "Weekend", "Gourmet"],
    video: true,
    macros: {
      carbs: "58g",
      protein: "14g",
      fat: "16g",
      fiber: "3g",
    },
    ingredients: [
      { name: "Arborio rice", amount: "1 1/2 cups" },
      { name: "Mushroom stock", amount: "5 cups" },
      { name: "Wild mushrooms", amount: "3 cups" },
      { name: "White wine", amount: "1/2 cup" },
      { name: "Fresh thyme", amount: "1 tbsp" },
    ],
    steps: [
      "Toast rice in butter until translucent.",
      "Deglaze with wine and slowly ladle in warm stock.",
      "Fold in sautéed mushrooms and parmesan.",
      "Finish with thyme oil and lemon zest.",
    ],
    collections: ["Dinner party", "Comfort bowls"],
    trending: false,
  },
  {
    id: "french-toast",
    title: "Brioche French Toast",
    subtitle: "Classic french toast with berry compote",
    mealType: "Snack",
    cookTime: 15,
    calories: 295,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    difficulty: "Easy",
    serves: 2,
    diets: ["Vegetarian"],
    tags: ["Brunch", "Quick", "Sweet"],
    video: false,
    macros: {
      carbs: "34g",
      protein: "9g",
      fat: "9g",
      fiber: "3g",
    },
    ingredients: [
      { name: "Brioche slices", amount: "4" },
      { name: "Eggs", amount: "2" },
      { name: "Milk", amount: "3/4 cup" },
      { name: "Vanilla", amount: "1 tsp" },
      { name: "Mixed berries", amount: "1 cup" },
    ],
    steps: [
      "Whisk custard base and soak brioche slices.",
      "Cook on a buttered skillet until golden.",
      "Simmer berries with maple syrup into compote.",
      "Serve topped with compote and powdered sugar.",
    ],
    collections: ["Brunch club", "Quick fixes"],
    trending: true,
  },
  {
    id: "summer-berry-cake",
    title: "Summer Berry Cake",
    subtitle: "Vanilla sponge layered with berries",
    mealType: "Dessert",
    cookTime: 55,
    calories: 450,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80&sat=-30",
    rating: 4.6,
    difficulty: "Intermediate",
    serves: 10,
    diets: ["Vegetarian"],
    tags: ["Celebration", "Baking", "Sweet"],
    video: true,
    macros: {
      carbs: "60g",
      protein: "8g",
      fat: "15g",
      fiber: "3g",
    },
    ingredients: [
      { name: "Cake flour", amount: "2 1/4 cups" },
      { name: "Eggs", amount: "4" },
      { name: "Butter", amount: "1 cup" },
      { name: "Fresh berries", amount: "3 cups" },
      { name: "Vanilla", amount: "2 tsp" },
    ],
    steps: [
      "Cream butter and sugar until pale and fluffy.",
      "Alternately add dry ingredients and milk.",
      "Bake until golden, cool and slice into layers.",
      "Fill with whipped cream and fresh berries.",
    ],
    collections: ["Sweet tooth", "Celebrations"],
    trending: false,
  },
];

const filterOptions = [
  "Breakfast",
  "Brunch",
  "Lunch",
  "Dinner",
  "Snack",
  "Dessert",
  "Vegetarian",
  "Vegan",
  "High protein",
  "Gluten free",
  "Comfort",
  "Fast",
];

const quickPresets = [
  {
    id: "fast",
    label: "Fast cooking",
    description: "Under 20 min",
    predicate: (recipe) => recipe.cookTime <= 20,
  },
  {
    id: "balanced",
    label: "Balanced plates",
    description: "450 kcal or less",
    predicate: (recipe) => recipe.calories <= 450,
  },
  {
    id: "family",
    label: "Family style",
    description: "Serves 4+",
    predicate: (recipe) => recipe.serves >= 4,
  },
  {
    id: "protein",
    label: "High protein",
    description: "15g protein",
    predicate: (recipe) => recipe.diets.includes("High protein"),
  },
  {
    id: "weekend",
    label: "Weekend treats",
    description: "Baking & projects",
    predicate: (recipe) => recipe.tags.includes("Baking") || recipe.difficulty === "Advanced",
  },
];

const collections = [
  {
    id: "weeknight",
    title: "Weeknight Dinners",
    count: 12,
    mood: "Comfort",
    accent: "#4cba65",
    recipes: ["carrot-soup", "spring-pasta", "risotto"],
  },
  {
    id: "brunch",
    title: "Slow Brunch",
    count: 18,
    mood: "Sweet",
    accent: "#ff9b57",
    recipes: ["banana-pancakes", "french-toast", "summer-berry-cake"],
  },
  {
    id: "prep",
    title: "Meal Prep Winners",
    count: 9,
    mood: "Organized",
    accent: "#7280ff",
    recipes: ["chicken-roll", "carrot-soup"],
  },
  {
    id: "veg",
    title: "Veggie Celebration",
    count: 14,
    mood: "Vibrant",
    accent: "#54d1db",
    recipes: ["carrot-soup", "spring-pasta", "risotto"],
  },
];

const onboardingSteps = [
  {
    title: "Discover your taste",
    description:
      "Select your favourite cuisines and dietary preferences so we can tailor the home feed for you.",
    pills: ["Italian", "Asian", "Mediterranean", "Vegan", "Gluten free"],
  },
  {
    title: "Choose cooking goals",
    description: "Tell us how you like to cook so we can suggest the right pace and format.",
    pills: ["Under 20 minutes", "Family friendly", "Meal prep", "Chef skills"],
  },
  {
    title: "Stock your pantry",
    description: "Add a few staples you always have at home to receive smart suggestions.",
    pills: ["Eggs", "Tomato", "Spinach", "Avocado", "Oats"],
  },
];

const weeklyFocus = [
  { day: "Mon", focus: "Meatless Monday", recipeId: "spring-pasta" },
  { day: "Tue", focus: "Quick Lunch", recipeId: "chicken-roll" },
  { day: "Wed", focus: "Comfort Night", recipeId: "risotto" },
  { day: "Thu", focus: "Family Bake", recipeId: "cookies" },
  { day: "Fri", focus: "Brunch Prep", recipeId: "banana-pancakes" },
  { day: "Sat", focus: "Chef Skills", recipeId: "summer-berry-cake" },
];

const state = {
  query: "",
  activeFilters: new Set(),
  activePresets: new Set(),
  showVideoOnly: false,
  favorites: new Set(),
  recent: [],
  shoppingList: new Map(),
  selectedRecipeId: null,
  onboardingStep: 0,
};

const elements = {
  searchInput: document.getElementById("searchInput"),
  filterContainer: document.getElementById("filterChips"),
  quickFilters: document.getElementById("quickFilters"),
  recipeGrid: document.getElementById("recipeGrid"),
  detailPanel: document.getElementById("detailPanel"),
  statTotal: document.getElementById("statTotal"),
  statQuick: document.getElementById("statQuick"),
  statVegan: document.getElementById("statVegan"),
  shoppingList: document.getElementById("shoppingList"),
  favoriteCount: document.getElementById("favoriteCount"),
  favoriteList: document.getElementById("favoriteList"),
  recentList: document.getElementById("recentList"),
  focusGrid: document.getElementById("focusGrid"),
  toggleVideoOnly: document.getElementById("toggleVideoOnly"),
  onboarding: document.getElementById("onboarding"),
  onboardingStep: document.getElementById("onboardingStep"),
  onboardingTitle: document.getElementById("onboardingTitle"),
  onboardingDescription: document.getElementById("onboardingDescription"),
  onboardingPills: document.getElementById("onboardingPills"),
  highlightTitle: document.getElementById("highlightTitle"),
  highlightMeta: document.getElementById("highlightMeta"),
  highlightButton: document.getElementById("highlightButton"),
  trendingScroller: document.getElementById("trendingScroller"),
  shoppingSection: document.getElementById("shopping"),
};

const recipeCardTemplate = document.getElementById("recipeCardTemplate");
const pillTemplate = document.getElementById("pillTemplate");

const buildRecipeLabels = (recipe) => [recipe.mealType, ...recipe.diets, ...recipe.tags];

const filterableRecipes = recipes.map((recipe) => ({ ...recipe, labels: buildRecipeLabels(recipe) }));

function formatMeta(recipe) {
  return `${recipe.mealType} • ${recipe.cookTime} min • ${recipe.calories} kcal`;
}

function getFilteredRecipes() {
  const query = state.query.trim().toLowerCase();
  return filterableRecipes.filter((recipe) => {
    const matchesQuery =
      !query ||
      [recipe.title, recipe.subtitle, recipe.mealType, ...recipe.tags, ...recipe.ingredients.map((i) => i.name)]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const matchesFilter =
      state.activeFilters.size === 0 ||
      [...state.activeFilters].every((filter) => recipe.labels.map((l) => l.toLowerCase()).includes(filter.toLowerCase()));

    const matchesPreset =
      state.activePresets.size === 0 ||
      [...state.activePresets].every((presetId) => {
        const preset = quickPresets.find((p) => p.id === presetId);
        return preset ? preset.predicate(recipe) : true;
      });

    const matchesVideo = !state.showVideoOnly || recipe.video;

    return matchesQuery && matchesFilter && matchesPreset && matchesVideo;
  });
}

function renderFilterChips() {
  elements.filterContainer.innerHTML = "";
  filterOptions.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter-chip";
    button.textContent = filter;
    button.dataset.filter = filter;
    button.addEventListener("click", () => toggleFilter(filter));
    elements.filterContainer.append(button);
  });
  updateFilterChipState();
}

function toggleFilter(filter) {
  if (state.activeFilters.has(filter)) {
    state.activeFilters.delete(filter);
  } else {
    state.activeFilters.add(filter);
  }
  updateFilterChipState();
  renderRecipes();
}

function updateFilterChipState() {
  elements.filterContainer
    .querySelectorAll(".filter-chip")
    .forEach((chip) => chip.classList.toggle("is-active", state.activeFilters.has(chip.dataset.filter)));
}

function renderQuickPresets() {
  elements.quickFilters.innerHTML = "";
  quickPresets.forEach((preset) => {
    const pill = pillTemplate.content.firstElementChild.cloneNode(true);
    pill.textContent = `${preset.label} · ${preset.description}`;
    pill.dataset.preset = preset.id;
    pill.classList.add("filter-chip");
    pill.addEventListener("click", () => togglePreset(preset.id));
    elements.quickFilters.append(pill);
  });
  updatePresetState();
}

function togglePreset(id) {
  if (state.activePresets.has(id)) {
    state.activePresets.delete(id);
  } else {
    state.activePresets.add(id);
  }
  updatePresetState();
  renderRecipes();
}

function updatePresetState() {
  elements.quickFilters
    .querySelectorAll(".pill")
    .forEach((pill) => pill.classList.toggle("is-active", state.activePresets.has(pill.dataset.preset)));
}

function renderRecipes() {
  const recipesToShow = getFilteredRecipes();
  elements.recipeGrid.innerHTML = "";

  if (!recipesToShow.length) {
    const empty = document.createElement("div");
    empty.dataset.empty = "No recipes match your filters yet.";
    elements.recipeGrid.append(empty);
    return;
  }

  recipesToShow.forEach((recipe) => {
    const card = recipeCardTemplate.content.firstElementChild.cloneNode(true);
    const img = card.querySelector("img");
    img.src = recipe.image;
    img.alt = recipe.title;
    card.querySelector(".recipe-tag").textContent = recipe.mealType;
    card.querySelector("h3").textContent = recipe.title;
    card.querySelector(".rating").textContent = `${recipe.rating.toFixed(1)}★`;
    card.querySelector(".recipe-meta").textContent = formatMeta(recipe);
    const tagContainer = card.querySelector(".recipe-tags");
    recipe.tags.slice(0, 3).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagContainer.append(span);
    });

    const favoriteButton = card.querySelector(".favorite");
    const isFavorite = state.favorites.has(recipe.id);
    favoriteButton.classList.toggle("is-active", isFavorite);
    favoriteButton.setAttribute("aria-pressed", isFavorite);
    favoriteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(recipe.id);
      favoriteButton.classList.toggle("is-active", state.favorites.has(recipe.id));
    });

    card.addEventListener("click", () => showRecipeDetail(recipe.id));
    elements.recipeGrid.append(card);
  });
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  renderFavorites();
}

function renderFavorites() {
  const favorites = [...state.favorites].map((id) => filterableRecipes.find((r) => r.id === id));
  elements.favoriteCount.textContent = `${favorites.length} recipes saved`;
  elements.favoriteList.innerHTML = "";
  if (!favorites.length) {
    elements.favoriteList.dataset.empty = "Tap the star on any recipe to save it.";
    return;
  }
  delete elements.favoriteList.dataset.empty;
  favorites.forEach((recipe) => {
    const item = document.createElement("li");
    item.innerHTML = `<span>${recipe.title}</span><span>${recipe.mealType}</span>`;
    elements.favoriteList.append(item);
  });
}

function renderRecent() {
  elements.recentList.innerHTML = "";
  if (!state.recent.length) {
    elements.recentList.dataset.empty = "Your recently viewed recipes will appear here.";
    return;
  }
  delete elements.recentList.dataset.empty;
  state.recent.forEach((id) => {
    const recipe = filterableRecipes.find((r) => r.id === id);
    if (!recipe) return;
    const item = document.createElement("li");
    item.innerHTML = `<span>${recipe.title}</span><span>${recipe.cookTime} min</span>`;
    item.addEventListener("click", () => showRecipeDetail(recipe.id));
    elements.recentList.append(item);
  });
}

function showRecipeDetail(id) {
  const recipe = filterableRecipes.find((r) => r.id === id);
  if (!recipe || !elements.detailPanel) return;
  state.selectedRecipeId = id;

  state.recent = [id, ...state.recent.filter((existing) => existing !== id)].slice(0, 5);
  renderRecent();

  elements.detailPanel.innerHTML = "";
  const header = document.createElement("header");
  const title = document.createElement("h2");
  title.textContent = recipe.title;
  const subtitle = document.createElement("p");
  subtitle.textContent = recipe.subtitle;
  header.append(title, subtitle);

  const hero = document.createElement("div");
  hero.className = "detail-hero";
  const img = document.createElement("img");
  img.src = recipe.image;
  img.alt = recipe.title;
  hero.append(img);

  const meta = document.createElement("div");
  meta.className = "detail-meta";
  [
    `${recipe.cookTime} minutes`,
    `${recipe.calories} kcal`,
    `${recipe.difficulty} • ${recipe.serves} servings`,
    recipe.video ? "Step-by-step video" : "Guided instructions",
  ].forEach((value) => {
    const span = document.createElement("span");
    span.textContent = value;
    meta.append(span);
  });

  const actions = document.createElement("div");
  actions.className = "hero-actions";
  const cookNow = document.createElement("button");
  cookNow.className = "primary";
  cookNow.textContent = "Start cooking";
  cookNow.addEventListener("click", () => alert(`Cooking mode prepared for ${recipe.title}!`));
  const addAll = document.createElement("button");
  addAll.className = "secondary";
  addAll.textContent = "Add ingredients";
  addAll.addEventListener("click", () => {
    recipe.ingredients.forEach((ingredient) => addIngredientToShoppingList(recipe, ingredient));
  });
  actions.append(cookNow, addAll);

  const body = document.createElement("div");
  body.className = "detail-body";

  const macroSection = document.createElement("div");
  macroSection.className = "detail-section";
  const macroTitle = document.createElement("h4");
  macroTitle.textContent = "Nutrition snapshot";
  const macroGrid = document.createElement("div");
  macroGrid.className = "focus-grid";
  Object.entries(recipe.macros).forEach(([label, value]) => {
    const pill = document.createElement("div");
    pill.className = "focus-pill";
    const strong = document.createElement("strong");
    strong.textContent = value;
    const span = document.createElement("span");
    span.textContent = label.toUpperCase();
    pill.append(strong, span);
    macroGrid.append(pill);
  });
  macroSection.append(macroTitle, macroGrid);

  const ingredientSection = document.createElement("div");
  ingredientSection.className = "detail-section";
  const ingredientsTitle = document.createElement("h4");
  ingredientsTitle.textContent = "Ingredients";
  const ingredientList = document.createElement("div");
  ingredientList.className = "detail-list";
  recipe.ingredients.forEach((ingredient) => {
    const row = document.createElement("div");
    row.className = "ingredient-row";
    const info = document.createElement("div");
    info.innerHTML = `<strong>${ingredient.name}</strong><br/><small>${ingredient.amount}</small>`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add";
    button.addEventListener("click", () => addIngredientToShoppingList(recipe, ingredient));
    row.append(info, button);
    ingredientList.append(row);
  });
  ingredientSection.append(ingredientsTitle, ingredientList);

  const stepSection = document.createElement("div");
  stepSection.className = "detail-section";
  const stepsTitle = document.createElement("h4");
  stepsTitle.textContent = "Directions";
  const list = document.createElement("ol");
  recipe.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    list.append(item);
  });
  stepSection.append(stepsTitle, list);

  body.append(macroSection, ingredientSection, stepSection);
  elements.detailPanel.append(header, hero, meta, actions, body);
}

function addIngredientToShoppingList(recipe, ingredient) {
  const key = `${recipe.id}:${ingredient.name}`;
  if (!state.shoppingList.has(key)) {
    state.shoppingList.set(key, {
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      name: ingredient.name,
      amount: ingredient.amount,
      complete: false,
    });
  }
  renderShoppingList();
}

function renderShoppingList() {
  elements.shoppingList.innerHTML = "";
  const items = [...state.shoppingList.values()];
  if (!items.length) {
    elements.shoppingList.dataset.empty = "No items saved yet. Add ingredients from any recipe.";
    return;
  }
  delete elements.shoppingList.dataset.empty;
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "shopping-item";
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.complete;
    checkbox.addEventListener("change", () => {
      item.complete = checkbox.checked;
      renderShoppingList();
    });
    const title = document.createElement("span");
    title.textContent = item.name;
    label.append(checkbox, title);

    const amount = document.createElement("small");
    amount.textContent = item.amount;

    const recipeTag = document.createElement("span");
    recipeTag.className = "tag";
    recipeTag.textContent = filterableRecipes.find((r) => r.id === item.recipeId)?.mealType ?? "";
    recipeTag.title = item.recipeTitle;

    li.append(label, amount, recipeTag);
    elements.shoppingList.append(li);
  });
}

function renderStats() {
  elements.statTotal.textContent = recipes.length.toString();
  elements.statQuick.textContent = recipes.filter((recipe) => recipe.cookTime <= 20).length.toString();
  elements.statVegan.textContent = recipes.filter((recipe) => recipe.diets.includes("Vegan")).length.toString();
}

function renderFocusGrid() {
  elements.focusGrid.innerHTML = "";
  weeklyFocus.forEach((entry) => {
    const recipe = filterableRecipes.find((r) => r.id === entry.recipeId);
    const pill = document.createElement("div");
    pill.className = "focus-pill";
    const strong = document.createElement("strong");
    strong.textContent = entry.day;
    const span = document.createElement("span");
    span.textContent = entry.focus;
    const small = document.createElement("small");
    small.textContent = recipe ? recipe.title : "";
    pill.append(strong, span, small);
    pill.addEventListener("click", () => recipe && showRecipeDetail(recipe.id));
    elements.focusGrid.append(pill);
  });
}

function renderTrendingCollections() {
  elements.trendingScroller.innerHTML = "";
  collections.forEach((collection) => {
    const card = document.createElement("div");
    card.className = "collection-card";
    card.style.setProperty("--accent", collection.accent);

    const header = document.createElement("h3");
    header.textContent = collection.title;
    const meta = document.createElement("div");
    meta.className = "collection-meta";
    meta.innerHTML = `<span>${collection.count} recipes</span><span>${collection.mood}</span>`;

    const preview = document.createElement("div");
    preview.className = "mini-list";
    collection.recipes
      .map((id) => filterableRecipes.find((r) => r.id === id))
      .filter(Boolean)
      .forEach((recipe) => {
        const item = document.createElement("div");
        item.className = "shopping-item";
        item.style.border = "none";
        item.style.padding = "8px 0";
        const title = document.createElement("strong");
        title.textContent = recipe.title;
        const detail = document.createElement("span");
        detail.textContent = `${recipe.cookTime} min`;
        item.append(title, detail);
        item.addEventListener("click", () => showRecipeDetail(recipe.id));
        preview.append(item);
      });

    card.append(header, meta, preview);
    elements.trendingScroller.append(card);
  });
}

function setupSearch() {
  elements.searchInput?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderRecipes();
  });
}

function setupNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      const target = button.dataset.target;
      if (target) {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupHighlight() {
  const highlightRecipe = filterableRecipes.find((recipe) => recipe.trending) ?? filterableRecipes[0];
  if (!highlightRecipe) return;
  elements.highlightTitle.textContent = highlightRecipe.title;
  elements.highlightMeta.textContent = formatMeta(highlightRecipe);
  elements.highlightButton.addEventListener("click", () => showRecipeDetail(highlightRecipe.id));
}

function setupToggles() {
  elements.toggleVideoOnly.addEventListener("change", (event) => {
    state.showVideoOnly = event.target.checked;
    renderRecipes();
  });
  document.getElementById("clearFilters").addEventListener("click", () => {
    state.activeFilters.clear();
    state.activePresets.clear();
    state.query = "";
    elements.searchInput.value = "";
    updateFilterChipState();
    updatePresetState();
    renderRecipes();
  });
  document.getElementById("openFilters").addEventListener("click", () => {
    document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("seeAllTrending").addEventListener("click", () => {
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("clearShopping").addEventListener("click", () => {
    state.shoppingList.clear();
    renderShoppingList();
  });
  document.getElementById("exportProfile").addEventListener("click", () => {
    const summary = `You have saved ${state.favorites.size} recipes and ${state.shoppingList.size} shopping items.`;
    alert(summary);
  });
}

function setupOnboarding() {
  const startButton = document.getElementById("startOnboarding");
  const skipButton = document.getElementById("skipOnboarding");
  const nextButton = document.getElementById("nextOnboarding");

  const renderStep = () => {
    const step = onboardingSteps[state.onboardingStep];
    elements.onboardingStep.textContent = `Step ${state.onboardingStep + 1} of ${onboardingSteps.length}`;
    elements.onboardingTitle.textContent = step.title;
    elements.onboardingDescription.textContent = step.description;
    elements.onboardingPills.innerHTML = "";
    step.pills.forEach((label) => {
      const pill = pillTemplate.content.firstElementChild.cloneNode(true);
      pill.textContent = label;
      pill.addEventListener("click", () => pill.classList.toggle("is-active"));
      elements.onboardingPills.append(pill);
    });
    nextButton.textContent = state.onboardingStep === onboardingSteps.length - 1 ? "Finish" : "Next";
  };

  const open = () => {
    state.onboardingStep = 0;
    renderStep();
    elements.onboarding.hidden = false;
  };

  const close = () => {
    elements.onboarding.hidden = true;
  };

  startButton.addEventListener("click", open);
  skipButton.addEventListener("click", close);
  elements.onboarding.addEventListener("click", (event) => {
    if (event.target === elements.onboarding) close();
  });
  nextButton.addEventListener("click", () => {
    if (state.onboardingStep < onboardingSteps.length - 1) {
      state.onboardingStep += 1;
      renderStep();
    } else {
      close();
    }
  });
}

function init() {
  renderFilterChips();
  renderQuickPresets();
  renderRecipes();
  renderFavorites();
  renderRecent();
  renderShoppingList();
  renderStats();
  renderFocusGrid();
  renderTrendingCollections();
  setupSearch();
  setupNavigation();
  setupHighlight();
  setupToggles();
  setupOnboarding();
  const initialRecipe = filterableRecipes.find((r) => r.trending) ?? filterableRecipes[0];
  if (initialRecipe) {
    showRecipeDetail(initialRecipe.id);
  }
}

init();
