"""The Beautiful Game 2026 — SocketIO handlers (game session events)."""

from app import socketio
from flask_socketio import emit, join_room, leave_room


@socketio.on("connect")
def on_connect():
    emit("connected", {"status": "ok"})


@socketio.on("disconnect")
def on_disconnect():
    pass


@socketio.on("join_game")
def on_join_game(data):
    """Client joins a game room (one room per session id)."""
    from flask import request
    room = request.sid
    join_room(room)
    emit("game_ready", {"room": room})


@socketio.on("leave_game")
def on_leave_game():
    from flask import request
    leave_room(request.sid)


@socketio.on("match_result")
def on_match_result(data):
    """Client reports a completed Play the Game result for logging."""
    # Future: persist results
    emit("result_ack", {"saved": True})
