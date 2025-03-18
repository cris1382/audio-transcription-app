import React from 'react';
import { WordFileService } from '../services/WordFileService';

interface TranscriptionSaverProps {
    transcription: string;
}

const TranscriptionSaver: React.FC<TranscriptionSaverProps> = ({ transcription }) => {
    const wordFileService = new WordFileService();

    const handleSave = () => {
        const formattedTranscription = formatTranscription(transcription);
        wordFileService.createWordFile(formattedTranscription);
        wordFileService.downloadFile('transcription.docx');
    };

    const formatTranscription = (text: string) => {
        return text.trim().replace(/\n/g, '<br/>');
    };

    return (
        <div>
            <button onClick={handleSave}>Save Transcription</button>
        </div>
    );
};

export default TranscriptionSaver;