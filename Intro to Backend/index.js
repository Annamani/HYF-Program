import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, Annamani!");
});
app.get("/users", (req, res) => {
    res.send("Users List is ready");
});
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
});
