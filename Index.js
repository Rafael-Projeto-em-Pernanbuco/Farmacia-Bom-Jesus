let mediaRecorder;
let audioChunks = [];

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.start();

    mediaRecorder.ondataavailable = function (e) {
      audioChunks.push(e.data);
    };

    mediaRecorder.onstop = function () {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.src = audioUrl;
      audioPlayer.style.display = 'block';
      audioPlayer.play();
      audioChunks = [];
    };

    setTimeout(() => {
      mediaRecorder.stop();
    }, 5000);
  } catch (err) {
    alert("Erro ao acessar o microfone: " + err.message);
  }
}

function enviarEmail() {
  const emailInput = document.getElementById('email');
  const status = document.getElementById('emailStatus');

  if (emailInput.value === '') {
    status.innerText = "Por favor, insira um e-mail.";
    status.style.color = "red";
    return;
  }

  // Simula envio para o backend
  fetch('/api/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: emailInput.value })
  })
    .then(response => response.json())
    .then(data => {
      status.innerText = "E-mail cadastrado com sucesso!";
      status.style.color = "green";
      emailInput.value = '';
    })
    .catch(error => {
      status.innerText = "Erro ao cadastrar e-mail.";
      status.style.color = "red";
      console.error(error);
    });
}
