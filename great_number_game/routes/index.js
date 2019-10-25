module.exports = function Route(app) {

    app.get("/", (req, res) => {

        if (req.session.number) {} else {
            req.session.number = Math.floor(Math.random() * 100) + 1
        }


        context = {
            "number": req.session.number,
            "message": req.session.message,
            "replay": req.session.replay

        }
        res.render('index', context)
    })
    app.post("/guess", (req, res) => {
        req.session.guess = req.body.guess
        if (req.session.guess > req.session.number) {
            req.session.message = "Guess too high"
        }
        if (req.session.guess < req.session.number) {
            req.session.message = "Guess too low"
        }
        if (req.session.guess == req.session.number) {
            req.session.message = "You guessed the number!"
            req.session.replay = 1
        }
        res.redirect("/")
    })
    app.get("/reset", (req, res) => {
        req.session.destroy()
        res.redirect("/")
    })

}