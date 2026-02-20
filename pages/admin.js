import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const STORAGE_KEY = 'hr_projects'

const defaultProjects = [
  { id: 1, name: 'Lovable',  category: 'Brand Sprint', bg: 'linear-gradient(135deg, #d040b8 0%, #5040d8 100%)', description: 'Full brand identity for AI startup.' },
  { id: 2, name: 'Craft',   category: 'Brand Sprint', bg: '#b8dde8', description: 'Design system and brand for productivity tool.' },
  { id: 3, name: 'Loti',    category: 'Brand Sprint', bg: 'linear-gradient(120deg, #8898a8 0%, #607080 100%)', description: 'Brand identity for fintech startup.' },
  { id: 4, name: 'Gist',    category: 'Brand Sprint', bg: '#111', description: 'Dark brand for AI notes app.' },
  { id: 5, name: 'Rebel',   category: 'Brand Sprint', bg: '#c8f040', description: 'Bold identity for challenger brand.' },
]

export default function Admin() {
  const router = useRouter()
  const [projects, setProjects] = useState(defaultProjects)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', category: '', bg: '', description: '' })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('hr_admin')) { router.push('/admin-login'); return }
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setProjects(JSON.parse(stored))
    }
  }, [])

  const save = (updated) => {
    setProjects(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const startEdit = (p) => { setEditing(p.id); setForm({ name: p.name, category: p.category, bg: p.bg, description: p.description }) }
  const startAdd = () => { setEditing('new'); setForm({ name: '', category: 'Brand Sprint', bg: '#cccccc', description: '' }) }

  const submitForm = (e) => {
    e.preventDefault()
    if (editing === 'new') {
      save([...projects, { ...form, id: Date.now() }])
    } else {
      save(projects.map(p => p.id === editing ? { ...p, ...form } : p))
    }
    setEditing(null)
  }

  const deleteProject = (id) => { if (confirm('Delete this project?')) save(projects.filter(p => p.id !== id)) }

  return (
    <>
      <Head><title>Admin CMS | Human Relations</title></Head>
      <div className="cms-wrap">
        {/* Sidebar */}
        <div className="cms-sidebar">
          <div className="cms-brand">Human Relations</div>
          <nav className="cms-nav">
            <span className="cms-nav-item cms-nav-active">Projects</span>
          </nav>
          <button className="cms-logout" onClick={() => { localStorage.removeItem('hr_admin'); router.push('/admin-login') }}>Sign out</button>
        </div>

        {/* Main */}
        <div className="cms-main">
          <div className="cms-header">
            <h1 className="cms-title">Projects</h1>
            <button className="cms-add-btn" onClick={startAdd}>+ Add project</button>
          </div>
          {saved && <div className="cms-saved">Saved ✓</div>}

          {/* Project list */}
          <div className="cms-list">
            {projects.map(p => (
              <div key={p.id} className="cms-row">
                <div className="cms-row-swatch" style={{ background: p.bg }} />
                <div className="cms-row-info">
                  <strong>{p.name}</strong>
                  <span>{p.category}</span>
                </div>
                <p className="cms-row-desc">{p.description}</p>
                <div className="cms-row-actions">
                  <button className="cms-edit-btn" onClick={() => startEdit(p)}>Edit</button>
                  <button className="cms-del-btn" onClick={() => deleteProject(p.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          {/* Edit/Add modal */}
          {editing && (
            <div className="cms-modal-bg" onClick={() => setEditing(null)}>
              <div className="cms-modal" onClick={e => e.stopPropagation()}>
                <h2 className="cms-modal-title">{editing === 'new' ? 'Add project' : 'Edit project'}</h2>
                <form onSubmit={submitForm} className="cms-form">
                  <label className="cms-label">Project name
                    <input className="cms-input" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                  </label>
                  <label className="cms-label">Category
                    <input className="cms-input" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
                  </label>
                  <label className="cms-label">Background (color or gradient)
                    <input className="cms-input" value={form.bg} onChange={e => setForm({...form, bg: e.target.value})} placeholder="e.g. #c8f040 or linear-gradient(...)"/>
                    <div className="cms-color-preview" style={{ background: form.bg }} />
                  </label>
                  <label className="cms-label">Description
                    <textarea className="cms-input cms-textarea" value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows="3"/>
                  </label>
                  <div className="cms-form-actions">
                    <button type="button" className="cms-cancel-btn" onClick={() => setEditing(null)}>Cancel</button>
                    <button type="submit" className="cms-save-btn">Save project</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
