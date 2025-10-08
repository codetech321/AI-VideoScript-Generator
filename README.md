Video Script Generator AI
----

A free web application that uses Google’s Gemini AI to generate factual and structured video scripts based on user input. Built with React and Tailwind CSS.

Features
---------
1.Generate full video scripts by describing your video topic.

2.AI-powered using @google/genai (Gemini 2.5 Flash model).

3.Responsive design for desktop, tablet, and mobile.

4.Markdown-rendered output for easy readability.

5.Simple, clean UI with loading animation.

Installation
------

1.Clone the repository:

git clone https://github.com/yourusername/video-script-generator.git


2.Navigate to the project folder:

cd video-script-generator


3.Install dependencies:

npm install
# or
yarn install


4.Create a .env file in the root and add your Google API key:

VITE_GOOGLE_API_KEY=your_google_api_key_here


5.Start the development server:

npm run dev
# or
yarn dev


6.Open the app in your browser at http://localhost:5173
 (Vite default).

 
Uses
------

1.Enter a topic or description for your video in the textarea.

2.Click Generate.

3.Wait for the AI to generate the script.

4.The output appears below in a structured Markdown format.


Technologies Used
--------

.React – Frontend UI

.Tailwind CSS – Styling

.@google/genai – AI content generation

.react-markdown – Display AI response in Markdown

.react-spinners – Loader animation


Project Structure
-------
video-script-generator/
├─ src/
│  ├─ components/
│  │  └─ Navbar.jsx
│  ├─ App.jsx
│  ├─ App.css
├─ .env
├─ package.json
├─ README.md
