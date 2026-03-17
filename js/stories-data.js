const STORIES = [
  {
    id: "skeleton",
    title: "Skeleton",
    year: 1892,
    summary: "A young man visits his uncle's estate and becomes obsessed with a local legend about a skeleton that walks at night. He encounters a mysterious, beautiful woman who seems to embody the legend. Pursuing her through moonlit ruins, he experiences a night of ecstatic, terrifying romance. In the morning, he learns she was a real woman—a widow who had been meeting her lover secretly. The \"supernatural\" was merely illicit love seen through the lens of his own imagination.",
    themes: [
      "The supernatural as projection of desire",
      "Romantic idealism vs. social reality",
      "The eroticization of death",
      "Colonial Gothic and its Indian adaptation"
    ],
    keyQuote: "He wants the woman to be a ghost, a skeleton, because that would make his desire romantic rather than merely sexual.",
    fullStory: "A young man arrives at his uncle's estate and hears the local myth of a skeleton that wanders at night. One evening by moonlight, he sees a pale woman by the river, a widow rumored to have died. Consumed by longing, he imagines her as a supernatural spirit. After a night of poetic terror, he learns she is living flesh: a widow meeting her lover in secret. The real haunting is the social constraints that render desire forbidden.",
    analysis: "Tagore's most Poe-like story, but with a twist that deconstructs the Gothic tradition. The narrator's \"haunting\" is his own erotic imagination—he wants the woman to be a ghost, a skeleton, because that would make his desire romantic rather than merely sexual. The widow's actual situation (clandestine meetings with a lover) is more socially transgressive than any ghost. Tagore suggests that Indian society produces its own Gothic: the real horror is not death but the living death of women denied legitimate pleasure. The story is also about reading—how we interpret signs according to our desires, seeing ghosts where there are only constrained lives."
  },
  {
    id: "a-single-night",
    title: "A Single Night",
    year: 1895,
    summary: "A young nationalist, released from prison, spends one night in a railway waiting room. He encounters various travelers: a Muslim merchant, a Christian convert, a wealthy landlord. Through their conversations, his revolutionary certainty dissolves. Each represents a different response to colonialism—accommodation, conversion, collaboration. By morning, he has lost his ideological clarity, burdened with complexity.",
    themes: [
      "Nationalism and its discontents",
      "The limits of political ideology",
      "Colonial modernity's fragmented subject",
      "The railway as space of encounter"
    ],
    keyQuote: "He came with answers and leaves with questions.",
    analysis: "Written during Tagore's own nationalist phase, this story marks his growing skepticism. The \"single night\" is a compressed education in the impossibility of pure resistance. The railway waiting room—a space of colonial modernity, of people in transit, of temporary community—becomes a philosophical theater. The young man's crisis is epistemological: he came with answers and leaves with questions. Tagore suggests that Indian modernity requires not heroic action but the harder work of holding contradictions. The story's form—dialogic, unresolved—enacts its content."
  },
  {
    id: "fools-gold",
    title: "Fool's Gold",
    year: 1893,
    summary: "A man discovers what he believes is a gold-bearing river. He abandons his modest life to pursue this dream, dragging his family into poverty and disgrace. The \"gold\" proves to be worthless mica. His obsession destroys him, while his pragmatic brother, who never believed, prospers. The story is told retrospectively by the ruined man's son.",
    themes: [
      "Illusion and disillusionment",
      "The American Dream in Bengal — Gold-rush mentality",
      "Rationality vs. romanticism",
      "Intergenerational trauma"
    ],
    keyQuote: "Perhaps the dream itself, however destructive, contains something the pragmatic life lacks.",
    analysis: "Tagore adapts the American gold-rush narrative to Bengal's riverine landscape. The father's obsession is simultaneously ridiculous and sympathetic—he wants transcendence, not mere wealth. The story questions whether \"fool's gold\" is always worthless: perhaps the dream itself, however destructive, contains something the pragmatic life lacks. The son's narration is crucial—he understands both his father's folly and his nobility. The story speaks to colonial Bengal's own illusions: the promise of English education, of nationalist revolution, of modernity itself."
  },
  {
    id: "holiday",
    title: "Holiday",
    year: 1892,
    summary: "A group of boys on holiday encounter a mysterious girl sitting on a fallen mast by the river. She seems to embody the freedom and beauty of the natural world. The boys are fascinated; one in particular forms a wordless connection with her. When they return the next day, she is gone—perhaps never really there, perhaps a village girl briefly escaped from labor. The story ends with the boy's lasting sense of loss for something unnamed.",
    themes: [
      "Childhood and its epiphanies",
      "The girl as symbol of nature/freedom",
      "The unattainable and its preservation in memory",
      "Class and gender barriers even in childhood"
    ],
    keyQuote: "The 'holiday' is both literal school vacation and the holiday from social identity that childhood allows.",
    analysis: "One of Tagore's most lyrical stories, often compared to Wordsworth's \"Intimations Ode.\" The girl is deliberately ambiguous—real child, nature spirit, projection of awakening desire. What matters is the boy's experience of transcendence, of the ordinary world suddenly revealing its beauty. The \"holiday\" is both literal school vacation and the holiday from social identity that childhood allows. The story's power lies in what it withholds: we never know who she was, why she sat there, what she felt. This opacity preserves the experience as pure possibility, unruined by knowledge."
  },
  {
    id: "kabuliwallah",
    title: "Kabuliwallah",
    year: 1892,
    summary: "Rahmat, an Afghan fruit-seller in Calcutta, befriends a small Bengali girl, Mini, who reminds him of his own daughter in Kabul. When he is imprisoned for stabbing a man who cheated him, he loses contact. Years later, released from jail, he visits Mini on her wedding day. She no longer recognizes him. In a moment of profound recognition, Rahmat realizes that his own daughter too would have grown up, would not know him. He gives his savings for Mini's wedding and departs, his fatherhood acknowledged through substitution.",
    themes: [
      "Transnational fatherhood and displacement",
      "The stranger/outsider in the nation",
      "Childhood innocence and adult forgetting",
      "Violence and its contexts — The stabbing is morally complex"
    ],
    keyQuote: "Mini stands for Rahmat's absent daughter, just as Calcutta stands for Kabul.",
    analysis: "Tagore's most internationally famous story, and deservedly so. Rahmat's \"crime\" is protective violence—he is cheated, reacts, is punished. The story questions colonial justice: who is the real criminal, the Afghan defending his honor or the system that exploits migrants? The emotional core is the structure of substitution: Mini stands for Rahmat's absent daughter, just as Calcutta stands for Kabul. The wedding scene—Mini grown, strange, about to be given to another man—enacts the universal tragedy of fathers and daughters. Rahmat's generosity in this moment of loss is Tagore's vision of human nobility transcending nationality."
  },
  {
    id: "the-editor",
    title: "The Editor",
    year: 1893,
    summary: "A brilliant but arrogant young editor destroys an older writer's reputation with a vicious review. Years later, the editor himself is destroyed by similar criticism. He encounters his victim, now successful, who treats him with magnanimous forgiveness. The editor cannot bear this generosity—it would require him to acknowledge his own cruelty. He retreats into bitterness rather than accept grace.",
    themes: [
      "The violence of literary criticism",
      "Pride and its prisons",
      "Forgiveness as confrontation",
      "The cycles of reputation"
    ],
    keyQuote: "Grace can be harder to receive than cruelty, because it demands self-recognition.",
    analysis: "A story about the Bengali literary world Tagore knew intimately. The editor's \"honesty\" is really aggression disguised as principle—he enjoys destruction. His inability to accept forgiveness is the story's sharpest insight: grace can be harder to receive than cruelty, because it demands self-recognition. The older writer's success is not revenge but something more disturbing—indifference. He has moved on; the editor is trapped in his own past. The story asks whether literary culture can be ethical, or whether competition necessarily deforms."
  },
  {
    id: "punishment",
    title: "Punishment",
    year: 1893,
    summary: "Two brothers, Dukhiram and Chhidam, live with their wives in rural Bengal. In a quarrel over food, Dukhiram kills his wife. To save his brother, Chhidam persuades his own wife, Chandara, to take the blame, promising she'll be acquitted. Instead, she is sentenced to death. In prison, she refuses to see her husband, accepting death rather than return to him. Her final word is \"maran\"—death, but also liberation.",
    themes: [
      "Patriarchal sacrifice of women",
      "Justice and its gendered application",
      "Agency in apparent victimhood — Chandara's choice",
      "The economics of marriage — Women as replaceable"
    ],
    keyQuote: "The 'punishment' is finally not legal execution but the husband's survival, his guilt, his exclusion from her triumphant death.",
    analysis: "Perhaps Tagore's most devastating story. The brothers' casual exchange of wives—\"I'll get another\"—reveals the structural violence of patriarchy. Yet Chandara's final refusal is transformative: she takes their plot and makes it her own, choosing death over reconciliation. The story has been read as feminist martyrdom and as problematic glorification of female sacrifice. Tagore's own ambivalence is evident—he revised the ending multiple times. The \"punishment\" is finally not legal execution but the husband's survival, his guilt, his exclusion from her triumphant death."
  },
  {
    id: "a-problem-solved",
    title: "A Problem Solved",
    year: 1895,
    summary: "A zamindar's agent, faced with a dispute between tenants, devises a \"fair\" solution that actually serves his own convenience and the landlord's interests. The story traces how bureaucratic rationality produces injustice while claiming neutrality. The \"solution\" creates new problems, new resentments, new structures of exploitation.",
    themes: [
      "Bureaucratic violence",
      "The ideology of 'fairness'",
      "Class interest disguised as rational administration",
      "The zamindari system and its functionaries"
    ],
    keyQuote: "The agent's records, his procedures, his very language produce the reality they claim merely to manage.",
    analysis: "Tagore's most directly political story, analyzing how colonial and feudal structures interlocked. The agent is not evil—he believes himself just, efficient, modern. His \"problem-solving\" is the problem: it transforms living relationships into administrative categories. The story anticipates Foucault's analysis of power/knowledge: the agent's records, his procedures, his very language produce the reality they claim merely to manage. For readers today, it speaks to algorithmic governance, to \"neutral\" systems that encode inequality."
  },
  {
    id: "exercise-book",
    title: "Exercise-Book",
    year: 1894,
    summary: "A young wife, married to an indifferent husband, finds her school exercise-book from girlhood. Reading her childhood compositions, she recovers her former self—intelligent, ambitious, full of dreams. She attempts to resume her education, but family duties prevent serious study. The book becomes a symbol of lost possibility, of the self she might have been.",
    themes: [
      "Education and female selfhood",
      "Marriage as interruption",
      "The archive of the self — Objects that preserve memory",
      "The impossibility of return"
    ],
    keyQuote: "An ordinary object that suddenly reveals historical catastrophe.",
    analysis: "A quieter story that gains power from restraint. The exercise-book is what Walter Benjamin called \"profane illumination\"—an ordinary object that suddenly reveals historical catastrophe. The wife's childhood writing is not particularly brilliant; what matters is that it was hers, produced by a self with future tense. Her attempt to resume study is not presented as heroic resistance but as sad, partial, inevitably defeated. Tagore refuses easy moralizing: the husband is not cruel, merely typical; the system is not oppressive, merely total."
  },
  {
    id: "forbidden-entry",
    title: "Forbidden Entry",
    year: 1894,
    summary: "A lower-caste man, educated and ambitious, attempts to enter a temple from which his caste is traditionally excluded. The story traces his internal debate, his ultimate decision, and its consequences. Neither triumphant resistance nor tragic defeat, the story explores the psychology of exclusion and the costs of both acceptance and refusal.",
    themes: [
      "Caste and modernity",
      "The educated dalit's double consciousness",
      "Religious space as social space",
      "Individual choice vs. collective struggle"
    ],
    keyQuote: "His 'forbidden entry' is finally into modernity itself—neither fully accepted by progressive reformers nor by his own community.",
    analysis: "Tagore's most direct treatment of caste, written before Ambedkar's radical challenge. The protagonist's education has given him desire without power, consciousness without community. His \"forbidden entry\" is finally into modernity itself—neither fully accepted by progressive reformers nor by his own community. The story's ambiguity has been criticized: does it advocate individual uplift over collective action? Or does it mourn the impossibility of either? Tagore's own caste position makes this a necessarily limited exploration, but valuable for its psychological nuance."
  },
  {
    id: "in-the-middle-of-the-night",
    title: "In the Middle of the Night",
    year: 1892,
    summary: "A man wakes in darkness, convinced he hears supernatural voices. He investigates, finding only natural explanations—a servant's nocturnal activities, the house settling. Yet the experience of fear, of the uncanny, persists. The story traces the border between supernatural belief and psychological projection, never fully resolving which is \"real.\"",
    themes: [
      "The uncanny and its sources",
      "Sleep, dreams, and waking hallucination",
      "The colonial house as haunted space",
      "Rationality and its limits"
    ],
    keyQuote: "Modern rationality has not eliminated the supernatural but driven it underground, where it returns as anxiety.",
    analysis: "Tagore's most purely \"Gothic\" story, influenced by his reading of Poe and Dickens. The \"middle of the night\" is both literal and metaphorical—the dark night of the soul, the unconscious, the colonial condition. The protagonist's investigation is genuinely empirical, yet his fear is not dispelled by explanation. Tagore suggests that modern rationality has not eliminated the supernatural but driven it underground, where it returns as anxiety, as the feeling of being watched, as the sense that the house has its own intentions."
  },
  {
    id: "unwanted",
    title: "Unwanted",
    year: 1894,
    summary: "A stray dog attaches itself to a household, receiving grudging toleration. When it dies, the family discovers they had come to depend on its presence, its rituals of greeting, its silent companionship. The story traces the archaeology of attachment—how need grows without acknowledgment, how loss reveals what was never consciously valued.",
    themes: [
      "Attachment and its denial",
      "The non-human as family member",
      "Grief for what was never loved",
      "The unwanted as mirror"
    ],
    keyQuote: "Love often operates below consciousness; we become attached through repetition rather than decision.",
    analysis: "A deceptively simple story that rewards close reading. The dog is \"unwanted\" in the sense of never being chosen, never formally admitted to the circle of care. Yet the family's daily life reorganizes around it—feeding times, the door's opening, the sense of being awaited. The dog's death reveals this structure of feeling that had no name. Tagore suggests that love often operates below consciousness, that we become attached through repetition rather than decision. The story is also about class—the dog is a stray, not a breed, not a purchase, making its inclusion in the family system scandalous, unacknowledged."
  },
  {
    id: "elder-sister",
    title: "Elder Sister",
    year: 1893,
    summary: "A young woman sacrifices her own education and prospects to raise her younger siblings after their parents' death. When they are established, she finds herself superfluous, unmarried, without independent identity. The story traces her slow recognition that her sacrifice has not been seen, that she has become invisible in the very family she created.",
    themes: [
      "Female sacrifice and its invisibility",
      "The elder sister as mother-substitute",
      "Gratitude and its limits",
      "The unmarried woman's social death"
    ],
    keyQuote: "'Elder sister' is a role, not a person, and when the role ends, so does social existence.",
    analysis: "A companion piece to \"Exercise-Book,\" exploring another path to female erasure. The elder sister's sacrifice is genuine, necessary, and finally unrequited—not through her siblings' cruelty but through the structure of family itself, which has no place for her once its reproductive purpose is served. Tagore's insight is that love and exploitation are not opposites but twins: the siblings do love her, genuinely, and this love is precisely what cannot see her. The story's title is finally ironic—\"elder sister\" is a role, not a person, and when the role ends, so does social existence."
  }
];
