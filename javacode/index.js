// Initialize the active article index
let activeIndex = 0;

// Get all article groups
const groups = document.getElementsByClassName("article-group");

// Function to handle right arrow click
const handleRightClick = () => {
    // Calculate the next index, looping back to 0 if at the end
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    // Select current and next article groups
    const currentGroup = document.querySelector(`.article-group[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`.article-group[data-index="${nextIndex}"]`);

    // Add animation classes
    currentGroup.classList.add('slide-out-left');
    nextGroup.classList.add('slide-in-right');

    // Change status of current and next group after animation completes
    setTimeout(() => {
        currentGroup.dataset.status = "inactive";
        nextGroup.dataset.status = "active";

        currentGroup.classList.remove('slide-out-left');
        nextGroup.classList.remove('slide-in-right');
    }, 500);

    // Update active index
    activeIndex = nextIndex;
};

// Function to handle left arrow click
const handleLeftClick = () => {
    // Calculate the previous index, looping to the end if at the start
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    // Select current and previous article groups
    const currentGroup = document.querySelector(`.article-group[data-index="${activeIndex}"]`);
    const prevGroup = document.querySelector(`.article-group[data-index="${prevIndex}"]`);

    // Add animation classes
    currentGroup.classList.add('slide-out-right');
    prevGroup.classList.add('slide-in-left');

    // Change status of current and previous group after animation completes
    setTimeout(() => {
        currentGroup.dataset.status = "inactive";
        prevGroup.dataset.status = "active";

        currentGroup.classList.remove('slide-out-right');
        prevGroup.classList.remove('slide-in-left');
    }, 500);

    // Update active index
    activeIndex = prevIndex;
};
