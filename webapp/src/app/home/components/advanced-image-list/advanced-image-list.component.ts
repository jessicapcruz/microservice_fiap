import { Component, OnInit, Input  } from '@angular/core';
import { CourseImg } from './course-img';

@Component({
  selector: 'app-advanced-image-list',
  templateUrl: './advanced-image-list.component.html',
  styleUrls: ['./advanced-image-list.component.scss']
})
export class AdvancedImageListComponent implements OnInit {
  courses!: CourseImg[];

  constructor() { }

  ngOnInit(): void {
  }

}
