/* import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./style.css";
type Layout = "top-bottom" | "side-by-side";

@customElement("main-app")
export class MainApp extends LitElement {
  private static readonly text: string = `
  وَمِنْهَا بَيَانُ الْقَوْلَيْنِ وَالْوَجْهَيْنِ وَالطَّرِيقَيْنِ وَالنَّصِّ وَمَرَاتِبِ الْخِلَافِ فِي جَمِيعِ الْحَالَاتِ فَحَيْثُ أَقُولُ فِي الْأَظْهَرِ أَوْ الْمَشْهُورِ فَمِنْ الْقَوْلَيْنِ أَوْ الْأَقْوَالِ فَإِنْ قَوِيَ الْخِلَافُ قُلْت الْأَظْهَرُ  وَإِلَّا فَالْمَشْهُورُ  وَحَيْثُ أَقُولُ الْأَصَحُّ أَوْ الصَّحِيحُ فَمِنْ الْوَجْهَيْنِ أَوْ الْأَوْجُهِ  فَإِنْ قَوِيَ الْخِلَافُ قُلْت الْأَصَحُّ وَإِلَّا فَالصَّحِيحُ وَحَيْثُ أَقُولُ الْمَذْهَبُ فَمِنْ الطَّرِيقَيْنِ أَوْ الطُّرُقِ وَحَيْثُ أَقُولُ النَّصُّ فَهُوَ نَصُّ الشَّافِعِيِّ رَحِمَهُ اللَّهُ وَيَكُونُ هُنَاكَ  وَجْهٌ ضَعِيفٌ أَوْ قَوْلٌ مُخَرَّجٌ وَحَيْثُ أَقُولُ الْجَدِيدُ فَالْقَدِيمُ خِلَافُهُ أَوْ الْقَدِيمُ أَوْ فِي قَوْلٍ قَدِيمٍ فَالْجَدِيدُ خِلَافُهُ وَحَيْثُ أَقُولُ: وَقِيلَ كَذَا، فَهُوَ وَجْهٌ ضَعِيفٌ، وَالصَّحِيحُ أَوْ الْأَصَحُّ خِلَافُهُ وَحَيْثُ أَقُولُ: وَفِي قَوْلٍ كَذَا فَالرَّاجِحُ خِلَافُهُ 
  `;
  private static readonly commentary: { [key: string]: any; text: string } = {
    key: "mahalli",
    text: `
    (وَمِنْهَا بَيَانُ الْقَوْلَيْنِ وَالْوَجْهَيْنِ وَالطَّرِيقَيْنِ وَالنَّصِّ وَمَرَاتِبِ الْخِلَافِ) قُوَّةً وَضَعْفًا فِي الْمَسَائِلِ (فِي جَمِيعِ الْحَالَاتِ) بِخِلَافِ الْمُحَرَّرِ فَتَارَةً يُبَيِّنُ نَحْوَ أَصَحِّ الْقَوْلَيْنِ وَأَظْهَرِ الْوَجْهَيْنِ، وَتَارَةً لَا يُبَيِّنُ نَحْوَ الْأَصَحِّ وَالْأَظْهَرِ (فَحَيْثُ أَقُولُ فِي الْأَظْهَرِ أَوْ الْمَشْهُورِ فَمِنْ الْقَوْلَيْنِ أَوْ الْأَقْوَالِ) لِلشَّافِعِيِّ رَضِيَ اللَّهُ عَنْهُ (فَإِنْ قَوِيَ الْخِلَافُ) لِقُوَّةِ مُدْرَكِهِ (قُلْت الْأَظْهَرُ) الْمُشْعِرُ بِظُهُورِ مُقَابِلِهِ (وَإِلَّا فَالْمَشْهُورُ) الْمُشْعِرُ بِغَرَابَةِ مُقَابِلِهِ لِضَعْفِ مُدْرَكِهِ. (وَحَيْثُ أَقُولُ الْأَصَحُّ أَوْ الصَّحِيحُ فَمِنْ الْوَجْهَيْنِ أَوْ الْأَوْجُهِ) لِلْأَصْحَابِ يَسْتَخْرِجُونَهَا مِنْ كَلَامِ الشَّافِعِيِّ رَضِيَ اللَّهُ عَنْهُ (فَإِنْ قَوِيَ الْخِلَافُ قُلْت الْأَصَحُّ وَإِلَّا فَالصَّحِيحُ) وَلَمْ يُعَبِّرْ بِذَلِكَ فِي الْأَقْوَالِ تَأَدُّبًا مَعَ الْإِمَامِ الشَّافِعِيِّ رَضِيَ اللَّهُ عَنْهُ كَمَا قَالَ، فَإِنَّ الصَّحِيحَ مِنْهُ مُشْعِرٌ بِفَسَادِ مُقَابِلِهِ. (وَحَيْثُ أَقُولُ الْمَذْهَبُ فَمِنْ الطَّرِيقَيْنِ أَوْ الطُّرُقِ) وَهِيَ اخْتِلَافُ الْأَصْحَابِ فِي حِكَايَةِ الْمَذْهَبِ كَأَنْ يَحْكِيَ بَعْضُهُمْ فِي الْمَسْأَلَةِ قَوْلَيْنِ أَوْ وَجْهَيْنِ لِمَنْ تَقَدَّمَ، وَيَقْطَعَ بَعْضُهُمْ بِأَحَدِهِمَا ثُمَّ الرَّاجِحُ الَّذِي عَبَّرَ عَنْهُ بِالْمَذْهَبِ إمَّا طَرِيقُ الْقَطْعِ أَوْ الْمُوَافِقِ لَهَا مِنْ طَرِيقِ الْخِلَافِ أَوْ الْمُخَالِفِ لَهَا كَمَا سَيَظْهَرُ فِي الْمَسَائِلِ، وَمَا قِيلَ مِنْ أَنَّ مُرَادَهُ الْأَوَّلُ وَأَنَّهُ الْأَغْلَبُ مَمْنُوعٌ (وَحَيْثُ أَقُولُ النَّصُّ فَهُوَ نَصُّ الشَّافِعِيِّ رَحِمَهُ اللَّهُ وَيَكُونُ هُنَاكَ) أَيْ مُقَابِلُهُ (وَجْهٌ ضَعِيفٌ أَوْ قَوْلٌ مُخَرَّجٌ) مِنْ نَصٍّ لَهُ فِي نَظِيرِ الْمَسْأَلَةِ لَا يُعْمَلُ بِهِ. (وَحَيْثُ أَقُولُ الْجَدِيدُ فَالْقَدِيمُ خِلَافُهُ أَوْ الْقَدِيمُ أَوْ فِي قَوْلٍ قَدِيمٍ فَالْجَدِيدُ خِلَافُهُ). وَالْقَدِيمُ مَا قَالَهُ الشَّافِعِيُّ رَضِيَ اللَّهُ عَنْهُ بِالْعِرَاقِ، وَالْجَدِيدُ مَا قَالَهُ بِمِصْرِ، وَالْعَمَلُ عَلَيْهِ إلَّا فِيمَا يُنَبِّهُ عَلَيْهِ كَامْتِدَادِ وَقْتِ الْمَغْرِبِ إلَى مَغِيبِ الشَّفَقِ الْأَحْمَرِ فِي الْقَدِيمِ كَمَا سَيَأْتِي. (وَحَيْثُ أَقُولُ: وَقِيلَ كَذَا، فَهُوَ وَجْهٌ ضَعِيفٌ، وَالصَّحِيحُ أَوْ الْأَصَحُّ خِلَافُهُ وَحَيْثُ أَقُولُ: وَفِي قَوْلٍ كَذَا فَالرَّاجِحُ خِلَافُهُ) وَيَتَبَيَّنُ قُوَّةُ الْخِلَافِ وَضَعْفُهُ مِنْ مُدْرَكِهِ
    `,
  };

  static slideAnimation = css`
    from {
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  `;

  static styles = css`
    .main-app {
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
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: space-between;
      padding: 4px;
    }
    .filter-bar input {
      margin: 0 4px 0 4px;
      flex: 1.5;
    }
    .filter-bar select {
      margin: margin: 0 4px 0 4px;
      flex: 1;
    }
    .text-container {
      display: grid;
      grid-template-columns: auto;
      padding: 20px;
      border-top: 1px solid lightgray;
      direction: rtl;
      animation: 1s slideinDefault ease;
    }
    .text-container p {
      line-height: 161.8%;
      margin-top: 4px;
      padding: 0;
      direction: rtl;
      font-size: 24px;
      color: black;
    }
    .text-container.side-by-side.slidin {
      animation: 0.75s slideinSideBySide ease;
    }

    .text-container.top-bottom.slidin {
      animation: 0.5s slideinTopBottom ease;
    }

    @keyframes slideinDefault {
      ${MainApp.slideAnimation}
    }

    @keyframes slideinSideBySide {
     ${MainApp.slideAnimation}
    }

    @keyframes slideinTopBottom {
      ${MainApp.slideAnimation}
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
  `;

  constructor() {
    super();
  }

  @property()
  options = null;
  @property()
  config = null;
  @property()
  searchTerm = "";
  @property()
  selectedCommentaryKey: string = "mahalli";
  @property()
  selectedLayout: Layout = "top-bottom";
  @property()
  slideIn = false;

  private _onInputChange(e: { target: { value: string } }) {
    this.searchTerm = e.target.value;
  }
  private _onSelectCommentary(e: { currentTarget: { value: any } }) {
    this.selectedCommentaryKey = e.currentTarget.value;
  }

  private _onSelectLayout(e: { currentTarget: { value: any } }) {
    this.selectedLayout = e.currentTarget.value;
    this.slideIn = true;
    console.log(this.selectedLayout);
  }

  private _renderSelectedCommentary() {
    return this.selectedCommentaryKey &&
      MainApp.commentary["key"] === this.selectedCommentaryKey
      ? html`<div class="commentary">
          <p>${MainApp.commentary["text"]}</p>
        </div>`
      : null;
  }

  protected render() {
    return html`<div class="main-app">
      ${this.searchTerm}
      <div class="filter-bar">
        <input placeholder="search" @input=${this._onInputChange} />
        <select @change=${this._onSelectCommentary}>
          <option>commentaries</option>
          <!--<option value="tuhfah">Tuhfat al-Muhtaj</option>
          <option value="nihayah">Nihayat al-Muhtaj</option>
          <option value="mughni">Mughni -l al-Muhtaj</option>-->
          <option value="mahalli">Kanz al-Raghibin</option>
        </select>
        <select @change=${this._onSelectLayout}>
          <option>layout</option>
          <option value="top-bottom">top bottom</option>
          <option value="side-by-side">side by side</option>
        </select>
      </div>
      <div
        class=${`text-container ${this.selectedLayout} ${
          this.slideIn ? "slidin" : ""
        }`}
      >
        <p class="text">${MainApp.text}</p>
        ${this._renderSelectedCommentary()}
      </div>
    </div>`;
  }
} */
export let i = 0;