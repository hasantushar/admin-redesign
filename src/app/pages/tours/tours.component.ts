import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Plus,
  ArrowUpDown,
  Filter,
  Globe,
  Lock,
  LayoutGrid,
  List,
  Pencil,
  Eye,
  Share2,
  Trash2,
  Search,
} from 'lucide-angular';
import { TOURS } from '../../data/mock';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './tours.component.html',
})
export class ToursComponent {
  readonly tours = TOURS;
  readonly viewMode = signal<'grid' | 'list'>('grid');

  readonly Plus = Plus;
  readonly ArrowUpDown = ArrowUpDown;
  readonly Filter = Filter;
  readonly Globe = Globe;
  readonly Lock = Lock;
  readonly LayoutGrid = LayoutGrid;
  readonly List = List;
  readonly Pencil = Pencil;
  readonly Eye = Eye;
  readonly Share2 = Share2;
  readonly Trash2 = Trash2;
  readonly Search = Search;
}
