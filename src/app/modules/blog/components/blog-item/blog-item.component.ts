import { Blog } from './../../models/blog.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  // blog: Blog = { title: 'Hiraya Manawari', description: 'A good blog' };

  @Input('blogInput') blog: Blog | undefined;

  @Output() actionEmitter = new EventEmitter<Blog>();

  sendAction = () => {
    console.log('Action from child');
    this.actionEmitter.emit(this.blog);
  };
}
