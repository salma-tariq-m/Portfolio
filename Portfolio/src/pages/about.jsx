
export default function About() {
  return (
    <section className="container mt-5" id="about">
      <h2 className="text-center mb-5">About Me</h2>
      <p>
        As a full-stack developer, I have a deep understanding of both front-end and back-end technologies. I'm proficient in HTML, CSS, JavaScript, and various front-end frameworks like React and Bootstrap. On the back-end, I have expertise in language PHP and the framework Laravel, and I'm well-versed in database management using SQL and NoSQL databases.
      </p>
      <div className="tech-slider">
        <div className="tech-track">
          <img src="/imgs/html5.webp" alt="HTML" />
          <img src="/imgs/css3.webp" alt="CSS" />
          <img src="/imgs/js.webp" alt="JavaScript" />
          <img src="/imgs/php.webp" alt="PHP" />
          <img src="/imgs/mysql.webp" alt="MySQL" />
          <img src="/imgs/react.webp" alt="React" />
          <img src="/imgs/laravel.webp" alt="Laravel" />
          <img src="/imgs/git logo.webp" alt="Git" />
          <img src="/imgs/jira logo.webp" alt="Jira" />
          <img src="/imgs/figma.webp" alt="Figma" />
          <img src="/imgs/sonarquebe.webp" alt="SonarQube" />
        </div>
      </div>
    </section>
  );
}