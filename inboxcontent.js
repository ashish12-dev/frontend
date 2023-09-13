const emails = [
    {
        sender: "John Doe",
        email: "johndoe@example.com",
        subject: "Regarding Your Product",
        content: "Hello, We have received your inquiry regarding the product. Here are the details: Product Name: Product 1 Price: $49.99 Rating: 4.5/5 If you have any further questions, please feel free to ask. Best regards, John Doe",
    },
    // Add more email objects as needed
    {
        sender: "Ashish Tiwari",
        email: "ashish@gmail.com",
        subject: "Regarding Your Product",
        content: "Hello, We have received your inquiry regarding the product. Here are the details: Product Name: Product 1 Price: $49.99 Rating: 4.5/5 If you have any further questions, please feel free to ask. Best regards, John Doe",
    },
];

// Function to generate email elements
function generateEmails() {
    const inbox = document.getElementById("inbox");

    emails.forEach((email) => {
        const emailDiv = document.createElement("div");
        emailDiv.className = "email";

        const emailHeader = document.createElement("div");
        emailHeader.className = "email-header";

        const sender = document.createElement("span");
        sender.className = "email-sender";
        sender.textContent = `${email.sender} <${email.email}>`; // Include email address

        const subject = document.createElement("span");
        subject.className = "email-subject";
        subject.textContent = email.subject;

        const emailContent = document.createElement("div");
        emailContent.className = "email-content";
        emailContent.textContent = email.content;

        emailHeader.appendChild(sender);
        emailHeader.appendChild(subject);

        emailDiv.appendChild(emailHeader);
        emailDiv.appendChild(emailContent);

        inbox.appendChild(emailDiv);
    });
}

// Generate email elements when the page loads
generateEmails();