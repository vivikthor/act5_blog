import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { PanelComponent } from '../panel/panel.component';
import { IBlogEntry } from '../../interfaces/i-blog-entry.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormComponent, PanelComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrEntradas: IBlogEntry[] = [
    //url ..// ??????? 
    {
      title: 'Placeholder 1',
      img: '..//public/imgs/1.jpg',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ornare sapien, sed congue risus mollis non. Mauris odio elit, convallis vitae dapibus nec, tristique ut libero. Praesent id gravida nisi, ut dapibus arcu. Phasellus mauris urna, euismod in euismod ut, cursus non elit.',
      date: '2024-03-15',
    },
    {
      title: 'Placeholder 2',
      img: '..//public/imgs/2.jpg',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ornare sapien, sed congue risus mollis non. Mauris odio elit, convallis vitae dapibus nec, tristique ut libero. Praesent id gravida nisi, ut dapibus arcu. Phasellus mauris urna, euismod in euismod ut, cursus non elit.',
      date: '2024-06-30',
    },
  ];
}
