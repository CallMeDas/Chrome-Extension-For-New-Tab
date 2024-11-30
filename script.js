function performSearch() {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchUrl;
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}
