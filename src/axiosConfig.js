// First we need to import axios.js
import axios from "axios";

// #### LIVE SERVER CONFIGS #### //
// export const chatBaseUrl = "wss://communication.steyp.com/";
// export const accountsConfig = axios.create({
//     baseURL: "https://accounts.talrop.com",
// });
// export const learnConfig = axios.create({
//     baseURL: "https://learn.talrop.com/api/v1",
// });
// export const notificationsConfig = axios.create({
//     baseURL: "https://notifications.talrop.com/api/v1",
// });
// export const coinsConfig = axios.create({
//     baseURL: "https://coins.talrop.com/api/v1",
// });
// export const webConfig = axios.create({
//     baseURL: "https://api-tce.talrop.com/api/v1/web",
// });
// export const communicationsConfig = axios.create({
//     baseURL: "https://communication.steyp.com/api/v1/",
// });
// export const communityConfig = axios.create({
//     baseURL: "https://community.talrop.com/api/v1/",
// });
// export const primeprogramsConfig = axios.create({
//     baseURL: "https://prime-programs.steyp.com/api/v1/",
// });
// export const challengeConfig = axios.create({
//     baseURL: "https://challenges.steyp.com/api/v1/",
// });
// export const manageConfig = axios.create({
//     baseURL: "https://api-tce.talrop.com/api/v1/",
// });

// #### LIVE SERVER CONFIGS #### //
export const chatBaseUrl = "wss://developers-communication.talrop.com/";
export const accountsConfig = axios.create({
    baseURL: "https://accounts.steyp.com",
});
export const learnConfig = axios.create({
    baseURL: "https://learn.steyp.com/api/v1",
});
export const notificationsConfig = axios.create({
    baseURL: "https://notifications.talrop.com/api/v1",
});
export const coinsConfig = axios.create({
    baseURL: "https://coins.steyp.com/api/v1",
});
export const webConfig = axios.create({
    baseURL: "https://api-tce.talrop.com/api/v1/web",
});
export const communicationsConfig = axios.create({
    baseURL: "https://communication.steyp.com/api/v1/",
});
export const communityConfig = axios.create({
    baseURL: "https://community.talrop.com/api/v1/",
});
export const primeprogramsConfig = axios.create({
    baseURL: "https://prime-programs.steyp.com/api/v1/",
});
export const challengeConfig = axios.create({
    baseURL: "https://challenges.steyp.com/api/v1/",
});
export const manageConfig = axios.create({
    baseURL: "https://api-tce.talrop.com/api/v1/",
});

// #### DEVELOPER SERVER CONFIGS #### //
// export const chatBaseUrl = "wss://developers-communication.talrop.com/";
// export const accountsConfig = axios.create({
// 	baseURL: "https://accounts.talrop.com",
// });
// export const learnConfig = axios.create({
// 	baseURL: "https://dev-learn.talrop.com/api/v1",
// });
// export const notificationsConfig = axios.create({
// 	baseURL: "https://notifications.talrop.com/api/v1",
// });
// export const coinsConfig = axios.create({
// 	baseURL: "https://coins.talrop.com/api/v1",
// });
// export const webConfig = axios.create({
// 	baseURL: "https://api-tce.talrop.com/api/v1/web",
// });
// export const communicationsConfig = axios.create({
// 	baseURL: "https://communication.steyp.com/api/v1/",
// });
// export const communityConfig = axios.create({
// 	baseURL: "https://community.talrop.com/api/v1/",
// });
// export const primeprogramsConfig = axios.create({
// 	baseURL: "https://prime-programs.steyp.com/api/v1/",
// });
// export const challengeConfig = axios.create({
// 	baseURL: "https://challenges.steyp.com/api/v1/",
// });
// export const manageConfig = axios.create({
// 	baseURL: "https://api-tce.talrop.com/api/v1/",
// });

// #### DEVELOPER SERVER CONFIGS #### //
// export const chatBaseUrl = "wss://developers-communication.talrop.com/";
// export const accountsConfig = axios.create({
// 	baseURL: "https://developers-accounts.talrop.com",
// });
// export const learnConfig = axios.create({
// 	baseURL: "https://developers-learn.talrop.com/api/v1",
// });
// export const notificationsConfig = axios.create({
// 	baseURL: "https://developers-notifications.talrop.com/api/v1",
// });
// export const coinsConfig = axios.create({
// 	baseURL: "https://developers-coins.talrop.com/api/v1",
// });
// export const webConfig = axios.create({
// 	baseURL: "https://developers-api-tce.talrop.com/api/v1/web",
// });
// export const communicationsConfig = axios.create({
// 	baseURL: "https://developers-communication.talrop.com/api/v1/",
// });
// export const communityConfig = axios.create({
// 	baseURL: "https://developers-community.talrop.com/api/v1/",
// });
// export const challengeConfig = axios.create({
// 	baseURL: "https://developers-challenges.steyp.com/api/v1/",
// });
// export const primeprogramsConfig = axios.create({
// 	baseURL: "https://demo-prime-programs.talrop.works/api/v1/",
// });
// export const manageConfig = axios.create({
// 	baseURL: "https://developers-managers.talrop.com/api/v1/",
// });

// #### DEVELOPER LOCAL SERVER CONFIGS #### //
// export const chatBaseUrl = "ws://192.168.0.84:8006/";
// export const accountsConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8000",
// });
// export const learnConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8001/api/v1",
// });
// export const notificationsConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8003/api/v1",
// });
// export const coinsConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8002/api/v1",
// });
// export const webConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8004/api/v1/web",
// });
// export const communicationsConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8006/api/v1/",
// });
// export const communityConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8000/api/v1/",
// });
// export const challengeConfig = axios.create({
// 	baseURL: "http://developers-challenges.steyp.com/api/v1/",
// });
// export const primeprogramsConfig = axios.create({
// 	baseURL: "http://demo-prime-programs.talrop.works/api/v1/",
// });
// export const manageConfig = axios.create({
// 	baseURL: "http://192.168.1.35:8004/api/v1/",
// });
