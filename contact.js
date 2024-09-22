$(document).ready(function() {
    const contactForm = $("#contactForm");

    // Check if the contact form element exists
    if (contactForm.length) {
        // Event listener for form submission
        contactForm.submit(function(event) {
            event.preventDefault(); // Prevent form submission

            // Get form data
            const formData = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val(),
                website: $("#website").val(),
                message: $("#message").val()
            };

            // Validate form data
            if (validateForm(formData)) {
                // Retrieve existing form data from local storage
                let existingFormData = localStorage.getItem("contactFormData");

                // If no existing form data or it's not an array, initialize as an empty array
                if (!existingFormData || !Array.isArray(JSON.parse(existingFormData))) {
                    existingFormData = [];
                } else {
                    // Parse existing form data as JSON
                    existingFormData = JSON.parse(existingFormData);
                }

                // Add new form data to the array
                existingFormData.push(formData);

                // Save updated form data to local storage
                localStorage.setItem("contactFormData", JSON.stringify(existingFormData));

                alert("Form submitted successfully!");
                contactForm.trigger("reset"); // Reset form

                // Redirect to index.html after form submission
                window.location.href = "index.html";
            }
        });
    } else {
        console.error("Contact form element not found.");
    }

    // Function to validate form data
    function validateForm(formData) {
        // Check if fields are not empty
        if (formData.firstName.trim() === "" || formData.lastName.trim() === "" || formData.email.trim() === "" || formData.website.trim() === "" || formData.message.trim() === "") {
            alert("All fields are required!");
            return false;
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Invalid email address!");
            return false;
        }

        return true; // Validation passed
    }
});
