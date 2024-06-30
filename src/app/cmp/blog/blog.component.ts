import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormComponent, PanelComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
