let notifications = [
    "New Notification from Jhon Doe",
    "New Notification from Ashish Tiwari"
];

// Function to generate notification elements
function generateNotifications() {
    const notificationList = document.getElementById("notificationList");
    const notificationCount = document.getElementById("notificationCount");

    // Clear existing notifications
    notificationList.innerHTML = "";

    notifications.forEach((notification) => {
        const notificationItem = document.createElement("a");
        notificationItem.className = "dropdown-item";
        notificationItem.href = "#";
        notificationItem.textContent = notification;

        // Add a click event listener to handle notification clicks
        notificationItem.addEventListener("click", () => {
            // Handle the click action (e.g., redirect, remove notification)
            alert("Clicked on notification: " + notification);

            // Remove the clicked notification from the list
            notifications = notifications.filter((item) => item !== notification);

            // Update the notification count
            notificationCount.textContent = notifications.length;

            // Check if all notifications are cleared
            if (notifications.length === 0) {
                notificationCount.textContent = ""; // Reset count to zero
            }

            // Remove the clicked notification element
            notificationList.removeChild(notificationItem);
        });

        notificationList.appendChild(notificationItem);
    });

    // Update the notification count badge
    notificationCount.textContent = notifications.length;
}

// Generate notification elements when the page loads
generateNotifications();




function addNewNotifications(newNotifications) {
    // Append the new notifications to the existing notifications array
    notifications = [...notifications, ...newNotifications];
}

const newNotifications=[]