require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        if (location.hash) {
	    document.location = location.hash;
        }
    });
});
