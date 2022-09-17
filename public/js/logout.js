const logoutElement = document.querySelector("#logout");

const handleLogout = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to logout");
  }
};

logoutElement.addEventListener("click", handleLogout);
