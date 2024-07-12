import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
export const AppriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.thesaint.aora",
    projectId: "6691313b0017cc9f1d71",
    databaseId: "66913470001108643e3a",
    userCollectionId: "669134ab001f2905232f",
    videosCollectionId: "6691352e00068fa7a41f",
    storageId: "669138df0032720ce557",
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(AppriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(AppriteConfig.projectId) // Your project ID
    .setPlatform(AppriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User

export const createUser = async (email, password, username) => {
    try {

        const newAcaunt = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAcaunt) throw Error

        const avatarUrl = avatars.getInitials(username)

        await SignIn(email, password)

        const newUser = await databases.createDocument(
            AppriteConfig.databaseId,
            AppriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAcaunt.$id,
                username,
                email,
                avatar: avatarUrl,
            },
        );


        return newUser;

    } catch (error) {
        console.log(error)
        throw new Error(error)

    }

};


export const SignIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}