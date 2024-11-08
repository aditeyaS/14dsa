class ApiClient {
  async getCode(codePath: string): Promise<string> {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/aditeyaS/python-dsa/refs/heads/main/code/${codePath}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching ${codePath}: ${response.statusText}`);
      }
      return (await response.text()).trim();
    } catch (error) {
      console.error(`Error fetching ${codePath}`, error);
      throw error;
    }
  }
}

export default ApiClient;
