// Create Customer Records

let customers = [
    { 
    name: "Anakin Skywalker",
    email: "anakin@jedi.com",
    purchases: ["lightsaber", "podracer"]
    },
    {
    name: "Mace Windu",
    email: "mace@jedi.com",
    purchases: ["x-wing", "jedi robe"]
    },
    {
    name: "Ahsoka Tano",
    email: "ahsoka@jedi.com",
    purchases: ["clone army", "jedi starfighter"]
    }
];

// Add and Remove Data

customers.push({
    name: "Obi-Wan Kenobi",
    email: "kenobi@jedi.com",
    purchases: ["jedi holocron", "starship"]
});

customers.shift(); // Removes Anakin Skywalker

// Update Customer Info

customers[0].email = "mace.windu@jedi.com";
customers[0].purchases.push("force push");

// Display Customer Information

customers.forEach(customer => {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Purchases: ${customer.purchases.join(", ")}`);
    console.log('---');
});