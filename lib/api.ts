export async function generatePRD(email: string, requirements: string) {
  try {
    const idea=requirements
    const response = await fetch(process.env.BACKEND_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, idea  }),
    });
console.log(response);

    // if (!response.ok) {
    //   console.log(response);
    //   alert('Error')
      
    //   throw new Error('Failed to generate PRD');
    // }

    return await response.text();
  } catch (error) {
    console.error('Error generating PRD:', error);
    throw error;
  }
}