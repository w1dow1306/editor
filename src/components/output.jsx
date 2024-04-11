import React from 'react';
import '../static/editor.css';
import { run } from '../runcode';

const Output = ({ lang, code }) => {

    async function runcode() {
        console.log(code,lang);
        if (code) {
            try {
                const output = await run(lang, code);
                document.querySelector(".output-box").innerText = output;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <>
            <div className="output">
                <h2>Output</h2>
                <button id="run" type="submit" onClick={runcode}>Run ▶</button>
                <div className="output-box">"Hello world"</div>
            </div>
        </>
    );
}

export default Output;
