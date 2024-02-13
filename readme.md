# cute-openrouter


A delightful Node.js module that simplifies the way
you interact with the OpenRouter API, enabling you
to start chat sessions seamlessly. Whether you're
building a bot or integrating complex AI-powered
conversations, cute-openrouter handles the
communication intricacies, letting you focus on
creating engaging dialogues.


## Features


- Simplified OpenRouter API access for chat
  operations.
- Easy-to-use chat function that abstracts away
  the fetch details.
- Flexible configuration of the model parameter
  to switch between AI models as needed.


## Why


This package solves the complexity of directly
dealing with OpenRouter's API by providing a
straightforward and easy-to-use interface that
abstracts the fetching and handling of API
responses. With cute-openrouter, you can initiate
conversations with AI models using a simple
function call, enhancing the development experience
and speeding up the process of integrating
OpenRouter into your Node.js applications.


## Getting Started


### Installation


1. Install cute-openrouter locally in your Node.js
   project for seamless integration within your
   application.


   ```

    npm install cute-openrouter

   ```


### Usage


   ```javascript

    const { openrouter } = require('cute-openrouter');

    async function startChat() {
        const response = await openrouter.api.chat('YOUR_OPENROUTER_API_KEY', 'Test!', 'gryphe/mythomax-l2-13b');
        const message = await response.json();
        console.log(message);
    }
    
    startChat();

   ```
