export const APP_NAMES: Record<string, string> = {
  liquidtimer: "Liquid Timer",
  // Add more apps here as needed
};

export function getFormattedAppName(urlName: string): string | null {
  return APP_NAMES[urlName.toLowerCase()] || null;
}
