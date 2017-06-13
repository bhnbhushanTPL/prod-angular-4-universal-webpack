import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('About');

    meta.addTags([
      {
        name: 'author', content: 'techprimelab.com'
      },
      {
        name: 'keywords', content: 'angular 4 seo'
      },
      {
        name: 'description', content: 'angular 4 universal with webpack'
      },
    ])

  }

  ngOnInit() {
  }

}
