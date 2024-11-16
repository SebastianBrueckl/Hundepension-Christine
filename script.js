document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        date: formData.get("date"),
        message: formData.get("message"),
    };

    fetch("https://formspree.io/f/xvgorekl", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("Anfrage erfolgreich gesendet!");
            event.target.reset();
        } else {
            alert("Es gab ein Problem beim Senden Ihrer Anfrage.");
        }
    })
    .catch(() => {
        alert("Es gab ein Problem beim Senden Ihrer Anfrage.");
    });
});