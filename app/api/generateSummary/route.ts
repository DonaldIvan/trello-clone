// import openai from '@/openai';
import { NextResponse } from 'next/server';

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export async function POST(request: Request) {
  const { todos } = await request.json();
  await sleep(2000);
  return NextResponse.json({
    content: `User, welcome to the Trello Clone App! Here's a summary of your todos: To do: ${todos['todo']}, In progress: ${todos['inprogress']}, Done: ${todos['done']}. Have a productive day!`,
  });
  // const response = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   temperature: 0.8,
  //   // n: 1,
  //   // stream: false,
  //   messages: [
  //     {
  //       role: 'system',
  //       content:
  //         'When responding, welcome the user always as Mr. Sonny and say welcome to the PAPAFAM Trello App! Limit the response to 200 character',
  //     },
  //     {
  //       role: 'user',
  //       content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
  //         todos,
  //       )} `,
  //     },
  //   ],
  // });
  // const { data } = response;

  // return NextResponse.json(data.choices[0].message);
}
