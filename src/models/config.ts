export interface LastFmConfig {
  username: string;
  api_key: string;
}

export interface TwitterConfig {
  api_key: string;
  api_key_secret: string;
  access_token: string;
  access_token_secret: string;
}

export interface AppConfig {
  daily_update: boolean;
  daily_update_hour: number;
  daily_update_minute: number;
  nowplaying_update: boolean;
  nowplaying_update_to_twitter: boolean;
  nowplaying_update_to_discord: boolean;
}

export interface Configuration {
  last_fm: LastFmConfig;
  twitter: TwitterConfig;
  config: AppConfig;
}
