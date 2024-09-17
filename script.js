// Function to handle the Yes/No response
function handleResponse(response) {
    const container = document.querySelector('.container');
    
    if (response === 'yes') {
        container.innerHTML = `
            <h1>Yay! 🎉</h1>
            <p>I'm so excited for our indoor date, Vaidehi! I'll start planning something fun. 😊</p>
            <p>Let me know when you're free, and we'll make it happen!</p>
            <div class="flowers">
                <img src="flowers.jpg" alt="flowers">
            </div>
            <footer>
                <p>Created with ❤️ by Suhani</p>
            </footer>
        `;
    } else {
        container.innerHTML = `
            <h1>Oh no... 😞</h1>
            <p>That's okay, Vaidehi. Maybe you're busy right now, but I'd still love to go on that  date with you sometime!</p>
            <footer>
                <p>Created with ❤️ by Suhani</p>
            </footer>
        `;
        
        // Set a 15-second delay before asking again
        setTimeout(() => {
            container.innerHTML = `
                <h1>Hey Vaidehi!</h1>
                <p>There's something Suhani (me) wants to ask you... again 😅</p>
                <h2>Will you reconsider going on a date with her? 😊</h2>
                <div class="buttons">
                    <a href="javascript:void(0);" class="yes-button" onclick="handleResponse('yes')">Yes!</a>
                    <a href="javascript:void(0);" class="no-button" onclick="handleResponse('no')">No 😞</a>
                </div>
                <footer>
                    <p>Created with ❤️ by Suhani</p>
                </footer>
            `;
        }, 10000); 
    }
}
