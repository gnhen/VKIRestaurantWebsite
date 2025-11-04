function toggleCategory(titleElement) {
    const arrow = titleElement.querySelector('.menu-category-arrow');
    const content = titleElement.nextElementSibling;
    
    arrow.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
}