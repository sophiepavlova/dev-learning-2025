// --- Global Data for Interactive Elements ---
const termDefinitions = {
    holt: "The den or burrow of an otter.",
    spraints: "Otter feces, often used for territorial marking."
};

const senseDetails = {
    scent: "They rely heavily on scent, marking territories and communicating through spraints.",
    hearing: "Highly adapted to detect prey movement both above and below the water.",
    whiskers: "These are vital! Highly sensitive whiskers detect pressure changes in murky water, allowing them to locate prey in total darkness."
};

const collectiveNouns = ["A Romp", "A Raft", "A Lodge", "A Family"];
let nounIndex = 0;

const threatInfo = {
    habitat: "Wetlands and riparian zones are shrinking globally due to human development, directly reducing the otter's living space and food sources.",
    pollution: "Water contamination (pesticides, heavy metals) directly impacts their prey and is absorbed through their diet, causing illness.",
    hunting: "While regulated in many areas today, historical hunting for their dense fur drastically reduced populations, and recovery remains a slow process."
};

// --- Intersection Observer Setup for Scroll Animations ---

// General function to handle elements entering the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing after first visibility for single-run animations
            // observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// --- Event Listeners and Initial Setup ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminology Pop-overs (Conceptual)
    document.querySelectorAll('.term').forEach(term => {
        term.addEventListener('mouseover', (e) => {
            const definition = termDefinitions[e.target.dataset.term];
            // In a live site, you would dynamically create a tooltip element here
            console.log(`Tooltip for ${e.target.dataset.term}: ${definition}`);
        });
    });

    // 2. Interactive Senses
    const senseOutput = document.getElementById('sense-output');
    document.querySelectorAll('.sense-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.sense-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            senseOutput.innerHTML = senseDetails[e.target.dataset.sense];
        });
    });
    // Set default output
    senseOutput.innerHTML = "Click a button above to learn about how otters use their senses!";

    // 3. Collective Nouns Cycle
    const nounBtn = document.getElementById('cycle-noun-btn');
    const nounDisplay = document.getElementById('collective-noun-display');
    nounBtn.addEventListener('click', () => {
        nounIndex = (nounIndex + 1) % collectiveNouns.length;
        nounDisplay.textContent = collectiveNouns[nounIndex] + " of Otters";
    });

    // 4. Interactive Threat Spectrum
    const threatOutput = document.getElementById('threat-output');
    document.querySelectorAll('.threat-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const threatKey = e.currentTarget.dataset.threat;
            threatOutput.innerHTML = threatInfo[threatKey];
            document.querySelectorAll('.threat-icon').forEach(i => i.classList.remove('active-threat'));
            e.currentTarget.classList.add('active-threat');
        });
    });

    // --- Scroll-Based Triggers using the Observer ---

    // A. Metabolism Gauge Animation
    const metabolismBar = document.getElementById('metabolism-gauge');
    observer.observe(metabolismBar); // Start observing
    // Modify the Observer callback to handle specific elements
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Metabolism Gauge animation
                if (entry.target.id === 'metabolism-gauge') {
                    const percent = entry.target.dataset.percentage;
                    entry.target.style.width = ${percent}%;
                }

                // Anatomy Diagram Reveal
                if (entry.target.classList.contains('otter-anatomy-img')) {
                    entry.target.style.opacity = '1';
                    document.querySelectorAll('.anatomy-label').forEach((label, index) => {
                        // Stagger the labels appearing
                        setTimeout(() => {
                            label.style.opacity = '1';
                        }, 500 + (index * 400));
                    });
                }

                // Life Cycle Stages Reveal (staggered)
                if (entry.target.classList.contains('cycle-stage')) {
                    entry.target.style.opacity = '1';
                }

            } else {
                // Optional: reset elements when they leave the viewport (e.g., for repeat viewing)
            }
        });
    }, { threshold: 0.3 }); // Lower threshold for entry

    // Apply the custom observer to specific elements
    scrollObserver.observe(metabolismBar);
    scrollObserver.observe(document.querySelector('.otter-anatomy-img'));
    document.querySelectorAll('.cycle-stage').forEach(stage => scrollObserver.observe(stage));
    
    // 5. Prey Grid Tooltips (Complex interaction that requires a third-party library or more CSS/JS)
    document.querySelectorAll('.prey-item').forEach(item => {
        item.addEventListener('mouseover', (e) => {
            const info = e.currentTarget.dataset.info;
            // Display tooltip (e.g., set an element's textContent and position)
            console.log(`Prey Info: ${info}`);
        });
    });

    // 6. Tool Use Animation (Conceptual)
    document.querySelector('.play-animation-btn').addEventListener('click', () => {
        // In a real application, this would toggle an animated GIF or play an embedded video.
        alert("Playing animation of the sea otter cracking the shell! (Requires video/GIF implementation)");
    });
});