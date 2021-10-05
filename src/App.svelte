<script lang="ts">
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";
  type Layout = "layout" | "top-bottom" | "side-by-side" | "integrated";
  type SelectedCommentaryKey = "none" | "mahalli";
  let text: string = `
  وَمِنْهَا بَيَانُ الْقَوْلَيْنِ وَالْوَجْهَيْنِ وَالطَّرِيقَيْنِ وَالنَّصِّ وَمَرَاتِبِ الْخِلَافِ فِي جَمِيعِ الْحَالَاتِ فَحَيْثُ أَقُولُ فِي الْأَظْهَرِ أَوْ الْمَشْهُورِ فَمِنْ الْقَوْلَيْنِ أَوْ الْأَقْوَالِ فَإِنْ قَوِيَ الْخِلَافُ قُلْت الْأَظْهَرُ  وَإِلَّا فَالْمَشْهُورُ  وَحَيْثُ أَقُولُ الْأَصَحُّ أَوْ الصَّحِيحُ فَمِنْ الْوَجْهَيْنِ أَوْ الْأَوْجُهِ  فَإِنْ قَوِيَ الْخِلَافُ قُلْت الْأَصَحُّ وَإِلَّا فَالصَّحِيحُ وَحَيْثُ أَقُولُ الْمَذْهَبُ فَمِنْ الطَّرِيقَيْنِ أَوْ الطُّرُقِ وَحَيْثُ أَقُولُ النَّصُّ فَهُوَ نَصُّ الشَّافِعِيِّ رَحِمَهُ اللَّهُ وَيَكُونُ هُنَاكَ  وَجْهٌ ضَعِيفٌ أَوْ قَوْلٌ مُخَرَّجٌ وَحَيْثُ أَقُولُ الْجَدِيدُ فَالْقَدِيمُ خِلَافُهُ أَوْ الْقَدِيمُ أَوْ فِي قَوْلٍ قَدِيمٍ فَالْجَدِيدُ خِلَافُهُ وَحَيْثُ أَقُولُ: وَقِيلَ كَذَا، فَهُوَ وَجْهٌ ضَعِيفٌ، وَالصَّحِيحُ أَوْ الْأَصَحُّ خِلَافُهُ وَحَيْثُ أَقُولُ: وَفِي قَوْلٍ كَذَا فَالرَّاجِحُ خِلَافُهُ 
  `;
  let commentary: { [key: string]: any; text: string } = {
    key: "mahalli",
    text: `
    (وَمِنْهَا بَيَانُ الْقَوْلَيْنِ وَالْوَجْهَيْنِ وَالطَّرِيقَيْنِ وَالنَّصِّ وَمَرَاتِبِ الْخِلَافِ) قُوَّةً وَضَعْفًا فِي الْمَسَائِلِ (فِي جَمِيعِ الْحَالَاتِ) بِخِلَافِ الْمُحَرَّرِ فَتَارَةً يُبَيِّنُ نَحْوَ أَصَحِّ الْقَوْلَيْنِ وَأَظْهَرِ الْوَجْهَيْنِ، وَتَارَةً لَا يُبَيِّنُ نَحْوَ الْأَصَحِّ وَالْأَظْهَرِ (فَحَيْثُ أَقُولُ فِي الْأَظْهَرِ أَوْ الْمَشْهُورِ فَمِنْ الْقَوْلَيْنِ أَوْ الْأَقْوَالِ) لِلشَّافِعِيِّ رَضِيَ اللَّهُ عَنْهُ (فَإِنْ قَوِيَ الْخِلَافُ) لِقُوَّةِ مُدْرَكِهِ (قُلْت الْأَظْهَرُ) الْمُشْعِرُ بِظُهُورِ مُقَابِلِهِ (وَإِلَّا فَالْمَشْهُورُ) الْمُشْعِرُ بِغَرَابَةِ مُقَابِلِهِ لِضَعْفِ مُدْرَكِهِ. (وَحَيْثُ أَقُولُ الْأَصَحُّ أَوْ الصَّحِيحُ فَمِنْ الْوَجْهَيْنِ أَوْ الْأَوْجُهِ) لِلْأَصْحَابِ يَسْتَخْرِجُونَهَا مِنْ كَلَامِ الشَّافِعِيِّ رَضِيَ اللَّهُ عَنْهُ (فَإِنْ قَوِيَ الْخِلَافُ قُلْت الْأَصَحُّ وَإِلَّا فَالصَّحِيحُ) وَلَمْ يُعَبِّرْ بِذَلِكَ فِي الْأَقْوَالِ تَأَدُّبًا مَعَ الْإِمَامِ الشَّافِعِيِّ رَضِيَ اللَّهُ عَنْهُ كَمَا قَالَ، فَإِنَّ الصَّحِيحَ مِنْهُ مُشْعِرٌ بِفَسَادِ مُقَابِلِهِ. (وَحَيْثُ أَقُولُ الْمَذْهَبُ فَمِنْ الطَّرِيقَيْنِ أَوْ الطُّرُقِ) وَهِيَ اخْتِلَافُ الْأَصْحَابِ فِي حِكَايَةِ الْمَذْهَبِ كَأَنْ يَحْكِيَ بَعْضُهُمْ فِي الْمَسْأَلَةِ قَوْلَيْنِ أَوْ وَجْهَيْنِ لِمَنْ تَقَدَّمَ، وَيَقْطَعَ بَعْضُهُمْ بِأَحَدِهِمَا ثُمَّ الرَّاجِحُ الَّذِي عَبَّرَ عَنْهُ بِالْمَذْهَبِ إمَّا طَرِيقُ الْقَطْعِ أَوْ الْمُوَافِقِ لَهَا مِنْ طَرِيقِ الْخِلَافِ أَوْ الْمُخَالِفِ لَهَا كَمَا سَيَظْهَرُ فِي الْمَسَائِلِ، وَمَا قِيلَ مِنْ أَنَّ مُرَادَهُ الْأَوَّلُ وَأَنَّهُ الْأَغْلَبُ مَمْنُوعٌ (وَحَيْثُ أَقُولُ النَّصُّ فَهُوَ نَصُّ الشَّافِعِيِّ رَحِمَهُ اللَّهُ وَيَكُونُ هُنَاكَ) أَيْ مُقَابِلُهُ (وَجْهٌ ضَعِيفٌ أَوْ قَوْلٌ مُخَرَّجٌ) مِنْ نَصٍّ لَهُ فِي نَظِيرِ الْمَسْأَلَةِ لَا يُعْمَلُ بِهِ. (وَحَيْثُ أَقُولُ الْجَدِيدُ فَالْقَدِيمُ خِلَافُهُ أَوْ الْقَدِيمُ أَوْ فِي قَوْلٍ قَدِيمٍ فَالْجَدِيدُ خِلَافُهُ). وَالْقَدِيمُ مَا قَالَهُ الشَّافِعِيُّ رَضِيَ اللَّهُ عَنْهُ بِالْعِرَاقِ، وَالْجَدِيدُ مَا قَالَهُ بِمِصْرِ، وَالْعَمَلُ عَلَيْهِ إلَّا فِيمَا يُنَبِّهُ عَلَيْهِ كَامْتِدَادِ وَقْتِ الْمَغْرِبِ إلَى مَغِيبِ الشَّفَقِ الْأَحْمَرِ فِي الْقَدِيمِ كَمَا سَيَأْتِي. (وَحَيْثُ أَقُولُ: وَقِيلَ كَذَا، فَهُوَ وَجْهٌ ضَعِيفٌ، وَالصَّحِيحُ أَوْ الْأَصَحُّ خِلَافُهُ وَحَيْثُ أَقُولُ: وَفِي قَوْلٍ كَذَا فَالرَّاجِحُ خِلَافُهُ) وَيَتَبَيَّنُ قُوَّةُ الْخِلَافِ وَضَعْفُهُ مِنْ مُدْرَكِهِ
    `,
  };
  let searchFilter: HTMLInputElement;
  let searchTerm = "القولين";
  let selectedCommentaryKey: SelectedCommentaryKey = "mahalli";
  let selectedLayout: Layout = "top-bottom";
  let slideIn = false;

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
    const textWithoutDiacritics = text.replace(
      /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g,
      ""
    );
    const searchTermIndex = textWithoutDiacritics.indexOf(searchTerm);
    if (searchTermIndex != -1) {
      const match = textWithoutDiacritics.substring(
        searchTermIndex,
        searchTermIndex + searchTerm.length
      );
    } else {
      return;
    }
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
    </div>
    <div class={`text-container ${selectedLayout} ${slideIn ? "slidin" : ""}`}>
      {#if selectedLayout !== "integrated"}
        <p transition:fade class="text">{text}</p>
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
