const newResumeBtn = document.querySelector("#resume-form");

const handleNewResumeCreate = async (event) => {
  event.preventDefault();
  document.location.replace("/resumebuilder");
  console.log("function is firing");
};

newResumeBtn.addEventListener("click", handleNewResumeCreate);
