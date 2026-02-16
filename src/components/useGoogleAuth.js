
import {OAUTH_CLIENT_ID} from "../hooks/constant";

export const getYouTubeAccessToken = () => {
  return new Promise((resolve, reject) => {
    if (!window.google) {
      reject("Google SDK not loaded");
      return;
    }

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: OAUTH_CLIENT_ID,
      scope: "https://www.googleapis.com/auth/youtube.readonly",
      prompt: "consent",                 // FORCE NEW CONSENT
      include_granted_scopes: false,     // DO NOT reuse old scopes
      callback: (response) => {
        if (response.error) {
          reject(response);
        } else {
          resolve(response.access_token);
        }
      },
    });

    client.requestAccessToken();
  });
};
