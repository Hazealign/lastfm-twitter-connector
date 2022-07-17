export interface Song {
  name: string;
  artist: string;
  album: string;
  albumArtUrl?: string; // I'll take xlarge only
  url: string;
  playedAt: Date;
  nowPlaying: boolean;
}
