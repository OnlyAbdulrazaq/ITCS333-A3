async function fetchData() {
    const url = 'https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(results) {
    const tableBody = document.getElementById('data-table-body');
    tableBody.innerHTML = ''; // Clear existing data

    results.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.year}</td>
            <td>${record.semester}</td>
            <td>${record.programs || 'N/A'}</td> <!-- Use proper field for programs -->
            <td>${record.nationality}</td>
            <td>${record.colleges || 'N/A'}</td>  <!-- Use proper field for colleges -->
            <td>${record.number_of_students}</td>
        `;
        tableBody.appendChild(row);
    });
}

fetchData(); // Call the function to fetch data