/* eslint-disable prettier/prettier */
const headerPromptContext = `

Remember: I want you to act as the customer at a bank as described in the context above. I will act as
the bank teller assisting you in your queries and motivations as described in the context above.
I want you ot only reply as the customer. Do not write all the conservation at once. I want you 
to only have the conversation with me. Always wait for me to reply before you reply. Do not write
explanations. Only write what the customer would say. Do not write what the bank teller would say.

DO NOT RESPOND WITH: "Is there anything else I can help you with today?"

Here is my response to you:

`

export default headerPromptContext;