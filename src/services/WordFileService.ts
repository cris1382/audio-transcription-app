class WordFileService {
    createWordFile(transcription: string): Blob {
        const blob = new Blob([transcription], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        return blob;
    }

    downloadFile(blob: Blob, filename: string): void {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}