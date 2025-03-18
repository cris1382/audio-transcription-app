# Audio Transcription App

## Overview
The Audio Transcription App is a web application that allows users to record audio through their microphone and transcribe it into text. The transcriptions are saved in a Word file format, with support for the French language.

## Features
- Record audio using the microphone.
- Real-time transcription of spoken words in French.
- Save transcriptions as Word documents for easy access and sharing.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- TypeScript: A superset of JavaScript that adds static types.
- Web Speech API: For speech recognition capabilities.
- HTML5 and CSS3: For structuring and styling the application.

## Project Structure
```
audio-transcription-app
├── src
│   ├── components
│   │   ├── AudioRecorder.tsx
│   │   └── TranscriptionSaver.tsx
│   ├── services
│   │   ├── SpeechRecognitionService.ts
│   │   └── WordFileService.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   ├── index.html
│   └── styles.css
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd audio-transcription-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Use the audio recorder to start recording your voice in French.
4. Once you finish recording, the transcription will be displayed.
5. Click the save button to download the transcription as a Word file.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.