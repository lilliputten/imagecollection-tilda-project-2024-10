export const socialIds = [
  // prettier-ignore
  'tg',
  'whatsapp',
] as const;
export type TSocialId = (typeof socialIds)[number];
