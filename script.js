function calculateBill() {
    const units = Number(document.getElementById("units").value);
    const consumerType = document.getElementById("consumerType").value;

    if (units < 1 || !Number.isInteger(units)) {
        document.getElementById("result").textContent =
            "Please enter a valid number of units.";
        return;
    }

    const rate = chooseRate(units);
    const baseAmount = calculateBase(units, rate);

    const surchargePercent = consumerType === "Commercial" ? 10 : 0;
    const surcharge = calculateSurcharge(baseAmount, surchargePercent);

    const fixedCharge = 50;
    const total = baseAmount + surcharge + fixedCharge;

    document.getElementById("result").textContent =
        "Rate: ₹" + rate + "/unit | Base: ₹" + baseAmount +
        " | Surcharge: ₹" + surcharge +
        " | Fixed: ₹" + fixedCharge +
        " | Total: ₹" + total;

    document.getElementById("breakdown").textContent = buildExamples();
}

function calculateSurcharge(amount, percentage) {
    return amount * percentage / 100;
}

function chooseRate(units) {
    if (units <= 100) {
        return 5;
    } else if (units <= 300) {
        return 7;
    } else {
        return 9;
    }
}

function calculateBase(units, rate) {
    return units * rate;
}

function buildExamples() {
    let output = "";

    for (let units = 100; units <= 500; units += 100) {
        const rate = chooseRate(units);
        const base = calculateBase(units, rate);

        output += units + " units = ₹" + base + "\n";
    }

    return output;
}
