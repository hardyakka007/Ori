/**
 * Socket.IO composable for The Beautiful Game 2026.
 * Used for real-time events (goal notifications, match result logging).
 */
import { ref, onUnmounted } from 'vue'
import { io } from 'socket.io-client'

let _socket = null
let _refCount = 0

function getSocket() {
  if (!_socket) {
    _socket = io({ autoConnect: true, transports: ['websocket', 'polling'] })
  }
  return _socket
}

export function useSocket() {
  const connected = ref(false)

  _refCount++
  const socket = getSocket()

  const onConnect    = () => { connected.value = true }
  const onDisconnect = () => { connected.value = false }

  socket.on('connect', onConnect)
  socket.on('disconnect', onDisconnect)
  connected.value = socket.connected

  onUnmounted(() => {
    socket.off('connect', onConnect)
    socket.off('disconnect', onDisconnect)
    _refCount--
    if (_refCount === 0 && _socket) {
      _socket.disconnect()
      _socket = null
    }
  })

  return {
    socket,
    connected,
    emit: (event, data) => socket.emit(event, data),
  }
}
