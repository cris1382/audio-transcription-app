import React, { useState } from 'react';
import AudioRecorder from './components/AudioRecorder';
import TranscriptionSaver from './components/TranscriptionSaver';
import SpeechRecognitionService from './services/SpeechRecognitionService';

const App: React.FC = () => {
    const [transcription, setTranscription] = useState<string>('');
    const speechRecognitionService = new SpeechRecognitionService();

    const handleTranscriptionUpdate = (newTranscription: string) => {
        setTranscription(newTranscription);
    };

    return (
        <div className="App">
            <h1>Transcription Audio en Français</h1>
            <AudioRecorder onTranscriptionUpdate={handleTranscriptionUpdate} />
            <TranscriptionSaver transcription={transcription} />
        </div>
    );
};

export default App;