import web
from web.template import ALLOWED_AST_NODES
ALLOWED_AST_NODES.append('Constant')

urls = (
    '/', 'home',
    '/register', 'register'
)

render = web.template.render("Views/Templates", base="MainLayout")
app = web.application(urls, globals())

#class/routes

class home:
    def GET(self):
        return render.Home()

class register:
    def GET(self):
        return render.Register()

if __name__ == "__main__":
    app.run()
