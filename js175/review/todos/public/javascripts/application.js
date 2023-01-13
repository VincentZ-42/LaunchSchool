"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let forms = document.querySelectorAll("form.delete, form.complete_all");
  forms.forEach(form => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (confirm("Are y ou sure? This cannot be undone!")) {
        event.target.submit();
      }
    });
  });
});