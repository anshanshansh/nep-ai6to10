import { setupLayout } from './layout.js'
import {
  adminStats,
  adminStudents,
  adminApplications,
} from '../data/dashboard.js'
import { institutions } from '../data/institutions.js'
import { courses } from '../data/courses.js'
import { scholarships } from '../data/scholarships.js'

setupLayout('')

const app = document.getElementById('app')

function statusBadge(status) {
  const map = {
    'Approved': 'nep-badge-success',
    'Pending': 'nep-badge-warning',
    'Rejected': 'nep-badge-danger',
    'Active': 'nep-badge-success',
    'Inactive': 'nep-badge-danger',
  }
  return `<span class="nep-badge ${map[status] || 'nep-badge-primary'}">${status}</span>`
}

function statCard(icon, iconBg, number, label) {
  return `
    <div class="col-md-3 col-6">
      <div class="nep-dash-card d-flex align-items-center gap-3">
        <div class="dash-icon" style="${iconBg}"><i class="bi bi-${icon}"></i></div>
        <div><div class="dash-number">${number}</div><div class="dash-label">${label}</div></div>
      </div>
    </div>
  `
}

app.innerHTML = `
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-lg-2 col-md-3 col-12 nep-dash-sidebar p-0">
        <div class="text-center mb-3 px-3">
          <div class="d-inline-flex align-items-center justify-content-center bg-primary-custom text-white rounded-circle"
               style="width:60px;height:60px;font-size:1.5rem;font-weight:800;">AD</div>
          <h6 class="mt-2 mb-0">Admin Panel</h6>
          <small class="text-muted">Administrator</small>
        </div>
        <ul class="nav flex-column">
          <li class="nav-item"><a class="nav-link active" href="#" data-section="overview"><i class="bi bi-speedometer2"></i>Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="students"><i class="bi bi-people"></i>Students</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="institutions"><i class="bi bi-building"></i>Institutions</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="courses"><i class="bi bi-book"></i>Courses</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="scholarships"><i class="bi bi-award"></i>Scholarships</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="applications"><i class="bi bi-file-earmark-text"></i>Applications</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="results"><i class="bi bi-graph-up"></i>Results</a></li>
          <li class="nav-item"><a class="nav-link" href="./login.html"><i class="bi bi-box-arrow-right"></i>Logout</a></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="col-lg-10 col-md-9 col-12 nep-dash-content">
        <!-- Overview -->
        <div id="section-overview" class="dash-section">
          <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h2 class="mb-0">Admin Dashboard</h2>
              <p class="text-muted mb-0">Manage all portal activities from here</p>
            </div>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-download"></i> Export Report</button>
          </div>

          <div class="row g-3 mb-4">
            ${statCard('people', 'background:rgba(26,79,139,0.1);color:var(--nep-primary);', adminStats.totalStudents.toLocaleString('en-IN'), 'Total Students')}
            ${statCard('building', 'background:rgba(66,99,235,0.1);color:var(--nep-accent);', adminStats.totalInstitutions, 'Total Institutions')}
            ${statCard('book', 'background:rgba(47,158,68,0.12);color:var(--nep-success);', adminStats.totalCourses, 'Total Courses')}
            ${statCard('file-earmark-text', 'background:rgba(245,159,0,0.12);color:var(--nep-warning);', adminStats.totalApplications.toLocaleString('en-IN'), 'Total Applications')}
          </div>

          <div class="row g-3 mb-4">
            ${statCard('award', 'background:rgba(45,108,184,0.1);color:var(--nep-primary-light);', adminStats.totalScholarships, 'Total Scholarships')}
            ${statCard('clock', 'background:rgba(245,159,0,0.12);color:var(--nep-warning);', adminStats.pendingApplications, 'Pending Applications')}
            ${statCard('check-circle', 'background:rgba(47,158,68,0.12);color:var(--nep-success);', adminStats.approvedApplications.toLocaleString('en-IN'), 'Approved Applications')}
            ${statCard('x-circle', 'background:rgba(224,49,49,0.1);color:var(--nep-danger);', adminStats.rejectedApplications, 'Rejected Applications')}
          </div>

          <div class="row g-3">
            <div class="col-lg-8">
              <div class="nep-dash-card">
                <h5 class="mb-3">Recent Applications</h5>
                <div class="nep-table">
                  <table class="table table-hover">
                    <thead><tr><th>Student</th><th>Course</th><th>Date</th><th>Status</th></tr></thead>
                    <tbody>
                      ${adminApplications.slice(0, 6).map(a => `
                        <tr>
                          <td class="small">${a.student}</td>
                          <td class="small">${a.course}</td>
                          <td class="small">${a.date}</td>
                          <td>${statusBadge(a.status)}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="nep-dash-card">
                <h5 class="mb-3">Quick Actions</h5>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary-custom btn-sm text-start" data-section-link="students"><i class="bi bi-person-plus"></i> Manage Students</button>
                  <button class="btn btn-outline-custom btn-sm text-start" data-section-link="institutions"><i class="bi bi-building-add"></i> Manage Institutions</button>
                  <button class="btn btn-outline-custom btn-sm text-start" data-section-link="courses"><i class="bi bi-journal-plus"></i> Manage Courses</button>
                  <button class="btn btn-outline-custom btn-sm text-start" data-section-link="scholarships"><i class="bi bi-award"></i> Manage Scholarships</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Students Management -->
        <div id="section-students" class="dash-section d-none">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Manage Students</h2>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-person-plus"></i> Add Student</button>
          </div>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Institution</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                ${adminStudents.map(s => `
                  <tr>
                    <td>${s.id}</td>
                    <td class="small">${s.name}</td>
                    <td class="small">${s.email}</td>
                    <td class="small">${s.course}</td>
                    <td class="small">${s.institution}</td>
                    <td>${statusBadge(s.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
                      <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Institutions Management -->
        <div id="section-institutions" class="dash-section d-none">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Manage Institutions</h2>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-building-add"></i> Add Institution</button>
          </div>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>ID</th><th>Name</th><th>Location</th><th>Type</th><th>Courses</th><th>Students</th><th>Actions</th></tr></thead>
              <tbody>
                ${institutions.map(i => `
                  <tr>
                    <td>${i.id}</td>
                    <td class="small">${i.shortName}</td>
                    <td class="small">${i.location}</td>
                    <td class="small">${i.type}</td>
                    <td>${i.courses}</td>
                    <td>${i.students.toLocaleString('en-IN')}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
                      <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Courses Management -->
        <div id="section-courses" class="dash-section d-none">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Manage Courses</h2>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-journal-plus"></i> Add Course</button>
          </div>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>ID</th><th>Course</th><th>Institution</th><th>Duration</th><th>Fees</th><th>Seats</th><th>Actions</th></tr></thead>
              <tbody>
                ${courses.map(c => `
                  <tr>
                    <td>${c.id}</td>
                    <td class="small">${c.name}</td>
                    <td class="small">${c.institution}</td>
                    <td class="small">${c.duration}</td>
                    <td class="small">${c.fees}</td>
                    <td>${c.seats}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
                      <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Scholarships Management -->
        <div id="section-scholarships" class="dash-section d-none">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Manage Scholarships</h2>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-award"></i> Add Scholarship</button>
          </div>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>ID</th><th>Name</th><th>Provider</th><th>Amount</th><th>Deadline</th><th>Actions</th></tr></thead>
              <tbody>
                ${scholarships.map(s => `
                  <tr>
                    <td>${s.id}</td>
                    <td class="small">${s.name}</td>
                    <td class="small">${s.provider}</td>
                    <td class="text-success fw-bold small">${s.amount}</td>
                    <td class="small">${s.deadline}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil"></i></button>
                      <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Applications Management -->
        <div id="section-applications" class="dash-section d-none">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Manage Applications</h2>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-funnel"></i> Filter</button>
          </div>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>ID</th><th>Student</th><th>Course</th><th>Institution</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                ${adminApplications.map(a => `
                  <tr>
                    <td>${a.id}</td>
                    <td class="small">${a.student}</td>
                    <td class="small">${a.course}</td>
                    <td class="small">${a.institution}</td>
                    <td class="small">${a.date}</td>
                    <td>${statusBadge(a.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-success"><i class="bi bi-check-lg"></i></button>
                      <button class="btn btn-sm btn-outline-danger"><i class="bi bi-x-lg"></i></button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Results Management -->
        <div id="section-results" class="dash-section d-none">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="mb-0">Manage Results</h2>
            <button class="btn btn-primary-custom btn-sm"><i class="bi bi-upload"></i> Upload Results</button>
          </div>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>Roll No</th><th>Student</th><th>Course</th><th>Semester</th><th>GPA</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>NEP20250042</td><td class="small">Rahul Sharma</td><td class="small">B.Tech CSE</td><td>Sem 1</td><td class="fw-bold">8.7</td><td>${statusBadge('Pass')}</td></tr>
                <tr><td>NEP20250042</td><td class="small">Rahul Sharma</td><td class="small">B.Tech CSE</td><td>Sem 2</td><td class="fw-bold">9.1</td><td>${statusBadge('Pass')}</td></tr>
                <tr><td>NEP20250011</td><td class="small">Priya Patel</td><td class="small">MBBS</td><td>Sem 1</td><td class="fw-bold">8.3</td><td>${statusBadge('Pass')}</td></tr>
                <tr><td>NEP20250023</td><td class="small">Arun Kumar</td><td class="small">B.Com (Hons)</td><td>Sem 1</td><td class="fw-bold">7.9</td><td>${statusBadge('Pass')}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
`

function switchSection(section) {
  document.querySelectorAll('.dash-section').forEach(s => s.classList.add('d-none'))
  const target = document.getElementById(`section-${section}`)
  if (target) target.classList.remove('d-none')
  document.querySelectorAll('.nep-dash-sidebar .nav-link[data-section]').forEach(l => l.classList.remove('active'))
  const activeLink = document.querySelector(`.nep-dash-sidebar .nav-link[data-section="${section}"]`)
  if (activeLink) activeLink.classList.add('active')
}

document.querySelectorAll('.nep-dash-sidebar .nav-link[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    switchSection(link.dataset.section)
  })
})

document.querySelectorAll('[data-section-link]').forEach(btn => {
  btn.addEventListener('click', () => switchSection(btn.dataset.sectionLink))
})
