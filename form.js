const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzYvrM-csPqAKPOKYdm5o9LRbeAEqUUeUGIs9aSF7xVg9cCbrBzAV_kKKETDyH6cOhj/exec";

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusMsg.classList.remove("hidden");
  statusMsg.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      statusMsg.textContent = "Message sent!";
      form.reset();
    } else {
      statusMsg.textContent = "Error: Failed to send";
    }
  } catch (error) {
    statusMsg.textContent = "Network error";
  }
});
