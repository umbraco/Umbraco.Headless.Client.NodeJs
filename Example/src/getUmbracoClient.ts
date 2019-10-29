import {Client} from "@umbraco/headless-sdk";


let headlessClient: Client = null

export const getUmbracoClient = () => {
    if(!headlessClient) {
        headlessClient = new Client({
            projectAlias: 'headless-house-of-code',
            language: 'en-US'
        })
        headlessClient.setAPIKey("PhKPlGdKn6RYm0F82IEi")
        // debugger

    }

    return headlessClient
}
