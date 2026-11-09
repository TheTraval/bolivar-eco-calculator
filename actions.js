// =====================================================
// EXISTING CALCULATOR FUNCTIONALITY
// =====================================================

function calculateImpact() {

    // -------------------------
    // TRANSPORTATION
    // -------------------------

    const transport = document.getElementById("transport").value;

    let dailyTransportCO2 = 0;

    if (transport === "car") {
        dailyTransportCO2 = 4.6;
    } 
    else if (transport === "bus") {
        dailyTransportCO2 = 1.5;
    } 
    else if (transport === "carpool") {
        dailyTransportCO2 = 2.3;
    } 
    else if (transport === "walk") {
        dailyTransportCO2 = 0;
    }

    const weeklyTransportCO2 = dailyTransportCO2 * 5;


    // -------------------------
    // PAPER
    // -------------------------

    const paper = Number(
        document.getElementById("paper").value
    );

    const co2PerSheet = 0.005;

    const weeklyPaper = paper * 5;

    const weeklyPaperCO2 =
        weeklyPaper * co2PerSheet;


    // -------------------------
    // RECYCLING
    // -------------------------

    const recycling =
        document.getElementById("recycling").value;

    let recyclingReduction = 0;

    if (recycling === "low") {
        recyclingReduction = 0;
    } 
    else if (recycling === "medium") {
        recyclingReduction = 0.10;
    } 
    else if (recycling === "high") {
        recyclingReduction = 0.20;
    }


    // -------------------------
    // TOTAL CO2
    // -------------------------

    const totalBeforeRecycling =
        weeklyTransportCO2 +
        weeklyPaperCO2;

    const recyclingSavings =
        totalBeforeRecycling *
        recyclingReduction;

    const totalCO2 =
        totalBeforeRecycling -
        recyclingSavings;


    // -------------------------
    // DISPLAY RESULT
    // -------------------------

    const language =
        document.getElementById("language").value;

    if (language === "en") {

        document.getElementById("result").textContent =
            "Estimated weekly CO₂ emissions: " +
            totalCO2.toFixed(2) +
            " kg";

    } else {

        document.getElementById("result").textContent =
            "Emisiones estimadas de CO₂ por semana: " +
            totalCO2.toFixed(2) +
            " kg";
    }


    // -------------------------
    // ITEMIZED BREAKDOWN
    // -------------------------

    document.getElementById("breakdown").style.display =
        "block";

    updateBreakdown(
        weeklyTransportCO2,
        weeklyPaperCO2,
        recyclingSavings,
        totalCO2
    );
}


// =====================================================
// LANGUAGE SYSTEM
// =====================================================

function changeLanguage() {

    const language =
        document.getElementById("language").value;


    if (language === "es") {

        document.documentElement.lang = "es";

        document.getElementById("title").textContent =
            "Calculadora Ecológica Bolívar";

        document.getElementById("transportTitle").textContent =
            "Transporte";

        document.getElementById("transportLabel").textContent =
            "¿Cómo viajas al colegio?";

        document.getElementById("carOption").textContent =
            "Carro particular";

        document.getElementById("busOption").textContent =
            "Bus";

        document.getElementById("carpoolOption").textContent =
            "Carro compartido";

        document.getElementById("walkOption").textContent =
            "Caminando / Bicicleta";

        document.getElementById("paperLabel").textContent =
            "Hojas de papel utilizadas por día:";

        document.getElementById("recyclingLabel").textContent =
            "Nivel de reciclaje:";

        document.getElementById("lowOption").textContent =
            "Bajo";

        document.getElementById("mediumOption").textContent =
            "Medio";

        document.getElementById("highOption").textContent =
            "Alto";

        document.getElementById("calculateButton").textContent =
            "Calcular";

        document.getElementById("resultsTitle").textContent =
            "Resultados";

        document.getElementById("breakdownTitle").textContent =
            "Desglose detallado";

        document.getElementById("printButton").textContent =
            "Imprimir / Guardar como PDF";

    } else {

        document.documentElement.lang = "en";

        document.getElementById("title").textContent =
            "Bolívar Eco-Calculator";

        document.getElementById("transportTitle").textContent =
            "Transportation";

        document.getElementById("transportLabel").textContent =
            "How do you travel to school?";

        document.getElementById("carOption").textContent =
            "Private Car";

        document.getElementById("busOption").textContent =
            "Bus";

        document.getElementById("carpoolOption").textContent =
            "Carpool";

        document.getElementById("walkOption").textContent =
            "Walking / Bicycle";

        document.getElementById("paperLabel").textContent =
            "Sheets of paper used per day:";

        document.getElementById("recyclingLabel").textContent =
            "Level of recycling:";

        document.getElementById("lowOption").textContent =
            "Low";

        document.getElementById("mediumOption").textContent =
            "Medium";

        document.getElementById("highOption").textContent =
            "High";

        document.getElementById("calculateButton").textContent =
            "Calculate";

        document.getElementById("resultsTitle").textContent =
            "Results";

        document.getElementById("breakdownTitle").textContent =
            "Itemized Breakdown";

        document.getElementById("printButton").textContent =
            "Print / Save as PDF";
    }


    // Recalculate so the result changes language too

    if (
        document.getElementById("breakdown").style.display === "block"
    ) {
        calculateImpact();
    }
}


// =====================================================
// ITEMIZED BREAKDOWN
// =====================================================

function updateBreakdown(
    transportCO2,
    paperCO2,
    recyclingSavings,
    totalCO2
) {

    const language =
        document.getElementById("language").value;


    if (language === "en") {

        document.getElementById("transportResult").textContent =
            "Transportation: " +
            transportCO2.toFixed(2) +
            " kg CO₂/week";

        document.getElementById("paperResult").textContent =
            "Paper: " +
            paperCO2.toFixed(3) +
            " kg CO₂/week";

        document.getElementById("recyclingResult").textContent =
            "Recycling reduction: -" +
            recyclingSavings.toFixed(3) +
            " kg CO₂/week";

        document.getElementById("totalResult").textContent =
            "TOTAL: " +
            totalCO2.toFixed(2) +
            " kg CO₂/week";

    } else {

        document.getElementById("transportResult").textContent =
            "Transporte: " +
            transportCO2.toFixed(2) +
            " kg CO₂/semana";

        document.getElementById("paperResult").textContent =
            "Papel: " +
            paperCO2.toFixed(3) +
            " kg CO₂/semana";

        document.getElementById("recyclingResult").textContent =
            "Reducción por reciclaje: -" +
            recyclingSavings.toFixed(3) +
            " kg CO₂/semana";

        document.getElementById("totalResult").textContent =
            "TOTAL: " +
            totalCO2.toFixed(2) +
            " kg CO₂/semana";
    }
}


// =====================================================
// PRINT / PDF
// =====================================================

function printReport() {

    // Make sure the breakdown is visible

    document.getElementById("breakdown").style.display =
        "block";

    // Open the browser's print dialog.
    // The user can select "Save as PDF".

    window.print();
}