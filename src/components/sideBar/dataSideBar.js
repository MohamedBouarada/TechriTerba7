import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faGenderless} from "@fortawesome/free-solid-svg-icons";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {faBiking} from "@fortawesome/free-solid-svg-icons";
import {faTshirt} from "@fortawesome/free-solid-svg-icons";
const sideBarItems = [
    {
        _id: 1,
        title: 'Panier',
        icon:faShoppingCart,
    },
    {
        _id: 2,
        title: 'Profile',
        icon:faUser,
    },
    {
        _id: 3,
        title: 'Téléphone & Tablette',
        icon:faMobileAlt,
    },
    {
        _id: 4,
        title: 'Mode',
        icon:faTshirt,
    },
    {
        _id: 5,
        title: 'Informatique',
        icon:faLaptopCode,
    },
    {
        _id: 6,
        title: 'Jeux vidéos',
        icon:faGamepad,
    },
    {
        _id: 7,
        title: 'Articles de sport',
        icon:faBiking,
    },

];

export default sideBarItems;