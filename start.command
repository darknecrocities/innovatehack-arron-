#!/bin/zsh
# Double-click to serve the deck and open it in the browser.
cd "$(dirname "$0")" || exit 1
PORT=8899

if lsof -i :$PORT >/dev/null 2>&1; then
  open "http://localhost:$PORT/"
  exit 0
fi

python3 -m http.server $PORT &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null' EXIT
sleep 1
open "http://localhost:$PORT/"
echo "Serving $PWD at http://localhost:$PORT/"
echo "Close this window to stop the server."
wait $SERVER_PID
