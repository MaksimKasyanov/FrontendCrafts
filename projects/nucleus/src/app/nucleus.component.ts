import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'nucleus-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nucleus.component.html',
  styleUrl: './nucleus.component.scss'
})
export class NucleusComponent {
  title = 'Nucleus Page';
}
