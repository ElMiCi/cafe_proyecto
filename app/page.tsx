import NewsletterForm from '@/components/NewsletterForm'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 48px',
        background: 'rgba(13,11,9,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)'
      }}>
        <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: '20px',
          letterSpacing: '0.12em',
          color: 'var(--cream-light)'
        }}>
          ARCANUM
        </span>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Nosotros', 'Café', 'Contacto'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none'
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="/admin"
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--amber-light)',
              textDecoration: 'none'
            }}
          >
            Admin
          </a>
        </div>
      </nav>

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 48px 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(139,94,60,0.12) 0%, transparent 70%)'
        }} />

        <div style={{ fontSize: '56px', marginBottom: '32px', position: 'relative' }}>☕</div>

        <p style={{
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--amber-light)',
          marginBottom: '20px',
          position: 'relative'
        }}>
          Specialty Coffee · Est. 2024
        </p>

        <h1 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(52px, 8vw, 96px)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.0,
          textAlign: 'center',
          color: 'var(--cream-light)',
          marginBottom: '24px',
          maxWidth: '800px',
          position: 'relative'
        }}>
          El secreto<br />
          <em style={{ color: 'var(--cream)', fontStyle: 'italic' }}>está en el grano</em>
        </h1>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '48px',
          position: 'relative'
        }}>
          Café de especialidad cultivado en las alturas de Oaxaca y Chiapas.
          Cada taza es un ritual.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
          <a href="#contacto" style={{
            background: 'var(--amber)',
            color: 'var(--cream-light)',
            padding: '14px 36px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            Visítanos
          </a>
          <a href="#nosotros" style={{
            background: 'transparent',
            color: 'var(--cream)',
            padding: '14px 36px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            border: '1px solid var(--border)'
          }}>
            Conocer más
          </a>
        </div>
      </section>

      <section id="nosotros" style={{
        padding: '120px 48px',
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center'
      }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--amber-light)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Nuestra filosofía
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--cream-light)',
            marginBottom: '24px'
          }}>
            Más allá de la cafeína,<br />
            <em style={{ color: 'var(--cream)' }}>una experiencia</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '15px', marginBottom: '16px' }}>
            Arcanum nació de una obsesión: encontrar el punto exacto donde el origen del grano,
            el proceso de tostado y la técnica de extracción se alinean en perfecta armonía.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '15px' }}>
            Trabajamos directamente con productores de Oaxaca, Chiapas y Veracruz.
            Cada lote es trazable desde la finca hasta tu taza.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {[
            { num: '12+', label: 'Productores aliados' },
            { num: '4', label: 'Métodos de extracción' },
            { num: '100%', label: 'Origen México' },
            { num: '∞', label: 'Tazas de pasión' }
          ].map(({ num, label }) => (
            <div key={label} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '28px 24px'
            }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '36px', color: 'var(--amber-light)', marginBottom: '8px' }}>
                {num}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="café" style={{
        padding: '80px 48px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--amber-light)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Nuestra selección
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 400,
            color: 'var(--cream-light)',
            marginBottom: '48px'
          }}>
            Granos de temporada
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { origin: 'Oaxaca', name: 'Sierra Juárez', process: 'Natural · 1,800 msnm', notes: 'Frambuesa · Chocolate oscuro · Miel de caña', roast: 'Tueste medio' },
              { origin: 'Chiapas', name: 'Finca La Lucha', process: 'Lavado · 1,600 msnm', notes: 'Durazno · Té negro · Caramelo', roast: 'Tueste claro' },
              { origin: 'Veracruz', name: 'Coatepec Gold', process: 'Honey · 1,400 msnm', notes: 'Cítricos · Vainilla · Nuez tostada', roast: 'Tueste oscuro' }
            ].map(coffee => (
              <div key={coffee.name} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '32px'
              }}>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--amber-light)', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {coffee.origin}
                </p>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: 'var(--cream-light)', marginBottom: '8px' }}>
                  {coffee.name}
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  {coffee.process}
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <p style={{ fontSize: '12px', color: 'var(--cream)', lineHeight: 1.6 }}>{coffee.notes}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px' }}>{coffee.roast}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '100px 48px',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--amber-light)', textTransform: 'uppercase', marginBottom: '16px' }}>
          Newsletter
        </p>
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 400,
          color: 'var(--cream-light)',
          marginBottom: '12px'
        }}>
          Únete al círculo
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '40px' }}>
          Recibe actualizaciones sobre nuevos granos, eventos de cata y ofertas exclusivas.
          Sin spam. Solo café.
        </p>
        <NewsletterForm />
      </section>

      <section id="contacto" style={{
        padding: '80px 48px 120px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--amber-light)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Contacto
          </p>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 400,
            color: 'var(--cream-light)',
            marginBottom: '12px'
          }}>
            Hablemos de café
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '40px' }}>
            ¿Tienes preguntas sobre nuestros granos, franquicias o catering?
            Escríbenos.
          </p>
          <ContactForm />
        </div>
      </section>

      <footer style={{
        padding: '32px 48px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px', letterSpacing: '0.1em', color: 'var(--cream)' }}>
          ARCANUM
        </span>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          © 2024 Arcanum Coffee. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  )
}
