// ============================================================
//  ONE LINE TO EDIT: paste your Amazon Associates Store ID here.
//  It looks like "kevinspicks-20". Then every link on the site
//  earns you commission automatically.
// ============================================================
const AMAZON_TAG = "mrallenspick2-20";

const PRODUCTS = [
  // ---------- A/V GEAR ----------
  { cat:"av", name:"Shure SM58 Vocal Mic",
    why:"The industry's default handheld. Drop it, sing through it, hand it to a drunk groomsman. It still works.",
    skip:"Nothing. If you only own one mic, own this.",
    q:"shure sm58", price:"$99" },
  { cat:"av", name:"Shure BLX288/PG58 Wireless Dual",
    why:"Two wireless handhelds on one receiver for real events. Cheap enough to buy before the gig pays for it.",
    skip:"If you're only doing speaking panels with a fixed podium, wired is fine.",
    q:"shure blx288 pg58 dual wireless", price:"$650" },
  { cat:"av", name:"QSC K12.2 Powered Speaker",
    why:"Loud, clean, and built to be rented out. The speaker other A/V companies will actually sub-rent from you.",
    skip:"Too much box for a living room or a 40-person party.",
    q:"qsc k12.2 powered speaker", price:"$1,000" },
  { cat:"av", name:"Yamaha MG32/14FX Mixer",
    why:"My own board. 32 channels, built-in effects, no learning curve on site at 6am.",
    skip:"Digital is better if you need scene recall and remote control.",
    q:"yamaha mg32 14fx mixer", price:"$1,300" },
  { cat:"av", name:"Hosa 25ft XLR Cables (10-pack)",
    why:"Twenty-five feet is the right length almost every time. Buy them in bulk and label both ends.",
    skip:"Don't buy the cheapest no-name pack. You'll replace them within a year.",
    q:"hosa xlr cable 25 ft 10 pack", price:"$90" },
  { cat:"av", name:"Pro Gaff Tape 2in Black",
    why:"Tapes cable to a ballroom floor and comes up clean. The mark of someone who has done this before.",
    skip:"Never use duct tape. It leaves residue and ruins the venue's floor and your reputation.",
    q:"pro gaff tape 2 inch black", price:"$25" },
  { cat:"av", name:"On-Stage SS7761B Speaker Stand",
    why:"Gets speakers above head height, which is 80% of good sound in a room with people in it.",
    skip:"Skip the cheap aluminum ones if you'll load in and out weekly.",
    q:"on stage ss7761b speaker stand", price:"$70" },
  { cat:"av", name:"Chauvet SlimPAR 56 Wash Light",
    why:"Cheapest way to make a plain room look designed. Four of these on a wedding floor changes everything.",
    skip:"If the venue already has an installed lighting rig with a house tech.",
    q:"chauvet slimpar 56", price:"$140" },
  { cat:"av", name:"Furman M-8x2 Power Conditioner",
    why:"Protects your gear from bad venue power and gives you front-panel outlets at the rack.",
    skip:"A basic surge strip is fine for a home setup.",
    q:"furman m-8x2 power conditioner", price:"$110" },
  { cat:"av", name:"5-Channel Cable Protector Ramp",
    why:"Hotels and ballrooms require cable protection. Owning it means you stop losing bookings over it.",
    skip:"Not needed if you only work outdoor venues on grass.",
    q:"5 channel cable protector ramp", price:"$120" },

  // ---------- HOME & PET ----------
  { cat:"home", name:"Wyze Cam v4",
    why:"Cheap enough to put several around a house or a gear trailer. Records locally with an SD card.",
    skip:"If you need pro-grade monitoring or cloud-only simplicity.",
    q:"wyze cam v4", price:"$35" },
  { cat:"home", name:"Eufy RoboVac",
    why:"Pet hair, every day, without thinking about it. The single best purchase I've made for a house with animals.",
    skip:"If you have high-pile carpet or a lot of cables on the floor.",
    q:"eufy robovac", price:"$200" },
  { cat:"home", name:"Levoit Core 300 Air Purifier",
    why:"Quiet, small, and it genuinely cuts dust and dander. Good for a bedroom or a small office.",
    skip:"Won't help much in a large open room.",
    q:"levoit core 300 air purifier", price:"$100" },

  // ---------- BUSINESS TECH ----------
  { cat:"biz", name:"Anker 737 Power Bank",
    why:"Charges a laptop and a phone on a 14-hour event day. Sits in the gear bag and saves you.",
    skip:"Overkill if you're never away from an outlet.",
    q:"anker 737 power bank", price:"$130" },
  { cat:"biz", name:"Elgato Stream Deck MK.2",
    why:"Turns lighting, camera, and audio changes into one button. Cuts dead air in livestreams.",
    skip:"Won't help if you don't stream or switch scenes.",
    q:"elgato stream deck mk2", price:"$150" },
  { cat:"biz", name:"Logitech Brio 4K Webcam",
    why:"4K, good in bad lighting, and it makes you look like you own a studio on a video call.",
    skip:"A laptop cam is fine for internal calls nobody records.",
    q:"logitech brio 4k webcam", price:"$180" }
];

const CAT_LABELS = { av:"A/V Gear", home:"Home & Pet", biz:"Business Tech" };

function link(q){ return "https://www.amazon.com/s?k=" + encodeURIComponent(q) + "&tag=" + AMAZON_TAG; }

function render(container, cat){
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  container.innerHTML = list.map(p => `
    <article class="card">
      <div class="tag">${CAT_LABELS[p.cat]}</div>
      <h3>${p.name}</h3>
      <p class="why">${p.why}</p>
      <p class="skip"><strong>Skip it if:</strong> ${p.skip}</p>
      <div class="cardfoot">
        <a class="btn" href="${link(p.q)}" target="_blank" rel="nofollow sponsored noopener">Check price on Amazon</a>
        <span class="price">~${p.price}</span>
      </div>
    </article>`).join("");
}
