export async function getStats(req, res, next) {
    try {
        const user1 = req.params.username1
        const user2 = req.params.username2

        console.log(user1);
        console.log(user2);
        // fetch stats for both player
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json("Successful request!");
    } catch (err) {
        res.statusCode = 404;
        res.send(err);
    }
}
