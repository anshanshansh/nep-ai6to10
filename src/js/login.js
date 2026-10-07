import { setupLayout } from './layout.js'

setupLayout('login')

const app = document.getElementById('app')

app.innerHTML = `
  <div class="nep-auth-wrapper">
    <div class="nep-auth-card">
      <div class="nep-auth-header">
        <h3><i class="bi bi-box-arrow-in-right"></i> Login to NEP</h3>
        <p>Access your educational portal account</p>
      </div>
      <div class="nep-auth-body">
        <form id="loginForm">
          <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <div class="input-group">
              <input type="password" class="form-control" id="password" placeholder="Enter your password" required />
              <button class="btn btn-outline-secondary" type="button" id="togglePassword" tabindex="-1">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Login As</label>
            <select class="form-select" id="role" required>
              <option value="">-- Select Role --</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="rememberMe" />
              <label class="form-check-label small" for="rememberMe">Remember me</label>
            </div>
            <a href="#" class="small text-primary-custom text-decoration-none">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary-custom">Login</button>
          <p class="text-center mt-3 mb-0 small text-muted">
            Don't have an account? <a href="./register.html" class="text-primary-custom fw-semibold">Register here</a>
          </p>
        </form>
      </div>
    </div>
  </div>
`

document.getElementById('togglePassword').addEventListener('click', () => {
  const pwd = document.getElementById('password')
  const icon = document.querySelector('#togglePassword i')
  if (pwd.type === 'password') {
    pwd.type = 'text'
    icon.classList.replace('bi-eye', 'bi-eye-slash')
  } else {
    pwd.type = 'password'
    icon.classList.replace('bi-eye-slash', 'bi-eye')
  }
})

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const role = document.getElementById('role').value
  if (role === 'admin') {
    window.location.href = '/admin-dashboard.html'
  } else {
    window.location.href = '/student-dashboard.html'
  }
})
