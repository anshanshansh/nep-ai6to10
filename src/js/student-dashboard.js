import { setupLayout } from './layout.js'
import {
  studentProfile,
  applicationStats,
  currentApplications,
  appliedScholarships,
  studentResults,
} from '../data/dashboard.js'

setupLayout('')

const app = document.getElementById('app')

function statusBadge(status) {
  const map = {
    'Approved': 'nep-badge-success',
    'Pending': 'nep-badge-warning',
    'Rejected': 'nep-badge-danger',
    'Under Review': 'nep-badge-info',
    'Pass': 'nep-badge-success',
    'Ongoing': 'nep-badge-info',
    'Active': 'nep-badge-success',
    'Inactive': 'nep-badge-danger',
  }
  return `<span class="nep-badge ${map[status] || 'nep-badge-primary'}">${status}</span>`
}

app.innerHTML = `
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-lg-2 col-md-3 col-12 nep-dash-sidebar p-0">
        <div class="text-center mb-3 px-3">
          <div class="d-inline-flex align-items-center justify-content-center bg-primary-custom text-white rounded-circle"
               style="width:60px;height:60px;font-size:1.5rem;font-weight:800;">${studentProfile.avatar}</div>
          <h6 class="mt-2 mb-0">${studentProfile.name}</h6>
          <small class="text-muted">${studentProfile.rollNo}</small>
        </div>
        <ul class="nav flex-column">
          <li class="nav-item"><a class="nav-link active" href="#" data-section="overview"><i class="bi bi-speedometer2"></i>Overview</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="profile"><i class="bi bi-person"></i>My Profile</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="applications"><i class="bi bi-file-earmark-text"></i>Applications</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="scholarships"><i class="bi bi-award"></i>Scholarships</a></li>
          <li class="nav-item"><a class="nav-link" href="#" data-section="results"><i class="bi bi-graph-up"></i>Results</a></li>
          <li class="nav-item"><a class="nav-link" href="./login.html"><i class="bi bi-box-arrow-right"></i>Logout</a></li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="col-lg-10 col-md-9 col-12 nep-dash-content">
        <!-- Overview Section -->
        <div id="section-overview" class="dash-section">
          <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h2 class="mb-0">Welcome, ${studentProfile.name.split(' ')[0]}!</h2>
              <p class="text-muted mb-0">${studentProfile.course} • ${studentProfile.institution}</p>
            </div>
            <div class="d-flex gap-2">
              <a href="./courses.html" class="btn btn-primary-custom btn-sm"><i class="bi bi-search"></i> Browse Courses</a>
              <a href="./scholarships.html" class="btn btn-outline-custom btn-sm"><i class="bi bi-award"></i> Scholarships</a>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="row g-3 mb-4">
            <div class="col-md-3 col-6">
              <div class="nep-dash-card d-flex align-items-center gap-3">
                <div class="dash-icon bg-primary-custom text-white"><i class="bi bi-file-earmark-text"></i></div>
                <div><div class="dash-number">${applicationStats.totalApplications}</div><div class="dash-label">Total Applications</div></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="nep-dash-card d-flex align-items-center gap-3">
                <div class="dash-icon" style="background:rgba(47,158,68,0.12);color:var(--nep-success);"><i class="bi bi-check-circle"></i></div>
                <div><div class="dash-number">${applicationStats.approved}</div><div class="dash-label">Approved</div></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="nep-dash-card d-flex align-items-center gap-3">
                <div class="dash-icon" style="background:rgba(245,159,0,0.12);color:var(--nep-warning);"><i class="bi bi-clock"></i></div>
                <div><div class="dash-number">${applicationStats.pending}</div><div class="dash-label">Pending</div></div>
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="nep-dash-card d-flex align-items-center gap-3">
                <div class="dash-icon" style="background:rgba(224,49,49,0.1);color:var(--nep-danger);"><i class="bi bi-x-circle"></i></div>
                <div><div class="dash-number">${applicationStats.rejected}</div><div class="dash-label">Rejected</div></div>
              </div>
            </div>
          </div>

          <div class="row g-3">
            <!-- Current Applications -->
            <div class="col-lg-7">
              <div class="nep-dash-card">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="mb-0">Current Applications</h5>
                  <span class="nep-badge nep-badge-primary">${currentApplications.length} total</span>
                </div>
                <div class="nep-table">
                  <table class="table table-hover">
                    <thead><tr><th>Course</th><th>Institution</th><th>Date</th><th>Status</th></tr></thead>
                    <tbody>
                      ${currentApplications.map(a => `
                        <tr>
                          <td class="small">${a.course}</td>
                          <td class="small">${a.institution}</td>
                          <td class="small">${a.appliedDate}</td>
                          <td>${statusBadge(a.status)}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Profile Summary -->
            <div class="col-lg-5">
              <div class="nep-dash-card mb-3">
                <h5 class="mb-3">Profile Summary</h5>
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div class="d-inline-flex align-items-center justify-content-center bg-primary-custom text-white rounded-circle"
                       style="width:52px;height:52px;font-weight:800;">${studentProfile.avatar}</div>
                  <div>
                    <h6 class="mb-0">${studentProfile.name}</h6>
                    <small class="text-muted">${studentProfile.email}</small>
                  </div>
                </div>
                <div class="nep-info-row"><span class="label">Roll No</span><span class="value">${studentProfile.rollNo}</span></div>
                <div class="nep-info-row"><span class="label">Course</span><span class="value">${studentProfile.course}</span></div>
                <div class="nep-info-row"><span class="label">Institution</span><span class="value">${studentProfile.institution}</span></div>
                <div class="nep-info-row"><span class="label">Year</span><span class="value">${studentProfile.year}</span></div>
                <div class="nep-info-row"><span class="label">Semester</span><span class="value">${studentProfile.semester}</span></div>
              </div>

              <!-- Quick Actions -->
              <div class="nep-dash-card">
                <h5 class="mb-3">Quick Actions</h5>
                <div class="d-grid gap-2">
                  <a href="./courses.html" class="btn btn-primary-custom btn-sm"><i class="bi bi-search"></i> Find New Courses</a>
                  <a href="./institutions.html" class="btn btn-outline-custom btn-sm"><i class="bi bi-building"></i> Browse Institutions</a>
                  <a href="./scholarships.html" class="btn btn-outline-custom btn-sm"><i class="bi bi-award"></i> Apply for Scholarships</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Section -->
        <div id="section-profile" class="dash-section d-none">
          <h2 class="mb-4">My Profile</h2>
          <div class="nep-dash-card" style="max-width:600px;">
            <div class="d-flex align-items-center gap-3 mb-4">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary-custom text-white rounded-circle"
                   style="width:64px;height:64px;font-size:1.4rem;font-weight:800;">${studentProfile.avatar}</div>
              <div>
                <h4 class="mb-0">${studentProfile.name}</h4>
                <small class="text-muted">${studentProfile.email}</small>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Roll No</span><span class="value">${studentProfile.rollNo}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Phone</span><span class="value">${studentProfile.phone}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Date of Birth</span><span class="value">${studentProfile.dob}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Gender</span><span class="value">${studentProfile.gender}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Course</span><span class="value">${studentProfile.course}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Institution</span><span class="value">${studentProfile.institution}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Year</span><span class="value">${studentProfile.year}</span></div></div>
              <div class="col-md-6"><div class="nep-info-row"><span class="label">Semester</span><span class="value">${studentProfile.semester}</span></div></div>
              <div class="col-12"><div class="nep-info-row"><span class="label">Address</span><span class="value">${studentProfile.address}</span></div></div>
            </div>
          </div>
        </div>

        <!-- Applications Section -->
        <div id="section-applications" class="dash-section d-none">
          <h2 class="mb-4">My Applications</h2>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>#</th><th>Course</th><th>Institution</th><th>Applied Date</th><th>Status</th></tr></thead>
              <tbody>
                ${currentApplications.map(a => `
                  <tr>
                    <td>${a.id}</td>
                    <td class="small">${a.course}</td>
                    <td class="small">${a.institution}</td>
                    <td class="small">${a.appliedDate}</td>
                    <td>${statusBadge(a.status)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Scholarships Section -->
        <div id="section-scholarships" class="dash-section d-none">
          <h2 class="mb-4">My Scholarships</h2>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>#</th><th>Scholarship</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                ${appliedScholarships.map(s => `
                  <tr>
                    <td>${s.id}</td>
                    <td class="small">${s.name}</td>
                    <td class="text-success fw-bold small">${s.amount}</td>
                    <td>${statusBadge(s.status)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Results Section -->
        <div id="section-results" class="dash-section d-none">
          <h2 class="mb-4">My Results</h2>
          <div class="nep-table">
            <table class="table table-hover">
              <thead><tr><th>#</th><th>Semester</th><th>GPA</th><th>Credits Earned</th><th>Status</th></tr></thead>
              <tbody>
                ${studentResults.map(r => `
                  <tr>
                    <td>${r.id}</td>
                    <td>${r.semester}</td>
                    <td class="fw-bold">${r.gpa}</td>
                    <td>${r.credits}</td>
                    <td>${statusBadge(r.status)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
`

document.querySelectorAll('.nep-dash-sidebar .nav-link[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const section = link.dataset.section
    document.querySelectorAll('.dash-section').forEach(s => s.classList.add('d-none'))
    document.getElementById(`section-${section}`).classList.remove('d-none')
    document.querySelectorAll('.nep-dash-sidebar .nav-link').forEach(l => l.classList.remove('active'))
    link.classList.add('active')
  })
})
