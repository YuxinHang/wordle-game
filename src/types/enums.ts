export const WORDS = ["APPLE", "BEACH", "CHAIR", "DANCE", "EAGLE", "FUNNY", "GRAPE", "HAPPY", "JELLY", "KITE", "LEMON", "MUSIC", "NORTH", "OCEAN", "PENCIL", "QUIET", "RIVER", "SNAKE", "TEACH", "UNDER", "VIDEO", "WATER", "ZEBRA", "BLEND", "CLOUD", "DOZEN", "ELBOW", "FANCY", "GRASS", "HORSE", "ICING", "JUMBO", "KNITS", "LARGE", "MANGO", "NERVE", "OLIVE", "POUND", "QUICK", "ROCKY", "SHINY", "TIGER", "UMBRA", "VOICE", "WRIST", "XENON", "YUMMY", "ZESTY", "BLOOM", "CRISP", "DREAM", "FLAKE", "GRIME", "HOUND", "JOUST", "LURCH", "MIMIC", "PLUMB", "QUEST", "RHYME", "SIREN", "TRAMP", "ULCER", "VENOM", "WHISK", "XEROX", "YODEL", "ATLAS", "BLINK", "CRUMB", "DUSTY", "EMBER", "FLINT", "GLIDE", "HURRY", "INPUT", "JOKER", "LUNAR", "MANGO", "NEXUS", "ORBIT", "PLUSH", "QUIRK", "RADAR", "SWIRL", "TRUCE", "UNIFY", "VIXEN", "WHARF", "XYLON", "YACHT", "ZILCH", "ALOHA", "BONGO", "COCOA", "DODGE", "FABLE", "GROUT", "HELIX", "IVORY", "JOUST", "KNOLL", "LYRIC", "MEDAL", "NYMPH", "OPIUM", "PLUSH", "QUIRKY", "RADAR", "SWIRL", "TRUCE", "UNIFY", "VIXEN", "WHARF", "XYLON", "YACHT", "ZILCH", "ALOHA", "BONGO", "COCOA", "DODGE", "FABLE", "GROUT", "HELIX", "IVORY", "JOUST", "KNOLL", "LYRIC", "MEDAL", "NYMPH", "OPIUM", "PLUSH", "QUIRKY", "RADAR", "SWIRL", "TRUCE", "UNIFY", "VIXEN", "WHARF", "XYLON", "YACHT", "ZILCH", "ALOHA", "BONGO", "COCOA", "DODGE", "FABLE", "GROUT", "HELIX", "IVORY", "JOUST", "KNOLL", "LYRIC", "MEDAL", "NYMPH", "OPIUM", "PLUSH", "QUIRKY", "RADAR", "SWIRL", "TRUCE", "UNIFY", "VIXEN", "WHARF", "XYLON", "YACHT", "ZILCH", "ALOHA", "BONGO", "COCOA", "DODGE", "FABLE", "GROUT", "HELIX", "IVORY", "JOUST", "KNOLL", "LYRIC", "MEDAL", "NYMPH", "OPIUM", "PLUSH", "QUIRKY", "RADAR", "SWIRL", "TRUCE", "UNIFY", "VIXEN", "WHARF", "XYLON", "YACHT", "ZILCH", "ALOHA", "BONGO", "COCOA", "DODGE", "FABLE", "GROUT", "HELIX", "IVORY", "JOUST", "KNOLL", "LYRIC", "MEDAL", "NYMPH", "OPIUM", "PLUSH", "QUIRKY", "RADAR", "SWIRL", "TRUCE", "UNIFY", "VIXEN", "WHARF", "XYLON", "YACHT", "ZILCH", "ALOHA", "BONGO", "COCOA", "DODGE", "FABLE", "GROUT", "HELIX", "IVORY", "REACT"];

export enum Difficulty {
    EASY = 'EASY',
    NORMAL = 'NORMAL',
    HARD = 'HARD'
}

// 6 rows by default, we can change it to hold different rows, so as to change the game difficulty
export const DifficultyToRowNum: { [key: string]: number } = {
    [Difficulty.EASY]: 8,
    [Difficulty.NORMAL]: 6,
    [Difficulty.HARD]: 5
};
