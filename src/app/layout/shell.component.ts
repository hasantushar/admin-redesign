import { Component, signal } from '@angular/core';
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
  ChevronLeft,
  LogOut,
  Moon,
} from 'lucide-angular';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  readonly collapsed = signal(false);

  readonly Newspaper = Newspaper;
  readonly LayoutGrid = LayoutGrid;
  readonly Users = Users;
  readonly ChartBar = ChartBar;
  readonly Settings = Settings;
  readonly CircleHelp = CircleHelp;
  readonly Search = Search;
  readonly Bell = Bell;
  readonly ChevronLeft = ChevronLeft;
  readonly LogOut = LogOut;
  readonly Moon = Moon;

  toggleSidebar() {
    this.collapsed.update((v) => !v);
  }
}
