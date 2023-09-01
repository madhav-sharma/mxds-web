import '../scss/styles.scss'
import 'bootstrap'

import { NavbarPageName, generateNavbar} from "../navbar.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    ${generateNavbar(NavbarPageName.Resume)}
    <div class="container py-4 px-3 mx-auto">
        <h1>Resume</h1>
        <div class="alert alert-warning" role="alert">
            Page Under Construction
        </div>
        <h6> Please use my Linkedin page for now </h6>    
        <a href="https://www.linkedin.com/in/madhav344"><i class="fa fa-linkedin-square" style="font-size:48px;color:#0A66C2"></i></a>
    </div>
</div>
`




