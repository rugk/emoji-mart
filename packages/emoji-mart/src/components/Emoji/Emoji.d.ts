export type EmojiSkin = {
  unified: string;
  native: string;
  x: number;
  y: number;
  shortcodes: string;
};

export type Emoji = {
  id: string;
  name: string;
  keywords: string[];
  skins: EmojiSkin[];
  version: number;
  search: string;
};
