import { Component, OnInit } from '@angular/core';
import { Content } from '../../models/content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contents: Content[] = [];
  contentService : ContentService;

  constructor() {
    this.contentService = new ContentService();

  }

  ngOnInit(): void {
    this.contents = this.contentService.getAll();
    console.log(this.contents);
  }


}
