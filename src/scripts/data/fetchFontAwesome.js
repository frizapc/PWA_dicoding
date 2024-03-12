import CONFIG from "../global/config";

async function FetchFontAwesomeIcon() {
  const data = await fetch(CONFIG.FONT_AWESOME);
  const datajson = await data.json();
  console.log(datajson);
}

export default FetchFontAwesomeIcon;
