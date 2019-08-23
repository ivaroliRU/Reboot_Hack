const app = require("./server/api");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT + "/");
});
