# Running the Leet.AI dev server for preview

Vite + React (Tailwind v4) app. Package manager: **npm** (package-lock.json).

## Reproduce the artifacts a fresh checkout needs

- **Env file**: `.env` lives in the project root and is required at runtime. It is
  present in this checkout; if a fresh worktree lacks it, copy `.env` from the main
  checkout (`D:\React-30\LEET.AI\.env`) into the worktree root. Never symlink.
- **Dependencies**: `node_modules` must exist. If missing, run `npm install` from
  the project root.
- No other build artifacts are needed — Vite serves from source.

## Run the server

1. From the project root, start Vite bound to **IPv4 loopback** — this is
   required, because on this machine Vite's default `localhost` binding listens
   only on `::1` (IPv6), which the preview probe cannot reach:

   ```bash
   npm run dev -- --host 127.0.0.1
   ```

2. Default port is **5173** (Vite auto-increments if occupied). The server is
   healthy when `http://127.0.0.1:5173/` returns HTTP 200.

3. Detached start (Windows, hides the window and survives the session; log files
   in `.freebuff/`):

   ```powershell
   (Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev','--','--host','127.0.0.1' `
     -RedirectStandardOutput 'D:\React-30\LEET.AI\.freebuff\preview.log' `
     -RedirectStandardError  'D:\React-30\LEET.AI\.freebuff\preview.log.err' `
     -WindowStyle Hidden -PassThru).Id
   ```

   Note: the outer `powershell -Command` call may appear to hang until timeout,
   but the child server process does start — verify with
   `Get-NetTCPConnection -LocalPort 5173 -State Listen` and a `curl` to
   `http://127.0.0.1:5173/`.
