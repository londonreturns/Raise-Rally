@echo off
REM Run npm install
call npm install

REM Run npm install for axios
call npm install axios

REM Run npm install for react-icons
call npm install react-icons --save

REM Run npm install for bootstrap@5.3.3
call npm install bootstrap@5.3.3

REM Run npm install for react-router-dom
call npm install react-router-dom

REM Run  npm install react-pro-sidebar 
call  npm install react-pro-sidebar 

REM Run  npm install --save react-toastify
call  npm install --save react-toastify

REM Display completion message
echo All npm installations completed.