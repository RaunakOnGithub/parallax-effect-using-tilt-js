$(document).ready(function(){
    // Initialize Tilt.js on the element with the class 'your-element'
    $('.your-element').tilt({
        maxTilt: 20,      // Max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets
        scale: 1.05,      // 1.05 = 5% increase in size on hover
        speed: 400,       // Speed of the enter/exit transition
        glare: true,      // Add a glare effect
        maxGlare: 0.5     // Glare intensity from 0 to 1
    });
});