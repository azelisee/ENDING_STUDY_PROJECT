const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

function startChatbot() {
    const pythonEnvPath = "D:/FORMATION A TECCART/SESSION 7 - ETE 2024/STAGE EN ENTREPRISE/PROJET/prj_final_de_stage_AZOUMA_Kokou_Elisee/ENDING_STUDY_PROJECT/recommendation-system/venv/Scripts/activate";
    const chatbotPath = "D:/FORMATION A TECCART/SESSION 7 - ETE 2024/STAGE EN ENTREPRISE/PROJET/prj_final_de_stage_AZOUMA_Kokou_Elisee/ENDING_STUDY_PROJECT/recommendation-system/chatbot.py";

    exec(`"${pythonEnvPath}" && streamlit run "${chatbotPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}

router.post('/chatbot', (req, res) => {
    startChatbot();
    res.status(200).json({ message: 'Chatbot started successfully' });
});

module.exports = { router, startChatbot };
