document.addEventListener('DOMContentLoaded', function() {
  const eventItems = document.querySelectorAll('.event-item.hidden');
  const allEventItems = document.querySelectorAll('.event-item');
  const loadMoreButton = document.getElementById('load-more');
  let itemsToShow = 2; // Показываем по 2 элемента за раз

  // Сначала показываем первые 2 элемента (одну строку)
  for (let i = 0; i < Math.min(itemsToShow * 2, allEventItems.length); i++) {
    if (allEventItems[i].classList.contains('hidden')) {
      allEventItems[i].classList.remove('hidden');
    }
  }

  // Скрываем кнопку, если показаны все элементы или их меньше 2
  if (document.querySelectorAll('.event-item.hidden').length === 0 || allEventItems.length <= itemsToShow * 1) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'block';
  }

  loadMoreButton.addEventListener('click', function() {
    for (let i = 0; i < itemsToShow; i++) {
      const hiddenItems = document.querySelectorAll('.event-item.hidden');
      if (hiddenItems[0]) {
        hiddenItems[0].classList.remove('hidden');
      }
    }

    // Скрываем кнопку, если больше нет скрытых элементов
    if (document.querySelectorAll('.event-item.hidden').length === 0) {
      loadMoreButton.style.display = 'none';
    }
  });
});