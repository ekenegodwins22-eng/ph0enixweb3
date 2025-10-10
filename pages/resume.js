import Head from 'next/head';
const PROFILE_IMG = "https://i.ibb.co/7tNbF3k3/file-000000000f3461f7b9667cad34755326.png";

export default function Resume() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'PH0ENIX_WEB3_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3167199119695111"
          crossOrigin="anonymous"></script>
        <title>PH0ENIX_WEB3 — Professional Resume & Portfolio</title>
        <meta name="description" content="PH0ENIX_WEB3 — Professional Web3 Community Manager & Growth Strategist with proven success in ambassador programs, Zealy campaigns, and Web3 community expansion." />
        <meta name="keywords" content="Web3 resume, community manager, Bitget, Zealy, crypto marketing, blockchain growth strategist" />
        <meta name="author" content="PH0ENIX_WEB3" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="PH0ENIX_WEB3 — Web3 Community Manager Resume" />
        <meta property="og:description" content="Experienced Web3 strategist helping blockchain projects grow and scale through authentic engagement." />
        <meta property="og:image" content={PROFILE_IMG} />
        <meta property="og:url" content="https://ph0enixweb3.dpdns.org/resume" />
      </Head>

      <div className="container">
        <header className="resume-header">
          <img src={PROFILE_IMG} alt="PH0ENIX_WEB3 - Professional Web3 Community Manager and Ambassador" className="resume-photo" />
          <div>
            <h2>PH0ENIX_WEB3</h2>
            <div className="small">Community Growth Ambassador • Web3 Strategist</div>
            <div className="small">Age: 23 • Timezone: GMT +1</div>
            <div style={{ marginTop: 10 }}>
              <button className="btn" onClick={downloadResume}>⬇️ Download Resume (PDF)</button>
            </div>
          </div>
        </header>

        <section>
          <div className="section-title">About Me</div>
          <div className="card">
            <p>
              I’m <strong>PH0ENIX_WEB3</strong> — a Web3 community growth strategist and ambassador
              helping projects scale through authentic engagement, educational campaigns, and community psychology.
              I build sustainable ecosystems that turn users into long-term believers.
            </p>
            <p style={{ marginTop: 8 }}>
              My approach blends <strong>strategy, empathy, and structure</strong> — using Zealy, Galxe,
              and creative community systems to design engagement that truly lasts.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Experience (Impact-Focused)</div>
          <div className="card">
            <ul>
              <li>Grew project participation by <strong>200%+</strong> across multiple Zealy sprints and ambassador challenges.</li>
              <li>Optimized campaign structures for <strong>Dropsy Protocol</strong> and <strong>Inference Labs</strong> to retain members post-launch.</li>
              <li>Built internal team systems to train moderators and ambassadors on engagement best practices.</li>
              <li>Deployed automated reward and onboarding funnels, cutting manual work by 60%.</li>
              <li>Partnered with <strong>Bitget</strong> as an official Web3 partner — focusing on secure user onboarding and loyalty growth.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Core Competencies</div>
          <div className="card">
            <div className="skills-list">
              <span className="badge">Community Support & Ticket Systems</span>
              <span className="badge">Strategic Growth Planning</span>
              <span className="badge">Engagement & Retention Design</span>
              <span className="badge">Leadership & Team Collaboration</span>
              <span className="badge">Scam Reporting & Spam Protection</span>
              <span className="badge">Creative Campaign Planning</span>
              <span className="badge">Crisis Management (FUD Control)</span>
              <span className="badge">Technical Support & Education</span>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Tools & Tech Stack</div>
          <div className="card">
            <ul>
              <li>Discord, Telegram, X (Twitter)</li>
              <li>Zealy (Quests, XP, Sprints), Galxe, Notion</li>
              <li>Google Workspace & Analytics</li>
              <li>Community Moderation Bots & Automation</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Achievements & Highlights</div>
          <div className="card">
            <ul>
              <li>🏆 Ranked Top 10 in multiple Zealy global sprints.</li>
              <li>🌍 Collaborated with 10+ Web3 startups and protocols.</li>
              <li>💬 Hosted over 50+ community AMAs and engagement events.</li>
              <li>📈 Created data-driven growth frameworks adopted across campaigns.</li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Certifications & Partnerships</div>
          <div className="card">
            <ul>
              <li><strong>Bitget Certified Partner</strong> — Global crypto trading & education.</li>
              <li><strong>Zealy Sprint Strategist</strong> — Expert in XP systems & retention.</li>
              <li><strong>Community Moderator Program (Inference Labs)</strong></li>
            </ul>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Strategy Overview</div>
          <div className="card">
            <h4>Chat Activation</h4>
            <p>Engage users daily through organic conversations, trivia, and AMA loops.</p>
            <h4>Point-Based Rewards</h4>
            <p>Gamify activity: XP rewards for participation, invites, and event wins.</p>
            <h4>Community Events</h4>
            <p>Weekly quizzes, meme battles, and recap days that reinforce belonging.</p>
            <h4>Automation & Security</h4>
            <p>Protect communities with anti-spam systems, leaderboards, and verification bots.</p>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="section-title">Connect & Collaborate</div>
          <div className="card">
            <p>
              Open to collaborations with Web3 projects, protocols, and marketing teams.
              Let’s create communities that last beyond the hype.
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:support@ph0enixweb3.dpdns.org" style={{ color: '#9fbff6' }}>support@ph0enixweb3.dpdns.org</a><br />
              <strong>X:</strong> <a href="https://x.com/ph0enix_web3" target="_blank" rel="noreferrer">@ph0enix_web3</a><br />
              <strong>Telegram:</strong> <a href="https://t.me/ph0enix_web" target="_blank" rel="noreferrer">@ph0enix_web</a>
            </p>
          </div>
        </section>

        {/* ✅ Updated Footer with Independent Disclaimer */}
        <footer className="footer" style={{ marginTop: 30, textAlign: 'center' }}>
          <div>© 2025 PH0ENIXWEB3. All rights reserved.</div>
          <div style={{ marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>
            🌐 Verified on Google | Indexed for Web3 Projects
          </div>
          <div style={{ marginTop: 6, fontSize: 11, color: 'var(--muted)' }}>
            ⚠️ PH0ENIX_WEB3 is an independent Web3 ambassador and strategist brand — 
            not affiliated with any other “Phoenix” projects or entities.
          </div>
        </footer>
      </div>
    </>
  );
            }
