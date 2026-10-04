// Select Course Button

function selectCourse(courseName) {

    document.getElementById("course").value = courseName;

    // Move to registration section
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


// Registration Form

document.getElementById("registrationForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let course = document.getElementById("course").value;
        let mode = document.getElementById("mode").value;

        let message = document.getElementById("message");


        // Check name

        if (name.length < 3) {

            message.className = "error";

            message.innerHTML =
                "Please enter a valid name.";

            return;
        }


        // Check email

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            message.className = "error";

            message.innerHTML =
                "Please enter a valid email address.";

            return;
        }


        // Check phone

        let phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            message.className = "error";

            message.innerHTML =
                "Please enter a valid 10-digit phone number.";

            return;
        }


        // Check course

        if (course === "") {

            message.className = "error";

            message.innerHTML =
                "Please select a course.";

            return;
        }


        // Check learning mode

        if (mode === "") {

            message.className = "error";

            message.innerHTML =
                "Please select a learning mode.";

            return;
        }


        // Successful Registration

        message.className = "success";

        message.innerHTML =
            "Registration successful! " +
            name +
            ", you have registered for " +
            course +
            " (" +
            mode +
            ").";


        // Clear form

        document.getElementById("registrationForm").reset();

    }
);