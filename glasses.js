let count = 0;

function updateGlass() {
    let water = document.getElementById("water");
    let counter = document.getElementById("count");

    if (water && counter) {
        let percentage = (count / 8) * 100;
        water.style.height = percentage + "%"; // Fill the glass
        counter.textContent = `${count} / 8 glasses`; // Update count text
    } else {
        console.error("Water or count element not found!");
    }
}


function increment() {
    if (count < 8) {
        count++;
        console.log("Count increased:", count); // Debugging check
        updateGlass();
    }
}


function reset() {
    count = 0;
    updateGlass();
}





console.log(document.getElementById("count"));
increment();
