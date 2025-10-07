
import Link from 'next/link'

export default function Home(){
  return (
    <main className="container">
      <section className="hero anim-up">
        <div className="left">
          <h1>Ph0enix — Web3 Engineer & Designer</h1>
          <p className="small">Building beautiful, resilient Web3 experiences — bridges, wallets, and interfaces that feel premium.</p>
          <div className="resume-actions" style={{marginTop:18}}>
            <a className="btn" href="/resume.pdf" download>
              <svg className="icon-download" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12M8 11l4 4 4-4M4 21h16"/></svg>
              Download Resume
            </a>
            <a className="btn ghost" href="mailto:hello@ph0enix.example">Contact</a>
          </div>
        </div>
        <div className="right" style={{minWidth:220, textAlign:'right'}}>
          <div className="card pulse" style={{padding:18, borderRadius:12}}>
            <h2 style={{marginBottom:6}}>Featured</h2>
            <div className="small">Open-source UI for wallet onboarding. Deployed on Vercel.</div>
          </div>
        </div>
      </section>

      <section className="section anim-up" style={{marginTop:28}}>
        <h2>Skills</h2>
        <div className="grid" style={{marginTop:12}}>
          <div className="card"><strong>Solidity</strong><div className="small">Smart contracts</div></div>
          <div className="card"><strong>Next.js</strong><div className="small">Server rendering & routes</div></div>
          <div className="card"><strong>Design</strong><div className="small">Figma -> code</div></div>
        </div>
      </section>
    </main>
  )
}
