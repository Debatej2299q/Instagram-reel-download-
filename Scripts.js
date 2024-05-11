function downloadReel() {
    var url = document.getElementById("urlInput").value;
    
    // Check if the URL is a valid Instagram reel link
    if (isValidInstagramReelUrl(url)) {
        // Fetch the HTML content of the Instagram reel page
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Extract the video URL from the HTML content
                var videoUrl = extractVideoUrl(data);
                // Initiate the download
                initiateDownload(videoUrl);
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert("Please enter a valid Instagram Reel URL.");
    }
}

function isValidInstagramReelUrl(url) {
    // Check if the URL contains "instagram.com" and "reel"
    return url.includes("instagram.com") && url.includes("reel");
}

function extractVideoUrl(html) {
    // You'll need to write code here to extract the video URL from the HTML content
    // This might involve using regular expressions or parsing the HTML to find the appropriate URL
    // For demonstration purposes, let's assume the video URL is present in a specific format in the HTML
    // Replace this with your actual implementation
    return "https://example.com/video.mp4";
}

function initiateDownload(url) {
    // Open the video URL in a new tab to initiate the download
    window.open(url, '_blank');
                  }
                  
