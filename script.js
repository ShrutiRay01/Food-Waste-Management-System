const responses = {
    "Are there guidelines for donating food?": "Yes, there are guidelines for donating food. It's important to donate food that is safe, nutritious, and in good condition. You can contact local food banks or organizations to learn about specific guidelines in your area.",
    "How can I properly store fruits and vegetables to prolong their freshness and reduce spoilage?": "Fruits and vegetables should be stored properly to prolong their freshness. You can store them in the refrigerator, use breathable bags or containers, and keep them away from moisture and sunlight.",
    "suggest some simple steps to manage food waste at home": "Some simple steps to manage food waste at home include meal planning, proper storage of leftovers, composting food scraps, and donating excess food to those in need.",
    "what are some misconceptions regarding expiration dates and how to make sure that a food is safe to eat or not?": "Misconceptions regarding expiration dates include thinking that food is unsafe to eat after the date passes. However, many foods are still safe to eat past their expiration dates if stored properly. It's important to use your senses, such as smell and sight, to determine if food is safe to eat.",
    "how can i encourage my community and workplace to adopt sustainable practices for managing food waste?": "You can encourage your community and workplace to adopt sustainable practices for managing food waste by raising awareness, organizing events or workshops, providing resources and tips, and leading by example.",
    "What are the environmental impacts of food waste, and how can individuals contribute to reducing these impacts?": "Food waste contributes to environmental problems such as greenhouse gas emissions and wasted resources. Individuals can reduce these impacts by practicing mindful consumption, composting food scraps, and supporting initiatives that redistribute surplus food to those in need.",
    "How can I ensure that the food I donate is safe and suitable for consumption?": "To ensure that donated food is safe and suitable for consumption, it's important to follow food safety guidelines, including maintaining proper storage conditions, checking expiration dates, and donating only unspoiled and unopened items.",
    "What are the main causes of food waste in households?": "The main causes of food waste in households include overbuying, improper storage, misunderstanding expiration dates, cooking too much, and lack of meal planning.",
    "How do supermarkets and grocery stores contribute to food waste, and what measures are being taken to address this issue?": "Supermarkets and grocery stores contribute to food waste through practices such as overstocking, cosmetic standards for produce, and promotional pricing. Some measures being taken to address this issue include food waste reduction initiatives, donation programs, and partnerships with food rescue organizations.",
    "Are there any innovative technologies being developed to combat food waste?": "Yes, there are several innovative technologies being developed to combat food waste, including smart packaging, food waste tracking apps, and anaerobic digestion systems.",
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    displayMessage(userInput, 'user');
    
    const response = responses[userInput];
    if (response) {
        displayMessage(response, 'bot');
    } else {
        displayMessage("Sorry, I couldn't understand your question. Please try again.", 'bot');
    }

    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
