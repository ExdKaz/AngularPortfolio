export const LABELS = {
    navbar: {
        TITLE: 'Portfolio',
        NAVITEMS: ['Home', 'Projects', 'About'],
        MOBILENAVITEMS: [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Projects',
                icon: 'pi pi-briefcase'
            },
            {
                label: 'About',
                icon: 'pi pi-book'
            },
            {
                label: 'Contact',
                icon: 'pi pi-comments'
            }

        ],
        MODALTITLE: 'Send a Message',
    },
    intoduction: {
        NAME: "Hey, I'm Abhishek",
        ANG: 'Ang',
        ANGULAR: 'ular Developer',
        INTRO: "An innovative, purpose-driven engineer contributed my learning into building web applications & solutions for enterprises.Seeking to work in a professional ambiance that provides a space to contribute my skills towards the growth of the organization.",
        GETINTOUCH: "Get In Touch",
        BROWSEPROJECTS: "Browse Projects",
        IMAGESRC: "../../assets/images/me.jpg"
    },
    projects: {
        TITLE: 'Projects',
        WEATHERSRC: '../../assets/images/weather.png',
        WEATHERTITLE: 'Weather App',
        WEATHERINFO: 'A weather app made using Angular 15, With real time data from Rapid Api.',
        SPOTIFYSRC: '../../assets/images/dash.png',
        SPOTIFYTITLE: 'Spotify Clone',
        SPOTIFYINFO: 'A Spotify Clone made using Angular 17, With real time data from Spotify Developers Api.'
    },
    contact: {
        FORM: [
            { type: 'Firstname', icon: 'pi pi-user' },
            { type: 'Lastname', icon: 'pi pi-user' },
            { type: 'Email', icon: 'pi pi-envelope' },
            { type: 'Phone', icon: 'pi pi-phone' }
        ],
        ERRORMESSAGE: {
            REQUIRED: 'is Required.',
            PATTERN: 'Please enter valid '
        },
        EMAILJS: {
            SERVICEID: 'gmail',
            TEMPLATEID: 'Angular',
            PUBLICKEY: 'RX7rbtF1GnQqra-_G'
        }
    },
    toast: {
        SUCCESS: {
            'severity': 'success',
            'summary': 'Success',
            'detail': 'Email Sent'
        },
        FAILURE: {
            'severity': 'error',
            'summary': 'Error',
            'detail': 'Error'
        }
    }
}