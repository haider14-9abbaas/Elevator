function moveToFloor(floor) {
    const elevator = document.getElementById('elevator');
    const floorHeight = elevator.parentElement.clientHeight / 4;
    const distance = (floor - 1) * floorHeight;

    // passenger wil come in
    openDoors();

    // Wait for doors to open completely before closing them and moving the elevator
    setTimeout(() => {
        closeDoors();

        // Wait for doors to close completely before moving the elevator
        setTimeout(() => {
            elevator.style.transform = `translateY(-${distance}px)`;

            // Wait for the elevator to reach the desired floor before opening doors again
            setTimeout(() => {
                openDoors();

                // Wait for the passenger to leave before closing the doors again
                setTimeout(() => {
                    closeDoors();
                }, 2000); // Adjust this time to allow passenger to leave
            }, 2000); // Adjust this time to match the elevator movement duration
        }, 1000); // Adjust this time to match the door closing duration
    }, 2000); // Adjust this time to match the door opening duration
}

function openDoors() {
    const elevator = document.getElementById('elevator');
    elevator.classList.add('doors-open');
}

function closeDoors() {
    const elevator = document.getElementById('elevator');
    elevator.classList.remove('doors-open');
}
