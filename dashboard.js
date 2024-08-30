document.addEventListener('DOMContentLoaded', () => {
    const availableCourses = document.querySelectorAll('.course-option input[type="checkbox"]');
    const selectedCoursesContainer = document.getElementById('selected-courses');
    const printBtn = document.getElementById('printBtn');

    availableCourses.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const courseName = checkbox.dataset.course;
            if (checkbox.checked) {
                addCourseToSelected(courseName);
            } else {
                removeCourseFromSelected(courseName);
            }
        });
    });

    function addCourseToSelected(courseName) {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-card');
        courseElement.textContent = courseName;
        courseElement.dataset.course = courseName;

        // Add the course only if it doesn't already exist
        if (!selectedCoursesContainer.querySelector(`div[data-course="${courseName}"]`)) {
            selectedCoursesContainer.appendChild(courseElement);
        }
    }

    function removeCourseFromSelected(courseName) {
        const courseElement = selectedCoursesContainer.querySelector(`div[data-course="${courseName}"]`);
        if (courseElement) {
            selectedCoursesContainer.removeChild(courseElement);
        }
    }

    printBtn.addEventListener('click', () => {
        // Create a new window for printing
        const printWindow = window.open('', '', 'height=600,width=800');
        
        // Write content to the new window
        printWindow.document.open();
        printWindow.document.write('<html><head><title>Print Selected Courses</title>');
        printWindow.document.write('<style>body { font-family: Arial, sans-serif; padding: 20px; } .course-card { margin-bottom: 10px; }</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Selected Courses</h1>');
        printWindow.document.write(selectedCoursesContainer.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();

        // Wait for the content to load before calling print
        printWindow.onload = () => {
            printWindow.focus();
            printWindow.print();
        };
    });
});
