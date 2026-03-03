export default function Services() {
  return (
    <section id="services" className="container">
      <div className="container">
        <h2 className="fw-bold text-pink text-center mb-5">My Services</h2>

        <div className="row g-4">
          {/* Front-End */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3 fs-1 text-danger">
                <i className="bi bi-laptop"></i>
              </div>
              <h5 className="fw-bold text-danger">Front-End Development</h5>
              <p className="text-muted small">
                Creating modern and responsive interfaces using HTML, CSS, Bootstrap, JavaScript, and React.
              </p>
            </div>
          </div>

          {/* Back-End */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3 fs-1 text-pink">
                <i className="bi bi-server"></i>
              </div>
              <h5 className="fw-bold text-pink">Back-End Development</h5>
              <p className="text-muted small">
                Building server-side functionalities using PHP and Laravel.
              </p>
            </div>
          </div>

          {/* API / Web Services */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3 fs-1 text-danger">
                <i className="bi bi-link-45deg"></i>
              </div>
              <h5 className="fw-bold text-danger">API & Web Services</h5>
              <p className="text-muted small">
                Developing RESTful APIs to connect your application with other systems.
              </p>
            </div>
          </div>

          {/* Database */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3 fs-1 text-pink">
                <i className="bi bi-database"></i>
              </div>
              <h5 className="fw-bold text-pink">Database Management</h5>
              <p className="text-muted small">
                Designing and optimizing reliable, high-performance MySQL databases.
              </p>
            </div>
          </div>

          {/* Git / Collaboration */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3 fs-1 text-danger">
                <i className="bi bi-git"></i>
              </div>
              <h5 className="fw-bold text-danger">Versioning & Collaboration</h5>
              <p className="text-muted small">
                Using Git, GitHub, and GitLab for collaborative work and deployment.
              </p>
            </div>
          </div>

          {/* Dynamic Websites */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3 fs-1 text-pink">
                <i className="bi bi-globe"></i>
              </div>
              <h5 className="fw-bold text-pink">Dynamic Websites</h5>
              <p className="text-muted small">
                Building complete, high-performance websites tailored to your needs with a modern design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}