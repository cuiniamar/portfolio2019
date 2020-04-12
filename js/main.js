// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {

  // ==========================================================================
	//	Main  Navigation
	// ==========================================================================
	(function() {
		const header = document.querySelector('.main-header');

		window.addEventListener('scroll', () => {
				const scrollPos = window.scrollY;
				if (scrollPos > 10 ) {
						header.classList.add('is-scrolled');
				}
				else {
						header.classList.remove('is-scrolled');
				}
		});
  });
	// ==========================================================================

}); // end document.ready