import '../scss/styles.scss'
import 'bootstrap'

import { NavbarPageName, generateNavbar} from "../navbar.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    ${generateNavbar(NavbarPageName.Blog)}
    <h1>Blog<h1>
    <div class="alert alert-warning" role="alert">
        Page Under Construction
    </div>
</div>
`
