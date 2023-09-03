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
            <button onclick="loadPhoneDetails('${phone.slug}')" class="btn">Show Details</button>
         </div>
      `;
    phonesContainer.appendChild(phoneCard);
  });
  toggleSpinner(false);
}
loadData("iphone");

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
// modal
const modalContainer = document.getElementById("product-modal");
const closeModalBtn = document.getElementById("close-modal");

const loadPhoneDetails = async (phoneId) => {
  const phoneDetailsApi = await fetch(
    `https://openapi.programming-hero.com/api/phone/${phoneId}`
  );
  const response = await phoneDetailsApi.json();
  const data = response.data;
  openModal(data);
};
const openModal = (phoneDetails) => {
  modalContainer.classList.remove("hidden");
  modalContainer.innerHTML = `
    <div class="modal-img">
      <img src="${phoneDetails.image}" alt="Phone" />
    </div>
    <div class="modal-info">
      <h3>${phoneDetails.name}</h3>
      <ul>
        <li><strong>Storage :</strong>${phoneDetails.mainFeatures.storage}</li>
        <li><strong>Display Size :</strong>${phoneDetails.mainFeatures.displaySize}</li>
      </ul>
      <div class="close-area">
        <button onclick="closeModal()" id="close-modal" class="close-btn btn">Close</button>
      </div>
    </div>
  `;
};

const closeModal = () => {
  modalContainer.classList.add("hidden");
};
