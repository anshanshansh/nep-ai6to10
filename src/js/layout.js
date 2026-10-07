import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/**
 * Shared layout module — injects navbar and footer on every page.
 * This keeps the navbar/footer in one place so future edits are easy.
 * When connecting to Flask, you can replace this with server-side includes
 * (Jinja2 templates) and remove this file.
 */

const navbarHTML = `
<nav class="navbar navbar-expand-lg nep-navbar">
  <div class="container">
    <a class="navbar-brand" href="/index.html">
      <i class="bi bi-mortarboard-fill"></i>National Educational Portal
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nepNav" aria-controls="nepNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nepNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="/index.html" data-page="home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/institutions.html" data-page="institutions">Institutions</a></li>
        <li class="nav-item"><a class="nav-link" href="/courses.html" data-page="courses">Courses</a></li>
        <li class="nav-item"><a class="nav-link" href="/scholarships.html" data-page="scholarships">Scholarships</a></li>
        <li class="nav-item"><a class="nav-link" href="/about.html" data-page="about">About</a></li>
      </ul>
      <div class="d-flex gap-2">
        <a href="/login.html" class="btn btn-login">Login</a>
        <a href="/register.html" class="btn btn-register">Register</a>
      </div>
    </div>
  </div>
</nav>
`;

const footerHTML = `
<footer class="nep-footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand mb-2">
          <i class="bi bi-mortarboard-fill text-primary-custom"></i>
          National Educational Portal
        </div>
        <p class="small" style="color:#94a3b8;">
          A unified platform connecting students with institutions, courses, and scholarships across India.
        </p>
      </div>
      <div class="col-lg-2 col-md-6 col-6">
        <h5>Quick Links</h5>
        <a href="/index.html">Home</a>
        <a href="/institutions.html">Institutions</a>
        <a href="/courses.html">Courses</a>
        <a href="/scholarships.html">Scholarships</a>
      </div>
      <div class="col-lg-2 col-md-6 col-6">
        <h5>Account</h5>
        <a href="/login.html">Login</a>
        <a href="/register.html">Register</a>
        <a href="/student-dashboard.html">Student Dashboard</a>
        <a href="/admin-dashboard.html">Admin Dashboard</a>
      </div>
      <div class="col-lg-4 col-md-6">
        <h5>Contact</h5>
        <p class="small" style="color:#94a3b8;">
          <i class="bi bi-geo-alt"></i> Department of Higher Education, New Delhi, India<br>
          <i class="bi bi-envelope"></i> support@nep.gov.in<br>
          <i class="bi bi-telephone"></i> 1800-425-3000 (Toll Free)
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2025 National Educational Portal. A College DBMS Project. All rights reserved.
    </div>
  </div>
</footer>
`;

/**
 * Injects the navbar at the start of <body> and the footer at the end.
 * Highlights the active nav link based on the data-page attribute.
 */
export function setupLayout(activePage) {
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  if (activePage) {
    const link = document.querySelector(`.nep-navbar .nav-link[data-page="${activePage}"]`);
    if (link) link.classList.add('active');
  }
}
