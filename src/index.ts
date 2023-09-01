import './scss/styles.scss'
import '../node_modules/hyperscript.org/dist/_hyperscript.js';
import 'bootstrap'

import xdLogo from './xd-logo-2.png'

import { setupCounter } from './counter.ts'
import { NavbarPageName, generateNavbar} from "./navbar.ts";

const copyEmailButtonId = 'copy-email'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    ${generateNavbar(NavbarPageName.Home)}
    <div class="container py-4 px-3 mx-auto">
        <div class="text-center">
            <img src="${xdLogo}" class="border border-dark rounded" id="home-page-logo"  alt="logo"/>
            <br>
            <br>
            <h1>MXDS.TECH</h1>
        </div>
        
        <br>
        <br>
        
        <h3> Madhav Sharma's Personal Website and Portal</h3>
        <h6> I'm a backend software engineer who also enjoys web development</h6>
        
        <button id="counter" type="button" class="btn btn-primary"></button>
        <button _="on click call alert('You clicked me!')" type="button" class="btn btn-primary">My Resume</button>
         
         <br>
         <br>
         <br>
        <div class="text-center">
            <div class="row gx-5">
                <div class="col">
                    <p class="contact-me">
                        Contact me at <a class="contact-me" href="mailto:contact@mail.mxds.tech">contact@mail.mxds.tech</a>
                    </p>
                </div>
                <div class="col">
                    <button id="${copyEmailButtonId}" type="button" class="btn btn-primary col-xs-6">Copy Email</button>
                </div>
            </div>         
        </div>
    </div>
</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
function setupCopyEmailToClipboard(element: HTMLButtonElement) {
    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied email to clipboard')
        });
    }
    element.addEventListener('click', () => copyTextToClipboard('contact@mail.mxds.tech'))
}

setupCopyEmailToClipboard(document.querySelector<HTMLButtonElement>(`#${copyEmailButtonId}`)!);
