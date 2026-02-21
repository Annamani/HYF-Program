// This function emulates sending emails to recipients
function sendEmailTo(recipient) {
    // But really it only logs out a string
    const userIds = recipient.split("|");
    console.log("email sent to " + userIds);
}
// Example usage - do not modify
const userEmailIds = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com"
sendEmailTo(userEmailIds);