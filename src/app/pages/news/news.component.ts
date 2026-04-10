import { Component } from '@angular/core';
import {
  LucideAngularModule,
  TrendingUp,
  Eye,
  HardDrive,
  Activity,
  ArrowUpRight,
  Clock,
} from 'lucide-angular';
import { NEWS } from '../../data/mock';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  readonly news = NEWS;
  readonly TrendingUp = TrendingUp;
  readonly Eye = Eye;
  readonly HardDrive = HardDrive;
  readonly Activity = Activity;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Clock = Clock;

  readonly activities = [
    { user: 'Anna Schulz', initials: 'AS', action: 'hat Tour veröffentlicht', target: 'Loft Prenzlauer Berg', time: 'vor 12 Min.', color: 'bg-emerald-500' },
    { user: 'Tim Hoffmann', initials: 'TH', action: 'hat Bilder hochgeladen', target: 'Penthouse HafenCity', time: 'vor 34 Min.', color: 'bg-blue-500' },
    { user: 'Lisa Bergmann', initials: 'LB', action: 'hat Tour erstellt', target: 'Reihenhaus Köln-Sülz', time: 'vor 2 Std.', color: 'bg-brand-500' },
    { user: 'Markus Weber', initials: 'MW', action: 'hat Grundriss generiert', target: 'Villa am Starnberger See', time: 'vor 4 Std.', color: 'bg-violet-500' },
  ];
}
