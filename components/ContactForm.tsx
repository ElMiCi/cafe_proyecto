'use client'

import { useState } from 'react'

const inputStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: '4px',
  padding: '12px 16px',
  color: 'var(--cream-light)',
  fontSize: '14px',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s'
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
      setErrorMsg(data.error || 'Error al enviar el mensaje')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        textAlign: 'center',
        padding: '48px 24px',
        background: 'var(--bg-card)',
        borderRadius: '8px',
        border: '1px solid var(--border)'
      }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>☕</div>
        <p style={{ color: 'var(--amber-light)', fontWeight: 600, fontSize: '18px' }}>
          Mensaje recibido
        </p>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '14px' }}>
          Te responderemos pronto.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: '20px',
            background: 'transparent',
            border: '1px solid var(--border)',
            color: 'var(--cream)',
            padding: '8px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          Enviar otro
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--amber-light)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--amber-light)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Mensaje
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="¿En qué podemos ayudarte?"
          required
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={e => (e.target.style.borderColor = 'var(--amber-light)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>
      {errorMsg && (
        <p style={{ fontSize: '13px', color: '#E07070' }}>{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          alignSelf: 'flex-end',
          background: 'var(--amber)',
          color: 'var(--cream-light)',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 32px',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: status === 'loading' ? 'default' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
          transition: 'opacity 0.2s'
        }}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
