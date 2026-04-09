import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LucideAngularModule,
  Newspaper,
  LayoutGrid,
  Users,
  ChartBar,
  Settings,
  CircleHelp,
  Search,
  Bell,
} from 'lucide-angular';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  readonly Newspaper = Newspaper;
  readonly LayoutGrid = LayoutGrid;
  readonly Users = Users;
  readonly ChartBar = ChartBar;
  readonly Settings = Settings;
  readonly CircleHelp = CircleHelp;
  readonly Search = Search;
  readonly Bell = Bell;
}
