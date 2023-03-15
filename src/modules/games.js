class Games {
    addPlayer = async (player, score) => {
      const data = {
        user: player,
        score,
      };
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3hhsLc6wIbOwpnxr80WS/scores/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      return response.json();
    };

    getPlayer = async () => {
      try {
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3hhsLc6wIbOwpnxr80WS/scores/');
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('Error:', error);
        return error;
      }
    }
}

export default Games;