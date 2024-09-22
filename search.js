$(document).ready(function() {
    // Function to handle search
    function performSearch(query) {
        // Select the elements you want to search within
        var $elementsToSearch = $(".home p, .home h1, .home h2, .home nav, .home ul, .home li, .footer");


        // Remove previous highlights
        $elementsToSearch.find("span.highlight").contents().unwrap();

        // Check if the query is not empty
        if (query.trim() !== "") {
            // Create a regular expression with the query to perform a case-insensitive search
            var regex = new RegExp("(" + query.trim() + ")", "gi");

            // Highlight the matched search terms
            $elementsToSearch.each(function () {
                var $element = $(this);
                var html = $element.html();
                html = html.replace(regex, '<span class="highlight">$1</span>');
                $element.html(html);
            });

            // Scroll to the first occurrence of the highlighted term
            var $firstHighlight = $(".highlight:first");
            if ($firstHighlight.length > 0) {
                $('html, body').animate({
                    scrollTop: $firstHighlight.offset().top
                }, 500);
            }
        }
    }

    // Event listener for the search input
    $(".search-box input").on("input", function() {
        var query = $(this).val();
        // Call performSearch function with the query
        performSearch(query);
    });
});
