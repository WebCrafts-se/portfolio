const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzYvrM-csPqAKPOKYdm5o9LRbeAEqUUeUGIs9aSF7xVg9cCbrBzAV_kKKETDyH6cOhj/exec";

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");
const submitBtn = form.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable button + change look
  submitBtn.disabled = true;
  submitBtn.style.opacity = "0.6";
  submitBtn.style.cursor = "not-allowed";

  statusMsg.classList.remove("hidden");
  statusMsg.style.color = "#444";
  statusMsg.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      statusMsg.textContent = "Message sent!";
      statusMsg.style.color = "#444";
      form.reset();

      // timer så att knappen blir aktiv igen efter 3 sek
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        statusMsg.textContent = "";
        statusMsg.classList.add("hidden");
      }, 3000);

    } else {
      statusMsg.textContent = "Error: Failed to send";
      statusMsg.style.color = "red";
      submitBtn.disabled = false;
    }
  } catch (error) {
    statusMsg.textContent = "Network error";
    statusMsg.style.color = "red";
    submitBtn.disabled = false;
  }
});
