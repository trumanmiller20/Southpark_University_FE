import { createWebHistory, createRouter } from 'vue-router'
import LogIn from './pages/LogIn'
import HomePage from './pages/HomePage'
import AllStudents from './pages/AllStudents'
import AllCourses from './pages/AllCourses'
import AddStudent from './pages/AddStudent'
import AddCourse from './pages/AddCourse'

const routes = [
  { path: '/', component: LogIn, name: 'LogIn' },
  { path: '/homepage', component: HomePage, name: 'HomePage' },
  { path: '/allstudents', component: AllStudents, name: 'AllStudents' },
  { path: '/allcourses', component: AllCourses, name: 'AllCourses' },
  { path: '/addstudent', component: AddStudent, name: 'AddStudent' },
  { path: '/addcourse', component: AddCourse, name: 'AddCourse' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
