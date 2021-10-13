<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { text, commentary } from "./content";
  import { textWithoutDiacritics } from "./helpers";
  import type { Layout, SelectedCommentaryKey } from "./types";

  let searchFilter: HTMLInputElement;
  let searchTerm = "";
  let searchResults = null;
  let selectedCommentaryKey: SelectedCommentaryKey = "mahalli";
  let selectedLayout: Layout = "top-bottom";
  let selectedTerminology = "none";
  let slideIn = false;
  // console.log(textWithoutDiacritics(text));

  onMount(() => {
    searchFilter.focus();
  });

  function onSelectCommentary(e: { currentTarget: { value: any } }) {
    selectedCommentaryKey = e.currentTarget.value;
    // reset to default layout if no commentary is selected
    if (selectedCommentaryKey === "none") {
      selectedLayout = "layout";
    }
  }

  function onSelectLayout(e: { currentTarget: { value: any } }) {
    selectedLayout = e.currentTarget.value;
    slideIn = true;
  }
  function onSearch() {
    // search term with diacritics removes
    const pSearchTerm = textWithoutDiacritics(searchTerm);
    if (pSearchTerm === "") {
      searchResults = null;
      return;
    }
    const searchTermIndex = textWithoutDiacritics(text).indexOf(pSearchTerm);
    if (searchTermIndex > -1) {
      searchResults = text
        .split(" ")
        .map((el) =>
          textWithoutDiacritics(el).includes(pSearchTerm)
            ? `<span style="color: #4791db;">${el}</span>`
            : el
        )
        .join(" ");
    } else {
      return;
    }
  }
  function onSelectTerminology(e: { currentTarget: { value: any } }) {
    selectedTerminology = e.currentTarget.value;
  }
</script>

<main>
  <div class="main-app">
    <div class="filter-bar">
      <div class="input-group">
        <div class="search-filter">
          <input
            bind:this={searchFilter}
            placeholder="search"
            bind:value={searchTerm}
          />
          <span class="search-icon" on:click={() => onSearch()}>
            <i class="fas fa-search" /></span
          >
        </div>
        <select
          on:change={(e) => onSelectCommentary(e)}
          bind:value={selectedCommentaryKey}
        >
          <option value="none">commentaries</option>
          <!--<option value="tuhfah">Tuhfat al-Muhtaj</option>
        <option value="nihayah">Nihayat al-Muhtaj</option>
        <option value="mughni">Mughni -l al-Muhtaj</option>-->
          <option value="mahalli">Kanz al-Raghibin</option>
        </select>
        <select
          on:change={(e) => onSelectLayout(e)}
          bind:value={selectedLayout}
        >
          <option value="layout">layout</option>
          <option value="top-bottom">top bottom</option>
          <option value="side-by-side">side by side</option>
          <option value="integrated">integrated</option>
        </select>
      </div>
      <div>
        <select
          on:change={(e) => onSelectTerminology(e)}
          bind:value={selectedTerminology}
        >
          <option value="none">key terminology</option>
          <option value="adhhar">الأظهر</option>
          <option value="mashhur">المشهور</option>
        </select>
      </div>
    </div>
    <div class={`text-container ${selectedLayout} ${slideIn ? "slidin" : ""}`}>
      {#if selectedLayout !== "integrated"}
        <p transition:fade class="text">
          {#if !searchResults}
            {text}
          {:else}
            {@html searchResults}
          {/if}
        </p>
      {/if}
      {#if selectedCommentaryKey && commentary.key === selectedCommentaryKey}
        <div transition:fade class="commentary">
          <p>{commentary.text}</p>
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --section-padding: 4px;
  }

  main {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    border: 1px solid lightgray;
    border-radius: 2px;
    max-width: 960px;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .filter-bar {
    height: 108px;
    box-sizing: border-box;
    border-bottom: 1px solid gray;
  }
  .input-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: var(--section-padding);
  }
  .filter-bar .search-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 2px;
    flex: 1.5;
  }
  .filter-bar .search-icon {
    margin-right: 4px;
    color: #4791db;
  }
  .filter-bar .search-filter input {
    height: 30px;
    width: 100%;
    margin: 0 4px 0 4px;
    border: none;
  }
  .filter-bar select {
    background-color: white;
    border: 1px solid lightgray;
    max-width: 250px;
    height: 36px;
    margin: 0 4px 0 4px;
    flex: 1;
  }
  .text-container {
    display: grid;
    grid-template-columns: auto;
    padding: 20px;
    direction: rtl;

    animation: 1s slideinDefault ease;
  }
  .text-container.kuning {
    background-color: #d9c389;
  }
  .text-container p {
    line-height: 161.8%;
    margin-top: 4px;
    padding: 0;
    direction: rtl;
    font-size: 24px;
    color: #424242;
  }
  .text-container.integrated .commentary {
    border: unset;
  }
  .text-container.side-by-side.slidin {
    animation: 0.75s slideinSideBySide ease;
  }

  .text-container.top-bottom.slidin {
    animation: 0.5s slideinTopBottom ease;
  }

  @keyframes slideinDefault {
    from {
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes slideinSideBySide {
    from {
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes slideinTopBottom {
    from {
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  .text-container.side-by-side {
    grid-template-columns: auto auto;
    gap: 10px;
  }
  .text-container.side-by-side .commentary {
    border-top: none;
    border-right: 1px solid lightgray;
  }
  .text-container.side-by-side .commentary p {
    margin: 0 20px 0 0;
  }
  .commentary {
    border-top: 1px solid lightgray;
  }
  .commentary p {
    margin-top: 18px;
  }
</style>
