import arrowDown  from '../../images/icon-arrow-down.svg';
import arrowUp  from '../../images/icon-arrow-up.svg';
import { featuresSubitems, companySubitems } from './NavbarSubitems';
const navbarItems = [
    {
        text: 'Features',
        link: '/features',
        icon: [<i>{arrowDown}</i>, <i>{arrowUp}</i>],
        subitems: featuresSubitems
    },
    {
        text: 'Company',
        link: '/company',
        icon: [<i>{arrowDown}</i>, <i>{arrowUp}</i>],
        subitems: companySubitems
    },
    {
        text: 'Careers',
        link: '/careers',
        icon: [<i>{arrowDown}</i>, <i>{arrowUp}</i>]
    },
    {
        text: 'About',
        link: '/aeatures',
        icon: [<i>{arrowDown}</i>, <i>{arrowUp}</i>]
    },
]



export default navbarItems;