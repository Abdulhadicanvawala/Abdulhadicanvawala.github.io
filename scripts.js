const storyData = {
    start: {
        text: "You find yourself in an abandoned mansion. It's cold and dark. What do you do?",
        choices: [
            { text: "Explore the basement", next: "basement" },
            { text: "Check the attic", next: "attic" },
            { text: "Leave the mansion", next: "leave" },
            { text: "Search for a weapon", next: "weapon" }
        ]
    },
    basement: {
        text: "The basement is musty and filled with old furniture. Suddenly, you hear a noise. What do you do?",
        choices: [
            { text: "Investigate the noise", next: "noise" },
            { text: "Hide behind a couch", next: "hide" },
            { text: "Go back upstairs", next: "start" },
            { text: "Look for a flashlight", next: "flashlight" }
        ]
    },
    attic: {
        text: "The attic is cluttered with old boxes and cobwebs. You find a strange box. What do you do?",
        choices: [
            { text: "Open the box", next: "box" },
            { text: "Ignore it and look around", next: "lookAround" },
            { text: "Go back downstairs", next: "start" },
            { text: "Search for a diary", next: "diary" }
        ]
    },
    // Add more story nodes here
};

let currentNode = 'start';

function renderStory() {
    const storyNode = storyData[currentNode];
    document.getElementById('story').innerText = storyNode.text;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    storyNode.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentNode = choice.next;
            renderStory();
        };
        choicesDiv.appendChild(button);
    
