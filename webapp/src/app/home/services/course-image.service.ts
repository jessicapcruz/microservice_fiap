import { Injectable } from '@angular/core';

import { CourseImg } from '../models/course-img';

@Injectable({
  providedIn: 'root'
})
export class CourseImageService {

  constructor() { }

  getAll() : CourseImg[]
  {
    return [
      {
        "img": "/assets/images/kotlincourse.jpg",
        "title": "Kotlin",
        "subtitle": "Classificação:",
        "featured" : false
      },
      {
        "img": "/assets/images/mongo.jpg",
        "title": "MongoDB",
        "subtitle": "Classificação:",
        "featured" : false
     },
     {
      "img": "/assets/images/sql.jpg",
      "title": "Sql Completo",
      "subtitle": "Classificação:",
      "featured": false
     },
     {
      "img": "/assets/images/python.png",
      "title": "Python",
      "subtitle": "Classificação:",
      "featured":false
     },
     {
      "img": "/assets/images/javaWeb.jpg",
      "title": "Java Para Web",
      "subtitle": "Classificação:",
      "featured":false
     },
     {
      "img": "/assets/images/java.jpg",
      "title": "Java",
      "subtitle": "Classificação:",
      "featured" : false
     },
     {
      "img": "/assets/images/IOT.jpg",
      "title": "Internet das Coisas (IOT)",
      "subtitle": "Classificação:",
      "featured":false
     },
     {
      "img": "/assets/images/csharp.jpg",
      "title": ".Net C#",
      "subtitle": "Classificação:",
      "featured":false
     }
    ]
  }
}
