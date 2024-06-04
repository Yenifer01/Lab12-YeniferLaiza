import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleNavbar(): void {
    this.navbarOpen =!this.navbarOpen;
    if (this.navbarOpen) {
      this.renderer.addClass(this.el.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'open');
    }
  }
}
