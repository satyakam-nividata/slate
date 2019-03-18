//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  // loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  // SK_EDITS for 3 level hierarchy
  loadToc($('#toc'), '.toc-link', '.toc-list-h2, .toc-list-h3', 10);
  // END
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
