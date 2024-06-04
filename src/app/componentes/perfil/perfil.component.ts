import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil.component.html', 
  styleUrls: ['./perfil.component.css'] 
})
export class PerfilComponent implements OnInit {
  username: string | null= null;
  email:   string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('Cargando datos de perfil...');
    this.username = this.authService.getUsername();
    this.email = this.authService.getEmail();
    console.log('Nombre de usuario:', this.username);
    console.log('Correo electrónico:', this.email);
  }

  cerrarSesion() {

    this.authService.logout();
    alert('¡Tu sesión se ha cerrado con éxito!');
    this.router.navigate(['/']); 
  }
}
