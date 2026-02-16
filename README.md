# Youtube


Changed terminal to bash in vs code

1. installed react + vite with node version20.20.0
    npm create vite@latest youtube-clone -- --template react

2. installed and configured tailwind css 3
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p

3. install react redux
    npm i @reduxjs/toolkit react-redux

for error below
 UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token '??='

 sol:
 Older Node.js cannot parse ??=
  node -v
v14.20.1

RAJA MANISH@Zabuza MINGW64 /c/Reactapp/youtube-clone (main)
$ nvm use 20.20.0
Now using node v20.20.0 (npm v10.8.2)
