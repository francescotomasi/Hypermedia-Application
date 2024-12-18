export function socials() {
    const getLinkedIn = (str: string) => {
        return "https://www.linkedin.com/in/" + str;
    };

    const getTwitter = (str: string) => {
        return "https://www.twitter.com/" + str;
    };

    const getInstagram = (str: string) => {
        return "https://www.instagram.com/" + str;
    };

    const getFacebook = (str: string) => {
        return "https://www.facebook.com/" + str;
    };

    const getSocial = (str: string, social: any) => {
        if (social === "linkedin") {
            return getLinkedIn(str);
        } else if (social === "twitter") {
            return getTwitter(str);
        } else if (social === "instagram") {
            return getInstagram(str);
        } else if (social === "facebook") {
            return getFacebook(str);
        }
        return "";
    }

    return {
        getSocial
    };
}