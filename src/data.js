// All the sample data for StudySpace lives here.
// Keeping data separate from components means we can change the content
// without touching any layout code.

export const subjectsData = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Build responsive websites with HTML, CSS, JavaScript, and React.',
    progress: 75,
    hours: 4,
    color: '#2F5BEA',
    topics: ['HTML structure', 'CSS Flexbox and Grid', 'React components', 'Responsive design'],
  },
  {
    id: 2,
    name: 'Programming',
    description: 'Practice problem solving, loops, functions, and clean code.',
    progress: 60,
    hours: 5,
    color: '#7B5CF0',
    topics: ['Variables and data types', 'Loops and conditions', 'Functions', 'Debugging'],
  },
  {
    id: 3,
    name: 'Database Systems',
    description: 'Design tables and write SQL queries to store and find data.',
    progress: 45,
    hours: 4,
    color: '#0E9F8E',
    topics: ['ER diagrams', 'SQL SELECT and JOIN', 'Normalization', 'Keys and constraints'],
  },
  {
    id: 4,
    name: 'Information Security',
    description: 'Learn how to protect data, accounts, and systems from threats.',
    progress: 55,
    hours: 3,
    color: '#E5484D',
    topics: ['CIA triad', 'Passwords and hashing', 'Common attacks', 'Safe browsing habits'],
  },
  {
    id: 5,
    name: 'Software Engineering',
    description: 'Understand how teams plan, build, test, and ship software.',
    progress: 40,
    hours: 4,
    color: '#E8791A',
    topics: ['Software life cycle', 'User stories', 'Git and version control', 'Testing basics'],
  },
  {
    id: 6,
    name: 'Data Analytics',
    description: 'Clean, explore, and visualize data to find useful patterns.',
    progress: 30,
    hours: 4,
    color: '#2F9E44',
    topics: ['Data cleaning', 'Spreadsheets', 'Charts and dashboards', 'Basic statistics'],
  },
]

export const initialTasks = [
  // 4 tasks still to do
  { id: 1, title: 'Finish React Activity', subject: 'Web Development', due: 'Oct 9', completed: false },
  { id: 2, title: 'Study JavaScript', subject: 'Programming', due: 'Oct 10', completed: false },
  { id: 3, title: 'Review Database Notes', subject: 'Database Systems', due: 'Oct 12', completed: false },
  { id: 4, title: 'Complete Programming Exercise', subject: 'Programming', due: 'Oct 14', completed: false },

  // 8 tasks already done
  { id: 5, title: 'Set Up Git Repository', subject: 'Software Engineering', due: 'Sep 28', completed: true },
  { id: 6, title: 'Read SQL Joins Chapter', subject: 'Database Systems', due: 'Sep 29', completed: true },
  { id: 7, title: 'Build HTML Layout Practice', subject: 'Web Development', due: 'Sep 30', completed: true },
  { id: 8, title: 'Password Security Quiz', subject: 'Information Security', due: 'Oct 1', completed: true },
  { id: 9, title: 'Clean Sample Dataset', subject: 'Data Analytics', due: 'Oct 1', completed: true },
  { id: 10, title: 'Write User Stories', subject: 'Software Engineering', due: 'Oct 2', completed: true },
  { id: 11, title: 'Finish Loops Worksheet', subject: 'Programming', due: 'Oct 3', completed: true },
  { id: 12, title: 'Summarize CIA Triad Notes', subject: 'Information Security', due: 'Oct 4', completed: true },
]
