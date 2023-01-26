// Створення зміних
const header = document.querySelector(`.header`);
const container = document.querySelector(`.container`);
const btnContainer = document.querySelector(`.btn-container`);
const url = `https://swapi.dev/api/`;
const button = document.querySelector(`.btn`);
const buttonNext = document.querySelector(`.btn-next`);
const buttonReset = document.querySelector(`.btn-reset`);
const buttonChangeLanguage = document.querySelector(`.btn-wookiee`);
let wichFilms = document.querySelector(`.selectFilms`);
let language = "";
let isNormalLanguage = true;
let isInfo = false;
let isPlanets = false;

button.onclick = async () => {
  await displeyCharecters();
};

buttonNext.onclick = async () => {
  await displeyPlanetsData();
};

buttonReset.onclick = () => {
  document.location.reload();
};
buttonChangeLanguage.onclick = () => {
  changeLanguage();
  isNormalLanguage = !isNormalLanguage;
};

// Функція створення  коробки
function createBox(item) {
  const div = document.createElement(`div`);
  div.classList.add(`box`);
  container.insertAdjacentElement("afterbegin", div);
  div.innerHTML = `<p>Ім'я: ${item.name}</p> <p>Дата народження: ${
    item.birth_year
  }</p> <p>Стать: ${getGender(item.gender)}</p>`;
  if (isNormalLanguage) {
    addImageCharacters(item.name);
  }
}

async function fetchInfo() {
  let selectFilms = document.getElementById(`selectFilms`).value;
  const resFilm = await fetch(`${url}${selectFilms}`);
  const filmData = await resFilm.json();
  return filmData;
}

async function urlcharacters() {
  const dataFilm = await fetchInfo(selectFilms);
  const url = dataFilm.characters;
  return url;
}

async function fecthChar(url) {
  const resChar = await fetch(url);
  const charData = resChar.json();
  return charData;
}

// Функція виведення інформації про персонажів
async function fetchCharacters() {
  const urls = await urlcharacters();
  const urlsLanguage = urls.map((item) => {
    return item + language;
  });
  const characters = [];
  for (let url of urlsLanguage) {
    const data = await fecthChar(url);
    characters.push(data);
  }
  const normalizeData = normalize(characters);
  return normalizeData;
}

//  Функція перетворення отримання значення імені, гендеру, та дати народження
function normalize(characters) {
  if (isNormalLanguage) {
    const result = characters.map((item) => ({
      name: item.name,
      birth_year: item.birth_year,
      gender: item.gender,
    }));
    return result;
  } else if (!isNormalLanguage) {
    const result = characters.map((item) => ({
      name: item.whrascwo,
      birth_year: item.rhahrcaoac_roworarc,
      gender: item.rrwowhwaworc,
    }));
    return result;
  }
}

async function displayInfo() {
  const info = await fetchCharacters();
  for (let item of info) {
    let name = item.name;
    let birth_year = item.birth_year;
    let gender = item.gender;
    let sumInfo = { name, birth_year, gender };
    const div = createBox(sumInfo);
  }
}

// Функція отримання іконки гендеру
function getGender(gender) {
  let result = "";
  if (gender === `male` || gender === `scraanwo`) {
    result = `<i class="fa-solid fa-mars"></i>`;
  } else if (gender === "female" || gender === `wwwoscraanwo`) {
    result = `<i class="fa-solid fa-venus"></i>`;
  } else if (gender === `n/a` || gender === `wh/ra`) {
    result = `<i class="fa-solid fa-neuter"></i>`;
  } else result = `<i class="fa-solid fa-transgender"></i>`;
  return result;
}

// Запит на сервер
async function planatesData() {
  const info = await fetchInfo(selectFilms);
  const planatesUrl = info.planets;
  const urlsLanguage = planatesUrl.map((item) => {
    return item + language;
  });
  const planets = [];
  for (let url of urlsLanguage) {
    const data = await fecthChar(url);
    planets.push(data);
  }
  const normalizeData = normalizePlanets(planets);
  return normalizeData;
}

async function normalizePlanets(planets) {
  if (isNormalLanguage) {
    const result = planets.map((item) => ({
      name: item.name,
      gravity: item.gravity,
      climate: item.climate,
      population: item.population,
    }));
    return result;
  } else if (!isNormalLanguage) {
    const result = planets.map((item) => ({
      name: item.whrascwo,
      gravity: item.rrrcrahoahaoro,
      climate: item.oaanahscraaowo,
      population: item.akooakhuanraaoahoowh,
    }));
    return result;
  }
}

async function displayPlanets() {
  const info = await planatesData();
  for (let item of info) {
    let name = item.name;
    let gravity = item.gravity;
    let climate = item.climate;
    let population = item.population;
    let sumInfo = { name, gravity, climate, population };
    const div = createPlanetBox(sumInfo);
  }
}

function createPlanetBox(item) {
  const div = document.createElement(`div`);
  div.classList.add(`box`, `box-palnet`);
  container.insertAdjacentElement("afterbegin", div);
  div.innerHTML = `<p>Назва планети: ${item.name}</p> <p>Населення: ${item.population}</p> <p>Гравітація: ${item.gravity}</p>  <p>Клімат: ${item.climate}</p>`;
  if (isNormalLanguage) {
    addImagePlanets(item.name);
  }
}

// Функція перевіки чи є контейнер на сторіцнці
function checkContainer() {
  const numberBox = document.querySelectorAll(`.box`);
  for (let box of numberBox) {
    box.remove();
  }
}

// Функція виведення персонажів
async function displeyCharecters() {
  if (!isInfo) {
    checkContainer();
    addLoader();
    await displayInfo();
    button.innerHTML = "Close Info";
    isInfo = !isInfo;
    addLoader();
  } else if (isInfo) {
    checkContainer();
    isInfo = !isInfo;
    buttonNext.innerHTML = "Get planets info";
    button.innerHTML = "Get Info";
  }
}

// Функція виведення планет
async function displeyPlanetsData() {
  if (!isPlanets) {
    addLoader();
    checkContainer();
    await displayPlanets();
    isPlanets = !isPlanets;
    buttonNext.innerHTML = "Close  info";
    addLoader();
  } else if (isPlanets) {
    checkContainer();
    isPlanets = !isPlanets;
    button.innerHTML = "Get Info";
    buttonNext.innerHTML = "Get planets info";
  }
}

// Запуск завантаження
function addLoader() {
  const loader = document.createElement("div");
  let isLoader = document.querySelector(`.loader`);
  if (!isLoader) {
    loader.classList.add(`loader`);
    header.insertAdjacentElement("beforeend", loader);
  } else if (isLoader) {
    isLoader.remove();
  }
}
// Перевірка мови
function changeLanguage() {
  checkContainer();
  if (!isNormalLanguage) {
    language = "";
    cancelSetings();
  } else if (isNormalLanguage) {
    cancelSetings();
    language = "?format=wookiee";
  }
}

// Повернення налаштувань
function cancelSetings() {
  isInfo = false;
  isPlanets = false;
  button.innerHTML = "Get Info";
  buttonNext.innerHTML = "Get planets info";
}
// Вставка картинок персонажів
function addImageCharacters(name) {
  box = document.querySelector(`.box`);
  const image = document.createElement(`div`);
  image.classList.add(`img`);
  image.innerHTML = `<img src="Characters/${name}.jpeg" alt="${name}" class = "img">`;
  box.insertAdjacentElement("afterbegin", image);
}
// Вставка картинок планет
function addImagePlanets(name) {
  box = document.querySelector(`.box`);
  const image = document.createElement(`div`);
  image.classList.add(`img`);
  image.innerHTML = `<img src="Planets/${name}.jpeg" alt="${name}" class = "img">`;
  box.insertAdjacentElement("afterbegin", image);
}
