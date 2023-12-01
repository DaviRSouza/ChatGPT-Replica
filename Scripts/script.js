const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const createElement = (html, ClassName) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", ClassName);
    chatDiv.innerHTML = html;
    return chatDiv;
};

const handleOutgoingChat = () => {
    userText = chatInput.value.trim();
    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="assets/user.jpg" alt="userimage">
                        <p>${userText}</p>
                    </div>
                  </div>`;
    const outgoingChatDiv = createElement(html, "outgoing");
    chatContainer.appendChild(outgoingChatDiv);
    setTimeout(showTypingAnimation, 500)
}

sendButton.addEventListener("click", handleOutgoingChat)