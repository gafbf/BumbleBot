document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;

    const response = await fetch('http://localhost:5000/chat', { // Update with your deployed API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    document.getElementById('chat-box').innerText += `You: ${userInput}\nAI: ${data.response}\n`;
});
