// require('dotenv').config();

async function test()
{
    const response = await openrouter.api.chat(process.env.OPENROUTER_API_KEY, "Why do girl socks espacially thigh highs look so good esppacially their everything");
    const message = await response.json(); // This line reads the response body
    console.log(message);
    console.log(message.choices[0].message);
}

const openrouter = (() =>
{
    const _private = () => {};

    return {
        api: {
            chat: (apiKey, userTxt, model = "gryphe/mythomax-l2-13b") =>
            {
                console.log("Starting chat...");
                return fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST", headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json"
                    }, body: JSON.stringify({
                        "model": model, "messages": [{"role": "user", "content": userTxt}]
                    })
                });
            }
        }
    };
})();

//test();

module.exports = {openrouter};