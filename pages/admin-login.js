import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function AdminLogin() {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pw === 'studio2024') {
      localStorage.setItem('hr_admin', '1')
      router.push('/admin')
    } else {
      setError('Wrong password')
    }
  }

  return (
    <>
      <Head><title>Admin | Human Relations</title></Head>
      <div className="admin-login">
        <form className="admin-box" onSubmit={handleSubmit}>
          <div className="admin-logo">Human Relations</div>
          <h2 className="admin-title">Studio admin</h2>
          <input
            className="admin-input"
            type="password"
            placeholder="Password"
            value={pw}
            onChange={e => { setPw(e.target.value); setError('') }}
          />
          {error && <p className="admin-error">{error}</p>}
          <button className="admin-btn" type="submit">Sign in</button>
        </form>
      </div>
    </>
  )
}
