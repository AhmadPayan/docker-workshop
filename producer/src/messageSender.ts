import axios from 'axios';

export async function sendMessage(): Promise<string> {
  try {
    const response = await axios.get('http://consumer:4000/receive');
    return `[V2] Message from consumer: ${response.data}`;
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
}