const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
  events: [],
};

const eventsList = document.querySelector("#events");

async function render() {
  await getEvents();
  renderEvents();
}
render();

async function getEvents() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    //console.log(json);
    //console.log(json.data);

    state.events = json.data;
    console.log(state.events);
  } catch (error) {
    console.log(error);
  }
}

function renderEvents() {

  const eventsLiElements = state.events.map((events) => {
    const li = document.createElement('li');
    li.innerHTML = `${events.id} - ${events.name}`;
    return li;
  });

  console.log(eventsLiElements);
  eventsList.replaceChildren(...eventsLiElements);

  const descriptionLiElements = state.events.map((events) => {
    const li = document.createElement('li');
    li.innerHTML = `${events.description} - ${events.date}`;
    return li;
  });
  
  console.log(descriptionLiElements);
  eventsList.replaceChildren(...descriptionLiElements);
  
  const locationLiElements = state.events.map((events) => {
    const li = document.createElement('li');
    li.innerHTML = `${events.location}`;
    return li;
  });
  
  console.log(locationLiElements);
  eventsList.replaceChildren(...locationLiElements);
}


// append child not working to not have each one replaced
//! hello
//?
//*
//todo 
////
//imp

