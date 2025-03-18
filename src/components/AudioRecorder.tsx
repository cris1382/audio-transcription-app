import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const AudioRecorder: React.FC = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = () => {
        setIsRecording(true);
        SpeechRecognition.startListening({ language: 'fr-FR' });
    };

    const stopRecording = () => {
        setIsRecording(false);
        SpeechRecognition.stopListening();
    };

    useEffect(() => {
        if (!isRecording) {
            resetTranscript();
        }
    }, [isRecording, resetTranscript]);

    return (
        <div>
            <h2>Enregistrement Audio</h2>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Arrêter l\'enregistrement' : 'Commencer l\'enregistrement'}
            </button>
            <p>Transcription: {transcript}</p>
        </div>
    );
};

export default AudioRecorder;