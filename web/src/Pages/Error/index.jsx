export default function Notfound() {
    return (
        <div style={{
            fontSize: "4rem",
            textAlign: "center",
            color: "red"
            }}>
            <h1>404 Not Found</h1>
            <div>
                <a href="/" style={
                    {
                        textDecoration: "none",
                        color: "purple",
                        backgroundColor: "wheat"
                    }
            }>Return to Homepage</a>
            </div>
        </div>
    );
}