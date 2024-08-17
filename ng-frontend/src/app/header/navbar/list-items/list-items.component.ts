import { Component } from '@angular/core';
import { iListItem } from './ilist-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css',
})
export class ListItemsComponent {
  listItems: iListItem[] = _listItems;
}

const _listItems: iListItem[] = [
  { index: 1, name: 'home', path: '' },
  { index: 2, name: 'about', path: '/about' },
  { index: 3, name: 'services', path: '/services' },
  { index: 4, name: 'contact', path: '/contact' },
];
