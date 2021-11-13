window.addEventListener("load", () => {
  // The idea here is to:
  // programatically open the modal to show a minimun usage of jQuery
  // Show the usage of ES6 arrow functions
  const mainButton = document.getElementById("mainButton");

  const openModal = () => {
    $("#custom-modal").modal("show");
  };

  mainButton.addEventListener("click", () => openModal());
});
