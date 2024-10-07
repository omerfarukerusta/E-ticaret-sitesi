export async function getData() {
  const url = `http://localhost:5269/api/EticaretApi/GetProducts`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
}


