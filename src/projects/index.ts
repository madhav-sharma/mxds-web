import '../scss/styles.scss'
import 'bootstrap'

import { NavbarPageName, generateNavbar} from "../navbar.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    ${generateNavbar(NavbarPageName.Projects)}
    <h1>Projects</h1>
    <div class="alert alert-warning" role="alert">
        Page Under Construction
    </div>
</div>
`




