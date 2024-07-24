const { spawn } = require('child_process');
const path = require('path');

// Chemin absolu vers le script Python
const scriptPath = path.join(__dirname, '../../recommendation-system/services/recommendation_service.py');

const runRecommendationService = (req, res) => {
  const process = spawn('python', [scriptPath]);

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    res.send(data);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    res.status(500).send(data);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

module.exports = { runRecommendationService };
