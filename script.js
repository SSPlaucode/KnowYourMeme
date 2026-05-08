/* ═══════════════════════════════════════════════
   DATA — 18 memes across 4 categories
═══════════════════════════════════════════════ */
const MEMES = [
  /* ── POLITICAL ── */
  {
    id: 1, name: "Hide the Pain Harold", category: "Political", year: 2011, emoji: "😬",
    spread: 4,
    origin: "A stock photo model named András Arató became famous for his uncomfortably forced smile, which internet users turned into a symbol of suppressed suffering.",
    timeline: [
      { year: "2011", text: "András Arató's stock photos discovered on Getty Images." },
      { year: "2012", text: "Image boards begin captioning photos with relatable 'hiding pain' scenarios." },
      { year: "2015", text: "Explodes on Facebook; used to satirize everyday dissatisfaction." },
      { year: "2017", text: "Arató embraces his meme status, appearing in interviews and ads." },
      { year: "2020+", text: "Universally adopted for political and economic commentary." }
    ],
    significance: "Harold represents the collective experience of masking discomfort with a polite smile — a sentiment deeply resonant in both personal and political contexts. His image transcends language barriers.",
    examples: ["Tax season Harold", "Monday morning Harold", "Election results Harold", "End of vacation Harold"]
  },
  {
    id: 2, name: "Distracted Boyfriend", category: "Political", year: 2017, emoji: "👀",
    spread: 5,
    origin: "A Spanish stock photo by Antonio Guillem showing a man ogling a passing woman while his girlfriend looks on in disbelief became the internet's go-to template for depicting betrayal or distraction.",
    timeline: [
      { year: "2015", text: "Original stock photos uploaded to iStock by Antonio Guillem." },
      { year: "2017", text: "Viral explosion — used to represent neglecting one thing for another." },
      { year: "2018", text: "Referenced in major news outlets; brands adopt it for marketing." },
      { year: "2019", text: "Recursive versions (meme within meme) proliferate." },
      { year: "2022+", text: "Remains a top-tier political metaphor format globally." }
    ],
    significance: "A universal metaphor for choosing the new over the established. Politicians, economists, and activists all use it to illustrate policy trade-offs and shifting priorities.",
    examples: ["Government ignoring citizens", "Voter switching parties", "Tech companies vs privacy", "Budget priorities"]
  },
  {
    id: 3, name: "Change My Mind", category: "Political", year: 2018, emoji: "🧐",
    spread: 4,
    origin: "Comedian Steven Crowder sat at a campus table with a bold sign reading 'Male Privilege is a Myth. Change My Mind.' The image was repurposed as a debate-challenge template.",
    timeline: [
      { year: "2018", text: "Original photo taken at Texas Christian University." },
      { year: "2018", text: "Goes viral as an editable debate template within weeks." },
      { year: "2019", text: "Used widely across political spectrums to challenge popular opinions." },
      { year: "2021+", text: "Evolved into ironic and self-aware variations." }
    ],
    significance: "Embodies internet debate culture — the performative challenge of defending a provocative stance. It's equally used sincerely and sarcastically.",
    examples: ["Pineapple belongs on pizza", "Tabs > Spaces", "Cereal before milk", "Hot dogs are sandwiches"]
  },
  {
    id: 4, name: "Two Buttons", category: "Political", year: 2016, emoji: "🔴",
    spread: 3,
    origin: "A webcomic strip by Jake Clark showing a sweaty man struggling to choose between two buttons was widely adapted to illustrate impossible choices or contradictory beliefs.",
    timeline: [
      { year: "2016", text: "Original webcomic published by illustrator Jake Clark." },
      { year: "2017", text: "Becomes a staple meme on Reddit and Twitter for dilemma humor." },
      { year: "2018–20", text: "Used heavily in political satire to depict voter indecision." },
      { year: "2022+", text: "Continues as a reliable format for binary dilemma commentary." }
    ],
    significance: "Captures decision paralysis and cognitive dissonance, resonating strongly during election cycles and policy debates.",
    examples: ["Tax cuts but deficit", "Freedom but safety", "Speed but accuracy", "Sleep vs productivity"]
  },
  {
    id: 5, name: "Grim Reaper Knocking", category: "Political", year: 2020, emoji: "💀",
    spread: 4,
    origin: "An editorial cartoon depicting the Grim Reaper knocking on doors became a powerful visual shorthand for impending doom, widely used during the COVID-19 pandemic.",
    timeline: [
      { year: "2020", text: "Widely circulated at pandemic onset to depict mortality risk." },
      { year: "2020", text: "Adapted for economic collapse, climate change commentary." },
      { year: "2021+", text: "Used broadly for any looming systemic threat." }
    ],
    significance: "Dark humor as political commentary — the meme allowed people to process collective existential dread with a degree of ironic distance.",
    examples: ["Reaper at nursing home door", "Reaper at economy's door", "Reaper vs healthcare system"]
  },

  /* ── WHOLESOME ── */
  {
    id: 6, name: "This is Fine Dog", category: "Wholesome", year: 2013, emoji: "🔥",
    spread: 5,
    origin: "From KC Green's Gunshow webcomic, a dog sits calmly in a burning room sipping coffee. Originally satirical, it evolved into a wholesome expression of resilient optimism.",
    timeline: [
      { year: "2013", text: "KC Green publishes the 'On Fire' strip in his Gunshow comic." },
      { year: "2014", text: "GIF format spreads across Tumblr and Reddit." },
      { year: "2016", text: "Peaks during US election; becomes symbol of chaos acceptance." },
      { year: "2020", text: "Widely used for pandemic coping humor." },
      { year: "2022+", text: "Universally recognized icon of finding peace amid chaos." }
    ],
    significance: "Beyond dark humor, 'This is Fine' became an ironic affirmation — a communal acknowledgment that things are hard, yet we persist. It fosters solidarity.",
    examples: ["Finals week", "Post-holiday finances", "2020 in general", "Monday energy", "Climate progress"]
  },
  {
    id: 7, name: "Surprised Pikachu", category: "Wholesome", year: 2018, emoji: "⚡",
    spread: 5,
    origin: "A screenshot of Pikachu from the original Pokémon anime displaying an exaggerated open-mouthed shocked expression became the definitive reaction image for predictable-yet-surprising outcomes.",
    timeline: [
      { year: "1997", text: "Original anime screenshot taken from early Pokémon episode." },
      { year: "2018", text: "Viral spread after Reddit post pairing it with setup-punchline format." },
      { year: "2019", text: "Mainstream adoption across all social media platforms." },
      { year: "2021+", text: "One of the most recognized meme faces in internet history." }
    ],
    significance: "Surprised Pikachu captures a universally relatable moment of feigned shock at a completely expected outcome — making it both comedic and genuinely wholesome.",
    examples: ["Eating junk food, gaining weight", "Not studying, failing exam", "Sleeping late, tired morning"]
  },
  {
    id: 8, name: "Wholesome Seal", category: "Wholesome", year: 2016, emoji: "🦭",
    spread: 3,
    origin: "A photo of an adorable baby seal with soulful eyes became a template for expressing sincere affection and positivity, offering a counterpoint to ironic internet culture.",
    timeline: [
      { year: "2016", text: "Photo circulates on Reddit's r/aww with wholesome captions." },
      { year: "2017", text: "Becomes dedicated format for supportive and kind messages." },
      { year: "2019+", text: "Endures as a symbol of unironic internet positivity." }
    ],
    significance: "In an era of irony and cynicism, Wholesome Seal represents genuine warmth. It's often used to celebrate friends' achievements or offer comfort.",
    examples: ["You got this!", "Proud of you", "You matter!", "Keep going"]
  },
  {
    id: 9, name: "Two Bros Chilling", category: "Wholesome", year: 2017, emoji: "🛁",
    spread: 2,
    origin: "A lyric from the SpongeBob episode 'Rock-a-Bye Bivalve' became a meme celebrating platonic male friendship and dismantling toxic masculinity through absurdist humor.",
    timeline: [
      { year: "2005", text: "SpongeBob episode 'Rock-a-Bye Bivalve' airs on Nickelodeon." },
      { year: "2017", text: "Clip resurfaces on Tumblr as commentary on male friendship norms." },
      { year: "2019+", text: "Widely used to celebrate bromance and non-toxic masculinity." }
    ],
    significance: "Normalized discussions about platonic intimacy and emotional expression among men using the safe, non-threatening lens of a children's cartoon.",
    examples: ["Guy friends road trip", "Study buddies", "Gym partners", "Gaming all night"]
  },
  {
    id: 10, name: "A Dog Called Cheems", category: "Wholesome", year: 2017, emoji: "🐕",
    spread: 4,
    origin: "A Shiba Inu dog named Balltze (nicknamed Cheems) photographed with a McDonald's burger became the sweet, speech-impediment-having counterpart to the aggressive 'Swole Doge' format.",
    timeline: [
      { year: "2017", text: "Balltze's photo goes viral for its endearing expression." },
      { year: "2019", text: "Paired with Swole Doge in 'then vs now' comparison memes." },
      { year: "2020", text: "Universally beloved for representing humble, soft energy." },
      { year: "2023", text: "Balltze passes away; internet mourns collectively." }
    ],
    significance: "Cheems embodied a gentle, non-threatening persona that resonated with people who felt overwhelmed by modern demands — a mascot for soft resilience.",
    examples: ["Cheems vs homework", "Past me vs present me", "Expectations vs reality"]
  },

  /* ── GAMING ── */
  {
    id: 11, name: "GG EZ", category: "Gaming", year: 2010, emoji: "🎮",
    spread: 3,
    origin: "A competitive gaming trash-talk phrase meaning 'good game, easy victory' that evolved from sincere sportsmanship into ironic self-deprecation and gentle humor.",
    timeline: [
      { year: "2010", text: "Phrase originates in competitive online gaming communities." },
      { year: "2014", text: "Overwatch bans the phrase; AI auto-replaces it with compliments." },
      { year: "2016+", text: "Adopted ironically even in non-gaming contexts." }
    ],
    significance: "Captures the fine line between competitive banter and unsportsmanlike conduct. The phrase's journey reflects how gaming culture intersects with broader social norms.",
    examples: ["After barely winning", "Failed DIY project", "Surviving Monday", "End of semester"]
  },
  {
    id: 12, name: "Press F to Pay Respects", category: "Gaming", year: 2014, emoji: "🎖️",
    spread: 5,
    origin: "Call of Duty: Advanced Warfare included a cutscene requiring players to press 'F' on keyboard to pay respects at a funeral — an earnest moment that became hilariously absurd to players.",
    timeline: [
      { year: "2014", text: "CoD: Advanced Warfare releases with the infamous 'Press F' prompt." },
      { year: "2014", text: "Immediately mocked online; spawns thousands of parody posts." },
      { year: "2015–16", text: "Expands beyond gaming into general condolence expression." },
      { year: "2020+", text: "Entrenched in internet vocabulary as universal tribute gesture." }
    ],
    significance: "A perfect example of unintentional comedy becoming cultural shorthand. 'Press F' now serves as a genuine yet ironic way to acknowledge loss or failure.",
    examples: ["F in the chat", "Fallen pizza slice", "Dropped phone screen", "Bad patch notes", "Season finale deaths"]
  },
  {
    id: 13, name: "It's Over 9000!", category: "Gaming", year: 2006, emoji: "🔥",
    spread: 4,
    origin: "A line from Dragon Ball Z — 'It's over 9000!' screamed by Vegeta — was transformed by a YouTube video into a viral meme about exceeding expectations or overwhelming quantities.",
    timeline: [
      { year: "1996", text: "Original 'It's over 8000!' line airs in Japanese Dragon Ball Z." },
      { year: "2006", text: "English dub changes number to 9000; YouTube video goes viral." },
      { year: "2009", text: "Reddit and 4chan spread it widely; becomes a power-level meme." },
      { year: "2015+", text: "Referenced in mainstream media, TV shows, and advertising." }
    ],
    significance: "One of the earliest viral video memes, proving that dubbed dialogue changes and passionate fan communities could birth internet phenomena of enormous scale.",
    examples: ["Server load", "Final exam scores", "Sale discount", "Sub counts", "My anxiety levels"]
  },
  {
    id: 14, name: "Dark Souls: You Died", category: "Gaming", year: 2011, emoji: "⚔️",
    spread: 4,
    origin: "The stark 'YOU DIED' screen in FromSoftware's Dark Souls became a meme about difficulty, perseverance, and the satisfaction of overcoming seemingly impossible challenges.",
    timeline: [
      { year: "2011", text: "Dark Souls releases; 'YOU DIED' becomes iconic immediately." },
      { year: "2012", text: "Let's Play videos spread the meme to non-gaming audiences." },
      { year: "2015", text: "Used broadly for any task that feels brutally difficult." },
      { year: "2022+", text: "Elden Ring revives the format; a new generation discovers it." }
    ],
    significance: "Represents internet culture's relationship with difficulty and masochistic persistence. It legitimized 'git gud' as a philosophy of self-improvement.",
    examples: ["Cooking a new recipe", "Learning to drive", "Tax filing", "First gym day", "Public speaking"]
  },
  {
    id: 15, name: "We Do a Little Trolling", category: "Gaming", year: 2021, emoji: "😈",
    spread: 3,
    origin: "A quote often attributed (possibly fictitiously) to the Minecraft content creator TommyInnit during a stream. The phrase captures the playful, chaotic spirit of gaming culture.",
    timeline: [
      { year: "2020", text: "TommyInnit rises to fame on Minecraft Dream SMP server." },
      { year: "2021", text: "'We do a little trolling' spreads as caption for mischievous acts." },
      { year: "2022+", text: "Used broadly for any minor, harmless prank or cheeky move." }
    ],
    significance: "Epitomizes the lighthearted trolling that defines much of gaming community culture — mischief for its own sake, without malicious intent.",
    examples: ["Adding extra hot sauce", "Sneaking in dad jokes", "Quietly changing WiFi password", "Rickrolling"]
  },

  /* ── REACTION ── */
  {
    id: 16, name: "Side-Eye Chloe", category: "Reaction", year: 2013, emoji: "😒",
    spread: 4,
    origin: "A video of young Chloe reacting to a Disney World surprise with a deadpan side-eye captured a perfectly relatable expression of unimpressed skepticism.",
    timeline: [
      { year: "2013", text: "Family video goes viral showing Chloe's iconic expression." },
      { year: "2016", text: "Re-emerges as a go-to skepticism reaction image." },
      { year: "2021", text: "Resurges massively on TikTok and Twitter." },
      { year: "2023", text: "Chloe's image sold as NFT for $74,000; she donates to charity." }
    ],
    significance: "Chloe's expression is a perfect analog for the moment when reality fails to meet expectation — cynicism and judgment distilled into a single glance.",
    examples: ["Friend's 'easy' recipe", "Surprise party you knew about", "5-minute meeting at 4:55pm", "Decaf coffee"]
  },
  {
    id: 17, name: "Woman Yelling at Cat", category: "Reaction", year: 2019, emoji: "😤",
    spread: 5,
    origin: "A combination of two unrelated images — a woman from The Real Housewives pointing angrily, and a confused white cat (Smudge) sitting at a dinner table — became the defining reaction format for arguments.",
    timeline: [
      { year: "2015", text: "Smudge the cat's photo taken at a dinner table; goes viral on Tumblr." },
      { year: "2018", text: "Real Housewives confrontation image circulates separately." },
      { year: "2019", text: "Two images combined; explodes across Twitter as argument meme." },
      { year: "2020+", text: "One of the most versatile and widely-used meme formats ever." }
    ],
    significance: "The format's genius lies in its dual perspective — allowing the user to occupy either role depending on context. It universalizes conflict with gentle absurdity.",
    examples: ["Client vs designer", "Brain vs heart", "Me at 10pm vs Me at 2am", "Expectation vs reality"]
  },
  {
    id: 18, name: "Drake Hotline Bling", category: "Reaction", year: 2016, emoji: "🎤",
    spread: 5,
    origin: "A screenshot from Drake's 'Hotline Bling' music video showing two poses — disapproval and approval — became the internet's most iconic binary preference format.",
    timeline: [
      { year: "2015", text: "Hotline Bling music video releases; dance moves immediately mocked." },
      { year: "2016", text: "Two-panel meme format popularized on Reddit and Twitter." },
      { year: "2017", text: "Adopted by brands, politicians, and academics alike." },
      { year: "2020+", text: "Remains among the most versatile and used meme templates globally." }
    ],
    significance: "Deceptively simple, endlessly reusable. The Drake format democratized meme creation — anyone could make a recognizable, readable joke in seconds.",
    examples: ["Dark mode vs Light mode", "Pizza at midnight", "Coffee vs sleep", "Ctrl+Z vs Ctrl+Y"]
  }
];

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentFilter = 'All';
let currentSearch = '';

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function getFiltered() {
  return MEMES.filter(m => {
    const matchCat = currentFilter === 'All' || m.category === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q ||
      m.name.toLowerCase().includes(q) ||
      m.origin.toLowerCase().includes(q) ||
      m.examples.some(e => e.toLowerCase().includes(q)) ||
      m.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function buildSpread(n) {
  let html = '<div class="spread-bar">';
  for (let i = 1; i <= 5; i++) {
    html += `<div class="spread-dot${i <= n ? ' lit' : ''}"></div>`;
  }
  return html + '</div>';
}

/* ═══════════════════════════════════════════════
   RENDER GRID
═══════════════════════════════════════════════ */
function renderGrid() {
  const grid = document.getElementById('memeGrid');
  const filtered = getFiltered();
  document.getElementById('resultCount').textContent = filtered.length;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🤔</div>
        <h3>No Memes Found</h3>
        <p>Try a different search term or category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((m, i) => `
    <article class="meme-card" data-id="${m.id}" style="animation-delay:${i * 0.05}s">
      <div class="card-img">${m.emoji}</div>
      <div class="card-body">
        <div class="card-meta">
          <span class="cat-badge cat-${m.category}">${m.category}</span>
          <span class="card-year">${m.year}</span>
        </div>
        <h2 class="card-title">${m.name}</h2>
        <p class="card-origin">${m.origin}</p>
        <div class="card-footer">
          ${buildSpread(m.spread)}
          <span class="card-cta">VIEW LORE →</span>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.meme-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
function openModal(id) {
  const m = MEMES.find(x => x.id === id);
  if (!m) return;

  const modalHero = document.getElementById('modalHero');
  modalHero.textContent = m.emoji;
  modalHero.style.fontSize = '7rem';

  document.getElementById('modalTitle').textContent = m.name;

  const badge = document.getElementById('modalBadge');
  badge.textContent = m.category;
  badge.className = `cat-badge cat-${m.category}`;

  document.getElementById('modalOrigin').textContent = m.origin;
  document.getElementById('modalSignificance').textContent = m.significance;

  document.getElementById('modalTimeline').innerHTML = m.timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-year">${t.year}</div>
      <div class="timeline-text">${t.text}</div>
    </div>
  `).join('');

  document.getElementById('modalExamples').innerHTML = m.examples
    .map(e => `<span class="example-chip">${e}</span>`)
    .join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════
   FILTERS & SEARCH
═══════════════════════════════════════════════ */
function filterAll() {
  currentFilter = 'All';
  currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-cat="All"]').classList.add('active');
  renderGrid();
}

/* ═══════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════ */
document.getElementById('filterRow').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  currentFilter = btn.dataset.cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid();
});

document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value.trim();
  renderGrid();
});

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.getElementById('heroTotal').textContent = MEMES.length;
renderGrid();
