import Head from 'next/head'

const PROFILE_IMG = "https://i.ibb.co/7tNbF3k3/file-000000000f3461f7b9667cad34755326.png";
const BITGET = "https://partner.bitget.ng/bg/E283E7";
const X_FOLLOW = "https://x.com/intent/follow?screen_name=ph0enix_web3";
const TELEGRAM = "https://t.me/ph0enix_web";
const TELEGRAM_BOT = "https://t.me/Ph0enixadmin_bot";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3167199119695111"
          crossOrigin="anonymous"></script>

        <title>PH0ENIX_WEB3 | Community Growth & Web3 Ambassador</title>
        <meta name="description" content="PH0ENIX_WEB3 — Web3 Community Builder, Ambassador & Strategist. Building thriving, engaged communities across Web3, DeFi, and tech ecosystems." />
        <meta name="keywords" content="Web3, community growth, Bitget, Zealy, crypto ambassador, blockchain marketing, PH0ENIX_WEB3, community building, DeFi engagement" />
        <meta name="author" content="PH0ENIX_WEB3" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PH0ENIX_WEB3 — Web3 Community Growth & Strategy" />
        <meta property="og:description" content="Helping Web3 projects grow authentic, engaged communities that last." />
        <meta property="og:image" content={PROFILE_IMG} />
        <meta property="og:url" content="https://ph0enixweb3.dpdns.org" />

        {/* --- JSON-LD Person --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "PH0ENIX_WEB3",
              "alternateName": "Phoenix Web3",
              "url": "https://ph0enixweb3.dpdns.org",
              "image": PROFILE_IMG,
              "jobTitle": "Web3 Growth Strategist & Community Builder",
              "worksFor": {
                "@type": "Organization",
                "name": "PH0ENIX_WEB3"
              },
              "affiliation": {
                "@type": "Organization",
                "name": "Bitget",
                "url": BITGET
              },
              "sameAs": [
                "https://x.com/ph0enix_web3",
                TELEGRAM,
                TELEGRAM_BOT
              ],
              "disambiguatingDescription": "Independent professional not affiliated with any other company or project named Phoenix."
            }),
          }}
        />

        {/* --- JSON-LD Organization --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PH0ENIX_WEB3",
              "url": "https://ph0enixweb3.dpdns.org",
              "logo": PROFILE_IMG,
              "description": "Independent Web3 strategist brand helping blockchain projects scale community engagement and retention.",
              "sameAs": [
                "https://x.com/ph0enix_web3",
                TELEGRAM
              ],
              "founder": {
                "@type": "Person",
                "name": "PH0ENIX_WEB3"
              },
              "affiliation": {
                "@type": "Organization",
                "name": "Bitget",
                "url": BITGET
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Business inquiries",
                "url": TELEGRAM_BOT
              }
            }),
          }}
        />

        {/* --- JSON-LD Website Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PH0ENIX_WEB3 Official Site",
              "url": "https://ph0enixweb3.dpdns.org",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ph0enixweb3.dpdns.org/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </Head>

      <div className="container">
        <header className="header">
          <div className="logo">
            <div className="brand">PH0ENIX_WEB3</div>
            <div className="small">Community Growth • Web3 Ambassador</div>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#bitget">Bitget Partner</a>
            <a href="#contact">Contact & Connect</a>
          </nav>
        </header>

        <section className="hero" id="home">
          <img src={PROFILE_IMG} alt="PH0ENIX_WEB3 - Web3 Community Growth Ambassador and Strategist" className="profile-img" />
          <div>
            <h1>I'm PHOENIX_WEB3 — Building Engaged Web3 Communities That Thrive.</h1>
            <p className="lead">
              I help Web3 projects grow strong, engaged, and loyal communities that last.
              From onboarding systems to ambassador programs — I design growth that converts
              curious users into committed members.
            </p>
            <div style={{ marginTop: 18 }}>
              <a className="btn" href="/resume">View Resume</a>
              <a className="btn" style={{ marginLeft: 12 }} href={BITGET} target="_blank" rel="noreferrer">Join Bitget</a>
            </div>
            <div style={{ marginTop: 14 }}>
              <a className="btn-ghost" href={X_FOLLOW} target="_blank" rel="noreferrer" style={{ marginRight: 8 }}>Follow on X</a>
              <a className="btn-ghost" href={TELEGRAM} target="_blank" rel="noreferrer" style={{ marginRight: 8 }}>Telegram</a>
              <a className="btn-ghost" href={TELEGRAM_BOT} target="_blank" rel="noreferrer">Chat Bot</a>
            </div>
          </div>
        </section>

        <section id="about" style={{ marginTop: 30 }}>
          <div className="section-title">About</div>
          <div className="card">
            <p>
              I’m PH0ENIX_WEB3 — a Web3 community growth strategist and ambassador helping blockchain projects scale and connect with their true supporters.
              My journey started with curiosity about blockchain communities and grew into a mission to make the decentralized world more human.
              I specialise in designing growth systems that convert curious users into active believers — through onboarding, ambassador programs, and creative campaigns.
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>Focus Areas:</strong> Community development, Ambassador programs, Zealy & Galxe optimization, Engagement systems, and Brand partnerships.
            </p>
          </div>
        </section>

        <section id="bitget" style={{ marginTop: 30 }}>
          <div className="section-title">Bitget Partnership</div>
          <div className="card">
            <h3>Trade Smarter with Bitget</h3>
            <p>
              Bitget is a global crypto exchange offering spot, futures, copy trading, and rewards. As an official partner,
              I help onboard users and guide them through registration and KYC so they can start trading quickly and securely.
            </p>
            <h4>How to register</h4>
            <ol>
              <li>Click "Join Bitget" above</li>
              <li>Create an account using email or phone</li>
              <li>Complete KYC by submitting ID and selfie (takes minutes)</li>
              <li>Deposit funds or buy crypto via local payment options</li>
              <li>Start trading or explore copy trading</li>
            </ol>
            <p><strong>Perks:</strong> Bonuses, copy trading, secure custody, global support.</p>
            <a className="btn" href={BITGET} target="_blank" rel="noreferrer">Join Bitget via PH0ENIX_WEB3</a>
          </div>
        </section>

        <section id="projects" style={{ marginTop: 30 }}>
          <div className="section-title">Projects & Collaborations</div>
          <div className="grid">
            <div className="card"><strong>Inference Labs</strong><p>Community engagement & meme campaigns to increase visibility.</p></div>
            <div className="card"><strong>Dropsy Protocol</strong><p>Zealy sprints & community beta testing to improve retention.</p></div>
            <div className="card"><strong>Zealy Sprints</strong><p>Strategy and top-ranked participation in multiple sprints.</p></div>
            <div className="card"><strong>Bitget</strong><p>Official partner: affiliate onboarding & community promotions.</p></div>
          </div>
        </section>

        <section id="skills" style={{ marginTop: 30 }}>
          <div className="section-title">Core Competencies</div>
          <div className="card skills">
            <div>
              <div className="section-title">Community Support & Management</div>
              <div className="skills-list">
                <span className="badge">Community Support & Ticket Management</span>
                <span className="badge">Promoting Teamwork & Collaboration</span>
                <span className="badge">Strategic Consulting for Community Growth</span>
                <span className="badge">Problem Solving & Communication</span>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="section-title">Community Management</div>
              <div className="skills-list">
                <span className="badge">Scam Reporting & Spam Protection</span>
                <span className="badge">Hosting Interactive Games & Events</span>
                <span className="badge">Managing FUD & Uncertainty</span>
                <span className="badge">Technical Support</span>
              </div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="section-title">Tools & Tech Stack</div>
              <div className="skills-list">
                <span className="badge">Discord, Telegram, X (Twitter)</span>
                <span className="badge">Zealy (Quests, XP Systems)</span>
                <span className="badge">Notion, Google Workspace</span>
                <span className="badge">Community Moderation Bots</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ marginTop: 30 }}>
          <div className="section-title">Contact & Connect</div>
          <div className="card">
            <p>Ready to build something great? Let’s collaborate to create thriving digital communities.</p>
            <p><strong>Email:</strong> <a href="mailto:support@ph0enixweb3.dpdns.org" style={{ color: '#9fbff6' }}>support@ph0enixweb3.dpdns.org</a></p>
            <p><strong>X (Follow):</strong> <a href={X_FOLLOW} target="_blank" rel="noreferrer">Follow on X</a></p>
            <p><strong>Telegram:</strong> <a href={TELEGRAM} target="_blank" rel="noreferrer">@ph0enix_web</a></p>
            <p><strong>Chat Bot:</strong> <a href={TELEGRAM_BOT} target="_blank" rel="noreferrer">@Ph0enixadmin_bot</a></p>
          </div>
        </section>

        <section id="insights" style={{ marginTop: 30 }}>
          <div className="section-title">Community Building Philosophy</div>
          <div className="card">
            <p>
              Great Web3 communities aren’t built overnight — they grow through connection, education,
              and shared goals. Every successful project I’ve worked with started by focusing on people
              first, not only the token or tech. A real community listens, rewards contribution, and
              empowers members to become advocates.
            </p>
            <p style={{ marginTop: 10 }}>
              My strategy blends structured growth systems with genuine storytelling. I build frameworks
              that help projects maintain engagement even after the hype fades — whether through quests,
              ambassador programs, or educational sprints that keep members excited to participate.
            </p>
            <p style={{ marginTop: 10 }}>
              I also collaborate with teams to design transparent communication, feedback loops, and
              reward systems that make members feel seen and valued. That’s the difference between a
              quiet group and a thriving ecosystem.
            </p>
            <p style={{ marginTop: 10 }}>
              The future of Web3 will belong to communities that stay human — and that’s exactly what
              PH0ENIX_WEB3 stands for.
            </p>
          </div>
        </section>

        <section id="disclaimer" style={{ marginTop: 40 }}>
          <div className="section-title">Disclaimer</div>
          <div className="card">
            <p>
              PH0ENIX_WEB3 is an independent community strategist and Web3 ambassador not affiliated
              with any other “Phoenix” or similarly named organizations, projects, or brands.
              All content, strategies, and partnerships presented here represent independent professional
              work for Web3 community development and education.
            </p>
            <p style={{ marginTop: 10 }}>
              This website serves as a personal professional portfolio, showcasing experience,
              community growth frameworks, and collaborations across blockchain ecosystems.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 30 }}>
          <div className="card">
            <h3>Ready to Build Something Great?</h3>
            <p>Let's work together to create thriving digital communities that inspire, engage, and empower every member.</p>
            <blockquote style={{ marginTop: 12, color: '#bcd3ff' }}>
              "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
              <br />- Proverbs 3:5-6
            </blockquote>
            <div style={{ marginTop: 14 }}>
              <a className="btn" href="/resume">View Resume</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>© 2025 PH0ENIXWEB3. All rights reserved.</div>
          <div style={{ marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>
            🌐 Verified on Google | Indexed for Web3 Projects
          </div>
        </footer>
      </div>
    </>
  );
            }
