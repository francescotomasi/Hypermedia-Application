export class Socials {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;

    constructor(linkedin: string = "", twitter: string = "", instagram: string = "", facebook: string = "") {
        this.linkedin = linkedin;
        this.twitter = twitter;
        this.instagram = instagram;
        this.facebook = facebook;
    }

    getSocial(type: string): string {
        switch (type.toLowerCase()) {
            case "linkedin":
                return this.getLinkedIn();
            case "twitter":
                return this.getTwitter();
            case "instagram":
                return this.getInstagram();
            case "facebook":
                return this.getFacebook();
        }
        return "";
    }

    getLinkedIn(): string {
        return "https://www.linkedin.com/in/" + this.linkedin;
    };

    getTwitter(): string {
        return "https://www.twitter.com/" + this.twitter;
    };

    getInstagram(): string {
        return "https://www.instagram.com/" + this.instagram;
    };

    getFacebook(): string {
        return "https://www.facebook.com/" + this.facebook;
    };
}