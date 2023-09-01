function _generateNavbar(items: string): string {
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">MXDS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          ${items}
        </ul>
      </div>
    </div>
  </nav>`
}



enum NavBarItemType {
    ACTIVE,
    REGULAR,
    DISABLED,
}

function generateNavbarItem(name: string, href: string, navBarItemType: NavBarItemType): string {
    const _generateNavbarItem = (anchorElement: string): string => {
        return `<li class="nav-item">
            ${anchorElement}
          </li>`
    }
    if (navBarItemType === NavBarItemType.ACTIVE) {
        return _generateNavbarItem(`<a class="nav-link active" aria-current="page" href="${href}">${name}</a>`)
    } else if (navBarItemType === NavBarItemType.REGULAR) {
        return _generateNavbarItem(`<a class="nav-link" href="${href}">${name}</a>`)
    } else if (navBarItemType === NavBarItemType.DISABLED) {
        return _generateNavbarItem(`<a class="nav-link disabled" href="${href}" aria-disabled="true">${name}</a>`)
    }
    return "";
}
enum NavbarPageName {
    Home= "Home",
    Blog = "Blog",
    Resume = "Resume",
    Projects = "Projects",
    Portal = "Portal",
}

interface PageConfig {
    name: NavbarPageName,
    href: string,
    disabled: boolean,
}

interface PagesConfig {
    pages: Array<PageConfig>
}

const pagesConfig: PagesConfig = {
    pages: [
        {
            name: NavbarPageName.Home,
            href: "/",
            disabled: false,
        },
        {
            name: NavbarPageName.Blog,
            href: "/blog",
            disabled: false,
        },
        {
            name: NavbarPageName.Resume,
            href: "/resume",
            disabled: false,
        },
        {
            name: NavbarPageName.Projects,
            href: "/projects",
            disabled: false,
        },
        {
            name: NavbarPageName.Portal,
            href: "/portal",
            disabled: true,
        },
    ]
}

function generateNavbar(current: NavbarPageName): string {
    const items: string[] = pagesConfig.pages.map((pageConfig) => {
        if (current === pageConfig.name) {
            return generateNavbarItem(pageConfig.name, pageConfig.href, NavBarItemType.ACTIVE)
        } else if (pageConfig.disabled) {
            return generateNavbarItem(pageConfig.name, pageConfig.href, NavBarItemType.DISABLED)
        } else {
            return generateNavbarItem(pageConfig.name, pageConfig.href, NavBarItemType.REGULAR)
        }
    })

    return _generateNavbar(items.join("\n"))
}

export { generateNavbar, NavbarPageName }
