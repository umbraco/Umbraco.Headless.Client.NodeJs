import {Client} from "@umbraco/headless-sdk";


let headlessClient: Client = null

export const getUmbracoClient = () => {
    if(!headlessClient) {
        headlessClient = new Client({
            projectAlias: 'headless-house-of-code',
            language: 'en-US'
        })
        headlessClient.setAPIKey("czt7Xiu4WdXlLqBlFtop")
        // debugger

    }

    return headlessClient
}
