/**
 * Dummy data — Student Dashboard & Admin Dashboard
 * Replace these with data fetched from your Flask/MySQL backend later.
 */

export const studentProfile = {
  name: 'Rahul Sharma',
  email: 'rahul.sharma@student.nep.in',
  phone: '+91 98765 43210',
  rollNo: 'NEP20250042',
  course: 'B.Tech in Computer Science & Engineering',
  institution: 'IIT Delhi',
  year: '2nd Year',
  semester: 'Semester 3',
  dob: '2004-05-14',
  gender: 'Male',
  address: '45 Bungalow Road, Kamla Nagar, New Delhi - 110007',
  avatar: 'RS',
};

export const applicationStats = {
  totalApplications: 5,
  approved: 2,
  pending: 2,
  rejected: 1,
};

export const currentApplications = [
  {
    id: 1,
    course: 'B.Tech in Computer Science & Engineering',
    institution: 'IIT Delhi',
    appliedDate: '2025-06-15',
    status: 'Approved',
  },
  {
    id: 2,
    course: 'B.Tech in Information Technology',
    institution: 'Anna University',
    appliedDate: '2025-06-20',
    status: 'Pending',
  },
  {
    id: 3,
    course: 'MBA (Master of Business Administration)',
    institution: 'IIT Delhi',
    appliedDate: '2025-07-01',
    status: 'Approved',
  },
  {
    id: 4,
    course: 'B.Tech in Mechanical Engineering',
    institution: 'NITK Surathkal',
    appliedDate: '2025-07-10',
    status: 'Pending',
  },
  {
    id: 5,
    course: 'B.Sc in Computer Science',
    institution: 'Christ University',
    appliedDate: '2025-07-18',
    status: 'Rejected',
  },
];

export const appliedScholarships = [
  {
    id: 1,
    name: 'National Merit Scholarship',
    amount: '₹12,000/year',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'AICTE Pragati Scholarship',
    amount: '₹50,000/year',
    status: 'Under Review',
  },
  {
    id: 3,
    name: 'INSPIRE-SHE Scholarship',
    amount: '₹80,000/year',
    status: 'Rejected',
  },
];

export const studentResults = [
  { id: 1, semester: 'Semester 1', gpa: '8.7', credits: 24, status: 'Pass' },
  { id: 2, semester: 'Semester 2', gpa: '9.1', credits: 26, status: 'Pass' },
  { id: 3, semester: 'Semester 3', gpa: '—', credits: 0, status: 'Ongoing' },
];

/* ---- Admin Dashboard data ---- */

export const adminStats = {
  totalStudents: 12450,
  totalInstitutions: 8,
  totalCourses: 12,
  totalApplications: 3820,
  totalScholarships: 8,
  pendingApplications: 340,
  approvedApplications: 2980,
  rejectedApplications: 500,
};

export const adminStudents = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@student.nep.in', course: 'B.Tech CSE', institution: 'IIT Delhi', status: 'Active' },
  { id: 2, name: 'Priya Patel', email: 'priya.patel@student.nep.in', course: 'MBBS', institution: 'AIIMS Delhi', status: 'Active' },
  { id: 3, name: 'Arun Kumar', email: 'arun.kumar@student.nep.in', course: 'B.Com (Hons)', institution: 'Delhi University', status: 'Active' },
  { id: 4, name: 'Sneha Reddy', email: 'sneha.reddy@student.nep.in', course: 'B.Tech IT', institution: 'Anna University', status: 'Active' },
  { id: 5, name: 'Mohammed Ali', email: 'mohammed.ali@student.nep.in', course: 'B.A. Economics', institution: 'Delhi University', status: 'Inactive' },
  { id: 6, name: 'Anjali Gupta', email: 'anjali.gupta@student.nep.in', course: 'BBA', institution: 'Christ University', status: 'Active' },
];

export const adminApplications = [
  { id: 1, student: 'Rahul Sharma', course: 'B.Tech CSE', institution: 'IIT Delhi', date: '2025-06-15', status: 'Approved' },
  { id: 2, student: 'Priya Patel', course: 'MBBS', institution: 'AIIMS Delhi', date: '2025-06-18', status: 'Approved' },
  { id: 3, student: 'Arun Kumar', course: 'B.Com (Hons)', institution: 'Delhi University', date: '2025-06-22', status: 'Pending' },
  { id: 4, student: 'Sneha Reddy', course: 'B.Tech IT', institution: 'Anna University', date: '2025-06-25', status: 'Pending' },
  { id: 5, student: 'Mohammed Ali', course: 'B.A. Economics', institution: 'Delhi University', date: '2025-07-01', status: 'Rejected' },
  { id: 6, student: 'Anjali Gupta', course: 'BBA', institution: 'Christ University', date: '2025-07-05', status: 'Approved' },
];
