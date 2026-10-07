import { setupLayout } from './layout.js'

setupLayout('register')

const app = document.getElementById('app')

app.innerHTML = `
  <div class="nep-auth-wrapper">
    <div class="nep-auth-card wide">
      <div class="nep-auth-header">
        <h3><i class="bi bi-person-plus"></i> Create Your Account</h3>
        <p>Register as a student to get started</p>
      </div>
      <div class="nep-auth-body">
        <form id="registerForm">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone" placeholder="+91 98765 43210" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Date of Birth</label>
              <input type="date" class="form-control" id="dob" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Gender</label>
              <select class="form-select" id="gender" required>
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Create a password" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Confirm Password</label>
              <input type="password" class="form-control" id="confirmPassword" placeholder="Re-enter password" required />
            </div>
            <div class="col-md-6">
              <label class="form-label">Address</label>
              <textarea class="form-control" id="address" rows="2" placeholder="Your residential address" required></textarea>
            </div>
          </div>
          <div class="form-check mt-3">
            <input class="form-check-input" type="checkbox" id="agreeTerms" required />
            <label class="form-check-label small" for="agreeTerms">
              I agree to the <a href="#" class="text-primary-custom">Terms &amp; Conditions</a> and <a href="#" class="text-primary-custom">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" class="btn btn-primary-custom mt-3">Register</button>
          <p class="text-center mt-3 mb-0 small text-muted">
            Already have an account? <a href="./login.html" class="text-primary-custom fw-semibold">Login here</a>
          </p>
        </form>
      </div>
    </div>
  </div>
`

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const pwd = document.getElementById('password').value
  const confirmPwd = document.getElementById('confirmPassword').value
  if (pwd !== confirmPwd) {
    alert('Passwords do not match. Please try again.')
    return
  }
  window.location.href = '/student-dashboard.html'
})
