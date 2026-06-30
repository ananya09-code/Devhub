import { 
    faBolt,
    faFire,
    faUsers
} from "@fortawesome/free-solid-svg-icons";


export const landingData = {
    navbar: {
        logo: "DevHub",
        login: "Login",
        signup: "Sign Up"
    },

    hero: {
        title: "Share Code.",
        subtitle: "Build Faster.",
        description: "A place for developers to save, share, and discover useful code snippets.",
        buttons: [
            "Start Coding",
            "Explore Snippets"
        ]
    },

    codeSnippet: 
        `function hello() {
         console.log('Hello, DevHub!');
         }`,


    features: [
        {
            icon: faBolt,
            title: "Fast Search",
            description: "Quickly find the code you need."
        },
        {
            icon: faFire,
            title: "Share Snippets",
            description: "Share your code and help others."
        },
        {
            icon: faUsers,
            title: "Developer Community",
            description: "Connect and grow with developers."
        }
    ]
};

export default landingData;