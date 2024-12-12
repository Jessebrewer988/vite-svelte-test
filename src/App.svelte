<script lang="ts">
  let data = $state([]);
  let ws: WebSocket;

  async function fetchData() {
    const response = await fetch('https://deafening-retha-jesses-org-14074d50.koyeb.app/electronic_arts/games_list');
    data = await response.json();
  }

  function setupWebSocket() {
    // Connect to your WebSocket server
    ws = new WebSocket('ws://deafening-retha-jesses-org-14074d50.koyeb.app:8889');

    ws.onmessage = async (event) => {
      const update = JSON.parse(event.data);
      
      // Check if this update is for our configuration
      if (update.type === 'configUpdate' && 
          update.orgId === 'electronic_arts' && 
          update.configId === 'games_list') {
        // Refresh the data
        await fetchData();
      }
    };

    ws.onclose = () => {
      // Attempt to reconnect after a delay
      setTimeout(setupWebSocket, 5000);
    };
  }

  // Initial setup
  $effect(() => {
    console.log('Starting app');
    fetchData();
    setupWebSocket();

    // Cleanup on component destruction
    return () => {
      if (ws) ws.close();
    };
  });
</script>

<main>
  <h1>Hello World</h1>
  {#if data.length > 0}
    <ul>
      {#each data as item}
        <li>
          <div>
            <span>Game Name: {item.game_name}</span>
            <span>Game Dev: {item.game_dev}</span>
            <span>Release Year: {item.release_year}</span>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>