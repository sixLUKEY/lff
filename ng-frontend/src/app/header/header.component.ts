import { Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  count: number[] = [1, 2, 3];
  value = signal(24);

  onAdd() {
    this.count.push(Math.floor(Math.random() * 10));
    console.log(this.count);
    this.value.set(Math.floor(Math.random() * 100));
  }
}
