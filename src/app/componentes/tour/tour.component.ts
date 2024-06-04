import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-tour',
    standalone: true,
    templateUrl: './tour.component.html',
    styleUrl: './tour.component.css',
    imports: [RouterLink, FooterComponent, NavbarComponent]
})
export class TourComponent {

}
