import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-panel">
        <p className="eyebrow">Simon portfolio- Kouluprojekti WS06</p>
        <h1 className="hero-title">Portfolion alku </h1>
        <p className="hero-copy">
          Tämä on salainen portfolio, joka on luotu kouluprojektia varten. Se on rakennettu Reactilla ja Expressillä, ja se toimii blogialustana, jossa voit lukea ja kirjoittaa blogipostauksia.
        </p>

        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">Open blog</Link>
          <Link to="/posts/new" className="btn btn-secondary">Write a post</Link>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <p className="eyebrow">Info boxi</p>
          <h2>Lisää täytettä</h2>
          <p>
            Lisää täytettä.
          </p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">Info boxi</p>
          <h2>Lisää täytettä</h2>
          <p>
            Lisää täytettä.
          </p>
        </article>

        <article className="feature-card">
          <p className="eyebrow">Info boxi</p>
          <h2>Lisää täytettä</h2>
          <p>
            Lisää täytettä.
          </p>
        </article>
      </section>

      <section className="panel section-panel">
        <div className="section-copy">
          <p className="eyebrow">What is included</p>
          <h2>One frontend, multiple views</h2>
          <p>
            The React app now covers the old landing page content, the workshop background pages, the blog list, and the post CRUD views.
          </p>
        </div>

        <div className="endpoint-list">
          <div><span>GET</span><code>/api/posts</code></div>
          <div><span>GET</span><code>/api/posts/:id</code></div>
          <div><span>POST</span><code>/api/posts</code></div>
          <div><span>PUT</span><code>/api/posts/:id</code></div>
          <div><span>DELETE</span><code>/api/posts/:id</code></div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage