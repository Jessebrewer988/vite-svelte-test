<script lang="ts">
  let data = $state([]);
  let ws: WebSocket;
  let connectionStatus = $state('Disconnected');
  let lastUpdated = $state('');

  // Use environment variables to determine the WebSocket URL
  const WS_URL = import.meta.env.DEV 
    ? 'ws://localhost:8889'
    : `wss://deafening-retha-jesses-org-14074d50.koyeb.app:8889`;

  // API URL
  const API_URL = 'https://deafening-retha-jesses-org-14074d50.koyeb.app/electronic_arts/games_list';

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      data = await response.json();
      lastUpdated = new Date().toLocaleTimeString();
      console.log('Data fetched:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
      connectionStatus = 'Error fetching data';
    }
  }

  function setupWebSocket() {
    try {
      console.log('Setting up WebSocket connection to:', WS_URL);
      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        console.log('WebSocket connected');
        connectionStatus = 'Connected';
      };

      ws.onmessage = async (event) => {
        console.log('WebSocket message received:', event.data);
        try {
          const update = JSON.parse(event.data);
          
          if (update.type === 'configUpdate' && 
              update.orgId === 'electronic_arts' && 
              update.configId === 'games_list') {
            console.log('Updating data due to WebSocket message');
            await fetchData();
          } else if (update.type === 'connected') {
            console.log('Connection confirmed:', update.message);
          }
        } catch (error) {
          console.error('Error processing WebSocket message:', error);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed');
        connectionStatus = 'Disconnected - Reconnecting...';
        setTimeout(setupWebSocket, 5000);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        connectionStatus = 'Error - Check console';
      };
    } catch (error) {
      console.error('Failed to establish WebSocket connection:', error);
      connectionStatus = 'Connection Failed';
      setTimeout(setupWebSocket, 5000);
    }
  }

  function handleManualRefresh() {
    fetchData();
  }

  // Initial setup
  $effect(() => {
    console.log('Starting app');
    fetchData();
    setupWebSocket();

    // Cleanup on component destruction
    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  });
</script>

<main class="container mx-auto p-4 text-black">
  <div class="mb-8">
    <h1 class="text-3xl font-bold mb-4">Games List</h1>
    
    <div class="bg-gray-100 p-4 rounded-lg mb-4">
      <div class="flex justify-between items-center">
        <div>
          <p class="font-semibold">WebSocket Status: 
            <span class={connectionStatus === 'Connected' ? 'text-green-600' : 'text-red-600'}>
              {connectionStatus}
            </span>
          </p>
          {#if lastUpdated}
            <p class="text-sm text-gray-600">Last updated: {lastUpdated}</p>
          {/if}
        </div>
        <button 
          on:click={handleManualRefresh}
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh Data
        </button>
      </div>
    </div>
  </div>

  {#if data.length > 0}
    <div class="grid gap-4 text-black">
      {#each data as item}
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <span class="font-semibold block mb-1">Game Name:</span>
              <span>{item.game_name}</span>
            </div>
            <div>
              <span class="font-semibold block mb-1">Game Developer:</span>
              <span>{item.game_dev}</span>
            </div>
            <div>
              <span class="font-semibold block mb-1">Release Year:</span>
              <span>{item.release_year}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="bg-gray-100 p-8 rounded-lg text-center">
      <p class="text-gray-600">No games data available</p>
    </div>
  {/if}
</main>

<style>
  :global(body) {
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1200px;
  }
</style>