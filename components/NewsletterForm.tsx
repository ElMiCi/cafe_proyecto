'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setMessage('¡Bienvenido al círculo de Arcanum!')
      setEmail('')
    } else {
      setStatus('error')
      setMessage(data.error || 'Algo salió mal')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
        disabled={status === 'loading' || status === 'success'}
        style={{
          flex: 1,
          minWidth: '220px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          padding: '12px 16px',
          color: 'var(--cream-light)',
          fontSize: '14px',
          outline: 'none',
          transition: 'border-color 0.2s'
        }}
        onFocus={e => (e.target.style.borderColor = 'var(--amber-light)')}
        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        style={{
          background: status === 'success' ? 'var(--bg-card)' : 'var(--amber)',
          color: status === 'success' ? 'var(--amber-light)' : 'var(--cream-light)',
          border: status === 'success' ? '1px solid var(--amber-light)' : 'none',
          borderRadius: '4px',
          padding: '12px 28px',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: status === 'loading' || status === 'success' ? 'default' : 'pointer',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap'
        }}
      >
        {status === 'loading' ? 'Enviando...' : status === 'success' ? '✓ Registrado' : 'Suscribirse'}
      </button>
      {message && (
        <p style={{
          width: '100%',
          fontSize: '13px',
          color: status === 'error' ? '#E07070' : 'var(--amber-light)',
          marginTop: '4px'
        }}>
          {message}
        </p>
      )}
    </form>
  )
}
