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

export async function postData(data: any) {
  const url = `http://localhost:5269/api/EticaretApi/CreateProduct`; // POST isteği için doğru endpoint'i kullan

  try {
    const response = await fetch(url, {
      method: "POST", // HTTP POST metodu
      headers: {
        "Content-Type": "application/json", // JSON veri gönderildiğini belirtir
      },
      body: JSON.stringify(data), // Gönderilecek veriyi JSON formatına dönüştür
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json(); // Yanıtı JSON olarak al
    console.log(json); // Yanıtı göster
  } catch (error: any) {
    console.error(error.message); // Hata mesajını göster
  }
}


