

const API_KEYS = {
    language: "AjCu7LvsSaUm2s8kIPYi9yWvSJGrmO15nq9Kpl8rU/QRhbjB2mGoN1ZLYgYDV5QbYAE1g70+2feCsmVj3yC7QwMAAABieyJvcmlnaW4iOiJodHRwczovL2xhbmd1YWdlZGV0ZWN0b3IuY29tOjQ0MyIsImZlYXR1cmUiOiJMYW5ndWFnZURldGVjdGlvbkFQSSIsImV4cGlyeSI6MTc0OTU5OTk5OX0=",
    summarizer: "Akx0liOZGH1/MQiFCOOzbqliT0YaDC58hym1U/SLv5OgVfskTuu6/4Q+Dgvr9yBzHv6J6jZVG8B5UGY1t2oX7AoAAABeeyJvcmlnaW4iOiJodHRwczovL3d3dy5zdW1tZXJpemVyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQUlTdW1tYXJpemF0aW9uQVBJIiwiZXhwaXJ5IjoxNzUzMTQyNDAwfQ==",
    translator: "Ar3oR1sale3wvkosXAzpWDuvcZdcAQn638rmtv7yW77XTEpth1dwiGO3ScyW1oXPWxAEIM446qELCq/Lzz3eaAsAAABaeyJvcmlnaW4iOiJodHRwczovL3d3dy50cmFuc2xhdG9yLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJhbnNsYXRpb25BUEkiLCJleHBpcnkiOjE3NTMxNDI0MDB9
"
};

const API_BASES = {
    language: "https://www.languagedetector.com",
    summarizer: "https://www.summerizer.com",
    translator: "https://www.translator.com"
};

async function detectLanguage(text) {
    try {
        const response = await fetch(`${API_BASES.language}/detect`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEYS.language}`
            },
            body: JSON.stringify({ text })
        });
        const data = await response.json();
        return data.language || "Unknown";
    } catch (error) {
        console.error("Language detection failed:", error);
        return "Error detecting language";
    }
}

async function summarizeText(text) {
    try {
        const response = await fetch(`${API_BASES.summarizer}/summarize`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEYS.summarizer}`
            },
            body: JSON.stringify({ text })
        });
        const data = await response.json();
        return data.summary || "Could not summarize text";
    } catch (error) {
        console.error("Summarization failed:", error);
        return "Error summarizing text";
    }
}

async function translateText(text, targetLang) {
    try {
        const response = await fetch(`${API_BASES.translator}/translate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEYS.translator}`
            },
            body: JSON.stringify({ text, targetLang })
        });
        const data = await response.json();
        return data.translatedText || "Translation failed";
    } catch (error) {
        console.error("Translation failed:", error);
        return "Error translating text";
    }
}
