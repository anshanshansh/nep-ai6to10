import { setupLayout } from './layout.js'
import { institutions } from '../data/institutions.js'
import { courses } from '../data/courses.js'
import { scholarships } from '../data/scholarships.js'

setupLayout('home')

const app = document.getElementById('app')

const popularInstitutions = institutions.slice(0, 3)
const featuredCourses = courses.slice(0, 3)
const featuredScholarships = scholarships.slice(0, 3)

function institutionCard(inst) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card nep-card h-100">
        <img src="${inst.image}" class="card-img-top" alt="${inst.name}" />
        <div class="card-body d-flex flex-column">
          <span class="nep-badge nep-badge-primary mb-2">${inst.type.split('—')[0].trim()}</span>
          <h5 class="card-title">${inst.shortName}</h5>
          <p class="card-text">${inst.description.slice(0, 90)}...</p>
          <div class="nep-info-row"><span class="label"><i class="bi bi-geo-alt"></i> Location</span><span class="value">${inst.location}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-star-fill text-warning"></i> Rating</span><span class="value">${inst.rating}/5</span></div>
          <div class="mt-3">
            <a href="/institutions.html" class="btn btn-outline-custom btn-sm">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function courseCard(course) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card nep-card h-100">
        <div class="card-body d-flex flex-column">
          <span class="nep-badge nep-badge-accent mb-2">${course.category}</span>
          <h5 class="card-title">${course.name}</h5>
          <p class="card-text"><i class="bi bi-building"></i> ${course.institution}</p>
          <div class="nep-info-row"><span class="label">Duration</span><span class="value">${course.duration}</span></div>
          <div class="nep-info-row"><span class="label">Fees</span><span class="value">${course.fees}</span></div>
          <div class="nep-info-row"><span class="label">Eligibility</span><span class="value small">${course.eligibility}</span></div>
          <div class="mt-3">
            <a href="/courses.html" class="btn btn-outline-custom btn-sm">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function scholarshipCard(sch) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card nep-card h-100">
        <div class="card-body d-flex flex-column">
          <span class="nep-badge nep-badge-success mb-2">${sch.category}</span>
          <h5 class="card-title">${sch.name}</h5>
          <p class="card-text">${sch.description.slice(0, 80)}...</p>
          <div class="nep-info-row"><span class="label">Provider</span><span class="value">${sch.provider}</span></div>
          <div class="nep-info-row"><span class="label">Amount</span><span class="value text-success fw-bold">${sch.amount}</span></div>
          <div class="nep-info-row"><span class="label">Deadline</span><span class="value">${sch.deadline}</span></div>
          <div class="mt-3">
            <a href="/scholarships.html" class="btn btn-outline-custom btn-sm">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `
}

app.innerHTML = `
  <!-- Hero -->
  <section class="nep-hero text-center">
    <div class="container position-relative" style="z-index:1;">
      <span class="nep-badge bg-light text-dark mb-3 px-3 py-2">Government of India Initiative</span>
      <h1 class="nep-animate">Your Gateway to Education</h1>
      <p class="nep-animate nep-animate-delay-1">
        Explore top institutions, find the right courses, and discover scholarships —
        all in one unified national educational portal.
      </p>
      <div class="nep-hero-search nep-animate nep-animate-delay-2">
        <div class="input-group input-group-lg">
          <span class="input-group-text bg-transparent border-0"><i class="bi bi-search text-muted"></i></span>
          <input type="text" class="form-control" placeholder="Search for courses, institutions, or scholarships..." />
          <button class="btn btn-search">Search</button>
        </div>
      </div>
      <div class="d-flex gap-3 justify-content-center flex-wrap mt-4 nep-animate nep-animate-delay-3">
        <a href="/courses.html" class="btn btn-light btn-lg" style="font-weight:600;color:var(--nep-primary);">
          <i class="bi bi-book"></i> Explore Courses
        </a>
        <a href="/institutions.html" class="btn btn-outline-light btn-lg">
          <i class="bi bi-building"></i> Find Institutions
        </a>
      </div>
    </div>
  </section>

  <!-- Popular Institutions -->
  <section class="nep-section">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h2 class="nep-section-title">Popular Institutions</h2>
          <p class="nep-section-subtitle mb-0">Top-rated institutions across India</p>
        </div>
        <a href="/institutions.html" class="btn btn-link text-primary-custom fw-semibold text-decoration-none">View All <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row">
        ${popularInstitutions.map(institutionCard).join('')}
      </div>
    </div>
  </section>

  <!-- Featured Courses -->
  <section class="nep-section bg-light-custom">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h2 class="nep-section-title">Featured Courses</h2>
          <p class="nep-section-subtitle mb-0">Hand-picked programs from leading institutions</p>
        </div>
        <a href="/courses.html" class="btn btn-link text-primary-custom fw-semibold text-decoration-none">View All <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row">
        ${featuredCourses.map(courseCard).join('')}
      </div>
    </div>
  </section>

  <!-- Scholarships -->
  <section class="nep-section">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h2 class="nep-section-title">Scholarships</h2>
          <p class="nep-section-subtitle mb-0">Financial aid opportunities for students</p>
        </div>
        <a href="/scholarships.html" class="btn btn-link text-primary-custom fw-semibold text-decoration-none">View All <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="row">
        ${featuredScholarships.map(scholarshipCard).join('')}
      </div>
    </div>
  </section>

  <!-- Statistics -->
  <section class="nep-stats">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">1,200+</div>
            <div class="stat-label">Institutions</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">15,000+</div>
            <div class="stat-label">Courses</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Scholarships</div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-stat-item">
            <div class="stat-number">12L+</div>
            <div class="stat-label">Students</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works -->
  <section class="nep-section">
    <div class="container">
      <h2 class="nep-section-title text-center">How It Works</h2>
      <p class="nep-section-subtitle text-center">Get started in four simple steps</p>
      <div class="row g-3">
        <div class="col-md-3 col-6">
          <div class="nep-step">
            <div class="nep-step-icon"><i class="bi bi-person-plus"></i></div>
            <h5>1. Register</h5>
            <p>Create your free student account with basic details.</p>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-step">
            <div class="nep-step-icon"><i class="bi bi-search"></i></div>
            <h5>2. Explore</h5>
            <p>Browse institutions, courses and scholarships that match your interests.</p>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-step">
            <div class="nep-step-icon"><i class="bi bi-file-earmark-text"></i></div>
            <h5>3. Apply</h5>
            <p>Submit applications to courses and scholarships online.</p>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="nep-step">
            <div class="nep-step-icon"><i class="bi bi-patch-check-fill"></i></div>
            <h5>4. Track</h5>
            <p>Monitor your application status and results in your dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`
