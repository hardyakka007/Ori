"""The Beautiful Game 2026 — Flask entry point."""

from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

socketio = SocketIO()


def create_app():
    app = Flask(__name__, static_folder="frontend/dist", static_url_path="")
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    from api.routes import api_bp
    app.register_blueprint(api_bp)

    socketio.init_app(
        app,
        cors_allowed_origins="*",
        async_mode="eventlet",
        logger=False,
        engineio_logger=False,
    )

    from sockets import game  # registers SocketIO handlers  # noqa: F401

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_spa(path):
        from flask import send_from_directory
        import os
        dist = os.path.join(app.root_path, "frontend", "dist")
        if path and os.path.exists(os.path.join(dist, path)):
            return send_from_directory(dist, path)
        return send_from_directory(dist, "index.html")

    return app


if __name__ == "__main__":
    app = create_app()
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
