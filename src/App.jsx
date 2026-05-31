export default function Portfolio() {
  const skills = {
    frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "Vite"],
    backend: ["Golang", "Gin Framework", "REST API", "JWT Authentication", "Middleware", "Clean Architecture", "PostgreSQL", "Redis"],
    tools: ["Docker", "Linux CLI", "WSL", "Git", "GitHub", "GitLab", "Postman", "Swagger / OpenAPI", "Vercel"]
  };

  const project = {
    title: "E-Wallet Web App",
    period: "2026",
    description:
      "Secure and responsive e-wallet web application to support digital transactions, balance management, money transfer, and transaction tracking.",
    features: [
      "Authentication & Authorization with JWT",
      "Set PIN for secure transactions",
      "Top Up & Money Transfer",
      "Transaction History",
      "Receiver Management",
      "RESTful API Integration",
      "Responsive UI"
    ],
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "Golang", "Gin", "PostgreSQL", "Redis", "JWT"]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Bernadus Dwiki Adicitra</h1>
          <nav className="hidden gap-6 text-sm md:flex text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#project" className="hover:text-white">Project</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300 w-fit">
            Fullstack Developer
          </p>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Building Secure & Responsive Fullstack Web Applications
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-8">
            Fullstack Web Developer with practical experience in intensive fullstack training and hands-on project development. Experienced in building responsive interfaces using React.js and backend systems using Golang (Gin Framework), RESTful APIs, PostgreSQL, Redis, and JWT authentication.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:dwiki.adicitra6@gmail.com"
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#project"
              className="rounded-2xl border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-slate-500"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="text-3xl font-bold">About Me</h3>
          <p className="mt-5 text-slate-300 leading-8">
            I am a Fullstack Developer with a background in Informatics Engineering from Sanata Dharma University (GPA 3.80/4.00) and hands-on experience through an intensive Fullstack Web Developer bootcamp at Koda Tech Academy. I enjoy building scalable web applications, designing RESTful APIs, managing databases, and continuously improving my technical skills.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h3 className="text-3xl font-bold">Technical Skills</h3>
          <p className="mt-2 text-slate-400">Technologies and tools I use for fullstack development.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h4 className="mb-5 text-xl font-semibold capitalize text-cyan-300">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project */}
      <section id="project" className="mx-auto max-w-6xl px-6 py-20">
        <h3 className="mb-10 text-3xl font-bold">Featured Project</h3>

        <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="max-w-3xl">
              <p className="text-sm text-cyan-300">{project.period}</p>
              <h4 className="mt-2 text-3xl font-bold">{project.title}</h4>
              <p className="mt-4 leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6">
                <h5 className="mb-3 text-lg font-semibold">Key Features</h5>
                <ul className="grid gap-2 text-slate-300 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-3xl font-bold">Let’s Connect</h3>
          <p className="mt-4 text-slate-300">
            Interested in working together or discussing opportunities? Feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            <span>📧 dwiki.adicitra6@gmail.com</span>
            <span>📱 +62 812-2866-9806</span>
            <span>📍 Jakarta / Bogor, Indonesia</span>
          </div>
        </div>
      </section>
    </div>
  );
}
