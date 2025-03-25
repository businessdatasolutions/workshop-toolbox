// Game Data
const scenarios = [
    {
        id: 1,
        name: "RetailTech Inc.",
        industry: "Retail Technology",
        position: "Established mid-market player with growing competition",
        resources: [
            "Financial: $10M annual tech budget",
            "Technological: Legacy ERP and CRM systems",
            "Human: 500 employees, small data science team",
        ],
        challenges: [
            "Rising customer expectations for personalization",
            "Increasing operational costs",
            "Growing e-commerce competition",
            "Rich customer data not fully utilized",
        ],
        goals: [
            "Increase market share by 15% in 3 years",
            "Improve customer retention by 25%",
            "Reduce operational costs by 20%",
            "Develop new digital revenue streams",
        ],
    },
    {
        id: 2,
        name: "HealthFirst",
        industry: "Healthcare Provider",
        position: "Regional healthcare network facing digital disruption",
        resources: [
            "Financial: $15M innovation fund",
            "Technological: Fragmented digital systems",
            "Human: 2,000 employees, no dedicated data science team",
        ],
        challenges: [
            "Patient engagement and retention",
            "Operational inefficiencies",
            "Rising cost of care",
            "Digital health startups entering market",
        ],
        goals: [
            "Improve patient outcomes by 30%",
            "Reduce administrative costs by 25%",
            "Increase preventative care participation by 40%",
            "Develop telemedicine capabilities",
        ],
    },
    {
        id: 3,
        name: "EduSmart",
        industry: "Education Technology",
        position: "Growing EdTech company with innovative products",
        resources: [
            "Financial: $8M venture funding",
            "Technological: Modern cloud-based platform",
            "Human: 200 employees, strong engineering team",
        ],
        challenges: [
            "Scaling personalized learning",
            "Teacher adoption barriers",
            "Increasing competition",
            "Demonstrating learning outcomes",
        ],
        goals: [
            "Expand to 500+ school districts in 2 years",
            "Increase student engagement metrics by 35%",
            "Reduce customer acquisition costs by 30%",
            "Develop AI-powered learning assistant",
        ],
    },
    {
        id: 4,
        name: "ManufacturePro",
        industry: "Manufacturing",
        position: "Traditional manufacturer seeking digital transformation",
        resources: [
            "Financial: $20M transformation budget",
            "Technological: Legacy production systems",
            "Human: 1,500 employees, traditional skillsets",
        ],
        challenges: [
            "Production inefficiencies",
            "Quality control issues",
            "Supply chain vulnerabilities",
            "Workforce skill gaps",
        ],
        goals: [
            "Reduce production costs by 20%",
            "Improve quality metrics by 30%",
            "Increase supply chain resilience",
            "Develop smart factory capabilities",
        ],
    },
    {
        id: 5,
        name: "FinServe",
        industry: "Financial Services",
        position: "Mid-sized bank competing with fintech startups",
        resources: [
            "Financial: $30M digital transformation fund",
            "Technological: Core banking systems with APIs",
            "Human: 800 employees, growing tech team",
        ],
        challenges: [
            "Customer attrition to fintech competitors",
            "Regulatory compliance costs",
            "Legacy system maintenance",
            "Digital customer expectations",
        ],
        goals: [
            "Increase digital engagement by 50%",
            "Reduce customer acquisition costs by 35%",
            "Develop new digital financial products",
            "Streamline compliance processes",
        ],
    },
];

const aiCapabilities = [
    {
        id: 1,
        name: "Predictive Analytics",
        description: "Advanced data analysis to forecast trends, behaviors, and outcomes.",
        applications: ["Demand forecasting", "Customer churn prediction", "Risk assessment"],
        budgetCost: 15,
        talentCost: 10,
        benefits: "Improved decision-making, reduced uncertainties",
        risks: "Requires quality data, may perpetuate historical biases",
    },
    {
        id: 2,
        name: "Natural Language Processing",
        description: "Enabling machines to understand and respond to human language.",
        applications: ["Customer service chatbots", "Sentiment analysis", "Content generation"],
        budgetCost: 20,
        talentCost: 15,
        benefits: "Enhanced customer engagement, 24/7 service capability",
        risks: "May struggle with complex queries, tone management challenges",
    },
    {
        id: 3,
        name: "Computer Vision",
        description: "AI systems that can interpret and analyze visual information.",
        applications: ["Quality control", "Medical diagnostics", "Security surveillance"],
        budgetCost: 25,
        talentCost: 20,
        benefits: "Automated inspection, reduced human error",
        risks: "Environmental factors can affect accuracy, privacy concerns",
    },
    {
        id: 4,
        name: "Robotic Process Automation",
        description: "Software robots automating repetitive, rule-based tasks.",
        applications: ["Invoice processing", "Data entry", "Compliance checking"],
        budgetCost: 10,
        talentCost: 5,
        benefits: "Increased efficiency, reduced operational costs",
        risks: "Limited to structured processes, potential workforce disruption",
    },
    {
        id: 5,
        name: "Machine Learning for Personalization",
        description: "Algorithms that learn from user behavior to deliver tailored experiences.",
        applications: ["Product recommendations", "Personalized content", "Adaptive learning"],
        budgetCost: 20,
        talentCost: 15,
        benefits: "Improved customer satisfaction, increased conversion rates",
        risks: "Privacy concerns, may create filter bubbles",
    },
    {
        id: 6,
        name: "Decision Support Systems",
        description: "AI-powered tools that assist human decision-makers with complex choices.",
        applications: ["Clinical decision support", "Investment analysis", "Resource allocation"],
        budgetCost: 15,
        talentCost: 10,
        benefits: "Better informed decisions, consistent evaluation criteria",
        risks: "Over-reliance risk, requires human oversight",
    },
    {
        id: 7,
        name: "Deep Learning Neural Networks",
        description: "Advanced AI models inspired by human brain structure for complex pattern recognition.",
        applications: ["Fraud detection", "Speech recognition", "Complex data analysis"],
        budgetCost: 30,
        talentCost: 25,
        benefits: "Handling complex unstructured data, superior pattern recognition",
        risks: "Black box problem, high computational requirements",
    },
    {
        id: 8,
        name: "Intelligent Process Automation",
        description: "Combination of RPA with AI capabilities for enhanced automation.",
        applications: ["End-to-end process automation", "Dynamic workflow optimization"],
        budgetCost: 25,
        talentCost: 15,
        benefits: "Handling complex processes, continuous improvement capability",
        risks: "Implementation complexity, significant process redesign needed",
    },
];

const marketDynamicsCards = [
    {
        id: 1,
        title: "Technological Advancement",
        description: "A breakthrough in Natural Language Processing has made customer service chatbots significantly more effective and human-like, reducing the need for human customer service representatives by up to 40%.",
    },
    {
        id: 2,
        title: "Competitor Action",
        description: "A major competitor has acquired an AI startup specializing in personalization algorithms, threatening to leapfrog your capabilities in customer experience personalization.",
    },
    {
        id: 3,
        title: "Shifting Customer Preferences",
        description: "Growing consumer concerns about AI ethics and data privacy have led to increased scrutiny of AI-powered services and higher expectations for transparency.",
    },
    {
        id: 4,
        title: "Regulatory Change",
        description: "New regulations require businesses to provide explanations for automated decisions affecting customers and ensure AI systems are free from discriminatory biases.",
    },
    {
        id: 5,
        title: "Economic Fluctuation",
        description: "An economic downturn has reduced available venture capital for technology investments by 30%, while simultaneously increasing pressure for cost-cutting measures across industries.",
    },
    {
        id: 6,
        title: "Talent Market Shift",
        description: "A severe shortage of AI specialists has developed, with salaries increasing by 25% and recruitment timelines extending to 6+ months for qualified data scientists.",
    },
];

// Game state variables
let currentRound = 1;
let numGroups = 4;
let currentGroup = 1;
let selectedScenario = scenarios[0];
let selectedAIInitiatives = [];
let timerInterval;
let timerMinutes = 20;
let timerSeconds = 0;
let timerRunning = false;
let revealedMarketCards = [];
let currentDetailCapability = null;

// DOM Elements
const landingPage = document.getElementById("landing-page");
const facilitatorView = document.getElementById("facilitator-view");
const groupView = document.getElementById("group-view");
const presentationView = document.getElementById("presentation-view");
const instructionsModal = document.getElementById("instructions-modal");
const currentRoundEl = document.getElementById("current-round");
const roundDescriptionEl = document.getElementById("round-description");
const timerEl = document.getElementById("timer");
const groupsCountEl = document.getElementById("groups-count");
const currentMarketCard = document.getElementById("current-market-card");
const marketCardTitle = document.getElementById("market-card-title");
const marketCardDescription = document.getElementById("market-card-description");
const aiCapabilitiesContainer = document.getElementById("ai-capabilities-container");
const marketDynamicsSection = document.getElementById("market-dynamics-section");
const marketCardTitleGroup = document.getElementById("market-card-title-group");
const marketCardDescriptionGroup = document.getElementById("market-card-description-group");
const selectedAIInitiativesEl = document.getElementById("selected-ai-initiatives");
const assignScenariosBtn = document.getElementById("assign-scenarios-btn");
const groupNavigation = document.createElement("div");
groupNavigation.className = "flex justify-between items-center mt-4";
groupNavigation.innerHTML = `
    <button id="prev-group-btn" class="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3 rounded">
        <i class="fas fa-arrow-left mr-1"></i> Previous Group
    </button>
    <span class="text-sm text-gray-600">Group <span id="current-group-display">1</span> of <span id="total-groups-display">4</span></span>
    <button id="next-group-btn" class="bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3 rounded">
        Next Group <i class="fas fa-arrow-right ml-1"></i>
    </button>
`;
document.querySelector(".bg-purple-50.p-4").appendChild(groupNavigation);

// Event Listeners
document.getElementById("start-game-btn").addEventListener("click", startGame);
document.getElementById("instructions-btn").addEventListener("click", showInstructions);
document.getElementById("close-instructions-btn").addEventListener("click", hideInstructions);
document.getElementById("close-instructions-btn2").addEventListener("click", hideInstructions);
document.getElementById("reset-game-btn").addEventListener("click", resetGame);
document.getElementById("start-timer-btn").addEventListener("click", startTimer);
document.getElementById("pause-timer-btn").addEventListener("click", pauseTimer);
document.getElementById("reset-timer-btn").addEventListener("click", resetTimer);
document.getElementById("next-round-btn").addEventListener("click", advanceToNextRound);
document.getElementById("reveal-market-card-btn").addEventListener("click", revealMarketCard);
document.getElementById("group-view-btn").addEventListener("click", showGroupView);
document.getElementById("presentation-view-btn").addEventListener("click", showPresentationView);
document.getElementById("back-to-facilitator-btn").addEventListener("click", showFacilitatorView);
document.getElementById("back-from-presentation-btn").addEventListener("click", showFacilitatorView);
document.getElementById("assign-scenarios-btn").addEventListener("click", assignScenarios);
document.getElementById("prev-group-btn").addEventListener("click", () => switchGroup(currentGroup - 1));
document.getElementById("next-group-btn").addEventListener("click", () => switchGroup(currentGroup + 1));

// Game Functions
function initializeAICapabilityCards() {
    aiCapabilitiesContainer.innerHTML = "";

    aiCapabilities.forEach((capability) => {
        const cardHTML = `
            <div class="relative mb-4 border border-purple-200 rounded-lg shadow-sm">
                <div class="bg-white rounded-lg p-4">
                    <h3 class="font-bold text-lg mb-2">${capability.name}</h3>
                    <p class="text-sm mb-3">${capability.description}</p>
                    <div class="flex justify-between text-sm mb-2">
                        <span class="font-medium">Budget Cost:</span>
                        <span>${capability.budgetCost} points</span>
                    </div>
                    <div class="flex justify-between text-sm mb-3">
                        <span class="font-medium">Talent Cost:</span>
                        <span>${capability.talentCost} points</span>
                    </div>
                    <div class="flex justify-between">
                        <button class="see-details-btn bg-purple-600 hover:bg-purple-700 text-white text-sm py-1 px-3 rounded" data-id="${capability.id}">
                            See Details
                        </button>
                        <button class="select-ai-btn bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded" data-id="${capability.id}">
                            Select
                        </button>
                    </div>
                </div>
            </div>
        `;

        aiCapabilitiesContainer.innerHTML += cardHTML;
    });

    // Add event listeners to see details buttons
    document.querySelectorAll(".see-details-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const capabilityId = parseInt(this.dataset.id);
            const capability = aiCapabilities.find(cap => cap.id === capabilityId);
            showCapabilityDetails(capability);
        });
    });

    // Add event listeners to select buttons
    document.querySelectorAll(".select-ai-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const capabilityId = parseInt(this.dataset.id);
            const capability = aiCapabilities.find(cap => cap.id === capabilityId);
            if (!selectedAIInitiatives.some(item => item.id === capabilityId)) {
                selectedAIInitiatives.push(capability);
                updateSelectedAIInitiatives();
            }
        });
    });
}

function updateSelectedAIInitiatives() {
    if (selectedAIInitiatives.length === 0) {
        selectedAIInitiativesEl.innerHTML = '<p class="text-gray-500 text-sm italic">Selected AI initiatives will appear here</p>';
        return;
    }

    let html = "";
    let totalBudget = 0;
    let totalTalent = 0;

    selectedAIInitiatives.forEach((initiative, index) => {
        totalBudget += initiative.budgetCost;
        totalTalent += initiative.talentCost;

        html += `
            <div class="flex justify-between items-center mb-2 p-2 bg-purple-50 rounded">
                <div>
                    <span class="font-medium">${initiative.name}</span>
                    <span class="text-sm text-gray-600"> (B:${initiative.budgetCost}, T:${initiative.talentCost})</span>
                </div>
                <button class="remove-initiative text-red-600 hover:text-red-800" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    });

    // Add total resources used
    if (selectedAIInitiatives.length > 0) {
        html += `
            <div class="mt-4 pt-2 border-t border-gray-300">
                <div class="flex justify-between items-center">
                    <span class="font-medium">Total Budget:</span>
                    <span class="font-bold ${totalBudget > 100 ? "text-red-600" : ""}">${totalBudget}/100 points</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="font-medium">Total Talent:</span>
                    <span class="font-bold ${totalTalent > 50 ? "text-red-600" : ""}">${totalTalent}/50 points</span>
                </div>
            </div>
        `;
    }

    selectedAIInitiativesEl.innerHTML = html;

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-initiative").forEach((btn) => {
        btn.addEventListener("click", function () {
            const index = parseInt(this.dataset.index);
            selectedAIInitiatives.splice(index, 1);
            updateSelectedAIInitiatives();
        });
    });
}

function initializeScenarioDetails() {
    document.getElementById("scenario-title").textContent = selectedScenario.name;
    document.getElementById("scenario-industry").textContent = selectedScenario.industry;
    document.getElementById("scenario-position").textContent = selectedScenario.position;

    const resourcesList = document.getElementById("scenario-resources");
    resourcesList.innerHTML = "";
    selectedScenario.resources.forEach((resource) => {
        resourcesList.innerHTML += `<div>- ${resource}</div>`;
    });

    const challengesList = document.getElementById("scenario-challenges");
    challengesList.innerHTML = "";
    selectedScenario.challenges.forEach((challenge) => {
        challengesList.innerHTML += `<div>- ${challenge}</div>`;
    });

    const goalsList = document.getElementById("scenario-goals");
    goalsList.innerHTML = "";
    selectedScenario.goals.forEach((goal) => {
        goalsList.innerHTML += `<div>- ${goal}</div>`;
    });

    document.getElementById("group-id").textContent = currentGroup;
    document.getElementById("scenario-name").textContent = selectedScenario.name;
}

function startGame() {
    numGroups = parseInt(document.getElementById("num-groups").value);
    groupsCountEl.textContent = numGroups;

    // Initialize group scenarios
    assignScenarios();

    landingPage.classList.add("hidden");
    facilitatorView.classList.remove("hidden");

    // Show instructions automatically at start
    showInstructions();
}

function showInstructions() {
    instructionsModal.classList.remove("hidden");
}

function hideInstructions() {
    instructionsModal.classList.add("hidden");
}

function resetGame() {
    if (confirm("Are you sure you want to reset the game? All progress will be lost.")) {
        currentRound = 1;
        currentGroup = 1;
        selectedScenario = scenarios[0];
        selectedAIInitiatives = [];
        revealedMarketCards = [];

        updateRoundDisplay();
        resetTimer();

        currentMarketCard.classList.add("hidden");
        marketDynamicsSection.classList.add("hidden");

        facilitatorView.classList.add("hidden");
        groupView.classList.add("hidden");
        presentationView.classList.add("hidden");
        landingPage.classList.remove("hidden");
    }
}

function updateRoundDisplay() {
    currentRoundEl.textContent = currentRound;

    if (currentRound === 1) {
        roundDescriptionEl.textContent = "Strategic Analysis and Formulation";
    } else if (currentRound === 2) {
        roundDescriptionEl.textContent = "Market Dynamics and Strategic Adaptation";
    } else {
        roundDescriptionEl.textContent = "Long-Term Vision and Sustainability";
    }
}

function updateTimerDisplay() {
    const minutesStr = timerMinutes.toString().padStart(2, "0");
    const secondsStr = timerSeconds.toString().padStart(2, "0");
    timerEl.textContent = `${minutesStr}:${secondsStr}`;
}

function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(function () {
            if (timerSeconds === 0) {
                if (timerMinutes === 0) {
                    pauseTimer();
                    alert("Time is up!");
                    return;
                }
                timerMinutes--;
                timerSeconds = 59;
            } else {
                timerSeconds--;
            }
            updateTimerDisplay();
        }, 1000);
        timerRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    pauseTimer();
    timerMinutes = 20;
    timerSeconds = 0;
    updateTimerDisplay();
}

function advanceToNextRound() {
    if (currentRound < 3) {
        currentRound++;
        updateRoundDisplay();
        resetTimer();

        // If advancing to round 2 or 3, automatically reveal a market card
        if (currentRound === 2 || currentRound === 3) {
            revealMarketCard();
        }
    } else {
        alert("This is the final round.");
    }
}

function revealMarketCard() {
    // Find unused cards
    const unusedCards = marketDynamicsCards.filter(
        card => !revealedMarketCards.some(revealed => revealed.id === card.id)
    );

    if (unusedCards.length === 0) {
        alert("All market dynamics cards have been used.");
        return;
    }

    // Select a random unused card
    const randomIndex = Math.floor(Math.random() * unusedCards.length);
    const selectedCard = unusedCards[randomIndex];

    // Add to revealed cards
    revealedMarketCards.push(selectedCard);

    // Update UI
    marketCardTitle.textContent = selectedCard.title;
    marketCardDescription.textContent = selectedCard.description;
    currentMarketCard.classList.remove("hidden");

    // Update group view if visible
    marketCardTitleGroup.textContent = selectedCard.title;
    marketCardDescriptionGroup.textContent = selectedCard.description;
    marketDynamicsSection.classList.remove("hidden");

    // Update presentation view if in round 2 or 3
    if (currentRound === 2) {
        document.getElementById("presentation-market1").textContent = `${selectedCard.title}: ${selectedCard.description}`;
    } else if (currentRound === 3) {
        document.getElementById("presentation-market2").textContent = `${selectedCard.title}: ${selectedCard.description}`;
    }
}

function showGroupView() {
    facilitatorView.classList.add("hidden");
    presentationView.classList.add("hidden");
    groupView.classList.remove("hidden");

    initializeScenarioDetails();
    initializeAICapabilityCards();

    // Show market dynamics if any have been revealed
    if (revealedMarketCards.length > 0) {
        const latestCard = revealedMarketCards[revealedMarketCards.length - 1];
        marketCardTitleGroup.textContent = latestCard.title;
        marketCardDescriptionGroup.textContent = latestCard.description;
        marketDynamicsSection.classList.remove("hidden");
    } else {
        marketDynamicsSection.classList.add("hidden");
    }
}

function showFacilitatorView() {
    groupView.classList.add("hidden");
    presentationView.classList.add("hidden");
    facilitatorView.classList.remove("hidden");
}

function showPresentationView() {
    facilitatorView.classList.add("hidden");
    groupView.classList.add("hidden");
    presentationView.classList.remove("hidden");

    document.getElementById("presenting-group").textContent = currentGroup;
    document.getElementById("presentation-scenario").textContent = `${selectedScenario.name} - ${selectedScenario.position}`;
}

function showCapabilityDetails(capability) {
    currentDetailCapability = capability;

    // Update modal content
    document.getElementById("modal-capability-name").textContent = capability.name;
    document.getElementById("modal-capability-description").textContent = capability.description;

    const applicationsList = document.getElementById("modal-capability-applications");
    applicationsList.innerHTML = "";
    capability.applications.forEach((app) => {
        applicationsList.innerHTML += `<li>${app}</li>`;
    });

    document.getElementById("modal-capability-benefits").textContent = capability.benefits;
    document.getElementById("modal-capability-risks").textContent = capability.risks;
    document.getElementById("modal-capability-budget").textContent = `${capability.budgetCost} points`;
    document.getElementById("modal-capability-talent").textContent = `${capability.talentCost} points`;

    // Show modal
    document.getElementById("capability-details-modal").classList.remove("hidden");
}

// Close capability details modal
document.getElementById("close-capability-modal-btn").addEventListener("click", function () {
    document.getElementById("capability-details-modal").classList.add("hidden");
});

// Add select capability event listener
document.getElementById("modal-select-capability-btn").onclick = function () {
    if (currentDetailCapability && !selectedAIInitiatives.some(item => item.id === currentDetailCapability.id)) {
        selectedAIInitiatives.push(currentDetailCapability);
        updateSelectedAIInitiatives();
    }
    document.getElementById("capability-details-modal").classList.add("hidden");
};

function assignScenarios() {
    // Randomly assign scenarios to groups
    const shuffledScenarios = [...scenarios].sort(() => Math.random() - 0.5);
    const groupScenarios = {};

    for (let i = 1; i <= numGroups; i++) {
        groupScenarios[i] = shuffledScenarios[i - 1];
    }

    // Store the assignments
    window.groupScenarios = groupScenarios;

    // Update the display
    updateGroupDisplay();

    // Show success message
    alert("Scenarios have been randomly assigned to groups!");
}

function switchGroup(groupNumber) {
    if (groupNumber < 1 || groupNumber > numGroups) return;

    currentGroup = groupNumber;
    if (window.groupScenarios) {
        selectedScenario = window.groupScenarios[currentGroup];
    }

    updateGroupDisplay();
}

function updateGroupDisplay() {
    // Update group number displays
    document.getElementById("current-group-display").textContent = currentGroup;
    document.getElementById("total-groups-display").textContent = numGroups;

    // Update scenario information
    if (selectedScenario) {
        document.getElementById("scenario-title").textContent = selectedScenario.name;
        document.getElementById("scenario-industry").textContent = selectedScenario.industry;
        document.getElementById("scenario-position").textContent = selectedScenario.position;
        document.getElementById("scenario-name").textContent = selectedScenario.name;

        // Update resources
        const resourcesList = document.getElementById("scenario-resources");
        resourcesList.innerHTML = "";
        selectedScenario.resources.forEach(resource => {
            resourcesList.innerHTML += `<div>- ${resource}</div>`;
        });

        // Update challenges
        const challengesList = document.getElementById("scenario-challenges");
        challengesList.innerHTML = "";
        selectedScenario.challenges.forEach(challenge => {
            challengesList.innerHTML += `<div>- ${challenge}</div>`;
        });

        // Update goals
        const goalsList = document.getElementById("scenario-goals");
        goalsList.innerHTML = "";
        selectedScenario.goals.forEach(goal => {
            goalsList.innerHTML += `<div>- ${goal}</div>`;
        });
    }

    // Update presentation view if visible
    if (!presentationView.classList.contains("hidden")) {
        document.getElementById("presenting-group").textContent = currentGroup;
        document.getElementById("presentation-scenario").textContent =
            `${selectedScenario.name} - ${selectedScenario.position}`;
    }
}

// Initialize on load
updateTimerDisplay(); 