
const API_KEY = "jzRqIetYbJE1dkZEC3ihaKey5zdaVijj7bE4emwl"; // Replace with your NASA API Key

async function fetchNasaImage() {
    const date = document.getElementById("date-picker").value;
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        document.getElementById("nasa-image").src = data.url;
        document.getElementById("title").textContent = data.title;
        document.getElementById("date").textContent = data.date;
        document.getElementById("explanation").textContent = data.explanation;
    } catch (error) {
        console.error("Error fetching NASA Image of the Day", error);
    }
}
