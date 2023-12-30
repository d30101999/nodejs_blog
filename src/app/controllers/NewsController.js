
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [get] new/:slug
    show(req, res){
        res.send("Test slug")
    }
}

module.exports = new NewsController;