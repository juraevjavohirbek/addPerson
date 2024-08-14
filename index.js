const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", () => {
  // Get input values
  const firstName = document.querySelector(".firstName").value.trim();
  const lastName = document.querySelector(".lastName").value.trim();
  const jobName = document.querySelector(".jobName").value.trim();
  const age = document.querySelector(".age").value.trim();
  const imageUpload = document.querySelector(".imageUpload").files[0];
  const currentYear = new Date().getFullYear()

  // Check if all fields are filled and an image is selected
  if (firstName === "" || lastName === "" || jobName === "" || age === "" || !imageUpload) {
    alert("Please fill in all the fields and upload an image.");
    return; // Exit the function early if validation fails
  }

  const people = document.querySelector(".people");

  const person = document.createElement("div");
  person.className = "person";

  // Create a FileReader to read the image file
  const reader = new FileReader();
  reader.onload = function(e) {
    const imageUrl = e.target.result;
    person.innerHTML = `
      <img src="${imageUrl}" alt="Person Image" class="person-image">
      <h3>Name: <span class="name">${firstName}</span></h3>
      <h3>Surname: <span class="surname">${lastName}</span></h3>
      <h3>Job: <span class="job">${jobName}</span></h3>
      <h3>Birthdate: <span class="birthdate">${currentYear - age}</span></h3>
      <button class="btn-delete">Delete</button>
    `;
    people.appendChild(person);
    
    // Add delete functionality
    const btnDelete = person.querySelector(".btn-delete");
    btnDelete.addEventListener("click", () => {
      people.removeChild(person);
    });
  };
  reader.readAsDataURL(imageUpload); // Read the image file as a data URL

  // Clear the input fields
  document.querySelector(".firstName").value = "";
  document.querySelector(".lastName").value = "";
  document.querySelector(".jobName").value = "";
  document.querySelector(".age").value = "";
  document.querySelector(".imageUpload").value = ""; // Clear the image input field
});
