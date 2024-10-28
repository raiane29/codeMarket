import app from "./app.js"

const PORT = process.env.PORT || 3030

app.listen(PORT, ()=>{
    console.log(`Sevidor on http://localhost:${PORT}`);
})