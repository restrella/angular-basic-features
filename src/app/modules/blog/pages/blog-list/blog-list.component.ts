import { Component } from '@angular/core';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  num = 1;

  numArray = [1, 2, 3, 4];
  blogs: Blog[] = [
    {
      title: 'Blog1',
      description: 'My Blog 1',
      published: true,
      authorActive: true,
    },
    {
      title: 'Blog2',
      description: 'My Blog 2',
      published: false,
      authorActive: true,
    },
    {
      title: 'Blog3',
      description: 'My Blog 3',
      published: true,
      authorActive: true,
    },
  ];

  executeAction = (blog: Blog, index: number) => {
    console.log('from parent: ', blog, index);
  };

  incrementNum = () => {
    this.num++;
  };

  width = '100px';
  height = '100px';
  color = 'blue';

  changeCss = () => {
    this.width = '200px';
    this.height = '200px';
    this.color = 'yellow';
  };
}
