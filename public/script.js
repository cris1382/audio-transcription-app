document.getElementById('start-transcription').addEventListener('click', () => {
    // Logique pour démarrer la transcription
    startTranscription();
});

function startTranscription() {
    // Utilisation de l'API Web Speech pour la reconnaissance vocale
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'fr-FR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Transcription:', transcript);
        saveTranscriptionToWord(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Erreur de reconnaissance vocale:', event.error);
    };
}

function saveTranscriptionToWord(transcript) {
    // Utilisation de la bibliothèque PizZip et Docxtemplater pour créer un fichier Word
    const PizZip = require('pizzip');
    const Docxtemplater = require('docxtemplater');

    const zip = new PizZip();
    const doc = new Docxtemplater(zip);

    doc.setData({ transcription: transcript });

    try {
        doc.render();
    } catch (error) {
        console.error('Erreur lors de la génération du document Word:', error);
        return;
    }

    const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    saveAs(out, 'transcription.docx');
}
