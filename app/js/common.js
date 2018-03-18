$(function() {
  function fixCatalog() {
//    var window = document.querySelector("body")
    var header = document.querySelector(".page-header");
    var footer = document.querySelector(".page-footer");
    var catalog = {};
    catalog.elem = document.querySelector(".catalog-list");
    catalog.MARGIN_TOP = 72;
    catalog.MARGIN_BOTTOM = 80;
    var newCatalogHeight = window.innerHeight - header.clientHeight - footer.clientHeight - catalog.MARGIN_TOP - catalog.MARGIN_BOTTOM - 20;
    console.log(window.innerHeight, header.clientHeight, footer.clientHeight, catalog.MARGIN_TOP, catalog.MARGIN_BOTTOM, newCatalogHeight - 20);
    catalog.elem.style.height = newCatalogHeight + "px";
  }
  fixCatalog();
});
