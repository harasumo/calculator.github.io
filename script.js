document.getElementById('calculateBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const startingBid = parseFloat(document.getElementById('startingBid').value);

    if (name === "" || isNaN(startingBid) || startingBid < 0) {
        alert("Please enter a valid name and a non-negative starting bid.");
        return;
    }1

    // Calculate the dowry price based on the selected options
    let price = startingBid;

    // Education
    const educationCoefficient = parseFloat(document.getElementById('education').value);
    price *= educationCoefficient;

    // Family Net Worth
    const netWorthCoefficient = parseFloat(document.getElementById('netWorth').value);
    price *= netWorthCoefficient;

    // Caste
    const casteBonus = parseFloat(document.getElementById('caste').value);
    price += casteBonus;

    // Skills
    const skillCheckBoxes = document.querySelectorAll('.skills:checked');
    let skillsTotal = 0;
    skillCheckBoxes.forEach(skill => {
        skillsTotal += parseFloat(skill.value);
    });
    price += skillsTotal;

    // Age
    const ageRadioButtons = document.querySelectorAll('input[name="age"]:checked');
    let ageCoefficient = 1;
    ageRadioButtons.forEach(age => {
        ageCoefficient = parseFloat(age.value);
    });
    price *= ageCoefficient;

    // Reputation
    const reputationCheckBoxes = document.querySelectorAll('.reputation:checked');
    let reputationTotal = 0;
    reputationCheckBoxes.forEach(reputation => {
        reputationTotal += parseFloat(reputation.value);
    });
    price += reputationTotal;

    // Love letter
    const loveLetter = document.getElementById('loveLetter').value;

    // Create the result object
    let person = {
        name: name,
        price: price,
        loveLetter: loveLetter
    };

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your price for ${person.name} is $${person.price.toFixed(2)}.<br>Love Letter: ${person.loveLetter}`;
});
