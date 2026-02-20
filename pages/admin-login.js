import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

// Simple hardcoded auth for a static site. 
// For production, use NextAuth or a proper auth service.
const ADMIN_PASSWORD = 'studio2024'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      // Store in sessionStorage (cleared when browser closes)
      sessionStorage.setItem('admin_authed', 'true')
      router.push('/admin')
    } else {
      setError('Incorrect password. Try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login | Human Relations Studio</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="admin-login">
        <div className="login-card">
          <div className="login-logo">Human Relations Studio</div>
          <h1 className="login-title">Welcome back</h1>
          <p className="login-subtitle">Sign in to manage your projects</p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label className="login-label">PASSWORD</label>
              <input
                type="password"
                className="login-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
              />
            </div>
            <button type="submit" className="login-btn">Sign in</button>
          </form>
        </div>
      </div>
    </>
  )
}
