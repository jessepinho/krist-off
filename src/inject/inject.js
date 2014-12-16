(function() {

  if ($('meta[name="author"]').attr('content') === 'Nicholas Kristof') {
    if (window.confirm("WARNING: This is a Nicholas Kristof article. Back to safety?")) {
      window.location.href = 'http://www.nytimes.com';
    }
  }

  if (window.location.pathname === '/') {
    $('h2.story-heading:contains("Kristof:")').remove();
  }

})();
