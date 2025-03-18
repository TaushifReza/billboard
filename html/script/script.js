document.addEventListener("DOMContentLoaded", () => {
            // Camera permission check
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    console.log('Camera access granted');
                })  
                .catch(function(error) {
                    console.error('Camera access denied', error);
                    alert("Permission denied: Please enable camera access.");
                });

            const danceModel = document.getElementById('danceModel');
            const secondModel = document.getElementById('secondModel');
            let currentModel = 'danceModel';
            
            // Function to switch models
            function switchModel() {
                if (currentModel === 'danceModel') {
                    danceModel.setAttribute('visible', 'false');
                    secondModel.setAttribute('visible', 'true');
                    currentModel = 'secondModel';
                } else {
                    danceModel.setAttribute('visible', 'true');
                    secondModel.setAttribute('visible', 'false');
                    currentModel = 'danceModel';
                }
            }

            // Setup target detection event
            const target = document.getElementById('target');

            // Only show the models once the target image is found
            target.addEventListener('targetFound', event => {
                // Show the first model when the target is detected
                danceModel.setAttribute('visible', 'true');
                // Optional: Switch model after a delay (e.g., 15 seconds)
                setTimeout(() => {
                    switchModel();
                }, 10000);
            });

            target.addEventListener('targetLost', event => {
                // Optionally hide models when the target is lost
                danceModel.setAttribute('visible', 'false');
                secondModel.setAttribute('visible', 'false');
            });

            // Hide loading screen once the scene has loaded
            const arScene = document.getElementById('arScene');
            arScene.addEventListener('loaded', () => {
                // Hide the loading screen
                const loadingScreen = document.getElementById('loadingScreen');
                loadingScreen.style.display = 'none';
            });
});