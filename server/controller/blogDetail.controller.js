module.exports = {
  blogDetailGET: app => (req, res) => {
    const { blogNo } = req.params
    const page = '/blog/blogDetail'
    app.render(req, res, page, { blogNo })
  },
}
