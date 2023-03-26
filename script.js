
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  
  function generateCaptcha() {
    return generateRandomString(6);
  }
  

  function drawCaptcha(captcha) {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 80;
    const ctx = canvas.getContext("2d");
  
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the captcha text
    ctx.font = "bold 48px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(captcha, canvas.width/2, canvas.height/2);
  
    return canvas;
  }
  

  function generateAndDrawCaptcha() {
    const captcha = generateCaptcha();
    const captchaCanvas = drawCaptcha(captcha);
    const captchaContainer = document.getElementById("captcha-container");
    captchaContainer.innerHTML = "";
    captchaContainer.appendChild(captchaCanvas);
    return captcha;
  }
  
  const captcha = generateAndDrawCaptcha();
  
 
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const captchaInput = document.getElementById("captcha");
    const enteredCaptcha = captchaInput.value;
    if (enteredCaptcha === captcha) {
      alert("Captcha code is correct!");
   
      captchaInput.value = "";
      captcha = generateAndDrawCaptcha();
    } else {
      alert("Captcha code is incorrect. Please try again.");
    
      captcha = generateAndDrawCaptcha();
    }
  });

  

  