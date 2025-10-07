
import Head from 'next/head';
const PROFILE_IMG = "https://i.ibb.co/7tNbF3k3/file-000000000f3461f7b9667cad34755326.png";
export default function Resume() {
  const downloadResume = () => {
    // placeholder - link to generated PDF
    window.open('/resume.pdf', '_blank');
  }
  return (
    <>
      <Head>
        <title>PH0ENIX_WEB3 — Resume</title>
        <meta name="description" content="Resume - PH0ENIX_WEB3" />
      </Head>
      <div className="container">
        <header className="resume-header">
          <img src={PROFILE_IMG} alt="phoenix" className="resume-photo" />
          <div>
            <h2>PH0ENIX_WEB3</h2>
            <div className="small">Community Growth Ambassador • Web3 Strategist</div>
            <div className="small">Age: 23 • Timezone: GMT +1</div>
            <div style={{marginTop:10}}>
              <button className="btn" onClick={downloadResume}>⬇️ Download Resume (PDF)</button>
            </div>
          </div>
        </header>

        <section>
          <div className="section-title">About Me</div>
          <div className="card">
            <p>I’m PH0ENIX_WEB3 — a Web3 community growth strategist and ambassador helping projects scale through authentic engagement and strategic campaigns. I build systems that convert users into active members by focusing on onboarding, retention, and ambassador-driven growth.</p>
            <p style={{marginTop:8}}>My approach blends community psychology, creative content, and growth operations to create lasting results.</p>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <div className="section-title">Experience (Impact-focused)</div>
          <div className="card">
            <ul>
              <li>Built community engagement systems that grew participation by 200% across multiple sprints.</li>
              <li>Managed and optimized Zealy & Galxe campaigns for higher retention and activity.</li>
              <li>Trained moderator teams and coordinated ambassador programs to maintain growth.</li>
              <li>Designed onboarding funnels and reward systems to increase member retention.</li>
              <li>Operated community support & ticket management frameworks to reduce response time.</li>
            </ul>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <div className="section-title">Core Competencies</div>
          <div className="card">
            <div className="skills-list">
              <span className="badge">Community Support & Ticket Management</span>
              <span className="badge">Promoting Teamwork & Collaboration</span>
              <span className="badge">Strategic Consulting for Community Growth</span>
              <span className="badge">Problem Solving & Communication</span>
              <span className="badge">Scam Reporting & Spam Protection</span>
              <span className="badge">Hosting Interactive Games & Events</span>
              <span className="badge">Managing Uncertainty (FUD)</span>
              <span className="badge">Technical Support</span>
            </div>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <div className="section-title">Tools & Tech Stack</div>
          <div className="card">
            <ul>
              <li>Discord, Telegram, X (Twitter)</li>
              <li>Zealy (Quests, XP Systems)</li>
              <li>Notion, Google Workspace</li>
              <li>Community Moderation Bots</li>
            </ul>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <div className="section-title">Strategy</div>
          <div className="card">
            <h4>Chat Engagement</h4>
            <p>Activate real chatters and create routines that keep conversations alive.</p>
            <h4>Point-Based Systems</h4>
            <p>Weekly rewards for activity: invites, participation, and event wins.</p>
            <h4>Community Events</h4>
            <p>Weekly AMAs, quizzes, meme battles, and recap days to build momentum.</p>
            <h4>Automation & Infrastructure</h4>
            <p>Set up bots for spam protection, leaderboards, and reminders.</p>
          </div>
        </section>

        <footer className="footer" style={{marginTop:30}}>
          <div>© 2025 PH0ENIXWEB3. All rights reserved.</div>
        </footer>
      </div>
    </>
  )
}
