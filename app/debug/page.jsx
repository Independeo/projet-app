export default function DebugPage() {
  return (
    <main style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center'}}>
      <div>
        <h1>Debug page — app is served</h1>
        <p>Try /api/debug and /api/debug/db</p>
      </div>
    </main>
  );
}
