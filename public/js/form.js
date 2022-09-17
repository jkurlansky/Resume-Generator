const handleSubmit = async (event) => {
    console.log("hello");
    event.preventDefault();
    const resumeTitle = document.querySelector("#resumeTitleForm").value.trim();
    const username = document.querySelector("#nameForm").value.trim();
    const email = document.querySelector("#emailForm").value.trim();
    const phoneNumber = document.querySelector("#phoneNumberForm").value.trim();
    const highlightedSkills = document
      .querySelector("#highlightedSkillsForm")
      .value.trim();
    const jobTitle1 = document.querySelector("#jobTitle1Form").value.trim();
    const companyName1 = document.querySelector("#companyName1Form").value.trim();
    const jobLocation1 = document.querySelector("#jobLocation1Form").value.trim();
    const jobDescription1 = document
      .querySelector("#jobDescription1Form")
      .value.trim();
    const startDate1 = document.querySelector("#startDate1Form").value.trim();
    const endDate1 = document.querySelector("#endDate1Form").value.trim();
  
    if (
      resumeTitle &&
      username &&
      email &&
      phoneNumber &&
      highlightedSkills &&
      jobTitle1 &&
      companyName1 &&
      jobLocation1 &&
      startDate1 &&
      endDate1
    ) {
      const response = await fetch("/api/resume", {
        method: "POST",
        body: JSON.stringify({
          resumeTitle,
          username,
          email,
          phoneNumber,
          highlightedSkills,
          jobTitle1,
          companyName1,
          jobLocation1,
          jobDescription1,
          startDate1,
          endDate1,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/resumetemplates");
      } else {
        alert("Failed template");
      }
    }
  };
  
  document
    .querySelector(".newResumeForm")
    .addEventListener("submit", handleSubmit());