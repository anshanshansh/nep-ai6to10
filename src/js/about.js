import { setupLayout } from './layout.js'

setupLayout('about')

const app = document.getElementById('app')

app.innerHTML = `
  <section class="nep-page-header">
    <div class="container">
      <h1><i class="bi bi-info-circle"></i> About NEP</h1>
      <p>Learn about the National Educational Portal initiative</p>
    </div>
  </section>

  <section class="nep-section">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <h2 class="nep-section-title">About the Portal</h2>
          <p class="text-muted">
            The National Educational Portal (NEP) is a centralized platform designed to
            bridge the gap between students and educational opportunities across India.
            Our mission is to make information about institutions, courses, and scholarships
            accessible to every student in the country — from metropolitan cities to rural areas.
          </p>
          <p class="text-muted">
            Students can search for institutions, compare courses, apply to programs, and
            discover financial aid — all from a single unified dashboard. Administrators can
            manage institutions, courses, applications, and scholarships through a dedicated
            management interface.
          </p>
          <div class="row g-3 mt-3">
            <div class="col-6">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-success fs-4"></i>
                <span class="fw-semibold">Centralized Platform</span>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-success fs-4"></i>
                <span class="fw-semibold">Easy Application Process</span>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-success fs-4"></i>
                <span class="fw-semibold">Scholarship Discovery</span>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-check-circle-fill text-success fs-4"></i>
                <span class="fw-semibold">Real-time Tracking</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=700"
               class="img-fluid rounded-4 shadow" alt="Education campus" style="width:100%;height:360px;object-fit:cover;" />
        </div>
      </div>
    </div>
  </section>

  <section class="nep-section bg-light-custom">
    <div class="container">
      <h2 class="nep-section-title text-center">Our Objectives</h2>
      <p class="nep-section-subtitle text-center">What the National Educational Portal aims to achieve</p>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="nep-card p-4 h-100">
            <div class="nep-step-icon"><i class="bi bi-search"></i></div>
            <h5 class="text-center">Transparency</h5>
            <p class="text-muted text-center small">Provide clear, centralized information about institutions, courses, fees, and eligibility criteria.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="nep-card p-4 h-100">
            <div class="nep-step-icon"><i class="bi bi-phone"></i></div>
            <h5 class="text-center">Accessibility</h5>
            <p class="text-muted text-center small">Make educational information accessible to students across all regions and devices.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="nep-card p-4 h-100">
            <div class="nep-step-icon"><i class="bi bi-people"></i></div>
            <h5 class="text-center">Empowerment</h5>
            <p class="text-muted text-center small">Help students make informed decisions about their educational and career paths.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="nep-stats">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">1,200+</div>
            <div class="stat-label">Partner Institutions</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">15,000+</div>
            <div class="stat-label">Available Courses</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Scholarships Listed</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">12L+</div>
            <div class="stat-label">Registered Students</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="nep-section">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6">
          <h3><i class="bi bi-code-slash text-primary-custom"></i> Project Details</h3>
          <div class="nep-info-row"><span class="label">Project Name</span><span class="value">National Educational Portal</span></div>
          <div class="nep-info-row"><span class="label">Type</span><span class="value">College DBMS Project</span></div>
          <div class="nep-info-row"><span class="label">Frontend</span><span class="value">HTML, CSS, JavaScript, Bootstrap 5</span></div>
          <div class="nep-info-row"><span class="label">Backend (Planned)</span><span class="value">Python Flask</span></div>
          <div class="nep-info-row"><span class="label">Database (Planned)</span><span class="value">MySQL</span></div>
        </div>
        <div class="col-md-6">
          <h3><i class="bi bi-telephone text-primary-custom"></i> Contact Information</h3>
          <div class="nep-info-row"><span class="label">Department</span><span class="value">Department of Higher Education</span></div>
          <div class="nep-info-row"><span class="label">Address</span><span class="value">New Delhi, India</span></div>
          <div class="nep-info-row"><span class="label">Email</span><span class="value">support@nep.gov.in</span></div>
          <div class="nep-info-row"><span class="label">Phone</span><span class="value">1800-425-3000 (Toll Free)</span></div>
        </div>
      </div>
    </div>
  </section>
`
