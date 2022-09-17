const newResumeBtn = document.querySelector("#start-resume-button");

const handleNewResumeCreate = async (event) => {
  event.preventDefault();

  document.location.replace("/resumebuilder");
  console.log("function is firing");
};

newResumeBtn.addEventListener("click", handleNewResumeCreate);
