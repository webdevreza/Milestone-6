const loadData = async (searchKeywords) => {
  const phoneApi = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchKeywords}`
  );
  const res = await phoneApi.json();
  const phones = res.data;
  displayPhones(phones);
};
function displayPhones(phones) {
  const phonesContainer = document.getElementById("products-container");
  phonesContainer.textContent = "";
  // display Show all button if there are more than 9 products.
  const showAllContainer = document.getElementById("show-all-container");
  if (phones.length > 9) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  //display first 9 phones
  phones = phones.slice(0, 9);

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("product-card");
    phoneCard.innerHTML = `
         <div class="product-img">
            <img src="${phone.image}" alt="phone">
         </div>
         <div class="product-info">
            <h3>${phone.phone_name}</h3>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <strong>$999</strong>
            <button class="btn ">Show Details</button>
         </div>
      `;
    phonesContainer.appendChild(phoneCard);
  });
  toggleSpinner(false);
}
// loadData("iphone");

// search Products
const submitBtn = document.getElementById("submit-btn");
const searchField = document.getElementById("search-field");

submitBtn.addEventListener("click", function () {
  const searchText = searchField.value;
  loadData(searchText);
  searchField.value = "";
  toggleSpinner(true);
});

// loading-spinner
const toggleSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

const dreamGirl = [
  {
    sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [{ name: "rofik" }, undefined],
          },
        },
        { instagram: "https://www.instagram.com/" },
      ],
    },
  },
];
