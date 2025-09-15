document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#projectButton');
    const projectItems = document.querySelectorAll('#projects');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Gérer la classe 'active' pour les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active')

            const filterValue = button.getAttribute('data-filter');

            // Afficher ou cacher les projets en fonction du filtre
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});