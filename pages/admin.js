import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const DEFAULT_PROJECTS = [
  { id: 1, name: 'Lovable', category: 'Full Brand', year: '2024', status: 'published' },
  { id: 2, name: 'Craft', category: 'Full Brand', year: '2024', status: 'published' },
  { id: 3, name: 'Loti', category: 'Brand Sprint', year: '2024', status: 'published' },
  { id: 4, name: 'Gist', category: 'Brand Sprint', year: '2023', status: 'published' },
  { id: 5, name: 'Heron', category: 'Full Brand', year: '2023', status: 'published' },
  { id: 6, name: 'Paper', category: 'Brand Sprint', year: '2023', status: 'draft' },
]

export default function Admin() {
  const router = useRouter()
  const [projects, setProjects] = useState(DEFAULT_PROJECTS)
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [form, setForm] = useState({ name: '', category: 'Brand Sprint', year: new Date().getFullYear().toString(), status: 'draft' })
  const [activeNav, setActiveNav] = useState('projects')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!sessionStorage.getItem('admin_authed')) {
        router.push('/admin-login')
      }
      const saved = localStorage.getItem('admin_projects')
      if (saved) setProjects(JSON.parse(saved))
    }
  }, [])

  const save = (updated) => {
    setProjects(updated)
    localStorage.setItem('admin_projects', JSON.stringify(updated))
  }

  const openAdd = () => {
    setEditingProject(null)
    setForm({ name: '', category: 'Brand Sprint', year: new Date().getFullYear().toString(), status: 'draft' })
    setShowModal(true)
  }

  const openEdit = (project) => {
    setEditingProject(project)
    setForm({ name: project.name, category: project.category, year: project.year, status: project.status })
    setShowModal(true)
  }

  const handleSave = () => {
    if (!form.name.trim()) return
    if (editingProject) {
      save(projects.map(p => p.id === editingProject.id ? { ...editingProject, ...form } : p))
    } else {
      const newProject = { id: Date.now(), ...form }
      save([...projects, newProject])
    }
    setShowModal(false)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this project?')) {
      save(projects.filter(p => p.id !== id))
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authed')
    router.push('/admin-login')
  }

  return (
    <>
      <Head>
        <title>Admin | Human Relations Studio</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-logo">HRS Admin</div>

          {[
            { id: 'projects', label: '📁 Projects' },
            { id: 'submissions', label: '📬 Submissions' },
            { id: 'settings', label: '⚙️ Settings' },
          ].map(item => (
            <div
              key={item.id}
              className={`admin-nav-item ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => setActiveNav(item.id)}
            >
              {item.label}
            </div>
          ))}

          <div style={{ marginTop: 'auto' }}>
            <div className="admin-nav-item" onClick={handleLogout}>🚪 Logout</div>
          </div>
        </aside>

        {/* Main */}
        <main className="admin-main">
          {activeNav === 'projects' && (
            <>
              <div className="admin-header">
                <h1 className="admin-title">Projects</h1>
                <button className="admin-btn" onClick={openAdd}>+ Add project</button>
              </div>

              <div className="projects-table">
                <div className="table-header">
                  <span>Name</span>
                  <span>Category</span>
                  <span>Year</span>
                  <span>Actions</span>
                </div>

                {projects.length === 0 && (
                  <div style={{ padding: '40px 24px', textAlign: 'center', color: '#999', fontSize: 14 }}>
                    No projects yet. Add your first one.
                  </div>
                )}

                {projects.map(project => (
                  <div key={project.id} className="table-row">
                    <div className="table-cell name">
                      {project.name}
                      <span
                        className={`status-badge ${project.status}`}
                        style={{ marginLeft: 10, verticalAlign: 'middle' }}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="table-cell muted">{project.category}</div>
                    <div className="table-cell muted">{project.year}</div>
                    <div className="table-actions">
                      <button className="action-btn" onClick={() => openEdit(project)}>Edit</button>
                      <button className="action-btn danger" onClick={() => handleDelete(project.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeNav === 'submissions' && (
            <>
              <div className="admin-header">
                <h1 className="admin-title">Form Submissions</h1>
              </div>
              <div className="projects-table">
                <div style={{ padding: '40px 24px', textAlign: 'center' }}>
                  <p style={{ fontSize: 15, marginBottom: 12 }}>
                    Form submissions are delivered to your email via Netlify Forms.
                  </p>
                  <a
                    href="https://app.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000', fontWeight: 500, textDecoration: 'underline' }}
                  >
                    View in Netlify dashboard →
                  </a>
                </div>
              </div>
            </>
          )}

          {activeNav === 'settings' && (
            <>
              <div className="admin-header">
                <h1 className="admin-title">Settings</h1>
              </div>
              <div className="projects-table" style={{ padding: '32px 24px' }}>
                <p style={{ fontSize: 14, color: '#666', marginBottom: 24 }}>
                  To change the admin password, update the <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: 4 }}>ADMIN_PASSWORD</code> constant in <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: 4 }}>pages/admin-login.js</code>.
                </p>
                <p style={{ fontSize: 14, color: '#666' }}>
                  For production use, consider replacing the simple password auth with NextAuth.js or another proper auth provider.
                </p>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="modal">
            <h2 className="modal-title">{editingProject ? 'Edit project' : 'Add project'}</h2>

            <div className="form-field">
              <label className="form-label">PROJECT NAME</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Lovable"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                autoFocus
              />
            </div>

            <div className="form-field">
              <label className="form-label">CATEGORY</label>
              <select
                className="form-select"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option>Brand Sprint</option>
                <option>Full Brand</option>
                <option>Venture Design</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">YEAR</label>
              <input
                type="text"
                className="form-input"
                placeholder="2024"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label className="form-label">STATUS</label>
              <select
                className="form-select"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="modal-actions">
              <button className="admin-btn secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="admin-btn" onClick={handleSave}>
                {editingProject ? 'Save changes' : 'Add project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
