/* CodingLab 2022. Responsive Sidebar Menu in HTML CSS & JavaScript | Dark/Light Mode. [Accessed 24 April 2024]. Available from: https://www.youtube.com/watch?v=bFvfqUMjvsA.*/

$(document).ready(function() {
    const body = $('body'),
          sidebar = body.find('nav'),
          toggle = body.find('.toggle'),
          searchBtn = body.find('.search-box'),
          modeSwitch = body.find('.toggle-switch'),
          modeText = body.find('.mode-text');

    // Function to set dark mode preference in cookie
    function setDarkModePreference(isDarkMode) {
        document.cookie = `darkMode=${isDarkMode};path=/`;
    }

    // Function to get dark mode preference from cookie
    function getDarkModePreference() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'darkMode') {
                return value === 'true';
            }
        }
        return false;
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.toggleClass('dark');
        const isDarkMode = body.hasClass('dark');

        // Store the dark mode preference in cookie
        setDarkModePreference(isDarkMode);

        modeText.text(isDarkMode ? "Light mode" : "Dark mode");

        // Add or remove visibility class based on dark mode preference
        body.toggleClass('visible', isDarkMode);
    }

    // Function to apply dark mode based on user preference
    function applyDarkModePreference() {
        const isDarkMode = getDarkModePreference();

        if (isDarkMode) {
            body.addClass('dark');
            modeText.text("Light mode");
        } else {
            body.removeClass('dark');
            modeText.text("Dark mode");
        }

        // Add or remove visibility class based on dark mode preference
        body.toggleClass('visible', isDarkMode);
    }

    // Event listeners
    toggle.on('click', function() {
        sidebar.toggleClass('close');
    });

    searchBtn.on('click', function() {
        sidebar.removeClass('close');
    });

    modeSwitch.on('click', toggleDarkMode);

    // Apply dark mode preference when the document is ready
    applyDarkModePreference();
});
