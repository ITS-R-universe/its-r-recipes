export default function Home() {
  return (
    <div style={{maxWidth:'1200px',margin:'0 auto',padding:'4rem 2rem'}}>
      <div style={{textAlign:'center',marginBottom:'3rem'}}>
        <h1 style={{fontSize:'2.5rem',fontWeight:'bold',marginBottom:'1rem'}}>
          <span style={{color:'#d4af37'}}>ITS-R</span>
          <span style={{color:'#f8fafc'}}> Recipes</span>
        </h1>
        <p style={{color:'#94a3b8',fontSize:'1.125rem',maxWidth:'600px',margin:'0 auto'}}>
          Utility and productivity tools — ITS-R Universe
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
        {['Feature 1','Feature 2','Feature 3'].map((f,i)=>(
          <div key={i} style={{background:'#0d1117',border:'1px solid #1e293b',borderRadius:'0.75rem',padding:'1.5rem'}}>
            <div style={{color:'#d4af37',fontWeight:'600',marginBottom:'0.5rem'}}>{f}</div>
            <div style={{color:'#94a3b8',fontSize:'0.875rem'}}>Coming soon — ITS-R Universe</div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:'3rem'}}>
        <span style={{display:'inline-block',background:'#d4af37',color:'#0a0a0f',padding:'0.5rem 1.5rem',borderRadius:'0.5rem',fontWeight:'600',fontSize:'0.875rem'}}>
          Part of ITS-R Universe
        </span>
      </div>
    </div>
  )
}
