import { setupLayout } from './layout.js'
import { scholarships } from '../data/scholarships.js'

setupLayout('scholarships')

const app = document.getElementById('app')

function scholarshipCard(sch) {
  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card nep-card h-100">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="nep-badge nep-badge-success">${sch.category}</span>
            <span class="nep-badge nep-badge-danger"><i class="bi bi-calendar-x"></i> ${sch.deadline}</span>
          </div>
          <h5 class="card-title">${sch.name}</h5>
          <p class="card-text">${sch.description}</p>
          <div class="nep-info-row"><span class="label"><i class="bi bi-bank"></i> Provider</span><span class="value">${sch.provider}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-cash-coin"></i> Amount</span><span class="value text-success fw-bold">${sch.amount}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-list-check"></i> Eligibility</span><span class="value small">${sch.eligibility}</span></div>
          <div class="mt-3 d-flex gap-2">
            <button class="btn btn-primary-custom btn-sm flex-fill" data-bs-toggle="modal" data-bs-target="#scholarshipModal" data-sch-id="${sch.id}">View Details</button>
            <a href="/login.html" class="btn btn-outline-custom btn-sm">Apply</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderGrid(list) {
  if (list.length === 0) {
    return `<div class="nep-empty-state"><i class="bi bi-search"></i><p>No scholarships found matching your criteria.</p></div>`
  }
  return `<div class="row">${list.map(scholarshipCard).join('')}</div>`
}

function filterScholarships() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim()
  const categoryFilter = document.getElementById('categoryFilter').value

  return scholarships.filter(s => {
    const matchesQuery = !query ||
      s.name.toLowerCase().includes(query) ||
      s.provider.toLowerCase().includes(query)
    const matchesCategory = !categoryFilter || s.category === categoryFilter
    return matchesQuery && matchesCategory
  })
}

function updateResults() {
  document.getElementById('resultsGrid').innerHTML = renderGrid(filterScholarships())
}

app.innerHTML = `
  <section class="nep-page-header">
    <div class="container">
      <h1><i class="bi bi-award"></i> Scholarships</h1>
      <p>Discover financial aid opportunities to support your education</p>
    </div>
  </section>

  <section class="nep-section">
    <div class="container">
      <div class="nep-filter-bar">
        <div class="row g-3 align-items-end">
          <div class="col-md-7">
            <label class="form-label">Search</label>
            <input type="text" class="form-control" id="searchInput" placeholder="Search scholarship or provider..." />
          </div>
          <div class="col-md-3">
            <label class="form-label">Category</label>
            <select class="form-select" id="categoryFilter">
              <option value="">All Categories</option>
              <option value="Merit-based">Merit-based</option>
              <option value="Category-based">Category-based</option>
              <option value="Gender-based">Gender-based</option>
              <option value="Science">Science</option>
              <option value="Corporate">Corporate</option>
              <option value="Research">Research</option>
              <option value="Disability">Disability</option>
            </select>
          </div>
          <div class="col-md-2">
            <button class="btn btn-primary-custom w-100" id="searchBtn"><i class="bi bi-funnel"></i> Filter</button>
          </div>
        </div>
      </div>

      <div id="resultsGrid">${renderGrid(scholarships)}</div>
    </div>
  </section>

  <div class="modal fade" id="scholarshipModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content" style="border-radius:14px;border:none;">
        <div class="modal-header bg-primary-custom text-white" style="border-radius:14px 14px 0 0;">
          <h5 class="modal-title text-white" id="modalTitle">Scholarship Details</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body" id="modalBody"></div>
      </div>
    </div>
  </div>
`

document.getElementById('searchInput').addEventListener('input', updateResults)
document.getElementById('categoryFilter').addEventListener('change', updateResults)
document.getElementById('searchBtn').addEventListener('click', updateResults)

document.getElementById('scholarshipModal').addEventListener('show.bs.modal', (e) => {
  const id = parseInt(e.relatedTarget.dataset.schId)
  const sch = scholarships.find(s => s.id === id)
  if (!sch) return
  document.getElementById('modalTitle').textContent = sch.name
  document.getElementById('modalBody').innerHTML = `
    <div class="d-flex gap-2 mb-3">
      <span class="nep-badge nep-badge-success">${sch.category}</span>
    </div>
    <p class="text-muted">${sch.description}</p>
    <div class="nep-info-row"><span class="label">Provider</span><span class="value">${sch.provider}</span></div>
    <div class="nep-info-row"><span class="label">Amount</span><span class="value text-success fw-bold">${sch.amount}</span></div>
    <div class="nep-info-row"><span class="label">Eligibility</span><span class="value">${sch.eligibility}</span></div>
    <div class="nep-info-row"><span class="label">Application Deadline</span><span class="value text-danger fw-bold">${sch.deadline}</span></div>
    <div class="mt-3 d-flex gap-2">
      <a href="/login.html" class="btn btn-primary-custom btn-sm">Apply Now</a>
    </div>
  `
})
