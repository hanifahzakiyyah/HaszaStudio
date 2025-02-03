
export default function Navbar(){
    return (
        <nav style={{
            // display: location.pathname === "/3d" ? "none" : "block",
        }} className="absolute top-0 left-0">
            <a href="/">Home</a> |
            <a href="/3d">3D</a>
        </nav>
    )
}