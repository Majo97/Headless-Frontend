<template>
    <footer class="footer">
      <div class="footer-content">
        <span class="footer-text">Desarrollado por María José Ferrufino Barahona</span>
        <a href="https://github.com/Majo97" target="_blank" rel="noopener noreferrer">
          <img src="src\components\icons\git.png " alt="GitHub Logo" class="github-logo">
        </a>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #825199;
    padding: 20px;
    color: #fff;
  }
  
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .footer-text {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
  }
  
  .github-logo {
    width: 30px;
  }
  </style>
  