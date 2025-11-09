import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'
import Calendar from './pages/Calendar'
import Contacts from './pages/Contacts'
import MessagesPage from './pages/Messages'
import Products from './pages/Products'
import Invoices from './pages/Invoices'
import Notifications from './pages/Notifications'
import Reports from './pages/Reports'
import HelpCenter from './pages/HelpCenter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
    </Router>
  )
}

export default App

