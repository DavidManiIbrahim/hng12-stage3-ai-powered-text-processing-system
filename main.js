const inputText = document.getElementById('input-text')
const outputArea = document.getElementById('output-area')
const sendBtn = document.getElementById('send-btn')
const summerizeBtn = document.getElementById('summerize-btn')
const TranslateBtn = document.getElementById('translate-btn')
const languageSelect = document.getElementById('language-select')

const API_BASE = ""

async function detectLanguage(text){
    const response = await fetch(`${API_BASE}/language-detection`,{
        method:"POST",
        body: JSON.stringify({text}),
        headers: {"Content-Type": "application/json"}
    })
    const data = await response.json()
    return data.language
}


async function summerizeText(text){
    const response = await fetch(`${API_BASE}/summerizer-api`,{
        method:"POST",
        body: JSON.stringify({text}),
        headers: {"Content-Type": "application/json"}
    })
    const data = await response.json()
    return data.summary
}


async function translateText(text, targetLang){
    const response = await fetch(`${API_BASE}/translator-api`,{
        method:"POST",
        body: JSON.stringify({text, targetLang}),
        headers: {"Content-Type": "application/json"}
    })
    const data = await response.json()
    return data.translatedText
}


sendBtn.addEventListener("click", async () => {
    const text = inputText.value.trim()
    if(!text){
        outputArea.innerHTML = "<p style='color:red'>Please enter text</p>":
        return
    }

    outputArea.innerHTML = `<p>${text}</p>`:

    const detectLanguage = await detectLanguage(text)
    outputArea.innerHTML += `<p>Detected Language: ${detecte}</p>`






})














