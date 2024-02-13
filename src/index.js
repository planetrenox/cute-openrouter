// require('dotenv').config();
console.log("Test npm run index");

const openrouter = (() =>
{
    const _private = () => {};

    return {
        api: {
            chat: () =>
            {
                console.log("Starting...");
                fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "model": "openai/gpt-3.5-turbo", // Optional (user controls the default),
                        "messages": [
                            {"role": "user", "content": "What is the meaning of life?"},
                        ]
                    })
                });
            },
        },
    };
})();


module.exports = {provider};
