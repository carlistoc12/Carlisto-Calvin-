// Show welcoming message only on the index page and add color picker to banner
if (
    window.location.pathname.endsWith("My Portofolio.html") ||
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("/index.html")
) {
  
    const colorLabel = document.createElement("label");
    colorLabel.textContent = "Pick banner color: ";
    colorLabel.style.marginRight = "0.5rem";
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = "#4f8cff";
    colorInput.style.verticalAlign = "middle";
    colorLabel.appendChild(colorInput);
    jsToolsDiv.appendChild(colorLabel);

    // Insert JS tools inside the banner under the title
    const bannerTools = document.getElementById("js-tools-banner");
    if (bannerTools) {
        bannerTools.appendChild(jsToolsDiv);
    }

    // Change banner background color on input
    colorInput.addEventListener("input", function() {
        document.querySelector('.banner-header').style.background = colorInput.value;
    });
}

// Live name feedback with animation
const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("name-output");

const funMessages = [
    "Nice to meet you! 🎉",
    "Welcome aboard! 😎",
    "Glad you're here! 👍",
    "Hello, superstar! 🚀",
    "Great to see you! 💖"
];

nameInput.addEventListener("input", function() {
    const name = nameInput.value.trim();
    if (name) {
        // Pick a random fun message
        const msg = funMessages[Math.floor(Math.random() * funMessages.length)];
        nameOutput.textContent = `Hello, ${name}! ${msg}`;
        nameOutput.style.color = "#4f8cff";
        nameOutput.style.transform = "scale(1.1)";
        setTimeout(() => {
            nameOutput.style.transform = "scale(1)";
        }, 200);
    } else {
        nameOutput.textContent = "";
    }
});
// Add a color picker for the greeting area
window.addEventListener("DOMContentLoaded", function() {
    const personalGreeting = document.getElementById("personal-greeting");
    if (personalGreeting) {
        // Create color picker elements
        const colorLabel = document.createElement("label");
        colorLabel.textContent = "Pick your favorite color: ";
        colorLabel.style.marginRight = "0.5rem";
        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = "#ffd700";
        colorInput.style.marginRight = "0.5rem";
        // Insert before the greeting output
        personalGreeting.insertBefore(colorLabel, personalGreeting.lastElementChild);
        personalGreeting.insertBefore(colorInput, personalGreeting.lastElementChild);

        // Change background color on input
        colorInput.addEventListener("input", function() {
            personalGreeting.style.background = colorInput.value;
        });
    }
});

// Show contact info button
function showContactInfo() {
    alert("Email: calvincl128@gmail.com\nInstagram: @carcalvinn12_");
}
const contactBtn = document.createElement('button');
contactBtn.textContent = "Show Contact Info";
contactBtn.style.margin = "1rem";
contactBtn.onclick = showContactInfo;
document.querySelector('.banner-header').appendChild(contactBtn);

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "Scroll to Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "0.75rem 1.5rem";
scrollBtn.style.borderRadius = "10px";
scrollBtn.style.background = "#4f8cff";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(scrollBtn);

// 1. Show current date and time in the banner
function showDateTime() {
    const now = new Date();
    alert("Current date and time:\n" + now.toLocaleString());
}
const dateBtn = document.createElement('button');
dateBtn.textContent = "Show Date & Time";
dateBtn.style.margin = "1rem";
dateBtn.onclick = showDateTime;
document.getElementById('js-tools-banner').appendChild(dateBtn);

