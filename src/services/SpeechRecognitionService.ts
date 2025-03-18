class SpeechRecognitionService {
    private recognition: SpeechRecognition;
    private transcription: string;

    constructor() {
        this.transcription = '';
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.lang = 'fr-FR'; // Set language to French
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event) => {
            this.transcription = event.results[0][0].transcript;
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };
    }

    startRecognition(): void {
        this.transcription = ''; // Reset transcription
        this.recognition.start();
    }

    stopRecognition(): void {
        this.recognition.stop();
    }

    getTranscription(): string {
        return this.transcription;
    }
}

export default SpeechRecognitionService;