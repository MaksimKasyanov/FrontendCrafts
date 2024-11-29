import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'documentation-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent {
  title = 'documentation';
}
