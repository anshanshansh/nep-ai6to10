import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        institutions: resolve(__dirname, 'institutions.html'),
        courses: resolve(__dirname, 'courses.html'),
        scholarships: resolve(__dirname, 'scholarships.html'),
        about: resolve(__dirname, 'about.html'),
        login: resolve(__dirname, 'login.html'),
        register: resolve(__dirname, 'register.html'),
        studentDashboard: resolve(__dirname, 'student-dashboard.html'),
        adminDashboard: resolve(__dirname, 'admin-dashboard.html'),
      },
    },
  },
})
