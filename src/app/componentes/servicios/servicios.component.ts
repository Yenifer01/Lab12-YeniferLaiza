import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-servicios',
    standalone: true,
    templateUrl: './servicios.component.html',
    styleUrl: './servicios.component.css',
    imports: [RouterLink, FooterComponent, NavbarComponent]
})
export class ServiciosComponent {

}
