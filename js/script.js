// Toggle the daily hours inputs based on selected working days
// function toggleDaySelection() {
//     const selectedDays = Array.from(document.querySelectorAll('.working-day:checked')).map(input => input.value);
//     generateDailyHoursInputs(selectedDays);
// }

// // Dynamically generate daily working hour inputs based on selected days
// function generateDailyHoursInputs(selectedDays) {
//     const container = document.getElementById('daily-hours-container');
//     container.innerHTML = ''; // Clear previous inputs

//     selectedDays.forEach(day => {
//         const dayName = getDayName(day);
//         const row = document.createElement('div');
//         row.classList.add('daily-hours-row');
//         row.innerHTML = `
//             <label for="hours-${day}">${dayName} Hours:</label>
//             <input type="text" id="hours-${day}" name="hours-${day}" placeholder="HH:MM" required>
//         `;
//         container.appendChild(row);
//     });
// }

// // Function to get the name of the day based on its value (1 = Monday, 2 = Tuesday, etc.)
// function getDayName(dayValue) {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//     return days[dayValue - 1]; // Return the corresponding day name
// }

function toggleDaySelection() {
    const selectedDays = Array.from(document.querySelectorAll('.working-day:checked')).map(input => input.value);
    generateDailyHoursInputs(selectedDays);
}

// Dynamically generate daily working hour inputs based on selected days
function generateDailyHoursInputs(selectedDays) {
    const container = document.getElementById('daily-hours-container');
    container.innerHTML = ''; // Clear previous inputs

    selectedDays.forEach(day => {
        const dayName = getDayName(day);
        const row = document.createElement('div');
        row.classList.add('daily-hours-row');
        row.innerHTML = `
            <label for="hours-${day}">${dayName} Hours:</label>
            <input type="text" id="hours-${day}" name="hours-${day}" placeholder="HH:MM" required>
        `;
        container.appendChild(row);
    });
}

// Function to get the name of the day based on its value (1 = Monday, 2 = Tuesday, ..., 7 = Sunday)
function getDayName(dayValue) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[dayValue - 1]; // Return the corresponding day name
}

// Example function to convert HH:MM to decimal hours (for completeness)
function convertToDecimal(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
}

// Convert HH:MM time to decimal hours (e.g., 7:30 -> 7.5)

// Calculate total working hours from the provided daily hours
function calculateTotalHours(dailyHoursByDay) {
    return Object.values(dailyHoursByDay).reduce((total, hours) => total + hours, 0).toFixed(2);
}

// // Save and calculate total working hours
// function saveData(event) {
//     event.preventDefault();

//     const dailyHoursByDay = {};

//     // Get the selected working days and corresponding hours
//     Array.from(document.querySelectorAll('.working-day:checked')).forEach(option => {
//         const dayValue = parseInt(option.value);
//         const dailyHours = document.getElementById(`hours-${dayValue}`).value.trim();

//         if (dailyHours) {
//             // Convert HH:MM to decimal hours
//             const decimalHours = convertToDecimal(dailyHours);
//             dailyHoursByDay[dayValue] = decimalHours;
//         }
//     });

//     // If no hours are entered, alert the user
//     if (Object.keys(dailyHoursByDay).length === 0) {
//         alert('Please fill in the hours for the selected days.');
//         return;
//     }

//     const totalHours = calculateTotalHours(dailyHoursByDay);

//     // Display result with animation
//     const resultDiv = document.getElementById('result');
//     resultDiv.style.display = 'block';
//     resultDiv.textContent = `Total Working Hours: ${totalHours} hours`;

//     // Show Completion Message with Animation
//     const completionMessage = document.getElementById('completion-message');
//     completionMessage.textContent = `Hooray! You worked a total of ${totalHours} hours! 🎉`;

// function saveData(event) {
//     event.preventDefault();

//     const dailyHoursByDay = {};

//     // Get the selected working days and corresponding hours
//     Array.from(document.querySelectorAll('.working-day:checked')).forEach(option => {
//         const dayValue = parseInt(option.value);
//         const dailyHours = document.getElementById(`hours-${dayValue}`).value.trim();

//         if (dailyHours) {
//             // Convert HH:MM to decimal hours
//             const decimalHours = convertToDecimal(dailyHours);
//             dailyHoursByDay[dayValue] = decimalHours;
//         }
//     });

//     // If no hours are entered, alert the user
//     if (Object.keys(dailyHoursByDay).length === 0) {
//         alert('Please fill in the hours for the selected days.');
//         return;
//     }

//     const totalHours = calculateTotalHours(dailyHoursByDay);

//     // Display result with animation
//     const resultDiv = document.getElementById('result');
//     resultDiv.style.display = 'block';
//     resultDiv.textContent = `Total Working Hours: ${totalHours} hours`;

//     // Show Completion Message with Animation
//     const completionMessage = document.getElementById('completion-message');
//     completionMessage.textContent = `Hooray! You worked a total of ${totalHours} hours! 🎉`;

//     // Trigger Confetti Animation
//     triggerConfetti();

//     // Show Progress Bar
//     showProgressBar(totalHours);

//     // Generate and download the Excel file
//     function generateExcelSheet(dailyHoursByDay, totalHours) {
//         const userName = document.getElementById('user-name').value;
//         const startDate = document.getElementById('start-date').value;
//         const endDate = document.getElementById('end-date').value;

//         const data = [
//             ['Name:', userName],
//             ['Start Date:', startDate],
//             ['End Date:', endDate],
//             [],
//             ['Day', 'Hours'],
//             ...Object.keys(dailyHoursByDay).map(day => [getDayName(day), dailyHoursByDay[day]]), ['Total', totalHours]
//         ];

//         const worksheet = XLSX.utils.aoa_to_sheet(data);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, 'Work Hours');

//         // Generate the file name using the user's name
//         const fileName = `${userName}_WorkHours.xlsx`;
//         XLSX.writeFile(workbook, fileName);
//     }


//     // Trigger Confetti Animation
//     triggerConfetti();

//     // Show Progress Bar
//     showProgressBar(totalHours);

//     // Save data (mock-up for now)
//     const data = {
//         dailyHoursByDay: dailyHoursByDay,
//         totalHours: totalHours
//     };

//     console.log('Saved Data:', data);
//     alert('Data has been saved successfully!');
// }


function saveData(event) {
    event.preventDefault();

    const dailyHoursByDay = {};

    // Get the selected working days and corresponding hours
    Array.from(document.querySelectorAll('.working-day:checked')).forEach(option => {
        const dayValue = parseInt(option.value);
        const dailyHours = document.getElementById(`hours-${dayValue}`).value.trim();

        if (dailyHours) {
            // Convert HH:MM to decimal hours
            const decimalHours = convertToDecimal(dailyHours);
            dailyHoursByDay[dayValue] = decimalHours;
        }
    });

    // If no hours are entered, alert the user
    if (Object.keys(dailyHoursByDay).length === 0) {
        alert('Please fill in the hours for the selected days.');
        return;
    }

    const totalHours = calculateTotalHours(dailyHoursByDay);

    // Display result with animation
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Total Working Hours: ${totalHours} hours`;

    // Show Completion Message with Animation
    const completionMessage = document.getElementById('completion-message');
    completionMessage.textContent = `Hooray! You worked a total of ${totalHours} hours! 🎉`;

    // Trigger Confetti Animation
    triggerConfetti();

    // Show Progress Bar
    showProgressBar(totalHours);

    // Generate and download the Excel file
    generateExcelSheet(dailyHoursByDay, totalHours);

    // Log the saved data
    const data = {
        dailyHoursByDay: dailyHoursByDay,
        totalHours: totalHours
    };

    console.log('Saved Data:', data);
}

function generateExcelSheet(dailyHoursByDay, totalHours) {
    const userName = document.getElementById('user-name').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const data = [
        ['Name:', userName],
        ['Start Date:', startDate],
        ['End Date:', endDate],
        [],
        ['Day', 'Hours'],
        ...Object.keys(dailyHoursByDay).map(day => [getDayName(day), dailyHoursByDay[day]]), ['Total', totalHours]
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Work Hours');

    // Generate the file name using the user's name
    const fileName = `${userName}_WorkHours.xlsx`;
    XLSX.writeFile(workbook, fileName);
}


// Show Progress Bar Animation
function showProgressBar(totalHours) {
    const progressBarContainer = document.getElementById('progress-bar-container');
    const progressBar = document.getElementById('progress-bar');

    progressBarContainer.style.display = 'block';

    // Assuming maximum working hours in a week are 40 hours
    const progress = Math.min((totalHours / 40) * 100, 100);
    progressBar.style.width = progress + '%';
}

// Array of Motivational Quotes on Hardwork, Passion, and Motivation
const aiQuotes = [
    "Hard work beats talent when talent doesn't work hard.",
    "Passion is the fuel that drives us to work harder and achieve greatness.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only place where success comes before work is in the dictionary.",
    "When you feel like quitting, remember why you started.",
    "Passion is energy. Feel the power that comes from focusing on what excites you.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The road to success is always under construction.",
    "Dream big. Start small. Act now."
];

// Function to show the next quote
function showQuote() {
    const randomIndex = Math.floor(Math.random() * aiQuotes.length);
    const quoteElement = document.getElementById('ai-quote');
    quoteElement.innerHTML = aiQuotes[randomIndex];
}

// Trigger Confetti Animation
function triggerConfetti() {
    const end = Date.now() + 3 * 1000;
    (function frame() {
        confetti({
            particleCount: 5,
            angle: Math.random() * 360,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random()
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        } else {
            // Show the motivational quote after confetti animation finishes
            showQuote();
        }
    })();
}

// Call this function whenever you want to trigger confetti animation and display quotes