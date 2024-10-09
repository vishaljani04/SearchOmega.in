// Sample data
const items = [
    "Inception",
    "Interstellar",
    "Iron Man",
    "Indiana Jones",
    "Inside Out",
    "Ice Age",
    "I Am Legend",
    "Infinity War",
    "Inglourious Basterds"
];

function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let resultList = document.getElementById('resultList');
    
    // Clear previous results
    resultList.innerHTML = '';
    
    if (input) {
        resultList.style.display = 'block';
        let filteredItems = items.filter(item => item.toLowerCase().includes(input));
        
        if (filteredItems.length === 0) {
            resultList.innerHTML = '<div>No results found</div>';
        } else {
            filteredItems.forEach(item => {
                let div = document.createElement('div');
                div.innerText = item;
                div.addEventListener('click', () => {
                    document.getElementById('searchInput').value = item;
                    resultList.style.display = 'none'; // Hide list after selection
                });
                resultList.appendChild(div);
            });
        }
    } else {
        resultList.style.display = 'none';
    }
}

// Hide result list when clicking outside
document.addEventListener('click', function(event) {
    let resultList = document.getElementById('resultList');
    if (!resultList.contains(event.target) && event.target !== document.getElementById('searchInput')) {
        resultList.style.display = 'none';
    }
});

