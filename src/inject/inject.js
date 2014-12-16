(function() {

  if ($('meta[name="author"]').attr('content') === 'Nicholas Kristof') {
    if (window.confirm(chrome.i18n.getMessage('kristofWarning'))) {
      window.location.href = 'http://www.nytimes.com';
    }
  }

  if (window.location.pathname === '/') {
    $('h2.story-heading:contains("Kristof:")').remove();
  }

})();
