import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Plus, ArrowUpDown, Filter, Globe, Lock } from 'lucide-angular';
import { TOURS } from '../../data/mock';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './tours.component.html',
})
export class ToursComponent {
  readonly tours = TOURS;
  readonly Plus = Plus;
  readonly ArrowUpDown = ArrowUpDown;
  readonly Filter = Filter;
  readonly Globe = Globe;
  readonly Lock = Lock;
}
