import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Settings2,
  Upload,
  ArrowUpDown,
  EyeOff,
  Layers,
  Map,
  Info,
  Link2,
  Share2,
  UserCog,
  Rocket,
  EyeClosed,
  Film,
  Sparkles,
  WandSparkles,
  ExternalLink,
  ArrowLeft,
  CloudUpload,
  CircleCheck,
  X,
} from 'lucide-angular';
import { TOURS } from '../../data/mock';

interface UploadedImage {
  name: string;
  thumb: string;
  size: string;
}

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './editor.component.html',
})
export class EditorComponent {
  private readonly route = inject(ActivatedRoute);
  readonly tourId = signal(this.route.snapshot.paramMap.get('id') ?? '1');
  readonly tour = computed(() => TOURS.find((t) => t.id === this.tourId()) ?? TOURS[0]);

  readonly sections = [
    { key: 'settings', label: 'Toureinstellungen', icon: Settings2 },
    { key: 'upload', label: 'Upload', icon: Upload, active: true },
    { key: 'sort', label: 'Sortieren', icon: ArrowUpDown },
    { key: 'pixelate', label: 'Verpixeln', icon: EyeOff },
    { key: 'areas', label: 'Bereiche', icon: Layers },
    { key: 'floorplans', label: 'Grundrisspläne', icon: Map },
    { key: 'info', label: 'Info-Inhalte', icon: Info },
    { key: 'link', label: 'Verknüpfen', icon: Link2 },
    { key: 'share', label: 'Freigabe', icon: Share2 },
    { key: 'customers', label: 'Kundenverwaltung', icon: UserCog },
    { key: 'publish', label: 'Veröffentlichen', icon: Rocket },
    { key: 'visibility', label: 'Sichtbeschränkung', icon: EyeClosed },
  ];

  readonly aiSections = [
    { key: 'video', label: 'AI Video', icon: Film, beta: false },
    { key: 'floorplan-ai', label: 'AI Grundriss', icon: Sparkles, beta: true },
    { key: 'enhance', label: 'KI-Bildverbesserung', icon: WandSparkles, beta: true },
  ];

  readonly images = signal<UploadedImage[]>([
    { name: 'wohnzimmer_01.jpg', thumb: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&auto=format&fit=crop&q=60', size: '8.4 MB' },
    { name: 'kueche_02.jpg', thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop&q=60', size: '7.9 MB' },
    { name: 'schlafzimmer_03.jpg', thumb: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&auto=format&fit=crop&q=60', size: '9.1 MB' },
    { name: 'bad_04.jpg', thumb: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&auto=format&fit=crop&q=60', size: '6.7 MB' },
    { name: 'flur_05.jpg', thumb: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&auto=format&fit=crop&q=60', size: '7.2 MB' },
    { name: 'balkon_06.jpg', thumb: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&auto=format&fit=crop&q=60', size: '8.0 MB' },
  ]);

  readonly ExternalLink = ExternalLink;
  readonly ArrowLeft = ArrowLeft;
  readonly CloudUpload = CloudUpload;
  readonly CircleCheck = CircleCheck;
  readonly X = X;
}
