import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit(): void {
        this.showMenu('header-toggle', 'navbar');
    }

    showMenu(headerToggle: string, navbarId: string): void {
        const toggleBtn = this.el.nativeElement.querySelector(`#${headerToggle}`);
        const nav = this.el.nativeElement.querySelector(`#${navbarId}`);

        // Validate that variables exist
        if (headerToggle && navbarId) {
            this.renderer.listen(toggleBtn, 'click', () => {
                // We add the show-menu class to the div tag with the nav__menu class
                nav.classList.toggle('show-menu');
                // change icon
                toggleBtn.classList.toggle('bx-x');
            });
        }
    }
}
