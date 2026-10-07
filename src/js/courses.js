import { setupLayout } from './layout.js'
import { courses } from '../data/courses.js'

setupLayout('courses')

const app = document.getElementById('app')

function courseCard(course) {
  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card nep-card h-100">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="nep-badge nep-badge-accent">${course.category}</span>
            <span class="nep-badge nep-badge-info">${course.level}</span>
          </div>
          <h5 class="card-title">${course.name}</h5>
          <p class="card-text"><i class="bi bi-building text-primary-custom"></i> ${course.institution}</p>
          <div class="nep-info-row"><span class="label"><i class="bi bi-clock"></i> Duration</span><span class="value">${course.duration}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-cash-coin"></i> Fees</span><span class="value text-success fw-bold">${course.fees}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-people"></i> Seats</span><span class="value">${course.seats}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-list-check"></i> Eligibility</span><span class="value small">${course.eligibility}</span></div>
          <div class="mt-3 d-flex gap-2">
            <button class="btn btn-primary-custom btn-sm flex-fill" data-bs-toggle="modal" data-bs-target="#courseModal" data-course-id="${course.id}">View Details</button>
            <a href="/login.html" class="btn btn-outline-custom btn-sm">Apply</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderGrid(list) {
  if (list.length === 0) {
    return `<div class="nep-empty-state"><i class="bi bi-search"></i><p>No courses found matching your criteria.</p></div>`
  }
  return `<div class="row">${list.map(courseCard).join('')}</div>`
}

function filterCourses() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim()
  const categoryFilter = document.getElementById('categoryFilter').value
  const levelFilter = document.getElementById('levelFilter').value

  return courses.filter(c => {
    const matchesQuery = !query ||
      c.name.toLowerCase().includes(query) ||
      c.institution.toLowerCase().includes(query)
    const matchesCategory = !categoryFilter || c.category === categoryFilter
    const matchesLevel = !levelFilter || c.level === levelFilter
    return matchesQuery && matchesCategory && matchesLevel
  })
}

function updateResults() {
  document.getElementById('resultsGrid').innerHTML = renderGrid(filterCourses())
}

app.innerHTML = `
  <section class="nep-page-header">
    <div class="container">
      <h1><i class="bi bi-book"></i> Courses</h1>
      <p>Find the right course for your career from leading institutions</p>
    </div>
  </section>

  <section class="nep-section">
    <div class="container">
      <div class="nep-filter-bar">
        <div class="row g-3 align-items-end">
          <div class="col-md-5">
            <label class="form-label">Search</label>
            <input type="text" class="form-control" id="searchInput" placeholder="Search course or institution..." />
          </div>
          <div class="col-md-3">
            <label class="form-label">Category</label>
            <select class="form-select" id="categoryFilter">
              <option value="">All Categories</option>
              <option value="Engineering">Engineering</option>
              <option value="Medical">Medical</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
              <option value="Science">Science</option>
              <option value="Management">Management</option>
              <option value="Law">Law</option>
            </select>
          </div>
          <div class="col-md-2">
            <label class="form-label">Level</label>
            <select class="form-select" id="levelFilter">
              <option value="">All Levels</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
          </div>
          <div class="col-md-2">
            <button class="btn btn-primary-custom w-100" id="searchBtn"><i class="bi bi-funnel"></i> Filter</button>
          </div>
        </div>
      </div>

      <div id="resultsGrid">${renderGrid(courses)}</div>
    </div>
  </section>

  <div class="modal fade" id="courseModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content" style="border-radius:14px;border:none;">
        <div class="modal-header bg-primary-custom text-white" style="border-radius:14px 14px 0 0;">
          <h5 class="modal-title text-white" id="modalTitle">Course Details</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body" id="modalBody"></div>
      </div>
    </div>
  </div>
`

document.getElementById('searchInput').addEventListener('input', updateResults)
document.getElementById('categoryFilter').addEventListener('change', updateResults)
document.getElementById('levelFilter').addEventListener('change', updateResults)
document.getElementById('searchBtn').addEventListener('click', updateResults)

document.getElementById('courseModal').addEventListener('show.bs.modal', (e) => {
  const id = parseInt(e.relatedTarget.dataset.courseId)
  const course = courses.find(c => c.id === id)
  if (!course) return
  document.getElementById('modalTitle').textContent = course.name
  document.getElementById('modalBody').innerHTML = `
    <div class="d-flex gap-2 mb-3">
      <span class="nep-badge nep-badge-accent">${course.category}</span>
      <span class="nep-badge nep-badge-info">${course.level}</span>
    </div>
    <p class="text-muted">${course.description}</p>
    <div class="nep-info-row"><span class="label">Institution</span><span class="value">${course.institution}</span></div>
    <div class="nep-info-row"><span class="label">Duration</span><span class="value">${course.duration}</span></div>
    <div class="nep-info-row"><span class="label">Annual Fees</span><span class="value text-success fw-bold">${course.fees}</span></div>
    <div class="nep-info-row"><span class="label">Total Seats</span><span class="value">${course.seats}</span></div>
    <div class="nep-info-row"><span class="label">Eligibility</span><span class="value">${course.eligibility}</span></div>
    <div class="mt-3 d-flex gap-2">
      <a href="/login.html" class="btn btn-primary-custom btn-sm">Apply Now</a>
      <a href="/institutions.html" class="btn btn-outline-custom btn-sm">View Institution</a>
    </div>
  `
})
