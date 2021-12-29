$(document).ready(() => {
  const searchInput = $('input, #searchInput')

  $("form").submit(function ($event) {
    $event.preventDefault()

    loadImages(searchInput.val())
  });
})