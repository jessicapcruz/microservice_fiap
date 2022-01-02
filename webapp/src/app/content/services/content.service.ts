import { Injectable } from '@angular/core';

import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getAll() : Content[]
  {
    return [
      {
        "title": "Lógica de programação I:",
        "subtitle": "Os primeiros programas com Javascript e HTML",
        "description" : "Resumo do curso"
      },
      {
        "title": "Java OO",
        "subtitle": "Introdução à Orientação a Objetos",
        "description" : "Resumo do curso"
     },
     {
      "title": "Spring Data JPA",
      "subtitle": "Repositórios, Consultas, Projeções e Specifications",
      "description" : "Resumo do curso"
     },
     {
      "title": "Microservices com Spring Cloud:",
      "subtitle": "Registry, Config Server e Distributed Tracing",
      "description" : "Resumo do curso"
     },
     {
      "title": "Rest com NodeJS",
      "subtitle": "API com Express e MySQL",
      "description" : "Resumo do curso"
     },
     {
      "title": "Introdução ao PHP",
      "subtitle": "Primeiros passos com a linguagem",
      "description" : "Resumo do curso"
     },
     {
      "title": "Fundamentos do JavaScript",
      "subtitle": "Tipos, variáveis e funções",
      "description" : "Resumo do curso"
     },
     {
      "title": "Kotlin:",
      "subtitle": "primeiros passos e Orientação a Objetos",
      "description" : "Resumo do curso"
     }
    ]
  }
}
