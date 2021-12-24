import { Component, OnInit, Input  } from '@angular/core';
import { CourseImg } from '../../models/course-img';
import { CourseImageService } from '../../services/course-image.service';

@Component({
  selector: 'app-advanced-image-list',
  templateUrl: './advanced-image-list.component.html',
  styleUrls: ['./advanced-image-list.component.scss']
})
export class AdvancedImageListComponent implements OnInit {

  courses: CourseImg[] = [];
  courseImageService : CourseImageService;

  constructor() {
    this.courseImageService = new CourseImageService();

  }

  ngOnInit(): void {
    this.courses = this.courseImageService.getAll();
    console.log(this.courses);
  }

}
