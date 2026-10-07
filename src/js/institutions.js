import { setupLayout } from './layout.js'
import { institutions } from '../data/institutions.js'

setupLayout('institutions')

const app = document.getElementById('app')

function institutionCard(inst) {
  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card nep-card h-100">
        <img src="${inst.image}" class="card-img-top" alt="${inst.name}" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="nep-badge nep-badge-primary">${inst.type.split('—')[0].trim()}</span>
            <span class="nep-badge nep-badge-warning"><i class="bi bi-star-fill"></i> ${inst.rating}</span>
          </div>
          <h5 class="card-title">${inst.shortName}</h5>
          <p class="card-text">${inst.description}</p>
          <div class="nep-info-row"><span class="label"><i class="bi bi-geo-alt"></i> Location</span><span class="value">${inst.location}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-calendar"></i> Established</span><span class="value">${inst.established}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-book"></i> Courses</span><span class="value">${inst.courses}</span></div>
          <div class="nep-info-row"><span class="label"><i class="bi bi-people"></i> Students</span><span class="value">${inst.students.toLocaleString('en-IN')}</span></div>
          <div class="mt-3 d-flex gap-2">
            <a href="#" class="btn btn-primary-custom btn-sm flex-fill" data-bs-toggle="modal" data-bs-target="#institutionModal" data-inst-id="${inst.id}">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderGrid(list) {
  if (list.length === 0) {
    return `<div class="nep-empty-state"><i class="bi bi-search"></i><p>No institutions found matching your criteria.</p></div>`
  }
  return `<div class="row">${list.map(institutionCard).join('')}</div>`
}

function filterInstitutions() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim()
  const typeFilter = document.getElementById('typeFilter').value

  return institutions.filter(inst => {
    const matchesQuery = !query ||
      inst.name.toLowerCase().includes(query) ||
      inst.shortName.toLowerCase().includes(query) ||
      inst.location.toLowerCase().includes(query)
    const matchesType = !typeFilter || inst.type.includes(typeFilter)
    return matchesQuery && matchesType
  })
}

function updateResults() {
  document.getElementById('resultsGrid').innerHTML = renderGrid(filterInstitutions())
}

app.innerHTML = `
  <!-- Page Header -->
  <section class="nep-page-header">
    <div class="container">
      <h1><i class="bi bi-building"></i> Institutions</h1>
      <p>Browse and search from India's top educational institutions</p>
    </div>
  </section>

  <section class="nep-section">
    <div class="container">
      <!-- Filter Bar -->
      <div class="nep-filter-bar">
        <div class="row g-3 align-items-end">
          <div class="col-md-6">
            <label class="form-label">Search</label>
            <input type="text" class="form-control" id="searchInput" placeholder="Search by name or location..." />
          </div>
          <div class="col-md-4">
            <label class="form-label">Institution Type</label>
            <select class="form-select" id="typeFilter">
              <option value="">All Types</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="Autonomous">Autonomous</option>
              <option value="Central">Central University</option>
              <option value="State">State University</option>
              <option value="Deemed">Deemed University</option>
            </select>
          </div>
          <div class="col-md-2">
            <button class="btn btn-primary-custom w-100" id="searchBtn"><i class="bi bi-funnel"></i> Filter</button>
          </div>
        </div>
      </div>

      <div id="resultsGrid">${renderGrid(institutions)}</div>
    </div>
  </section>

  <!-- Detail Modal -->
  <div class="modal fade" id="institutionModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content" style="border-radius:14px;border:none;">
        <div class="modal-header bg-primary-custom text-white" style="border-radius:14px 14px 0 0;">
          <h5 class="modal-title text-white" id="modalTitle">Institution Details</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body" id="modalBody"></div>
      </div>
    </div>
  </div>
`

document.getElementById('searchInput').addEventListener('input', updateResults)
document.getElementById('typeFilter').addEventListener('change', updateResults)
document.getElementById('searchBtn').addEventListener('click', updateResults)

document.getElementById('institutionModal').addEventListener('show.bs.modal', (e) => {
  const id = parseInt(e.relatedTarget.dataset.instId)
  const inst = institutions.find(i => i.id === id)
  if (!inst) return
  document.getElementById('modalTitle').textContent = inst.name
  document.getElementById('modalBody').innerHTML = `
    <img src="${inst.image}" class="w-100 mb-3" style="height:220px;object-fit:cover;border-radius:10px;" />
    <span class="nep-badge nep-badge-primary mb-2">${inst.type}</span>
    <p class="text-muted">${inst.description}</p>
    <div class="nep-info-row"><span class="label">Location</span><span class="value">${inst.location}</span></div>
    <div class="nep-info-row"><span class="label">Established</span><span class="value">${inst.established}</span></div>
    <div class="nep-info-row"><span class="label">Rating</span><span class="value"><i class="bi bi-star-fill text-warning"></i> ${inst.rating}/5</span></div>
    <div class="nep-info-row"><span class="label">Total Courses</span><span class="value">${inst.courses}</span></div>
    <div class="nep-info-row"><span class="label">Total Students</span><span class="value">${inst.students.toLocaleString('en-IN')}</span></div>
    <div class="mt-3 d-flex gap-2">
      <a href="/courses.html" class="btn btn-primary-custom btn-sm">View Courses</a>
      <a href="/login.html" class="btn btn-outline-custom btn-sm">Apply Now</a>
    </div>
  `
})
