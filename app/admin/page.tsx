'use client'

import { useState } from 'react'
import { NewsletterEntry, ContactEntry } from '@/lib/supabase'

type AdminData = {
  newsletter: NewsletterEntry[]
  contacts: ContactEntry[]
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [data, setData] = useState<AdminData | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [activeTab, setActiveTab] = useState<'newsletter' | 'contacts'>('newsletter')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const res = await fetch('/api/admin', {
      headers: { 'x-admin-password': password }
    })

    if (res.ok) {
      const json = await res.json()
      setData(json)
      setStatus('idle')
    } else {
      setStatus('error')
      setErrorMsg('Contraseña incorrecta')
    }
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('es-MX', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    })

  if (!data) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '48px',
          width: '100%',
          maxWidth: '420px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '32px' }}>☕</span>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '24px',
              color: 'var(--cream-light)',
              marginTop: '12px',
              marginBottom: '6px'
            }}>
              Panel de Administración
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Arcanum Coffee</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: 'var(--text-muted)',
                marginBottom: '8px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  background: 'var(--bg-secondary)',
                  border: `1px solid ${status === 'error' ? '#E07070' : 'var(--border)'}`,
                  borderRadius: '4px',
                  padding: '12px 16px',
                  color: 'var(--cream-light)',
                  fontSize: '14px',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {errorMsg && (
              <p style={{ fontSize: '13px', color: '#E07070', textAlign: 'center' }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: 'var(--amber)',
                color: 'var(--cream-light)',
                border: 'none',
                borderRadius: '4px',
                padding: '12px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: status === 'loading' ? 'default' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1
              }}
            >
              {status === 'loading' ? 'Verificando...' : 'Ingresar'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="/" style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}>
              ← Volver al sitio
            </a>
          </div>
        </div>
      </div>
    )
  }

  const thStyle: React.CSSProperties = {
    padding: '12px 16px',
    textAlign: 'left',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    borderBottom: '1px solid var(--border)',
    whiteSpace: 'nowrap'
  }

  const tdStyle: React.CSSProperties = {
    padding: '14px 16px',
    fontSize: '13px',
    color: 'var(--cream-light)',
    borderBottom: '1px solid var(--border)',
    verticalAlign: 'top'
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '32px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '28px',
              color: 'var(--cream-light)',
              marginBottom: '4px'
            }}>
              Panel de Administración
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Arcanum Coffee</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              color: 'var(--cream)'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Newsletter: </span>
              <strong style={{ color: 'var(--amber-light)' }}>{data.newsletter.length}</strong>
              <span style={{ margin: '0 12px', color: 'var(--border)' }}>|</span>
              <span style={{ color: 'var(--text-muted)' }}>Contactos: </span>
              <strong style={{ color: 'var(--amber-light)' }}>{data.contacts.length}</strong>
            </div>
            <button
              onClick={() => { setData(null); setPassword('') }}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '8px 16px',
                color: 'var(--text-muted)',
                fontSize: '12px',
                cursor: 'pointer',
                letterSpacing: '0.06em'
              }}
            >
              Salir
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
          {(['newsletter', 'contacts'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--bg-card)' : 'transparent',
                border: '1px solid',
                borderColor: activeTab === tab ? 'var(--amber)' : 'var(--border)',
                borderRadius: '4px',
                padding: '8px 20px',
                color: activeTab === tab ? 'var(--amber-light)' : 'var(--text-muted)',
                fontSize: '12px',
                fontWeight: activeTab === tab ? 600 : 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'newsletter' ? `Newsletter (${data.newsletter.length})` : `Contactos (${data.contacts.length})`}
            </button>
          ))}
        </div>

        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          {activeTab === 'newsletter' ? (
            data.newsletter.length === 0 ? (
              <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                No hay suscriptores aún.
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={thStyle}>#</th>
                      <th style={thStyle}>Email</th>
                      <th style={thStyle}>Fecha de registro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.newsletter.map((entry, i) => (
                      <tr key={entry.id} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', width: '48px' }}>{i + 1}</td>
                        <td style={tdStyle}>{entry.email}</td>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          {formatDate(entry.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            data.contacts.length === 0 ? (
              <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                No hay mensajes de contacto aún.
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={thStyle}>#</th>
                      <th style={thStyle}>Nombre</th>
                      <th style={thStyle}>Email</th>
                      <th style={thStyle}>Mensaje</th>
                      <th style={thStyle}>Fecha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.contacts.map((entry, i) => (
                      <tr key={entry.id} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', width: '48px' }}>{i + 1}</td>
                        <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{entry.name}</td>
                        <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{entry.email}</td>
                        <td style={{ ...tdStyle, maxWidth: '400px' }}>
                          <span style={{ color: 'var(--cream)', lineHeight: 1.6 }}>{entry.message}</span>
                        </td>
                        <td style={{ ...tdStyle, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          {formatDate(entry.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
