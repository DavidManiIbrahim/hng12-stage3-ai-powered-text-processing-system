

const inputText = document.getElementById("input-text");
const outputArea = document.getElementById("output-area");
const sendBtn = document.getElementById("send-btn");
const summarizeBtn = document.getElementById("summarize-btn");
const translateBtn = document.getElementById("translate-btn");
const languageSelect = document.getElementById("language-select");

const API_BASE = "https://developer.chrome.com/docs/ai";

async function detectLanguage(text) {
    const response = await fetch(`${API_BASE}/language-detection`, {
            method: "POST",
                    body: JSON.stringify({ text }),
                            headers: { "Content-Type": "application/json" }
                                });
                                    const data = await response.json();
                                        return data.language;
                                        }

                                        async function summarizeText(text) {
                                            const response = await fetch(`${API_BASE}/summarizer-api`, {
                                                    method: "POST",
                                                            body: JSON.stringify({ text }),
                                                                    headers: { "Content-Type": "application/json" }
                                                                        });
                                                                            const data = await response.json();
                                                                                return data.summary;
                                                                                }

                                                                                async function translateText(text, targetLang) {
                                                                                    const response = await fetch(`${API_BASE}/translator-api`, {
                                                                                            method: "POST",
                                                                                                    body: JSON.stringify({ text, targetLang }),
                                                                                                            headers: { "Content-Type": "application/json" }
                                                                                                                });
                                                                                                                    const data = await response.json();
                                                                                                                        return data.translatedText;
                                                                                                                        }

                                                                                                                        sendBtn.addEventListener("click", async () => {
                                                                                                                            const text = inputText.value.trim();
                                                                                                                                if (!text) {
                                                                                                                                        outputArea.innerHTML = "<p style='color:red'>Please enter text.</p>";
                                                                                                                                                return;
                                                                                                                                                    }

                                                                                                                                                        outputArea.innerHTML = `<p>${text}</p>`;

                                                                                                                                                            const detectedLang = await detectLanguage(text);
                                                                                                                                                                outputArea.innerHTML += `<p>Detected Language: ${detectedLang}</p>`;

                                                                                                                                                                    if (text.length > 150) {
                                                                                                                                                                            summarizeBtn.disabled = false;
                                                                                                                                                                                } else {
                                                                                                                                                                                        summarizeBtn.disabled = true;
                                                                                                                                                                                            }
                                                                                                                                                                                            });

                                                                                                                                                                                            summarizeBtn.addEventListener("click", async () => {
                                                                                                                                                                                                const text = inputText.value.trim();
                                                                                                                                                                                                    const summary = await summarizeText(text);
                                                                                                                                                                                                        outputArea.innerHTML += `<p><strong>Summary:</strong> ${summary}</p>`;
                                                                                                                                                                                                        });

                                                                                                                                                                                                        translateBtn.addEventListener("click", async () => {
                                                                                                                                                                                                            const text = outputArea.innerText;
                                                                                                                                                                                                                const targetLang = languageSelect.value;
                                                                                                                                                                                                                    const translatedText = await translateText(text, targetLang);
                                                                                                                                                                                                                        outputArea.innerHTML += `<p><strong>Translated:</strong> ${translatedText}</p>`;
                                                                                                                                                                                                                        });
